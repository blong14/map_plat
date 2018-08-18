import { grpc } from 'grpc-web-client'; 
require('../../services/map_service_pb_service');

import { PointRequest } from '../../services/map_service_pb';


class GrpcClient {

    constructor() {
        this.client = grpc.client(window.exports.MapService.List, {
            //TODO: Move this to configuration
            host: 'https://localhost:3000'
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
