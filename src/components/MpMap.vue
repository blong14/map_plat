<template>
    <div class="map">
        <div id="map-container"></div>
    </div>
</template>

<script>
    import GrpcService from '@/utils/grpc.utils';
    import MapFactory from '@/utils/map.utils';

    export default {
        name: 'mpMap',

        props: {
            lat: Number,
            long: Number
        },

        data: function() {
            return {
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
            }
        },

        mounted: function() {
            const args = {
                window: window,
                selector: 'map-container',
                location: this.location
            };

            // Instantiate the map
            this.map = MapFactory.build(args);

            this.onInitialize();
        },

        methods: {
            onInitialize: function() {
                const client = GrpcService.client();
                client.sendPointRequest(this.map);
            }
        }
    }
</script>

<style scoped>

    #map-container {
        height: 100vh;
    }
  
</style>
