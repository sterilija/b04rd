<template>
  <div :class="[{'block':!this.plain, 'block-plain':this.plain}, this.extraClasses]" :style="background">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: "BlockComponent",
  props: ['extraClasses', "plain", 'bcg_img', 'gradient'],
  mounted() {
    /*
    * @var
    * background: string
    *
    * "horizontal"
    * "vertical"
    * "diagonal"
    * "#COLOR"(HEX) or rgba(#, #, #, #) (if bck_img is not set)
    * */
    if(this.bcg_img!==undefined){
      if(this.gradient===undefined){
        this.background = 'background: url('+this.bcg_img+')';
      }
      else if(this.gradient==='horizontal'){
        this.background = 'background: linear-gradient(90deg, #FFFFFF 50%, rgba(255, 255, 255, 0) 100%), url('+this.bcg_img+')';
      }
      else if(this.gradient==='vertical'){
        this.background =  'background: linear-gradient(180deg, #FFFFFF 50%, rgba(255, 255, 255, 0.8) 100%), url('+this.bcg_img+')'
      }
    }
    if(this.bcg_img===undefined && this.gradient!==undefined){
      this.background = 'background: linear-gradient(113.74deg, rgba(255, 255, 255, 0) 34.73%, '+this.gradient+' 98.64%), #FFFFFF;'
    }
  },
  data(){
    return{
      background: '',
    }
  }
}

</script>

<style scoped>
@import "../../assets/styles/block.css";
</style>