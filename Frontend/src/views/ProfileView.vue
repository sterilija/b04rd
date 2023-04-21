<template>

  <ProfileAvatarComponent :avatar="avatarPic">
    <template v-slot:nickname>Kalugin2281337</template>
  </ProfileAvatarComponent>

  <ProfileBioComponent/>

  <ProfileIdComponent>
    <template v-slot:id>2281337</template>
  </ProfileIdComponent>

  <ProfileStatsComponent>
    <template v-slot:postsCount>
      1337
    </template>
    <template v-slot:topicsCount>
      228
    </template>
  </ProfileStatsComponent>

  <ProfileDangerZone>

  </ProfileDangerZone>
</template>

<script>
import Image from '../assets/_example_images/avatars/1.jpg'

import ProfileAvatarComponent from "../components/Profile/ProfileAvatarComponent.vue";

import {useSearchDisplayStore} from "../store/searchDisplay";
import ProfileBioComponent from "../components/Profile/ProfileBioComponent.vue";
import ProfileIdComponent from "../components/Profile/ProfileIdComponent.vue";
import ProfileStatsComponent from "../components/Profile/ProfileStatsComponent.vue";
import ProfileDangerZone from "../components/Profile/ProfileDangerZone.vue";

export default {
  name: "ProfileView",
  components: {ProfileDangerZone, ProfileStatsComponent, ProfileIdComponent, ProfileBioComponent, ProfileAvatarComponent},
  data(){
    return{
      avatarPic: Image,
      showSearch: useSearchDisplayStore()
    }
  },
  created() {
    this.showSearch.doShow(false);
  }
}
</script>

<style scoped>

</style>