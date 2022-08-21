// package: proto
// file: proto/map_service.proto

var proto_map_service_pb = require("../proto/map_service_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var MapService = (function () {
  function MapService() {}
  MapService.serviceName = "proto.MapService";
  return MapService;
}());

MapService.AllPoints = {
  methodName: "AllPoints",
  service: MapService,
  requestStream: false,
  responseStream: false,
  requestType: proto_map_service_pb.PointRequest,
  responseType: proto_map_service_pb.PointsResponse
};

MapService.BoundedPoints = {
  methodName: "BoundedPoints",
  service: MapService,
  requestStream: false,
  responseStream: false,
  requestType: proto_map_service_pb.BoundedPointsRequest,
  responseType: proto_map_service_pb.PointsResponse
};

exports.MapService = MapService;

function MapServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

MapServiceClient.prototype.allPoints = function allPoints(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MapService.AllPoints, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MapServiceClient.prototype.boundedPoints = function boundedPoints(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MapService.BoundedPoints, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.MapServiceClient = MapServiceClient;

