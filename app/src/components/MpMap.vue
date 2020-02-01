<template>
    <div id="map-container"></div>
</template>

<script>
    import MapFactory from '@/services/map.service';
    
    export default {
        name: 'mpMap',

        props: {
            lat: Number,
            long: Number,
            layer: Array,
            agencies: Array,
            durham: Array,
            morgan: Array,
            indy: Array
        },

        data: function() {
            return {
                heatLayer: this.layer,
                agenciesLayer: this.agencies,
                location: [this.lat, this.long],
                map: null,
            }
        },
        watch: {
            lat: function(newLat) {
                this.lat = newLat;
                this.location = [this.lat, this.long];
                this.map.setLocation(this.location);
            },
            long: function(newLong) {
                this.long = newLong;
                this.location = [this.lat, this.long];
                this.map.setLocation(this.location);  
            },
            layer: function(newLayer) {
                this.heatLayer = newLayer;
                this.map.setHeatLayer(this.heatLayer).setPositions();
            },
            agencies: function(newLayer) {
                this.agenciesLayer = newLayer;
                this.map.setAgenciesLayer(this.agenciesLayer);
            },
            durham: function(newLayer) {
                this.durham = newLayer;
                this.map.setBounds(this.durham);

            },
            indy: function(newLayer) {
                this.indy = newLayer;
                this.map.setBounds(this.indy);

            },
            morgan: function(newLayer) {
                this.morgan = newLayer;
                this.map.setBounds(this.morgan);

            }
        },

        mounted: function() {
            // Instantiate the map
            this.map = MapFactory.build({
                window: window,
                selector: 'map-container',
                location: this.location
            });
        }
    }
</script>

<style scoped lang="scss">

    #map-container {
        height: 100%;
    }
  
</style>
