<template>
  <div class="fashion">
    <FashionHeader/>
    <ul class="tab">
      <li class="tab__List">
        <button @click="changeTab(1)" class="a">サクラ</button>
      </li>
      <li class="tab__List">
        <button @click="changeTab(2)" class="a">スミレ</button>
      </li>
      <li class="tab__List">
        <button @click="changeTab(3)" class="a">ヒマワリ</button>
      </li>
      <li class="tab__List">
        <button @click="changeTab(4)" class="a">アジサイ</button>
      </li>
      <li class="tab__List">
        <button @click="changeTab(5)" class="a">ハイビスカス</button>
      </li>
      <li class="tab__List">
        <button @click="changeTab(6)" class="a">ラベンダー</button>
      </li>
      <li class="tab__List">
        <button @click="changeTab(7)" class="a">パンジー</button>
      </li>
      <li class="tab__List">
        <button @click="changeTab(8)" class="a">アサガオ</button>
      </li>
      <li class="tab__List">
        <button @click="changeTab(9)" class="a">チューリップ</button>
      </li>
    </ul>
    <!-- サクラ page -->
    <ul v-if="onclick === 1" class="items">
      <li>
        <div class="item">
          <img src="../assets/Fashion_img-1.png" alt="" />
          <img class="icon" src="../assets/Fashion_img-1.png" alt="" />
          onakasuita
        </div>
      </li>
      <li>
        <div class="item">
          <img src="../assets/Fashion_img-2.png" alt="" />
          <img class="icon" src="../assets/Fashion_img-2.png" alt="" />
          ryokousitai
        </div>
      </li>
      <li>
        <div class="item">
          <img src="../assets/Fashion_img-3.png" alt="" />
          <img class="icon" src="../assets/Fashion_img-3.png" alt="" />
          asobitai
        </div>
      </li>
      <li>
        <div class="item">
          <img src="../assets/Fashion_img-4.png" alt="" />
          <img class="icon" src="../assets/Fashion_img-4.png" alt="" />
          onikutabetai
        </div>
      </li>
      <li>
        <div class="item">
          <img src="../assets/Fashion_img-5.png" alt="" />
          <img class="icon" src="../assets/Fashion_img-5.png" alt="" />
          onakasuita
        </div>
      </li>
      <li>
        <div class="item">
          <img src="../assets/Fashion_img-6.png" alt="" />
          <img class="icon" src="../assets/Fashion_img-6.png" alt="" />
          okazulove
        </div>
      </li>
      <li>
        <div class="item">
          <img src="../assets/Fashion_img-1.png" alt="" />
          <img class="icon" src="../assets/Fashion_img-1.png" alt="" />
          gohannlove
        </div>
      </li>
      <li>
        <div class="item">
          <img src="../assets/Fashion_img-2.png" alt="" />
          <img class="icon" src="../assets/Fashion_img-2.png" alt="" />
          kaisenlove
        </div>
      </li>
    </ul>
    <!-- スミレ page -->
    <ul v-if="onclick === 2" class="items">
      <li>
        <div class="item">
          <img src="../assets/Fashion_img-3.png" alt="" />
          <img class="icon" src="../assets/Fashion_img-1.png" alt="" />
          onakasuita
        </div>
      </li>
      <li>
        <div class="item">
          <img src="../assets/Fashion_img-2.png" alt="" />
          <img class="icon" src="../assets/Fashion_img-2.png" alt="" />
          gohanntabetai
        </div>
      </li>
      <li>
        <div class="item">
          <img src="../assets/Fashion_img-4.png" alt="" />
          <img class="icon" src="../assets/Fashion_img-3.png" alt="" />
          susilove
        </div>
      </li>
      <li>
        <div class="item">
          <img src="../assets/Fashion_img-5.png" alt="" />
          <img class="icon" src="../assets/Fashion_img-4.png" alt="" />
          onakasuita
        </div>
      </li>
      <li>
        <div class="item">
          <img src="../assets/Fashion_img-6.png" alt="" />
          <img class="icon" src="../assets/Fashion_img-5.png" alt="" />
          nikulove
        </div>
      </li>
      <li>
        <div class="item">
          <img src="../assets/Fashion_img-1.png" alt="" />
          <img class="icon" src="../assets/Fashion_img-6.png" alt="" />
          nemutai
        </div>
      </li>
      <li>
        <div class="item">
          <img src="../assets/Fashion_img-3.png" alt="" />
          <img class="icon" src="../assets/Fashion_img-1.png" alt="" />
          hayaokinigate
        </div>
      </li>
      <li>
        <div class="item">
          <img src="../assets/Fashion_img-2.png" alt="" />
          <img class="icon" src="../assets/Fashion_img-2.png" alt="" />
          asobitai
        </div>
      </li>
    </ul>
    <!-- ヒマワリ page -->
    <ul v-if="onclick === 3" class="items">
      <li>
        <div class="item">
          <img src="../assets/Fashion_img-2.png" alt="" />
          <img class="icon" src="../assets/Fashion_img-1.png" alt="" />
          onakasuita
        </div>
      </li>
      <li>
        <div class="item">
          <img src="../assets/Fashion_img-6.png" alt="" />
          <img class="icon" src="../assets/Fashion_img-2.png" alt="" />
          onakasuita
        </div>
      </li>
      <li>
        <div class="item">
          <img src="../assets/Fashion_img-4.png" alt="" />
          <img class="icon" src="../assets/Fashion_img-3.png" alt="" />
          onakasuita
        </div>
      </li>
      <li>
        <div class="item">
          <img src="../assets/Fashion_img-1.png" alt="" />
          <img class="icon" src="../assets/Fashion_img-4.png" alt="" />
          onakasuita
        </div>
      </li>
      <li>
        <div class="item">
          <img src="../assets/Fashion_img-3.png" alt="" />
          <img class="icon" src="../assets/Fashion_img-5.png" alt="" />
          onakasuita
        </div>
      </li>
      <li>
        <div class="item">
          <img src="../assets/Fashion_img-5.png" alt="" />
          <img class="icon" src="../assets/Fashion_img-6.png" alt="" />
          onakasuita
        </div>
      </li>
      <li>
        <div class="item">
          <img src="../assets/Fashion_img-2.png" alt="" />
          <img class="icon" src="../assets/Fashion_img-1.png" alt="" />
          onakasuita
        </div>
      </li>
      <li>
        <div class="item">
          <img src="../assets/Fashion_img-6.png" alt="" />
          <img class="icon" src="../assets/Fashion_img-2.png" alt="" />
          onakasuita
        </div>
      </li>
    </ul>
    <!-- アジサイ page -->
    <ul v-if="onclick === 4" class="items">
      <li>
        <div class="item">
          <img src="../assets/Fashion_img-5.png" alt="" />
          <img class="icon" src="../assets/Fashion_img-1.png" alt="" />
          onakasuita
        </div>
      </li>
      <li>
        <div class="item">
          <img src="../assets/Fashion_img-6.png" alt="" />
          <img class="icon" src="../assets/Fashion_img-2.png" alt="" />
          onakasuita
        </div>
      </li>
      <li>
        <div class="item">
          <img src="../assets/Fashion_img-4.png" alt="" />
          <img class="icon" src="../assets/Fashion_img-3.png" alt="" />
          onakasuita
        </div>
      </li>
      <li>
        <div class="item">
          <img src="../assets/Fashion_img-1.png" alt="" />
          <img class="icon" src="../assets/Fashion_img-4.png" alt="" />
          onakasuita
        </div>
      </li>
      <li>
        <div class="item">
          <img src="../assets/Fashion_img-3.png" alt="" />
          <img class="icon" src="../assets/Fashion_img-5.png" alt="" />
          onakasuita
        </div>
      </li>
      <li>
        <div class="item">
          <img src="../assets/Fashion_img-2.png" alt="" />
          <img class="icon" src="../assets/Fashion_img-6.png" alt="" />
          onakasuita
        </div>
      </li>
      <li>
        <div class="item">
          <img src="../assets/Fashion_img-5.png" alt="" />
          <img class="icon" src="../assets/Fashion_img-1.png" alt="" />
          onakasuita
        </div>
      </li>
      <li>
        <div class="item">
          <img src="../assets/Fashion_img-6.png" alt="" />
          <img class="icon" src="../assets/Fashion_img-2.png" alt="" />
          onakasuita
        </div>
      </li>
    </ul>
    <!-- ハイビスカス page -->
    <ul v-if="onclick === 5" class="items">
      <li>
        <div class="item">
          <img src="../assets/Fashion_img-1.png" alt="" />
          <img class="icon" src="../assets/Fashion_img-1.png" alt="" />
          onakasuita
        </div>
      </li>
      <li>
        <div class="item">
          <img src="../assets/Fashion_img-2.png" alt="" />
          <img class="icon" src="../assets/Fashion_img-2.png" alt="" />
          onakasuita
        </div>
      </li>
      <li>
        <div class="item">
          <img src="../assets/Fashion_img-3.png" alt="" />
          <img class="icon" src="../assets/Fashion_img-3.png" alt="" />
          onakasuita
        </div>
      </li>
      <li>
        <div class="item">
          <img src="../assets/Fashion_img-4.png" alt="" />
          <img class="icon" src="../assets/Fashion_img-4.png" alt="" />
          onakasuita
        </div>
      </li>
      <li>
        <div class="item">
          <img src="../assets/Fashion_img-5.png" alt="" />
          <img class="icon" src="../assets/Fashion_img-5.png" alt="" />
          onakasuita
        </div>
      </li>
      <li>
        <div class="item">
          <img src="../assets/Fashion_img-6.png" alt="" />
          <img class="icon" src="../assets/Fashion_img-6.png" alt="" />
          onakasuita
        </div>
      </li>
      <li>
        <div class="item">
          <img src="../assets/Fashion_img-1.png" alt="" />
          <img class="icon" src="../assets/Fashion_img-1.png" alt="" />
          onakasuita
        </div>
      </li>
      <li>
        <div class="item">
          <img src="../assets/Fashion_img-2.png" alt="" />
          <img class="icon" src="../assets/Fashion_img-2.png" alt="" />
          onakasuita
        </div>
      </li>
    </ul>
    <!-- ラベンダー page -->
    <ul v-if="onclick === 6" class="items">
      <li>
        <div class="item">
          <img src="../assets/Fashion_img-1.png" alt="" />
          <img class="icon" src="../assets/Fashion_img-1.png" alt="" />
          onakasuita
        </div>
      </li>
      <li>
        <div class="item">
          <img src="../assets/Fashion_img-2.png" alt="" />
          <img class="icon" src="../assets/Fashion_img-2.png" alt="" />
          onakasuita
        </div>
      </li>
      <li>
        <div class="item">
          <img src="../assets/Fashion_img-3.png" alt="" />
          <img class="icon" src="../assets/Fashion_img-3.png" alt="" />
          onakasuita
        </div>
      </li>
      <li>
        <div class="item">
          <img src="../assets/Fashion_img-4.png" alt="" />
          <img class="icon" src="../assets/Fashion_img-4.png" alt="" />
          onakasuita
        </div>
      </li>
      <li>
        <div class="item">
          <img src="../assets/Fashion_img-5.png" alt="" />
          <img class="icon" src="../assets/Fashion_img-5.png" alt="" />
          onakasuita
        </div>
      </li>
      <li>
        <div class="item">
          <img src="../assets/Fashion_img-6.png" alt="" />
          <img class="icon" src="../assets/Fashion_img-6.png" alt="" />
          onakasuita
        </div>
      </li>
      <li>
        <div class="item">
          <img src="../assets/Fashion_img-1.png" alt="" />
          <img class="icon" src="../assets/Fashion_img-1.png" alt="" />
          onakasuita
        </div>
      </li>
      <li>
        <div class="item">
          <img src="../assets/Fashion_img-2.png" alt="" />
          <img class="icon" src="../assets/Fashion_img-2.png" alt="" />
          onakasuita
        </div>
      </li>
    </ul>
    <!-- パンジー page -->
    <ul v-if="onclick === 7" class="items">
      <li>
        <div class="item">
          <img src="../assets/Fashion_img-1.png" alt="" />
          <img class="icon" src="../assets/Fashion_img-1.png" alt="" />
          onakasuita
        </div>
      </li>
      <li>
        <div class="item">
          <img src="../assets/Fashion_img-2.png" alt="" />
          <img class="icon" src="../assets/Fashion_img-2.png" alt="" />
          onakasuita
        </div>
      </li>
      <li>
        <div class="item">
          <img src="../assets/Fashion_img-3.png" alt="" />
          <img class="icon" src="../assets/Fashion_img-3.png" alt="" />
          onakasuita
        </div>
      </li>
      <li>
        <div class="item">
          <img src="../assets/Fashion_img-4.png" alt="" />
          <img class="icon" src="../assets/Fashion_img-4.png" alt="" />
          onakasuita
        </div>
      </li>
      <li>
        <div class="item">
          <img src="../assets/Fashion_img-5.png" alt="" />
          <img class="icon" src="../assets/Fashion_img-5.png" alt="" />
          onakasuita
        </div>
      </li>
      <li>
        <div class="item">
          <img src="../assets/Fashion_img-6.png" alt="" />
          <img class="icon" src="../assets/Fashion_img-6.png" alt="" />
          onakasuita
        </div>
      </li>
      <li>
        <div class="item">
          <img src="../assets/Fashion_img-1.png" alt="" />
          <img class="icon" src="../assets/Fashion_img-1.png" alt="" />
          onakasuita
        </div>
      </li>
      <li>
        <div class="item">
          <img src="../assets/Fashion_img-2.png" alt="" />
          <img class="icon" src="../assets/Fashion_img-2.png" alt="" />
          onakasuita
        </div>
      </li>
    </ul>
    <!-- アサガオ page -->
    <ul v-if="onclick === 8" class="items">
      <li>
        <div class="item">
          <img src="../assets/Fashion_img-1.png" alt="" />
          <img class="icon" src="../assets/Fashion_img-1.png" alt="" />
          onakasuita
        </div>
      </li>
      <li>
        <div class="item">
          <img src="../assets/Fashion_img-2.png" alt="" />
          <img class="icon" src="../assets/Fashion_img-2.png" alt="" />
          onakasuita
        </div>
      </li>
      <li>
        <div class="item">
          <img src="../assets/Fashion_img-3.png" alt="" />
          <img class="icon" src="../assets/Fashion_img-3.png" alt="" />
          onakasuita
        </div>
      </li>
      <li>
        <div class="item">
          <img src="../assets/Fashion_img-4.png" alt="" />
          <img class="icon" src="../assets/Fashion_img-4.png" alt="" />
          onakasuita
        </div>
      </li>
      <li>
        <div class="item">
          <img src="../assets/Fashion_img-5.png" alt="" />
          <img class="icon" src="../assets/Fashion_img-5.png" alt="" />
          onakasuita
        </div>
      </li>
      <li>
        <div class="item">
          <img src="../assets/Fashion_img-6.png" alt="" />
          <img class="icon" src="../assets/Fashion_img-6.png" alt="" />
          onakasuita
        </div>
      </li>
      <li>
        <div class="item">
          <img src="../assets/Fashion_img-1.png" alt="" />
          <img class="icon" src="../assets/Fashion_img-1.png" alt="" />
          onakasuita
        </div>
      </li>
      <li>
        <div class="item">
          <img src="../assets/Fashion_img-2.png" alt="" />
          <img class="icon" src="../assets/Fashion_img-2.png" alt="" />
          onakasuita
        </div>
      </li>
    </ul>
    <!-- チューリップ page -->
    <ul v-if="onclick === 9" class="items">
      <li>
        <div class="item">
          <img src="../assets/Fashion_img-1.png" alt="" />
          <img class="icon" src="../assets/Fashion_img-1.png" alt="" />
          onakasuita
        </div>
      </li>
      <li>
        <div class="item">
          <img src="../assets/Fashion_img-2.png" alt="" />
          <img class="icon" src="../assets/Fashion_img-2.png" alt="" />
          onakasuita
        </div>
      </li>
      <li>
        <div class="item">
          <img src="../assets/Fashion_img-3.png" alt="" />
          <img class="icon" src="../assets/Fashion_img-3.png" alt="" />
          onakasuita
        </div>
      </li>
      <li>
        <div class="item">
          <img src="../assets/Fashion_img-4.png" alt="" />
          <img class="icon" src="../assets/Fashion_img-4.png" alt="" />
          onakasuita
        </div>
      </li>
      <li>
        <div class="item">
          <img src="../assets/Fashion_img-5.png" alt="" />
          <img class="icon" src="../assets/Fashion_img-5.png" alt="" />
          onakasuita
        </div>
      </li>
      <li>
        <div class="item">
          <img src="../assets/Fashion_img-6.png" alt="" />
          <img class="icon" src="../assets/Fashion_img-6.png" alt="" />
          onakasuita
        </div>
      </li>
      <li>
        <div class="item">
          <img src="../assets/Fashion_img-1.png" alt="" />
          <img class="icon" src="../assets/Fashion_img-1.png" alt="" />
          onakasuita
        </div>
      </li>
      <li>
        <div class="item">
          <img src="../assets/Fashion_img-2.png" alt="" />
          <img class="icon" src="../assets/Fashion_img-2.png" alt="" />
          onakasuita
        </div>
      </li>
    </ul>
    <GlobalNav/>
  </div>
</template>

<script>
import GlobalNav from '@/components/GlobalNav.vue'
import FashionHeader from '@/components/FashionHeader.vue'
export default {
  data() {
    return {
      onclick: 1,
    };
  },
  components:{
    GlobalNav,
    FashionHeader,
  },
  methods: {
    changeTab(value) {
      this.onclick = value;
    },
  },
};
</script>

<style lang="scss" scoped>
.fashion{
  margin-bottom: 70px;
}
.tab {
  display: flex;
  align-items: center;
  overflow-x: scroll;
  height: 62px;
  width: 100%;
  &__List {
    display: inline;
    list-style: none;
    text-align: center;
    line-height: 30px;
    height: 30px;
    min-width: 100px;
    border-radius: 10px;
    border: solid 1px #707070;
    // background: tomato;
    font-size: 12px;
    margin-right: 8px;
    button {
      width: 100%;
    }
  }
}
.items {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.item {
  height: 233px;
  width: 185px;
  margin: 5px;

  color: pink;
}
.icon {
  height: 25px;
  width: 25px;
  border-radius: 50px;
}
.btnactive {
  background-color: tomato;
}
</style>
