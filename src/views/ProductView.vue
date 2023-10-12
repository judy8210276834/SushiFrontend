<script>
import items from "../data/items.js";

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Main from "@/components/Main.vue";
import Bread from "@/components/Bread.vue";
import Category from "@/components/product/Category.vue";
import Card from "@/components/product/Card.vue";
import { computed, onMounted, reactive } from "vue";
import { useStore } from "vuex";

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
    const food = reactive({ data: [] });
    const store = useStore();
    const img_url = "banner.jpg";

    const init = () => {
      // api資料
      // store.dispatch("Product/handUpdateCartFromLocalStorage");
      // store.dispatch("Product/handSetFoodData").then((res) => {
      //   console.log("3", res);
      //   food.data = res;
      //   console.log(food.data);
      // });

      // 假資料
      food.data = items;

      // console.log('here',store.state.Product.card);
    };

    onMounted(() => {
      init();
    });

    return {
      items,
      food,
      img_url,
    };
  },
};
</script>

<template>
  <Header />
  <Main :img_url="img_url" />
  <div class="container">
    <Bread />
    <Category />

    <div class="product-cards-container">
      <!-- <Card
        v-for="product in food.data"
        :key="product._id"
        :product="product"
      /> -->
      <Card
        v-for="product in food.data"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
  <footer>
    <Footer />
  </footer>
</template>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  overflow-x: hidden;
}

.container {
  max-width: 980px;
  margin: 0 auto !important;
  float: none !important;
}

.product-cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

footer {
  margin-top: 10%;
}
</style>
