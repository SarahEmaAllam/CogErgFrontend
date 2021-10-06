<template>

  <div>
    <div class="tile is-4 is-vertical is-parent">
      <div class="tile is-child box">
        <b-timepicker class="container" v-model="time" inline></b-timepicker>
      </div>
      <div class="tile is-child box">
        <b-icon class="container"
            icon="view-dashboard"
            size="is-large"
            type="is-primary">
        </b-icon>
      </div>
      </div>
  </div>

</template>

<script>
export default {
  name: "SettingsCompRight",
  data() {
    return {
      time: new Date()
    }
  },

}
</script>

<style scoped>

</style>