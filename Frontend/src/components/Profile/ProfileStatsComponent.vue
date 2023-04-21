<template>
<BlockComponent>
  <div class="block">
    <h2 class="fw-600 fs-2">Statistics</h2>
    <br>
    <div class="d-flex profile-stats justify-evenly">
      <div>
        <h2 class="fs-3 fw-600 text-center"><slot name="postsCount"></slot></h2>
        <p class="fs-0 fw-300 text-center">Posts</p>
      </div>
      <div>
        <h2 class="fs-3 fw-600 text-center"><slot name="topicsCount"></slot></h2>
        <p class="fs-0 fw-300 text-center">Topics</p>
      </div>
    </div>
    <br>
  </div>
</BlockComponent>
</template>

<script>
import BlockComponent from "../Block/BlockComponent.vue";
export default {
  name: "ProfileStatsComponent",
  components: {BlockComponent}
}
</script>

<style scoped>

</style>