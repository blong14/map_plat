<template>
    <div class="w-full">
        <div class="map">
            <mp-map 
                v-bind:lat="lat"
                v-bind:long="long"
                v-bind:layer="layer"
                v-bind:agencies="agencies"
                v-bind:durham="durham"
                v-bind:indy="indy"
                v-bind:morgan="morgan">
             </mp-map>
        </div>
    </div>
</template>

<script>
    import MpMap from '@/components/MpMap.vue'

    import HttpService from '@/services/http.service';

    const initialLat = 39.23;
    const initialLong = -100.5; 

    export default {

        name: 'mpBody',

        components: {
            MpMap
        },

        data: function() {
            return {
                fetching: false,
                lat: initialLat,
                long: initialLong,
                layer: [],
                agencies: [],
                durham: [],
                indy: [],
                morgan: []
            }
        },

        mounted: function() {
            this.onInitialize()
        },

        methods: {
            onInitialize: function() {
                this.fetching = true;
                this.lat = initialLat;
                this.long = initialLong;

                const client = HttpService.client();
                client.getAgencies().then((agencies) => {
                    this.agencies = agencies;
                });

                this.durham = [
                    [36.137041, -78.759587],
                    [35.866374, -79.007498],
                ];
                this.morgan = [
                    [41.061978, -111.659142],
                    [41.026229, -111.704181],
                ];
                this.indy = [
                    [39.932979, -85.914823],
                    [39.612888, -86.334583],
                ];

                [this.durham, this.morgan, this.indy].forEach((data) => {
                    client.getBoundedPoints(data).then((layer) => {
                        this.layer = layer;
                    });
                });

                this.fetching = false;
            }
        }
    }
</script>

<style scoped>

    .map {
        height: 100vh;
    }

    .box {
        z-index: 1000;
    }

</style>
