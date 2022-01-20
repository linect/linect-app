<template>
  <div class="diagnosis">
    <button class="diagnosis__button">
      ようこそLinectへ<br />Welcome to Linect
    </button>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.diagnosis {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto 0;
  &__button {
    height: 85px;
    width: 300px;
    background-color: $btnSelected;
    border-radius: 23px;
    color: #fff;
  }
}
</style>
