import 'leaflet/dist/leaflet.js';
import 'leaflet.heat/dist/leaflet-heat.js';

class Map {

    constructor(args = {}) {
        this.window = args.window;
        this.location = args.location;
        this.selector = args.selector;
        this.world = null;
        this.token = process.env.VUE_APP_MAP_TOKEN;
        this.mapConfig = {
            defaultZoom: 3,
            url: `https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=${this.token}`,
            layerConfig: {
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                maxZoom: 18,
                id: 'mapbox.streets',
                accessToken: this.token,
                blur: 40
            }
        }
        this.postInit();
    }

    postInit() {
        this.world = this.window.L.map(this.selector, {
            center: this.location,
            zoom: this.mapConfig.defaultZoom
        });

        this.window.L.tileLayer(
            this.mapConfig.url,
            this.mapConfig.layerConfig
        ).addTo(this.world);

        this.window.L.control.scale().addTo(this.world);
    }

    setLocation(location) {
        this.location = location;
        this.world.setView(this.location); 
        return this;
    }

    setHeatLayer(layer) {
        if (!this.heat) {
            this.heat = this.window.L.heatLayer(layer, {blur: this.mapConfig.layerConfig.blur})
            this.heat.addTo(this.world)
        } else {
            this.heat.setLatLngs(layer)
        }
        return this;
    }
}

const MapFactory = {
    build: (args) => {
        return new Map(args);
    }
}

export default MapFactory
