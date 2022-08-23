package api

import (
	"context"
	"database/sql"
	"log"
	"net/http"
	"net/rpc"
	"os"

	"github.com/golang/protobuf/proto"
	"github.com/improbable-eng/grpc-web/go/grpcweb"
	"google.golang.org/grpc"

	gache "github.com/blong14/gache/client"
	pb "github.com/blong14/map_plat/proto"

	// initialize pq package
	_ "github.com/lib/pq"
)

var (
	grpcHandler *grpcweb.WrappedGrpcServer
	service     MapServiceServer
	// FileHandler serves static files
	FileHandler http.Handler
)

func MustGetCache() gache.GacheClient {
	dsn, ok := os.LookupEnv("cache-dsn")
	if !ok {
		dsn = "localhost:8080"
	}
	conn, err := rpc.DialHTTP("tcp", dsn)
	if err != nil {
		panic(err)
	}

	return gache.New(conn, []byte("default"))

}

func MustGetDB() *sql.DB {
	dsn, ok := os.LookupEnv("dsn")
	if !ok {
		dsn = "user=docker password=docker dbname=gis port=54322 sslmode=disable"
	}
	db, err := sql.Open("postgres", dsn)
	if err != nil {
		panic(err)
	}
	if err = db.Ping(); err != nil {
		panic(err)
	}
	return db
}

func dist() string {
	d, ok := os.LookupEnv("dist")
	if !ok {
		d = "dist"
	}
	return d
}

func init() {
	var opts []grpc.ServerOption
	grpcServer := grpc.NewServer(opts...)
	cache := MustGetCache()
	db := MustGetDB()
	service = MapServiceServer{cache: cache, db: db}
	pb.RegisterMapServiceServer(grpcServer, service)
	grpcHandler = grpcweb.WrapServer(grpcServer)
	FileHandler = http.FileServer(http.Dir(dist()))
}

// GrpcService returns the global map service
func GrpcService() *MapServiceServer {
	return &service
}

// Handler for the application
func Handler(resp http.ResponseWriter, req *http.Request) {
	if grpcHandler.IsAcceptableGrpcCorsRequest(req) || grpcHandler.IsGrpcWebRequest(req) {
		grpcHandler.ServeHTTP(resp, req)
		return
	}
	resp.Header().Add("Cache-Control", "public, max-age=31536000")
	FileHandler.ServeHTTP(resp, req)
}

//MapServiceServer implements the gRPC map service Interface
type MapServiceServer struct {
	db    *sql.DB
	cache gache.GacheClient
}

// AllPoints returns all IPv6 locations
func (m MapServiceServer) AllPoints(ctx context.Context, req *pb.PointRequest) (*pb.PointsResponse, error) {
	var resp pb.PointsResponse
	raw, err := m.cache.Get(ctx, []byte("locations"))
	if err == nil {
		if err = proto.Unmarshal(raw, &resp); err == nil {
			log.Println("cache hit for locations")
			return &resp, nil
		} else {
			log.Println(err)
		}
	} else if err != nil {
		log.Println(err)
	}
	rows, err := m.db.Query("select * from locations")
	if err != nil {
		return nil, err
	}
	defer func() { _ = rows.Close() }()
	if err = processRows(rows, &resp); err != nil {
		return nil, err
	}
	if value, err := proto.Marshal(&resp); err == nil {
		if err = m.cache.Set(ctx, []byte("locations"), value); err != nil {
			log.Println(err)
		}
	} else {
		log.Println(err)
	}
	return &resp, nil
}

// BoundedPoints returns all IPv6 location for a given bounds
func (m MapServiceServer) BoundedPoints(_ context.Context, req *pb.BoundedPointsRequest) (*pb.PointsResponse, error) {
	rows, err := m.db.Query(`
select
	*
from 
    locations
where 
    (latitude between $1 and $2) and 
    (longitude between $3 and $4);
`, req.GetLatMin(), req.GetLatMax(), req.GetLongMin(), req.GetLongMax())
	if err != nil {
		return nil, err
	}
	defer func() { _ = rows.Close() }()
	var resp pb.PointsResponse
	if err = processRows(rows, &resp); err != nil {
		return nil, err
	}
	return &resp, nil
}

func processRows(rows *sql.Rows, data *pb.PointsResponse) error {
	for rows.Next() {
		point := pb.Point{}
		err := rows.Scan(&point.Latitude, &point.Longitude, &point.Count)
		if err != nil {
			return err
		}
		data.Points = append(data.Points, &point)
	}
	return nil
}
