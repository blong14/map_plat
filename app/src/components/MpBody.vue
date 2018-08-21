<template>
    <div class="flex">
        <div class="w-1/4 text-grey-darker text-center px-1 py-2">
            <mp-bounding-box v-on:click="onSubmit" v-on:clear="onInitialize" v-bind:isDisabled="fetching"></mp-bounding-box> 
        </div>
        <div class="map w-3/4 text-grey-darker text-center px-1 py-2">
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
        height: 90vh;
    }

</style>
