<template>
  <AuthSuggestComponent :registerMode="registerMode"/>
  <AuthFormComponent :registerMode="registerMode"/>
  <AuthTermsComponent/>
  <AuthSubmitComponent :registerMode="registerMode"/>
</template>

<script>
import {useSearchDisplayStore} from "../store/searchDisplay";

import AuthSuggestComponent from "../components/Auth/AuthSuggestComponent.vue";
import AuthFormComponent from "../components/Auth/AuthFormComponent.vue";
import AuthTermsComponent from "../components/Auth/AuthTermsComponent.vue";
import AuthSubmitComponent from "../components/Auth/AuthSubmitComponent.vue";
export default {
  name: "RegisterView",
  components: {
    AuthSubmitComponent,
    AuthSuggestComponent,
    AuthFormComponent,
    AuthTermsComponent
  },
  props: ['registerMode'],
  data(){
    return{
      showSearch: useSearchDisplayStore(),
    }
  },
  created() {
    this.showSearch.doShow(false);
  }
}
</script>

<style scoped>

</style>