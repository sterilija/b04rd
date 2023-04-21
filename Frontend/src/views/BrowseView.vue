<template>
<FilterComponent inpTitle="Filter" :inpIcon="this.icon"/>
  <BlockComponent :plain="true">
    <h1 class="fs-3 fw-600">Categories</h1>
  </BlockComponent>

  <BlockComponent :bcg_img="img01" gradient="horizontal">
    <h3 class="fs-3 fw-400">/Lorem</h3>
    <p class="fw-300 fs-0">wzryw_prostaty</p>
  </BlockComponent>
  <BlockComponent :bcg_img="img02" gradient="horizontal">
    <h3 class="fs-3 fw-400">/Ipsum</h3>
    <p class="fw-300 fs-0">wzryw_prostaty</p>
  </BlockComponent>
</template>

<script>

import FilterIcon from '../assets/icons/filter-svgrepo-com.svg'
import Image01 from '../assets/_example_images/bezotdelki220190704133245.jpg'
import Image02 from '../assets/_example_images/kitten.jpg'

import FilterComponent from "../components/FilterComponent.vue";
import BlockComponent from "../components/Block/BlockComponent.vue";
export default {
  name: "Browse",
  components: {FilterComponent, BlockComponent},
  data(){
    return{
      icon: FilterIcon,

      img01: Image01,
      img02: Image02
    }
  }
}
</script>

<style scoped>

</style>