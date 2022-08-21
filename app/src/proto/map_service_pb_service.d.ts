// package: proto
// file: proto/map_service.proto

import * as proto_map_service_pb from "../proto/map_service_pb";
import {grpc} from "@improbable-eng/grpc-web";

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

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class MapServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  allPoints(
    requestMessage: proto_map_service_pb.PointRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_map_service_pb.PointsResponse|null) => void
  ): UnaryResponse;
  allPoints(
    requestMessage: proto_map_service_pb.PointRequest,
    callback: (error: ServiceError|null, responseMessage: proto_map_service_pb.PointsResponse|null) => void
  ): UnaryResponse;
  boundedPoints(
    requestMessage: proto_map_service_pb.BoundedPointsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_map_service_pb.PointsResponse|null) => void
  ): UnaryResponse;
  boundedPoints(
    requestMessage: proto_map_service_pb.BoundedPointsRequest,
    callback: (error: ServiceError|null, responseMessage: proto_map_service_pb.PointsResponse|null) => void
  ): UnaryResponse;
}

