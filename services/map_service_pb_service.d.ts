// package: services
// file: map_service.proto

import * as map_service_pb from "./map_service_pb";
import {grpc} from "grpc-web-client";

type MapServiceList = {
  readonly methodName: string;
  readonly service: typeof MapService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof map_service_pb.PointRequest;
  readonly responseType: typeof map_service_pb.Point;
};

export class MapService {
  static readonly serviceName: string;
  static readonly List: MapServiceList;
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
  list(requestMessage: map_service_pb.PointRequest, metadata?: grpc.Metadata): ResponseStream<map_service_pb.Point>;
}

