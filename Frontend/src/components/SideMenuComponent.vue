<template>
  <div class="d-flex direction-column display-pc">
    <div class="block">
      <div class="side-menu">
        <ul>
          <RouterLink to="/profile">
            <li class="side-menu-profile d-flex block align-center">
              <img src="../assets/_example_images/avatars/1.jpg" alt="">
              <p class="ml-auto fs-1 fw-400">Kirill Kalugin</p>
            </li>
          </RouterLink>
          <li><RouterLink to="/">Browse</RouterLink></li>
          <li>Log out</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LeftMenuComponent"
}
</script>

<style scoped>
@import "../assets/styles/side-menu.css";
</style>