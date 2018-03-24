<template>
  <div id="app">
    <function-bar></function-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import functionBar from "./components/public/functionBar";

export default {
  name: "electron-moe-loader",
  components: { functionBar }
};
</script>

<style>
/* CSS */
#app {
  background: radial-gradient(
    ellipse at top left,
    rgba(255, 255, 255, 1) 40%,
    rgba(229, 229, 229, 0.9) 100%
  );
}
</style>
