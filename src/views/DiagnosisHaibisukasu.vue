<template>
  <div class="diagnosis">
    <h1 class="diagnosis__img">
      <img src="../assets/haibisukasu.svg" alt="スミレ" />
    </h1>
    <h2 class="diagnosis__title">
      あなたのタイプは<br /><span>ハイビスカス</span>タイプ！
    </h2>
    <p class="diagnosis__text">
      平和主義で普段はクールなのに笑顔<br />がかわいい愛されキャラなのかも！
    </p>
    <DoneBtn />
  </div>
</template>

<script>
import DoneBtn from "@/components/Questions/DoneBtn";
export default {
  components: {
    DoneBtn,
  },
};
</script>

<style lang="scss" scoped>
.diagnosis {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto 0;
  &__title {
    margin: 64px 0 32px 0;
    color: $MainTextColor;
    font-size: 25px;
    text-align: center;
    span {
      color: $btnSelected;
    }
  }
  &__text {
    height: 80px;
    width: 300px;
    color: $textColor;
    text-align: center;
    font-size: 16px;
  }
}
</style>
