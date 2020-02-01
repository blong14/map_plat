<template>
    <div id="app">
        <mp-body></mp-body>
    </div>
</template>

<style src="../node_modules/leaflet.markercluster/dist/MarkerCluster.css"></style>
<style src="../node_modules/leaflet.markercluster/dist/MarkerCluster.Default.css"></style>
<style src="@/assets/css/main.css"></style>

<script>
    import MpBody from '@/components/MpBody.vue'

    export default {

        name: 'app',

        components: {
            MpBody,
        },
    }
</script>
