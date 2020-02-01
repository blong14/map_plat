import { grpc } from 'grpc-web-client'; 
require('@/proto/gtfs_pb_service');
const gtfs = require('@/proto/gtfs_pb');


class GtfsClient {

    fetch() {
        console.log('hello');
    }
}

export default GtfsClient;
