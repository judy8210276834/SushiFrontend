<script>
import items from "../data/items.js";

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Main from "@/components/product/Main.vue";
import Bread from "@/components/product/Bread.vue";
import Category from "@/components/product/Category.vue";
import Card from "@/components/product/Card.vue";
import { onMounted } from "vue";
export default {
  components: {
    Header,
    Main,
    Bread,
    Category,
    Card,
    Footer,
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
  <footer>
    <Footer />
  </footer>
  

</template>

<style lang="scss" scoped >
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

footer{
  margin-top: 10%;
}
</style>
