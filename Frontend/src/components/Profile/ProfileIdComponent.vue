<template>
<BlockComponent>
    <p class="fs-1 fw-300">id: <span><slot name="id"></slot></span></p>
</BlockComponent>
</template>

<script>
import BlockComponent from "../Block/BlockComponent.vue";
export default {
  name: "ProfileIdComponent",
  components: {BlockComponent}
}
</script>

<style scoped>

</style>