<template>
  <BlockComponent :extra-classes="['expand', extraClasses]">
      <div class="expand-header d-flex align-center" @click="toggleBody">
        <img v-if="useIcon" :src="this.icon" alt="" class="expand-icon">
        <h2 class="fs-2 fw-400"><slot name="headerTitle"></slot></h2>
        <span class="fs-2 ml-auto display-mobile" :class="{rot180: this.showBody}">&#9660</span>
      </div>
      <div class="expand-body mt-0" v-show="showBody">
        <slot name="body"></slot>
      </div>
      <div class="expand-footer d-flex align-center">
        <slot name="footer"></slot>
      </div>
  </BlockComponent>
</template>

<script>
import BlockComponent from "./BlockComponent.vue";
export default {
  name: "BlockExpandComponent",
  components: {BlockComponent},
  props: ['icon', "useIcon", "extraClasses"],
  methods: {
    toggleBody(){
      this.showBody = !this.showBody;
    }
  },
  data(){
    return{
      showBody: false,
    }
  }
}
</script>

<style scoped>
@import "../../assets/styles/block.css";
</style>