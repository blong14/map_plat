// package: services
// file: map_service.proto

var map_service_pb = require("./map_service_pb");
var grpc = require("grpc-web-client").grpc;

var MapService = (function () {
  function MapService() {}
  MapService.serviceName = "services.MapService";
  return MapService;
}());

MapService.List = {
  methodName: "List",
  service: MapService,
  requestStream: false,
  responseStream: true,
  requestType: map_service_pb.PointRequest,
  responseType: map_service_pb.Point
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

exports.MapServiceClient = MapServiceClient;

