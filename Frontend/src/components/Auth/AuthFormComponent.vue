<template>
<BlockComponent>
  <div>
    <h1 v-if="registerMode" class="fs-2 fw-600 mb-0">Registration</h1>
    <h1 v-if="!registerMode" class="fs-2 fw-600 mb-0">Log in</h1>
    <form action="">
      <div>
        <input type="email" name="" id="" class="w-100 mb-0" placeholder="E-mail">
        <input v-if="registerMode" type="text" name="" id="" class="w-100 mb-0" placeholder="Nickname">
        <input type="password" name="" id="" class="w-100 mb-0" placeholder="Password">
        <input v-if="registerMode" type="password" name="" id="" class="w-100" placeholder="Repeat password">
      </div>
    </form>
  </div>
</BlockComponent>
</template>

<script>
import BlockComponent from "../Block/BlockComponent.vue";
export default {
  name: "AuthFormComponent",
  components: {BlockComponent},
  props: ['registerMode'],
}
</script>

<style scoped>
@import "../../assets/styles/form.css";
</style>