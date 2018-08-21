// package: proto
// file: proto/map_service.proto

import * as jspb from "google-protobuf";

export class Point extends jspb.Message {
  getLatitude(): string;
  setLatitude(value: string): void;

  getLongitude(): string;
  setLongitude(value: string): void;

  getCount(): number;
  setCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Point.AsObject;
  static toObject(includeInstance: boolean, msg: Point): Point.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Point, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Point;
  static deserializeBinaryFromReader(message: Point, reader: jspb.BinaryReader): Point;
}

export namespace Point {
  export type AsObject = {
    latitude: string,
    longitude: string,
    count: number,
  }
}

export class PointRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PointRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PointRequest): PointRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PointRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PointRequest;
  static deserializeBinaryFromReader(message: PointRequest, reader: jspb.BinaryReader): PointRequest;
}

export namespace PointRequest {
  export type AsObject = {
  }
}

export class BoundedPointsRequest extends jspb.Message {
  hasLowerleft(): boolean;
  clearLowerleft(): void;
  getLowerleft(): Point | undefined;
  setLowerleft(value?: Point): void;

  hasUpperright(): boolean;
  clearUpperright(): void;
  getUpperright(): Point | undefined;
  setUpperright(value?: Point): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BoundedPointsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BoundedPointsRequest): BoundedPointsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BoundedPointsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BoundedPointsRequest;
  static deserializeBinaryFromReader(message: BoundedPointsRequest, reader: jspb.BinaryReader): BoundedPointsRequest;
}

export namespace BoundedPointsRequest {
  export type AsObject = {
    lowerleft?: Point.AsObject,
    upperright?: Point.AsObject,
  }
}

export class PointsResponse extends jspb.Message {
  clearPointsList(): void;
  getPointsList(): Array<Point>;
  setPointsList(value: Array<Point>): void;
  addPoints(value?: Point, index?: number): Point;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PointsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PointsResponse): PointsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PointsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PointsResponse;
  static deserializeBinaryFromReader(message: PointsResponse, reader: jspb.BinaryReader): PointsResponse;
}

export namespace PointsResponse {
  export type AsObject = {
    pointsList: Array<Point.AsObject>,
  }
}

