<template>
  <div class="diagnosis">
    <h1 class="diagnosis__img">
      <img src="../assets/asagao.svg" alt="スミレ" />
    </h1>
    <h2 class="diagnosis__title">
      あなたのタイプは<br /><span>アサガオ</span>タイプ！
    </h2>
    <p class="diagnosis__text">
      常に前向きでポジティブ思考な人明<br />るい色が好きな傾向があるかも！
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
