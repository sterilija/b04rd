<template>
<BlockComponent>
  <p v-if="registerMode" class="fs-2 fw-400">Submit!</p>
  <p v-if="!registerMode" class="fs-2 fw-400">Log in</p>
</BlockComponent>
</template>

<script>
import BlockComponent from "../Block/BlockComponent.vue";
export default {
  name: "AuthSubmitComponent",
  components: {BlockComponent},
  props: ['registerMode'],
}
</script>

<style scoped>

</style>