<script>
import items from "../data/items.js";

import Header from "@/components/Header.vue";
import Main from "@/components/home/Main.vue";
import Bread from "@/components/home/Bread.vue";
import Category from "@/components/home/Category.vue";
import Card from "@/components/home/Card.vue";
import { onMounted } from "vue";
export default {
  components: {
    Header,
    Main,
    Bread,
    Category,
    Card,
  },

  setup() {
    return {
      items,
    };
  },
};
</script>

<template>
  <Header />
  <Main />
  <div class="container">
    <Bread />
    <Category />

    <div class="product-cards-container">
      <Card v-for="product in items" :key="product.id" :product="product" />
    </div>
  </div>

  <footer>footer<time></time></footer>
</template>

<style scoped lang="scss">
* {
  padding: 0;
  margin: 0;
  overflow-x: hidden;
}

.container {
  max-width: 1080px;
  margin: 0 auto !important;
  float: none !important;
}

.product-cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
