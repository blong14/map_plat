// package: services
// file: map_service.proto

import * as jspb from "google-protobuf";

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

