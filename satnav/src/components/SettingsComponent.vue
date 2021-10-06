<template>
  <section>
    <span class="material-icons">
settings
</span>
    <b-sidebar
        type="is-light"
        :fullheight="fullheight"
        :fullwidth="fullwidth"
        :overlay="overlay"
        :right="right"
        v-model="open"
    >
      <div class="p-1">
<!--        <img-->
<!--            src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"-->
<!--            alt="Lightweight UI components for Vue.js based on Bulma"-->
<!--        />-->
        <b-menu>
          <span class="material-icons">settings</span>
          <b-menu-list label="Settings">
            <b-menu-item icon="information-outline" label="Safety Info">
              <b-button
                  label="Heavy Rain!"
                  type="is-danger"
                  size="is-medium"
                  @click="danger" />
            </b-menu-item>

<!--            <b-menu-item label="Address History"></b-menu-item>-->

<!--              <div class="block">-->
<!--                <b-field>-->
<!--                  <div class="control">-->
<!--                    <b-switch v-model="isScrollable">Scrollable</b-switch>-->
<!--                  </div>-->
<!--                </b-field>-->
<!--                <b-field label="Max Height">-->
<!--                  <div class="control">-->
<!--                    <b-slider v-model="maxHeight" :min="50" :max="250" rounded :disabled="!isScrollable">-->
<!--                      <template v-for="val in [100, 150, 200]">-->
<!--                        <b-slider-tick :value="val" :key="val">{{ val }}</b-slider-tick>-->
<!--                      </template>-->
<!--                    </b-slider>-->
<!--                  </div>-->
<!--                </b-field>-->
<!--              </div>-->

              <b-dropdown
                  :scrollable="isScrollable"
                  :max-height="maxHeight"
                  v-model="currentMenu"
                  aria-role="list"
              >
                <template #trigger>
                  <b-button
                      :label="currentMenu.text"
                      type="is-primary"
                      :icon-left="currentMenu.icon"
                      icon-right="menu-down" />
                </template>
              <b-dropdown-item
                  v-for="(menu, index) in menus"
                  :key="index"
                  :value="menu" aria-role="listitem">
                <div class="media">
                  <b-icon class="media-left" :icon="menu.icon"></b-icon>
                  <div class="media-content">
                    <h3>{{menu.text}}</h3>
                  </div>
                </div>
              </b-dropdown-item>
            </b-dropdown>

              <b-field>
                <b-switch
                    v-model="lightMode"
                    passive-type='is-dark'
                    type='is-warning'>
                  {{ lightMode ? "Light Mode" : "Dark Mode" }}
                </b-switch>
              </b-field>


            <b-menu-item icon="settings">

              <template #label="props">
                Helpers
                <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-down' : 'menu-up'"></b-icon>
              </template>
              <b-menu-item icon="account" label="Change colours"></b-menu-item>
              <b-field>
                <b-switch :value="true"
                          type="is-success">
                  Traffic light detection
                </b-switch>
              </b-field>
              <b-field>
                <b-switch :value="true"
                          type="is-success">
                  Alarm Warnings
                </b-switch>
              </b-field>

<!--              <b-menu-item icon="cellphone-link">-->

<!--                <b-field>-->
<!--                  <b-switch :value="true"-->
<!--                            type="is-warning">-->
<!--                    Alarm Warnings-->
<!--                  </b-switch>-->
<!--                </b-field>-->

<!--                <template #label>-->
<!--                  'Traffic light detection'-->
<!--                  <i class="far fa-sun"></i>-->
<!--                  <b-dropdown aria-role="list" class="is-pulled-right" position="is-bottom-left">-->
<!--                    <template #trigger>-->
<!--                      <b-icon icon="dots-vertical"></b-icon>-->
<!--                      <i class="far fa-sun"></i>-->
<!--                    </template>-->
<!--                    <b-dropdown-item aria-role="listitem">Action</b-dropdown-item>-->
<!--                    <b-dropdown-item aria-role="listitem">Another action</b-dropdown-item>-->
<!--                    <b-dropdown-item aria-role="listitem">Something else</b-dropdown-item>-->
<!--                  </b-dropdown>-->
<!--                </template>-->
<!--              </b-menu-item>-->
<!--              <b-menu-item icon="cash-multiple" label="Payments" disabled></b-menu-item>-->
            </b-menu-item>
            <b-menu-item icon="account" label="Preferences">
              <b-menu-item label="Personal data"></b-menu-item>
              <b-menu-item label="PDAS"  disabled></b-menu-item>
            </b-menu-item>
          </b-menu-list>

<!--          <b-menu-list label="Actions">-->
<!--            <b-menu-item label="Logout"></b-menu-item>-->
<!--          </b-menu-list>-->
        </b-menu>
      </div>
    </b-sidebar>
<!--    <div class="block">-->
<!--      <b-field grouped group-multiline>-->
<!--        <div class="control">-->
<!--          <b-switch v-model="overlay">Overlay</b-switch>-->
<!--        </div>-->
<!--        <div class="control">-->
<!--          <b-switch v-model="fullheight">Fullheight</b-switch>-->
<!--        </div>-->
<!--        <div class="control">-->
<!--          <b-switch v-model="fullwidth">Fullwidth</b-switch>-->
<!--        </div>-->
<!--        <div class="control">-->
<!--          <b-switch v-model="right">Right</b-switch>-->
<!--        </div>-->
<!--      </b-field>-->
<!--    </div>-->
    <b-button @click="open = true">Settings</b-button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isScrollable: true,
      maxHeight: 200,
      currentMenu: { icon: 'account-group', text: 'Address history' },
      menus: [
        { icon: 'account-group', text: 'People' },
        { icon: 'shopping-search', text: 'Shops' },
        { icon: 'credit-card-multiple', text: 'Restaurants' },
        { icon: 'dolly', text: 'Parks' },
        { icon: 'clock-check', text: 'Jobs' },
        { icon: 'cart-arrow-right', text: 'Centres' },
        { icon: 'settings', text: 'Other' }
      ],
      lightMode: false,
      open: false,
      overlay: false,
      fullheight: true,
      fullwidth: false,
      right: false
    };
  },
  methods: {
    danger() {
      const notif = this.$buefy.notification.open({
        duration: 5000,
        message: `Heavy precipitations in <b>10 minutes</b> for the following <b>hour</b>`,
        position: 'is-bottom-right',
        type: 'is-danger',
        hasIcon: true
      })
      notif.$on('close', () => {
        this.$buefy.notification.open('Weather notifications allowed!')
      })
    },


  }
};

</script>

<style>
.p-1 {
  padding: 1em;
}
</style>