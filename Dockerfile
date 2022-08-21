FROM golang:1.19-bullseye AS go-build

RUN apt-get update

WORKDIR /go/src

COPY go.mod /go/src
COPY go.sum /go/src
RUN go mod download

COPY . /go/src
RUN go build -o /go/bin/mp github.com/blong14/map_plat

FROM node:16-bullseye AS node-build

RUN apt-get update

WORKDIR /app

COPY env /app/.env
COPY app/package.json /app
COPY app/yarn.lock /app
RUN yarn install

COPY app /app
RUN yarn build

FROM debian:bullseye-slim

RUN apt-get update

COPY --from=go-build /go/bin/mp /go/bin/mp
COPY --from=node-build /app/dist /go/bin/dist
COPY localhost.cert.pem /go/bin/localhost.cert.pem
COPY localhost.key.pem /go/bin/localhost.key.pem

CMD ["/go/bin/mp"]
