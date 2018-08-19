import 'leaflet/dist/leaflet.js';
import 'leaflet.heat/dist/leaflet-heat.js';

class Map {

    constructor(args = {}) {
        this.window = args.window;
        this.location = args.location;
        this.selector = args.selector;
        this.world = null;
        this.token = process.env.VUE_APP_MAP_TOKEN;
        this.postInit();
    }

    postInit() {
        this.world = this.window.L.map(this.selector).setView(this.location, 13);

        this.window.L.tileLayer(`https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=${this.token}`, {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox.streets',
            accessToken: this.token
        }).addTo(this.world);
    }

    setLocation(location) {
        this.location = location;
        this.world.setView(this.location, 13); 
        return this;
    }

    setHeatLayer(layer) {
        this.window.L.heatLayer(layer, {radius: 25}).addTo(this.world);
        return this;
    }
}

const MapFactory = {
    build: (args) => {
        return new Map(args);
    }
}

export default MapFactory