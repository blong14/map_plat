#!/bin/bash

if [[ "$GOBIN" == "" ]]; then
  echo "Optional env var GOBIN is not set; using default derived from GOPATH as: \"$GOPATH/bin\""
  export GOBIN="$GOPATH/bin"
fi

echo "Compiling protobuf definitions"
protoc \
  --go_out=plugins=grpc:./ \
  --plugin=protoc-gen-ts=./app/node_modules/.bin/protoc-gen-ts \
  --ts_out=service=grpc-web:./app/src \
  --js_out=import_style=commonjs,binary:./app/src \
  ./proto/map_service.proto