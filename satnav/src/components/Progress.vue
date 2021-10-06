<template>
  <section>
    <b-steps
        v-model="activeStep"
        :animated="isAnimated"
        :rounded="isRounded"
        :label-position="labelPosition"
        :position="position"
        :size="size"
        vertical>

      <b-step-item step="10m" label="Right" :clickable="isStepsClickable" @click="simple"></b-step-item>

      <b-step-item step="10m" label="Forward" :clickable="isStepsClickable" @click="simple"></b-step-item>


      <b-step-item step="30m" :visible="showSocial" label="Stop!" :type="'is-danger'" :clickable="isStepsClickable"
                   :disabled="isActive"
                   @click="isActive = true" />
      <b-message v-if="isActive" auto-close title="Accident ahead!" type="is-danger" has-icon v-model="isActive" aria-close-label="Close message">
        An accident took place at 10:35 on the Main Avenue
      </b-message>



      <b-step-item :step="showSocial ? '5m' : '5m'" label="Left" :clickable="isStepsClickable" :type="'is-success'" @click="success">
        <h1 class="title has-text-centered">Arrived at destination</h1>
      </b-step-item>


    </b-steps>

<!--  <b-steps-->
<!--      :position="position"-->
<!--      :label-position="labelPosition"-->
<!--      :size="size"-->
<!--      vertical>-->
<!--    <b-step-item icon="account-key">-->
<!--      <b-button-->
<!--          label="Turn right in 10m"-->
<!--          size="is-medium"-->
<!--          @click="simple" />-->
<!--    </b-step-item>-->

<!--    <b-step-item label="Forward" icon="account">-->
<!--      Main Avenue: Continue Forward 10m. <br />-->

<!--    </b-step-item>-->

<!--    <b-step-item label="Left" icon="account-plus" disabled>-->

<!--      Destination: Turn left in 15m. <br />-->

<!--    </b-step-item>-->
<!--  </b-steps>-->
  </section>
</template>

<script>
export default {
  name: "Progress",
  data() {
    return {
      isActive: false,
      labelPosition: 'bottom',
      position: "is-right",
      size: "is-large",
      activeStep: 0,
      isAnimated: true,
      isRounded: true,
      isStepsClickable: true,
    }
  },
  methods: {
    simple1() {
      this.$buefy.notification.open('Street St. Martin')
    },
    success() {
      this.$buefy.notification.open({
        message: 'Something happened correctly!',
        type: 'is-success'
      })
    },
    simple() {
      const notif = this.$buefy.notification.open({
        duration: 3000,
        message: `Street St. Martin`,
        position: 'is-bottom-right',
        type: 'is-info',
        hasIcon: true
      })
      notif.$on('close', () => {
        this.$buefy.notification.open('St. Martin Street exited')
      })
    }
  }
}
</script>

<style scoped>

</style>