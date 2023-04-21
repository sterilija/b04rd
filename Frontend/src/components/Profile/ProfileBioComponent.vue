<template>
<BlockComponent>
  <div class="block profile-bio">
    <p class="fs-0 fw-300">Bio</p>
    <div class="d-flex">
      <textarea class="fs-1" name="" id="" cols="60" rows="1" :placeholder="placeholder"></textarea>
    </div>
  </div>
</BlockComponent>
</template>

<script>
import BlockComponent from "../Block/BlockComponent.vue";
export default {
  name: "ProfileBioComponent",
  data() {
    return{
      placeholder: 'Type your status'
    }
  },
  components: {BlockComponent}
}
</script>

<style scoped>
@import "../../assets/styles/profile.css";
</style>