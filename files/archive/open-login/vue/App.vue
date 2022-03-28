<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Home title="Torus Embed + Vue.js" />
  </div>
</template>

<script>
/*
 * This is an example source file that you can reference in Integration Builder
 */

/**
 * You can set a step to point to a source file by using `pointer` property when creating steps.
 */

import Home from "./components/Home.vue";
export default {
  name: "App",
  components: {
    Home,
  },
};
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
