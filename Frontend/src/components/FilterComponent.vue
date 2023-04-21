<template>
  <BlockExpandComponent :title="this.inpTitle" :icon="this.inpIcon" use-icon="true">
    <template v-slot:headerTitle>Filter</template>
    <template v-slot:body>
      <form action="">
        <div>
          <p class="fw-300">Creation date</p>
          <div class="d-flex">
            <input class="w-50" type="date" name="" id="">
            <input class="w-50" type="date" name="" id="">
          </div>
        </div>
        <div>
          <p class="fw-300">Post DIR</p>
          <input class="w-100" type="text" name="" id="">
        </div>
        <div>
          <p class="fw-300">Creator</p>
          <input class="w-100" type="text" name="" id="">
        </div>
        <div class="display-pc">
          <p>Searchable content</p>
          <input class="w-100" type="text" name="" id="">
        </div>
      </form>
    </template>
  </BlockExpandComponent>
</template>

<script>

import BlockExpandComponent from "./Block/BlockExpandComponent.vue";
export default {
  name: "FilterComponent",
  components: {BlockExpandComponent},
  props: ['inpTitle', 'inpIcon'],
}
</script>

<style scoped>
@import '../assets/styles/form.css' ;
</style>