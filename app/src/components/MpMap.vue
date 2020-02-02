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
            bounds: Array,
            shapes: Array
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
            shapes: function(newShapes) {
                this.map.clear('shapes');
                this.shapes = newShapes;
                this.shapes.forEach((e) => {
                    this.map.setShapefile(e.file, e.options);
                });
            },
            bounds: function(newBounds) {
               this.bounds = newBounds;
               this.bounds.forEach((e) => {
                   this.map.setBounds(e);
               }); 
            },
            agencies: function(newLayer) {
                this.map.clear('agencies');
                this.agenciesLayer = newLayer;
                this.map.setAgenciesLayer(this.agenciesLayer);
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
