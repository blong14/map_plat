<template>
    <div id="app">
        <mp-header></mp-header>
        <mp-map v-bind:lat="lat" v-bind:long="long"></mp-map>
        <mp-footer></mp-footer>
    </div>
</template>

<script>
    import MpFooter from './components/MpFooter.vue'
    import MpHeader from './components/MpHeader.vue'
    import MpMap from './components/MpMap.vue'

    export default {

        name: 'app',

        components: {
            MpMap,
            MpFooter,
            MpHeader
        },

        data: function() {
            return {
                lat: 51.505,
                long: -0.09
            }
        }
    }
</script>
