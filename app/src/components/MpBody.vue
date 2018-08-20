<template>
    <div class="flex">
        <div class="w-1/4 text-grey-darker text-center px-1 py-2">
            <mp-bounding-box></mp-bounding-box> 
        </div>
        <div class="map w-3/4 text-grey-darker text-center px-1 py-2">
            <mp-map v-bind:lat="lat" v-bind:long="long"></mp-map>
        </div>
    </div>
</template>

<script>
    import MpBoundingBox from '@/components/MpBoundingBox.vue'
    import MpMap from '@/components/MpMap.vue'

    export default {

        name: 'mpBody',

        components: {
            MpBoundingBox,
            MpMap
        },

        data: function() {
            return {
                lat: 37.751,
                long: -97.822
            }
        }
    }
</script>

<style scoped>

    .map {
        height: 90vh;
    }

</style>
