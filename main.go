package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"google.golang.org/grpc"

	"github.com/blong14/map_plat/api"
	pb "github.com/blong14/map_plat/proto"
	"github.com/improbable-eng/grpc-web/go/grpcweb"
)

var (
	grpcWebServer *grpcweb.WrappedGrpcServer
	fileHandler   http.Handler
)

func handler(resp http.ResponseWriter, req *http.Request) {
	if grpcWebServer.IsAcceptableGrpcCorsRequest(req) || grpcWebServer.IsGrpcWebRequest(req) {
		grpcWebServer.ServeHTTP(resp, req)
		return
	}

	fileHandler.ServeHTTP(resp, req)
}

func init() {
	s := api.MapServiceServer{}

	var opts []grpc.ServerOption
	grpcServer := grpc.NewServer(opts...)

	pb.RegisterMapServiceServer(grpcServer, s)

	grpcWebServer = grpcweb.WrapServer(grpcServer)

	fileHandler = http.FileServer(http.Dir("dist"))
}

func main() {
	port, ok := os.LookupEnv("PORT")
	if !ok {
		port = "3000"
	}

	cert, ok := os.LookupEnv("CERT")
	if !ok {
		cert = "./localhost.crt"
	}

	key, ok := os.LookupEnv("KEY")
	if !ok {
		key = "./localhost.key"
	}

	grpcWebServer := http.Server{
		Addr:    fmt.Sprintf(":%s", port),
		Handler: http.HandlerFunc(handler),
	}

	http.Handle("/", http.StripPrefix("dist", fileHandler))

	log.Printf("GRPC Server listening on port: %s\n", port)
	if err := grpcWebServer.ListenAndServeTLS(cert, key); err != nil {
		log.Fatalf("failed starting http2 server: %v", err)
	}
}
