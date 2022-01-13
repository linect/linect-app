<template>
  <div class="diagnosis">
    <h1 class="diagnosis__img">
      <img src="../assets/panzi.svg" alt="スミレ" />
    </h1>
    <h2 class="diagnosis__title">
      あなたのタイプは<br /><span>パンジー</span>タイプ！
    </h2>
    <p class="diagnosis__text">
      やる気スイッチのONとOFFの差が<br />
      激しく全力な時は全力ゆっくりする<br />
      時はゆっくりするタイプかも?
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
