<template>
  <div class="search">
    <h1>検索画面</h1>
    <Fashion />
    <GlobalNav />
  </div>
</template>

<script>
import GlobalNav from "@/components/GlobalNav.vue";
import Fashion from "@/views/CategoryFashion.vue";

export default {
  components: {
    GlobalNav,
    Fashion,
  },
};
</script>
