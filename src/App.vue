<script setup>
import { RouterView } from "vue-router";
import HeaderView from "./components/Header.vue";
import FooterView from "./components/Footer.vue";

</script>

<template>
  <div class="App">
    <v-app>
      <header-view></header-view>
      <router-view class="main"></router-view>
      <footer-view></footer-view>
    </v-app>
  </div>
</template>

<style>
.main {
  margin-top: 130px;
}
</style>


