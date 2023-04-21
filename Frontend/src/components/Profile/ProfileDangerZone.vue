<template>
  <BlockExpandComponent :useIcon="false" extra-classes="txt-clr-red">
    <template v-slot:headerTitle>Danger zone</template>
    <template v-slot:body>
      <p class="fw-300 fs-1">Wipe all account data & actions</p>
      <p class="fw-300 fs-1">Remove profile</p>
    </template>
  </BlockExpandComponent>
</template>

<script>
import BlockExpandComponent from "../Block/BlockExpandComponent.vue";
export default {
  name: "ProfileDangerZone",
  components: {BlockExpandComponent}
}
</script>

<style scoped>
@import "../../assets/styles/profile.css";
</style>