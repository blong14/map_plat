// package: proto
// file: proto/map_service.proto

import * as proto_map_service_pb from "../proto/map_service_pb";
import {grpc} from "grpc-web-client";

type MapServiceAllPoints = {
  readonly methodName: string;
  readonly service: typeof MapService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_map_service_pb.PointRequest;
  readonly responseType: typeof proto_map_service_pb.PointsResponse;
};

type MapServiceBoundedPoints = {
  readonly methodName: string;
  readonly service: typeof MapService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_map_service_pb.BoundedPointsRequest;
  readonly responseType: typeof proto_map_service_pb.PointsResponse;
};

export class MapService {
  static readonly serviceName: string;
  static readonly AllPoints: MapServiceAllPoints;
  static readonly BoundedPoints: MapServiceBoundedPoints;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }
export type ServiceClientOptions = { transport: grpc.TransportConstructor; debug?: boolean }

interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: () => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}

export class MapServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: ServiceClientOptions);
  allPoints(
    requestMessage: proto_map_service_pb.PointRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError, responseMessage: proto_map_service_pb.PointsResponse|null) => void
  ): void;
  allPoints(
    requestMessage: proto_map_service_pb.PointRequest,
    callback: (error: ServiceError, responseMessage: proto_map_service_pb.PointsResponse|null) => void
  ): void;
  boundedPoints(
    requestMessage: proto_map_service_pb.BoundedPointsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError, responseMessage: proto_map_service_pb.PointsResponse|null) => void
  ): void;
  boundedPoints(
    requestMessage: proto_map_service_pb.BoundedPointsRequest,
    callback: (error: ServiceError, responseMessage: proto_map_service_pb.PointsResponse|null) => void
  ): void;
}

