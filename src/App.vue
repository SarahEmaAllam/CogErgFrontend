<template>
  <div id="app">
    <font-awesome-icon icon="user-secret" />
    <Panel></Panel>
  </div>
</template>

<script>
// import Map from "./components/Map";
import Panel from "./components/Panel";


export default {
  name: 'App',
  components: {
    Panel,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
