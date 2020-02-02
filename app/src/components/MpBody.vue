<template>
    <div class="w-full">
        <div class="box absolute pin-r max-w-md right m-6 mt-3 text-primary text-center">
            <mp-layer v-on:click="onSubmit" v-on:clear="onClear" v-bind:isDisabled="fetching"></mp-layer>
        </div>
        <div class="map">
            <mp-map 
                v-bind:lat="lat"
                v-bind:long="long"
                v-bind:layer="layer"
                v-bind:bounds="bounds"
                v-bind:shapes="shapes"
                v-bind:agencies="agencies">
             </mp-map>
        </div>
    </div>
</template>

<script>
    import MpLayer from '@/components/MpLayer.vue'
    import MpMap from '@/components/MpMap.vue'

    import HttpService from '@/services/http.service';

    // https://www.npms.phmsa.dot.gov/PopulationData.aspx
    // https://www.census.gov/geographies/mapping-files/time-series/geo/carto-boundary-file.html
    // import density from 'file-loader!./hpa-shp_V2.zip'
    import density from 'file-loader!./cb_2018_us_cbsa_500k.zip'
    import nc from 'file-loader!./nc.zip'
    import utah from 'file-loader!./utah.zip'
    import indiana from 'file-loader!./indiana.zip'

    const initialLat = 39.23;
    const initialLong = -100.5;
    const ncshp = {file: nc, options: {}};
    const utahshp = {file: utah, options: {}};
    const indianashp = {file: indiana, options: {}};
    const densityshp = {file: density, options: {color: '#ffa500'}};
    const client = HttpService.client();

    export default {

        name: 'mpBody',

        components: {
            MpLayer,
            MpMap
        },

        data: function() {
            return {
                fetching: false,
                lat: initialLat,
                long: initialLong,
                layer: [],
                bounds: [],
                shapes: [],
                agencies: [],
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

                this.bounds = [this.durham, this.morgan, this.indy];
                
                let promises = [];
                this.bounds.forEach((data) => {
                    promises.push(client.getBoundedPoints(data));
                });

                Promise.all(promises).then((results) => {
                    this.layer = results.flat();
                    this.fetching = false;
                });

            },
            onSubmit: function(input) {
                this.fetching = true;
                let shapes = [];
                if (input.state) {
                    shapes.push(ncshp, utahshp, indianashp);
                }
                if (input.population) {
                    shapes.push(densityshp)
                }
                this.shapes = shapes;

                if (input.agencies) {
                    if (!this.agencies.length) {
                        client.getAgencies().then((agencies) => {
                            this.agencies = agencies;
                        });
                    }
                } else {
                    this.agencies = [];
                }

                this.fetching = false;
            },
            onClear: function() {
                this.shapes = [];
                this.agencies = [];
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
