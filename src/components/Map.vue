<template>
  <div class="map">
    <div id="map-container"></div>
  </div>
</template>

<script>
  import 'leaflet.heat/dist/leaflet-heat.js';

  const token = 'pk.eyJ1IjoiYmxvbmcxNCIsImEiOiJjamt4YXEwajkwNmx4M3Zuc3o1a2hiN2IwIn0.x_gZp96bPOFPaPpquxTtnA';

  export default {

    name: 'Map',

    props: {
      lat: Number,
      long: Number
    },

    data: function() {
      return {
        location: [this.lat, this.long],
        world: {}
      }
    },

    watch: {

      lat: function(newLat, oldLat) {
        this.lat = newLat;
        this.location = [this.lat, this.long];
        this.world.setView(this.location, 13); 
      },

      long: function(newLong, oldLong) {
        this.long = newLong;
        this.location = [this.lat, this.long];
        this.world.setView([this.lat, this.long], 13);  
      }
    },

    mounted: function() {
      this.world = L.map('map-container').setView(this.location, 13);

      L.tileLayer(`https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=${token}`, {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: token
      }).addTo(this.world);

      // var heat = L.heatLayer([
      //   [51.505, -0.09, 1],
      //   [51.505, -0.09, 1],
      //   [51.505, -0.09, 1],
      //   [51.505, -0.09532, 1],
      //   [51.505, -0.09532, 1],
      //   [51.505, -0.09532, 1],
      //   [51.505, -0.09532, 1],
      //   [51.505, -0.09532, 1],
      //   [51.505, -0.09532, 1],
      //   [51.505, -0.09532, 1],
      // ], {radius: 25}).addTo(map);
    }
  }
</script>

<style scoped>

  #map-container {
    height: 50vh;
  }
  
</style>
