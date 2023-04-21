<template>
  <BlockComponent extra-classes="profile-pic" :bcg_img="avatarImg">
      <div class="profile-pic-edit">
        <img src="../../assets/icons/pencil-svgrepo-com.svg" class="d-block mx-auto" alt="">
      </div>
      <h1 class="fw-700 d-block">
        <slot name="nickname"></slot>
      </h1>
  </BlockComponent>
</template>

<script>
import BlockComponent from "../Block/BlockComponent.vue";
import Img from '../../assets/_example_images/avatars/1.jpg'
export default {
  name: "ProfileAvatarComponent",
  components: {BlockComponent},
  props: ['avatar'],
  data(){
    return{
      avatarImg: Img,
    }
  }
}
</script>

<style scoped>
@import "../../assets/styles/profile.css";
</style>