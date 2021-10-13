<template>

  <div>
    <div>
      <b-message title="Time" size="is-large">
        <b-timepicker class="container" v-model="time" inline></b-timepicker>
      </b-message>

<!--      <div >-->

<!--&lt;!&ndash;        <b-icon class="container"&ndash;&gt;-->
<!--&lt;!&ndash;            icon="view-dashboard"&ndash;&gt;-->
<!--&lt;!&ndash;            size="is-large"&ndash;&gt;-->
<!--&lt;!&ndash;            type="is-primary">&ndash;&gt;-->
<!--&lt;!&ndash;        </b-icon>&ndash;&gt;-->

<!--        </div>-->

        <div>
        <b-message title="Distance" size="is-large">
          <b size="is-medium"> 32km / 51km</b>
          <br>
          <b size="is-medium"> 1:20h / 2:04h</b>
          <b-progress type="is-info" :value="75" size="is-large" format="percent" show-value>
          </b-progress>
        </b-message>
      </div>

      <b-message title="Speed" size="is-large"> <b size="is-medium"> 50km / h</b></b-message>


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