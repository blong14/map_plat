import axios from 'axios'; 


class HttpClient {

    constructor() {
        this.layer = [];
    }

    getAgencies() {
        return axios
                .get('//localhost:8020/v1/agencies')
                .then((resp) => {
                    return resp.data.map((f) => {
                            return {
                                lat: f.position.latitude,
                                long: f.position.longitude,
                                bounds: [
                                    [f.bounding_box[2], f.bounding_box[3]],
                                    [f.bounding_box[0], f.bounding_box[1]],
                                ],
                            }
                        });
                });
    }

    getBoundedPoints(args) {
        return axios
                .get(`//localhost:8020/v1/stops?north=${args[0][0]}&east=${args[0][1]}&south=${args[1][0]}&west=${args[1][1]}`)
                .then((resp) => {
                    return this.layer = resp.data.map((f) => [
                        f.position.latitude,
                        f.position.longitude,
                    ]);
                });
    }

}

const HttpService = {
    client() {
        return new HttpClient();
    }
}

export default HttpService;
