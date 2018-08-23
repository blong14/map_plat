<template>
    <div id="map-container"></div>
</template>

<script>
    import MapFactory from '@/services/map.service';
    
    export default {
        name: 'mpMap',

        props: {
            box: Array,
            lat: Number,
            long: Number,
            layer: Array
        },

        data: function() {
            return {
                bounds: [],
                heatLayer: this.layer,
                location: [this.lat, this.long],
                map: null
            }
        },
        watch: {
            box: function(newBounds) {
                this.map.clearBounds();
                this.bounds = newBounds;
                this.map.setBounds(this.bounds); 
            },
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
                this.map.setHeatLayer(this.heatLayer)
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
