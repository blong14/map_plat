import { grpc } from 'grpc-web-client'; 
require('@/proto/map_service_pb_service');
const messages = require('@/proto/map_service_pb');


class GrpcClient {

    constructor() {
        this.layer = [];
    }

    sendPointRequest(callback) {
        const req = new messages.PointRequest();

        this.send(window.exports.MapService.AllPoints, req, callback);
    }

    getBoundedPoints(args, callback) {
        const req = new messages.BoundedPointsRequest();
        req.setLatmin(`${args.xMin}`);
        req.setLatmax(`${args.xMax}`);
        req.setLongmin(`${args.yMin}`);
        req.setLongmax(`${args.yMax}`);

        this.send(window.exports.MapService.BoundedPoints, req, callback)
    }

    send(url, req, callback) {
        this.client = grpc.client(url, {
            host: process.env.VUE_APP_API_URL
        });

        this.client.onMessage((message) => {
            this.layer = message.getPointsList()
                                .map((f) => [
                                    f.getLatitude(),
                                    f.getLongitude(),
                                    f.getCount()
                                ]);
        });
        
        this.client.onEnd(() => {
            callback(this.layer)
        });

        this.client.start();
        this.client.send(req);
    }
}

const GrpcService = {
    client() {
        return new GrpcClient();
    }
}

export default GrpcService;
