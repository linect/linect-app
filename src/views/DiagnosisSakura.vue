<template>
  <div class="diagnosisSakura">
    <h1 class="diagnosisSakura__img">
      <img src="../assets/sakura.svg" alt="logo" />
    </h1>
    <h2 class="diagnosisSakura__title">
      あなたのタイプは<br /><span>サクラ</span>タイプ！
    </h2>
    <p class="diagnosisSakura__text">
      感情豊かで思いやりのある方、<br />
      ですがちょっぴりめんどく<br />
      さがってしまう時があるかも？？
    </p>
  </div>
</template>

<style lang="scss" scoped>
.diagnosisSakura {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &__title {
    color: #877c76;
    font-size: 25px;
    text-align: center;
  }
  &__text {
    text-align: center;
  }
}
</style>
