package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/NYTimes/gziphandler"

	"github.com/blong14/map_plat/api"
)

func lookupPort() string {
	port, ok := os.LookupEnv("PORT")
	if !ok {
		port = "3000"
	}
	return port
}

func lookupCert() string {
	cert, ok := os.LookupEnv("CERT")
	if !ok {
		cert = "./localhost.cert.pem"
	}
	return cert
}

func lookupKey() string {
	key, ok := os.LookupEnv("KEY")
	if !ok {
		key = "./localhost.key.pem"
	}
	return key
}

func main() {
	port := lookupPort()
	grpcWebServer := http.Server{
		Addr: fmt.Sprintf(":%s", port),
	}

	withGz := gziphandler.GzipHandler(http.HandlerFunc(api.Handler))

	http.Handle("/", withGz)

	log.Printf("GRPC Server listening on port: %s\n", port)
	if err := grpcWebServer.ListenAndServe(); err != nil {
		log.Fatalf("failed starting http2 server: %v", err)
	}
}
