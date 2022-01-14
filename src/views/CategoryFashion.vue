<template>
  <div>
    <ul class="tab">
      <li class="tab__List">サクラ</li>
      <li class="tab__List">スミレ</li>
      <li class="tab__List">ヒマワリ</li>
      <li class="tab__List">アジサイ</li>
      <li class="tab__List">ハイビスカス</li>
      <li class="tab__List">ラベンダー</li>
      <li class="tab__List">パンジー</li>
      <li class="tab__List">アサガオ</li>
      <li class="tab__List">チューリップ</li>
    </ul>
    <ul class="items">
      <li>
        <div class="item"><img src="../assets/Fashion_img.png" alt="" /></div>
      </li>
      <li>
        <div class="item"><img src="../assets/Fashion_img.png" alt="" /></div>
      </li>
      <li>
        <div class="item"><img src="../assets/Fashion_img.png" alt="" /></div>
      </li>
      <li>
        <div class="item"><img src="../assets/Fashion_img.png" alt="" /></div>
      </li>
      <li>
        <div class="item"><img src="../assets/Fashion_img.png" alt="" /></div>
      </li>
      <li>
        <div class="item"><img src="../assets/Fashion_img.png" alt="" /></div>
      </li>
      <li>
        <div class="item"><img src="../assets/Fashion_img.png" alt="" /></div>
      </li>
      <li>
        <div class="item"><img src="../assets/Fashion_img.png" alt="" /></div>
      </li>
      <li>
        <div class="item"><img src="../assets/Fashion_img.png" alt="" /></div>
      </li>
      <li>
        <div class="item"><img src="../assets/Fashion_img.png" alt="" /></div>
      </li>
    </ul>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.tab {
  display: flex;
  margin: 0;
  padding: 0;
  overflow-x: scroll;
  &__List {
    display: inline;
    list-style: none;
    text-align: center;
    line-height: 30px;
    height: 30px;
    min-width: 100px;
    border-radius: 10px;
    background: tomato;
    font-size: 12px;
    margin-right: 8px;
  }
}
.items {
  display: flex;
  flex-wrap: wrap;
}
.item {
  height: 233px;
  width: 50%;
}
</style>
