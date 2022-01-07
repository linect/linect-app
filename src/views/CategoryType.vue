<template>
  <div class="category">
    <button class="category__type">
      <img src="../assets/sakura.svg" alt="サクラ" />
      サクラ
    </button>
    <button class="category__type">
      <img src="../assets/sumire.svg" alt="スミレ" />
      スミレ
    </button>
    <button class="category__type e">
      <img src="../assets/himawari.svg" alt="ヒマワリ" />
      ヒマワリ
    </button>
    <button class="category__type">
      <img src="../assets/azisai.svg" alt="アジサイ" />
      アジサイ
    </button>
    <button class="category__type">
      <img src="../assets/haibisukasu.svg" alt="ハイビスカス" />
      ハイビスカス
    </button>
    <button class="category__type">
      <img src="../assets/rabennda.svg" alt="ラベンダー" />
      ラベンダー
    </button>
    <button class="category__type">
      <img src="../assets/panzi.svg" alt="パンジー" />
      パンジー
    </button>
    <button class="category__type">
      <img src="../assets/asagao.svg" alt="アサガオ" />
      アサガオ
    </button>
    <button class="category__type">
      <img src="../assets/tyuripu.svg" alt="チューリップ" />
      チューリップ
    </button>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.category {
  padding: 16px;
  &__type {
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
