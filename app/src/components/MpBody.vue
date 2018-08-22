<template>
    <div class="w-full">
        <div class="box absolute pin-r max-w-md right m-6 mt-3 text-primary text-center">
            <mp-bounding-box v-on:click="onSubmit" v-on:clear="onInitialize" v-bind:isDisabled="fetching"></mp-bounding-box> 
        </div>
        <div class="map">
            <mp-map v-bind:lat="lat" v-bind:long="long" v-bind:layer="layer"></mp-map>
        </div>
    </div>
</template>

<script>
    import MpBoundingBox from '@/components/MpBoundingBox.vue'
    import MpMap from '@/components/MpMap.vue'

    import GrpcService from '@/services/grpc.service';

    export default {

        name: 'mpBody',

        components: {
            MpBoundingBox,
            MpMap
        },

        data: function() {
            return {
                fetching: false,
                lat: 37.751,
                long: -97.822,
                layer: []
            }
        },

        mounted: function() {
            this.onInitialize()
        },

        methods: {
            onInitialize: function() {
                this.fetching = true;
                const client = GrpcService.client();
                client.sendPointRequest(this.onUpdate); 
            },
            onSubmit: function(data) {
                this.fetching = true;
                const client = GrpcService.client();
                client.getBoundedPoints(data, this.onUpdate);
            },
            onUpdate: function(layer) {
                this.fetching = false;
                this.layer = layer;
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
