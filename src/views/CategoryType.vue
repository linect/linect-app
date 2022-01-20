<template>
<div class="type">
  <CategoryHeader/>
  <div class="category">
    <router-link to="CategoryGenre" class="category__type">
      <img src="../assets/sakura.svg" alt="サクラ" />
      サクラ
    </router-link>
    <router-link to="CategoryGenre" class="category__type">
      <img src="../assets/sumire.svg" alt="スミレ" />
      スミレ
    </router-link>
    <router-link to="CategoryGenre" class="category__type e">
      <img src="../assets/himawari.svg" alt="ヒマワリ" />
      ヒマワリ
    </router-link>
    <router-link to="CategoryGenre" class="category__type">
      <img src="../assets/azisai.svg" alt="アジサイ" />
      アジサイ
    </router-link>
    <router-link to="CategoryGenre" class="category__type">
      <img src="../assets/haibisukasu.svg" alt="ハイビスカス" />
      ハイビスカス
    </router-link>
    <router-link to="CategoryGenre" class="category__type">
      <img src="../assets/rabennda.svg" alt="ラベンダー" />
      ラベンダー
    </router-link>
    <router-link to="CategoryGenre" class="category__type">
      <img src="../assets/panzi.svg" alt="パンジー" />
      パンジー
    </router-link>
    <router-link to="CategoryGenre" class="category__type">
      <img src="../assets/asagao.svg" alt="アサガオ" />
      アサガオ
    </router-link>
    <router-link to="CategoryGenre" class="category__type">
      <img src="../assets/tyuripu.svg" alt="チューリップ" />
      チューリップ
    </router-link>
    <GlobalNav/>
  </div>
</div>
</template>

<script>
import GlobalNav from '@/components/GlobalNav.vue'
import CategoryHeader from '@/components/CategoryHeader.vue'
export default {
    components: {
    GlobalNav,
    CategoryHeader,
  },
}
</script>

<style lang="scss" scoped>
.type{
  margin-bottom: 70px;
}
.category {
  padding: 16px;
  &__type {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 56px;
    width: 100%;
    border-bottom: solid 1px #bab7b7;
    color: #5A473E;
    font-size: 14px;
    text-decoration: none;
    line-height: 56px;
    padding: 0 16px;
    img {
      margin-right: 16px;
      height: 40px;
      width: 40px;
    }
  }
}
</style>