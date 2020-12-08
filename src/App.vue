<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabBar/MainTabBar"
export default {
  name: "app",
  components: {
    MianTabBar,
  }
}
</script>

<style>
@import "assets/css/base.css";
</style>
