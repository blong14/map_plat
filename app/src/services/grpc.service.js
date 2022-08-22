import { grpc } from '@improbable-eng/grpc-web';
import { MapService } from '@/proto/map_service_pb_service';
import { BoundedPointsRequest, PointRequest } from "@/proto/map_service_pb";


class GrpcClient {

    constructor() {
        this.layer = [];
    }

    sendPointRequest(callback) {
        const req = new PointRequest();
        this.send(MapService.AllPoints, req, callback);
    }

    getBoundedPoints(args, callback) {
        const req = new BoundedPointsRequest();
        req.setLatmin(`${args.xMin}`);
        req.setLatmax(`${args.xMax}`);
        req.setLongmin(`${args.yMin}`);
        req.setLongmax(`${args.yMax}`);
        this.send(MapService.BoundedPoints, req, callback);
    }

    send(url, req, callback) {
        grpc.invoke(url, {
            request: req,
            host: process.env.VUE_APP_API_URL,
            onMessage: (message) => {
                this.layer = message.getPointsList().map((f) => {
                    return [f.getLatitude(), f.getLongitude(), f.getCount()];
                });
            },
            onEnd: () => {
                callback(this.layer);
            }
        });
    }
}

const GrpcService = {
    client() {
        return new GrpcClient();
    }
}

export default GrpcService;
