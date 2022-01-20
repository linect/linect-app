<template>
<div class="genre">
  <GenreHeader/>
  <div class="category">
    <router-link to="CategoryFashion" class="category__genre">
      <img src="../assets/fashion.svg" alt="ファッション" />
      ファッション
    </router-link>
    <router-link to="CategoryFashion" class="category__genre">
      <img src="../assets/beauty.svg" alt="スミレm" />
      ビューティー
    </router-link>
    <router-link to="CategoryFashion" class="category__genre">
      <img src="../assets/gourmet.svg" alt="ヒマワリ" />
      グルメ
    </router-link>
    <router-link to="CategoryFashion" class="category__genre">
      <img src="../assets/diet.svg" alt="アジサイ" />
      ダイエット
    </router-link>
    <router-link to="CategoryFashion" class="category__genre">
      <img src="../assets/travel.svg" alt="ハイビスカス" />
      旅行
    </router-link>
    <GlobalNav/>
  </div>
</div>
</template>

<script>
import GlobalNav from '@/components/GlobalNav.vue'
import GenreHeader from '@/components/GenreHeader.vue'
export default {
    components: {
    GlobalNav,
    GenreHeader,
  },
}
</script>

<style lang="scss" scoped>
.genre{
  margin-bottom: 70px;
}
.category {
  padding: 16px;
  &__genre {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 56px;
    width: 100%;
    border-bottom: solid 1px #bab7b7;
    font-size: 14px;
    line-height: 56px;
    color: #5A473E;
    text-decoration: none;
    img {
      margin-right: 16px;
      height: 40px;
      width: 40px;
    }
  }
}
</style>
