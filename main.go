package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/blong14/map_plat/api"
)

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
		Handler: http.HandlerFunc(api.Handler),
	}

	http.Handle("/", http.StripPrefix("dist", api.FileHandler))

	log.Printf("GRPC Server listening on port: %s\n", port)
	if err := grpcWebServer.ListenAndServeTLS(cert, key); err != nil {
		log.Fatalf("failed starting http2 server: %v", err)
	}
}
