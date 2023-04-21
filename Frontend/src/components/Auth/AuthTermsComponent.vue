<template>
<BlockExpandComponent>
  <template v-slot:headerTitle>Terms & conditions</template>
  <template v-slot:body>
    <p class="fw-300">Вы подтверждаете что я ваш рот ебал<br>И вашей жены<br>И вашей дочери<br>и вашей собаки</p>
  </template>
  <template v-slot:footer>
    <input type="checkbox" name="" id="">
    <p class="fs-1 fw-400 ml-0">I agree</p>
  </template>
</BlockExpandComponent>
</template>

<script>
import BlockExpandComponent from "../Block/BlockExpandComponent.vue";
export default {
  name: "AuthTermsComponent",
  components: {BlockExpandComponent}
}
</script>

<style scoped>

</style>