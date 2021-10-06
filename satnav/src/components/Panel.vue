<template>
  <div class="tile is-ancestor">
    <div class="tile">
      <div><SettingsComponent></SettingsComponent></div>
    </div>
    <div class="tile"><Map/></div>
    <div class="tile"><Progress></Progress></div>
    <div class="tile"><SettingsCompRight></SettingsCompRight></div>
  </div>
</template>

<script>
import Map from "./Map";
import SettingsComponent from "./SettingsComponent";
import Progress from "./Progress";
import SettingsCompRight from "./SettingsCompRight";

export default {
  name: "Panel",
  components: {
    Map,
    SettingsComponent,
    Progress,
    SettingsCompRight,
  }
}
</script>

<style scoped>

</style>