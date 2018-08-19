import { grpc } from 'grpc-web-client'; 
require('@/proto/map_service_pb_service');

import { PointRequest } from '@/proto/map_service_pb';


class GrpcClient {

    constructor() {
        this.client = grpc.client(window.exports.MapService.List, {
            host: process.env.VUE_APP_API_URL
        });
        this.layer = [];
    }

    sendPointRequest(map) {
        const req = new PointRequest();

        this.client.onMessage((message) => {
            const data = message.toObject();
            this.layer.push([data.latitude, data.longitude, data.count]);
        });
        
        this.client.onEnd(() => {
            map.setHeatLayer(this.layer);
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
