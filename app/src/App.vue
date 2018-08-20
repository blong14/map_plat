<template>
    <div id="app">
        <mp-header></mp-header>
        <mp-body></mp-body>
        <mp-footer></mp-footer>
    </div>
</template>

<style src="@/assets/css/main.css"></style>

<script>
    import MpBody from '@/components/MpBody.vue'
    import MpFooter from '@/components/MpFooter.vue'
    import MpHeader from '@/components/MpHeader.vue'

    export default {

        name: 'app',

        components: {
            MpBody,
            MpFooter,
            MpHeader
        },
    }
</script>
