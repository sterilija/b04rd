<template>
<BlockComponent>
  <div v-if="registerMode" class="w-100 d-flex">
    <p class="fs-1 fw-300 d-block">Already have an account?</p>
    <a href="/auth/login" class="fs-1 fw-400 ml-0 d-block txt-clr-main">Log in</a>
  </div>
  <div v-if="!registerMode" class="d-flex">
    <p class="fs-1 fw-300">Don't have an account?</p>
    <a href="/auth/register" class="fs-1 fw-400 ml-0 txt-clr-main">Register</a>
  </div>
</BlockComponent>
</template>

<script>

import BlockComponent from "../Block/BlockComponent.vue";
export default {
  name: "AuthSuggestComponent",
  components: {BlockComponent},
  props: ['registerMode']
}
</script>

<style scoped>

</style>