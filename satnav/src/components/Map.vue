<template>

  <div>
<!--    <div v-show="seen" id="hide" class="hide" style="height: 20%; overflow: auto;">-->
<!--&lt;!&ndash;      <h3>Custom Marker Icons</h3>&ndash;&gt;-->
<!--      <label for="iconSize">Icon size:</label>-->
<!--      <input-->
<!--          id="iconSize"-->
<!--          v-model="iconSize"-->
<!--          type="range"-->
<!--          min="1"-->
<!--          max="200"-->
<!--          value="64"-->
<!--      >-->
<!--      <label for="customTextInput">Custom text: </label>-->
<!--      <input-->
<!--          id="customTextInput"-->
<!--          v-model="customText"-->
<!--          type="text"-->
<!--      >-->
<!--    </div>-->
      <div  style="height: 900px; width: 750px">
      <l-map
          style="height: 80%; width: 100%"
          :zoom="zoom"
          :center="center"
          @update:zoom="zoomUpdated"
          @update:center="centerUpdated"
          @update:bounds="boundsUpdated"
      >

      <l-tile-layer
          :url="url"
          :attribution="attribution"
      />


      <!-- Use default icon -->
      <l-marker :lat-lng="[47.41322, -1.219482]" />
      <!-- Use icon given in icon property -->
      <l-marker
          :lat-lng="[47.41322, -1.209482]"
          :icon="icon"
      />
      <!-- Create image icon (icon) from l-icon tag -->
      <l-marker :lat-lng="[47.41322, -1.199482]">
        <l-icon
            :icon-size="dynamicSize"
            :icon-anchor="dynamicAnchor"
            icon-url="/images/baseball-marker.png"
        />
      </l-marker>
      <!-- Create HTML icon (divIcon) by providing content inside the l-icon tag -->
      <l-marker :lat-lng="[47.41322, -1.189482]">
        <l-icon
            :icon-anchor="staticAnchor"
            class-name="someExtraClass"
        >
          <div class="headline">
            {{ customText }}
          </div>
          <img src="/images/layers.png">
        </l-icon>
      </l-marker>
    </l-map>
    </div>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker, LIcon } from "vue2-leaflet";
import { latLng, icon } from "leaflet";
import { Icon } from 'leaflet';

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

export default {
  name: "Icon",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon
  },
  data() {
    return {
      seen: true,
      zoom: 13,
      center: latLng(47.41322, -1.219482),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
          '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',

      icon: icon({
        iconUrl: "static/images/baseball-marker.png",
        iconSize: [32, 37],
        iconAnchor: [16, 37]
      }),
      staticAnchor: [16, 37],
      customText: "Destination",
      iconSize: 64,
      bounds: null
    };
  },
  computed: {
    dynamicSize() {
      return [this.iconSize, this.iconSize * 1.15];
    },
    dynamicAnchor() {
      return [this.iconSize / 2, this.iconSize * 1.15];
    }
  },
  methods: {
    zoomUpdated (zoom) {
      this.zoom = zoom;
    },
    centerUpdated (center) {
      this.center = center;
    },
    boundsUpdated (bounds) {
      this.bounds = bounds;
    }
  }
};
</script>

<style>
.someExtraClass {
  background-color: aqua;
  padding: 10px;
  border: 1px solid #333;
  border-radius: 0 20px 20px 20px;
  box-shadow: 5px 3px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: auto !important;
  height: auto !important;
  margin: 0 !important;
}

.hide {
  visibility: hidden !important;
}

.mappy {
  position: absolute;
}


</style>




























<!--<template>-->
<!--  <div>-->
<!--    <div style="max-width: 800px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between">-->
<!--&lt;!&ndash;      <div>&ndash;&gt;-->
<!--&lt;!&ndash;        <h1>Your coordinates:</h1>&ndash;&gt;-->
<!--&lt;!&ndash;        <p>{{ myCoordinates.lat }} Latitude, {{ myCoordinates.lng }} Longitude</p>&ndash;&gt;-->
<!--&lt;!&ndash;      </div>&ndash;&gt;-->
<!--&lt;!&ndash;      <div>&ndash;&gt;-->
<!--&lt;!&ndash;        <h1>Map coordinates:</h1>&ndash;&gt;-->
<!--&lt;!&ndash;        <p>{{ mapCoordinates.lat }} Latitude, {{ mapCoordinates.lng }} Longitude</p>&ndash;&gt;-->
<!--&lt;!&ndash;      </div>&ndash;&gt;-->
<!--    </div>-->
<!--    <GmapMap-->
<!--        :center="myCoordinates"-->
<!--        :zoom="zoom"-->
<!--        style="width:1400px; height:900px; margin: 32px auto;"-->
<!--        ref="mapRef"-->
<!--        @dragend="handleDrag"-->
<!--    ></GmapMap>-->
<!--  </div>-->
<!--</template>-->
<!--<script>-->
<!--export default {-->
<!--  data() {-->
<!--    return {-->
<!--      map: null,-->
<!--      myCoordinates: {-->
<!--        lat: 0,-->
<!--        lng: 0-->
<!--      },-->
<!--      zoom: 7,-->
<!--    }-->
<!--  },-->
<!--  created() {-->
<!--    // does the user have a saved center? use it instead of the default-->
<!--    if(localStorage.center) {-->
<!--      this.myCoordinates = JSON.parse(localStorage.center);-->
<!--    } else {-->
<!--      // get user's coordinates from browser request-->
<!--      this.$getLocation({})-->
<!--          .then(coordinates => {-->
<!--            this.myCoordinates = coordinates;-->
<!--          })-->
<!--          .catch(error => alert(error));-->
<!--    }-->

<!--    // does the user have a saved zoom? use it instead of the default-->
<!--    if(localStorage.zoom) {-->
<!--      this.zoom = parseInt(localStorage.zoom);-->
<!--    }-->
<!--  },-->
<!--  mounted() {-->
<!--    // add the map to a data object-->
<!--    this.$refs.mapRef.$mapPromise.then(map => this.map = map);-->
<!--  },-->
<!--  methods: {-->
<!--    handleDrag() {-->
<!--      // get center and zoom level, store in localstorage-->
<!--      let center = {-->
<!--        lat: this.map.getCenter().lat(),-->
<!--        lng: this.map.getCenter().lng()-->
<!--      };-->
<!--      let zoom = this.map.getZoom();-->

<!--      localStorage.center = JSON.stringify(center);-->
<!--      localStorage.zoom = zoom;-->
<!--    },-->

<!--    // dropMarker(position) {-->
<!--    //   const H = window.H;-->
<!--    //   let marker = new H.map.Marker({lat: this.mapCoordinates.lat, lng: this.mapCoordinates.lng})-->
<!--    //   this.map.addObject(marker);-->
<!--    //-->
<!--    // }-->
<!--  },-->
<!--  computed: {-->
<!--    mapCoordinates() {-->
<!--      if(!this.map) {-->
<!--        return {-->
<!--          lat: 0,-->
<!--          lng: 0-->
<!--        };-->
<!--      }-->

<!--      return {-->
<!--        lat: this.map.getCenter().lat().toFixed(4),-->
<!--        lng: this.map.getCenter().lng().toFixed(4)-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->