package api

import (
	"context"
	"database/sql"
	"net/http"

	pb "github.com/blong14/map_plat/proto"
	"github.com/improbable-eng/grpc-web/go/grpcweb"
	"google.golang.org/grpc"

	// initialize pq package
	_ "github.com/lib/pq"
)

var (
	grpcHandler *grpcweb.WrappedGrpcServer
	service     MapServiceServer
	db          *sql.DB

	// FileHandler serves static files
	FileHandler http.Handler
)

func init() {
	connStr := "user=docker password=docker dbname=gis port=54321 sslmode=disable"
	db, _ = sql.Open("postgres", connStr)
	if err := db.Ping(); err != nil {
		panic(err)
	}

	service = MapServiceServer{}

	var opts []grpc.ServerOption
	grpcServer := grpc.NewServer(opts...)

	pb.RegisterMapServiceServer(grpcServer, service)

	grpcHandler = grpcweb.WrapServer(grpcServer)

	FileHandler = http.FileServer(http.Dir("dist"))
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

	FileHandler.ServeHTTP(resp, req)
}

//MapServiceServer implements the gRPC map service Interface
type MapServiceServer struct{}

// AllPoints returns all IPv6 locations
func (m MapServiceServer) AllPoints(ctx context.Context, req *pb.PointRequest) (*pb.PointsResponse, error) {
	resp := pb.PointsResponse{}
	rows, err := db.Query("SELECT * FROM locations")
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	if err = processRows(rows, &resp); err != nil {
		return nil, err
	}

	return &resp, nil
}

// BoundedPoints returns all IPv6 location for a given bounds
func (m MapServiceServer) BoundedPoints(ctx context.Context, req *pb.BoundedPointsRequest) (*pb.PointsResponse, error) {
	resp := pb.PointsResponse{}

	rows, err := db.Query(
		"SELECT * FROM locations WHERE (latitude between $1 and $2) AND (longitude BETWEEN $3 AND $4)",
		req.GetLatMin(),
		req.GetLatMax(),
		req.GetLongMin(),
		req.GetLongMax(),
	)
	if err != nil {
		return nil, err
	}

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
	defer rows.Close()

	return nil
}
