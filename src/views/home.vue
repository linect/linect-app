<template>
  <div class="home">
    <header class="header">
      <div class="header-icon">
        <img src="../assets/posts-img/header-logo.svg" alt="linectヘッダー画像">
      </div>
    </header>
    <Post01/>
    <Post02/>
    <GlobalNav/>
  </div>
</template>

<script>
import GlobalNav from '@/components/GlobalNav.vue'
import Post01 from '@/components/UserPosts/Post01.vue'
import Post02 from '@/components/UserPosts/Post02.vue'
export default {
  components: {
    GlobalNav,
    Post01,
    Post02,
  }
}
</script>

<style lang="scss" scoped>
.header{
  width: 100%;
  height: 60px;
  margin-top: 40px;
  padding-left: 8px;
}
</style>
