<template>
  <div id="app">
    <input type="number" v-model.number="lat" placeholder="lat">
    <input type="number" v-model.number="long" placeholder="long">
    <Map v-bind:lat="lat" v-bind:long="long"></Map>
  </div>
</template>

<script>
  import Map from './components/Map.vue'

  export default {
    name: 'app',
    components: {
      Map
    },
    data: function() {
      return {
        lat: 51.505,
        long: -0.09
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
