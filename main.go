package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"google.golang.org/grpc"

	"github.com/blong14/map_plat/api"
	pb "github.com/blong14/map_plat/services"
	"github.com/improbable-eng/grpc-web/go/grpcweb"
)

var wrappedServer *grpcweb.WrappedGrpcServer

func handler(resp http.ResponseWriter, req *http.Request) {
	wrappedServer.ServeHTTP(resp, req)
}

func init() {
	s := api.MapServiceServer{}

	var opts []grpc.ServerOption
	grpcServer := grpc.NewServer(opts...)

	pb.RegisterMapServiceServer(grpcServer, s)

	wrappedServer = grpcweb.WrapServer(grpcServer)
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

	httpServer := http.Server{
		Addr:    fmt.Sprintf(":%s", port),
		Handler: http.HandlerFunc(handler),
	}

	log.Printf("Server listening on port: %s\n", port)
	if err := httpServer.ListenAndServeTLS(cert, key); err != nil {
		log.Fatalf("failed starting http2 server: %v", err)
	}
}
