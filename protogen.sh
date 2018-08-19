#!/bin/bash

if [[ "$GOBIN" == "" ]]; then
  if [[ "$GOPATH" == "" ]]; then
    echo "Required env var GOPATH is not set; aborting with error; see the following documentation which can be invoked via the 'go help gopath' command."
    go help gopath
    exit -1
  fi

  echo "Optional env var GOBIN is not set; using default derived from GOPATH as: \"$GOPATH/bin\""
  export GOBIN="$GOPATH/bin"
fi

echo "Compiling protobuf definitions"
protoc \
  --plugin=protoc-gen-ts=./app/node_modules/.bin/protoc-gen-ts \
  --plugin=protoc-gen-go=${GOBIN}/protoc-gen-go \
  -I ./proto \
  --js_out=import_style=commonjs,binary:./app/src/proto \
  --go_out=plugins=grpc:./proto \
  --ts_out=service=true:./app/src/proto \
  ./proto/map_service.proto