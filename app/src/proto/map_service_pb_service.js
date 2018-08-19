// package: proto
// file: proto/map_service.proto

var proto_map_service_pb = require("../proto/map_service_pb");
var grpc = require("grpc-web-client").grpc;

var MapService = (function () {
  function MapService() {}
  MapService.serviceName = "proto.MapService";
  return MapService;
}());

MapService.List = {
  methodName: "List",
  service: MapService,
  requestStream: false,
  responseStream: true,
  requestType: proto_map_service_pb.PointRequest,
  responseType: proto_map_service_pb.Point
};

MapService.Get = {
  methodName: "Get",
  service: MapService,
  requestStream: false,
  responseStream: false,
  requestType: proto_map_service_pb.PointRequest,
  responseType: proto_map_service_pb.Points
};

exports.MapService = MapService;

function MapServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

MapServiceClient.prototype.list = function list(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(MapService.List, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.end.forEach(function (handler) {
        handler();
      });
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

MapServiceClient.prototype.get = function get(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(MapService.Get, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          callback(Object.assign(new Error(response.statusMessage), { code: response.status, metadata: response.trailers }), null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

exports.MapServiceClient = MapServiceClient;

