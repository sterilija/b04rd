<script setup>
import {useSearchDisplayStore} from "../store/searchDisplay";
</script>
<template>
  <header class="main-header">
    <div class="d-flex">
      <div class="sidebar-toggler">
        <img class="d-block mx-auto" src="../assets/icons/sidebar-toggler.svg" alt="">
      </div>
      <div class="header-page-title">
        <h1 class="fs-3 fw-600 w-100">--{{$route.name}}--</h1>
      </div>
    </div>
    <div v-if="showSearch.getState" id="searchBar" :class="['header-search w-100 d-flex', {'focused':barFocused}]" @focusin="barFocused=true" @focusout="barFocused=false">
      <input class="fs-3 h-100" type="text" name="" id="">
      <button type="submit" class="mx-auto">
        <img class="w-100" src="../assets/icons/search-left-1504-svgrepo-com.svg" alt="">
      </button>
    </div>
  </header>
</template>
<script>
import {useSearchDisplayStore} from "../store/searchDisplay";

export default {

  name: "HeaderComponent",
  data(){
    return{
      barFocused: false,
      showSearch: useSearchDisplayStore(),
    }
  },
}
</script>

<style scoped>
@import "../assets/styles/header.css";
</style>