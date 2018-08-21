<template>
    <div id="map-container" class="rounded"></div>
</template>

<script>
    import MapFactory from '@/services/map.service';
    
    export default {
        name: 'mpMap',

        props: {
            lat: Number,
            long: Number,
            layer: Array
        },

        data: function() {
            return {
                heatLayer: this.layer,
                location: [this.lat, this.long],
                map: null
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
