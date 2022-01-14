<template>
  <div class="category">
    <button class="category__genre">
      <img src="../assets/fashion.svg" alt="ファッション" />
      ファッション
    </button>
    <button class="category__genre">
      <img src="../assets/beauty.svg" alt="スミレm" />
      ビューティー
    </button>
    <button class="category__genre">
      <img src="../assets/gourmet.svg" alt="ヒマワリ" />
      グルメ
    </button>
    <button class="category__genre">
      <img src="../assets/diet.svg" alt="アジサイ" />
      ダイエット
    </button>
    <button class="category__genre">
      <img src="../assets/travel.svg" alt="ハイビスカス" />
      旅行
    </button>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.category {
  padding: 16px;
  &__genre {
    display: flex;
    justify-content: start;
    align-items: center;
    height: 56px;
    width: 100%;
    border-bottom: solid 1px #bab7b7;
    font-size: 14px;
    line-height: 56px;
    img {
      margin-right: 16px;
      height: 40px;
      width: 40px;
    }
  }
}
</style>
