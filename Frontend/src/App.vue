<script setup>
import { RouterLink, RouterView } from 'vue-router'

import './assets/styles/reset.css'
import './assets/styles/global_mixins.css'
import './assets/styles/content.css'

import HeaderComponent from "./components/HeaderComponent.vue";
import LeftMenuComponent from "./components/SideMenuComponent.vue";
</script>

<template>
  <HeaderComponent />
  <section class="content">
    <LeftMenuComponent />
    <RouterView />
  </section>
</template>

<style scoped>
</style>
