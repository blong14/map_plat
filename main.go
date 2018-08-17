package main

import (
	"bufio"
	"encoding/csv"
	"flag"
	"fmt"
	"io"
	"log"
	"net/http"
	"os"
	"strconv"

	"google.golang.org/grpc"

	pb "github.com/blong14/map_plat/services"
	"github.com/improbable-eng/grpc-web/go/grpcweb"
)

const (
	cert = "./localhost.crt"
	key  = "./localhost.key"
)

var (
	port       = flag.Int("port", 3000, "The server port")
	s          = mapServiceServer{}
	grpcServer *grpc.Server
	points     []pb.Point
)

func init() {
	s = mapServiceServer{}

	csvFile, _ := os.Open("./data/out.csv")
	reader := csv.NewReader(bufio.NewReader(csvFile))
	for {
		line, error := reader.Read()
		if error == io.EOF {
			break
		} else if error != nil {
			log.Fatal(error)
		}
		count, _ := strconv.ParseInt(line[2], 10, 0)
		points = append(points, pb.Point{
			Latitude:  line[0],
			Longitude: line[1],
			Count:     count,
		})
	}
}

type mapServiceServer struct {
}

func (m mapServiceServer) List(req *pb.PointRequest, stream pb.MapService_ListServer) error {
	for point := range points {
		if err := stream.Send(&points[point]); err != nil {
			return err
		}
	}
	return nil
}

func main() {
	flag.Parse()

	var opts []grpc.ServerOption
	grpcServer = grpc.NewServer(opts...)

	pb.RegisterMapServiceServer(grpcServer, s)

	wrappedServer := grpcweb.WrapServer(grpcServer)
	handler := func(resp http.ResponseWriter, req *http.Request) {
		wrappedServer.ServeHTTP(resp, req)
	}

	httpServer := http.Server{
		Addr:    fmt.Sprintf(":%d", *port),
		Handler: http.HandlerFunc(handler),
	}

	fmt.Printf("Server listening on port: %d\n", *port)
	if err := httpServer.ListenAndServeTLS(cert, key); err != nil {
		log.Fatalf("failed starting http2 server: %v", err)
	}
}
