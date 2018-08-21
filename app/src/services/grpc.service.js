import { grpc } from 'grpc-web-client'; 
require('@/proto/map_service_pb_service');
const messages = require('@/proto/map_service_pb');


class GrpcClient {

    constructor() {
        this.client = grpc.client(window.exports.MapService.AllPoints, {
            host: process.env.VUE_APP_API_URL
        });
        this.layer = [];
    }

    sendPointRequest(callback) {
        const req = new messages.PointRequest();

        this.send(req, callback);
    }

    getBoundedPoints(args, callback) {
        const req = new messages.BoundedPointsRequest();
        req.setUpperright(args.upperLeft);
        req.setLowerleft(args.lowerLeft);

        this.send(req, callback)
    }

    send(req, callback) {
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
