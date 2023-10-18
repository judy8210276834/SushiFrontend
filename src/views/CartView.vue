<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Bread from "@/components/Bread.vue";

import { reactive, ref, onMounted, computed } from "vue";
import { useStore } from "vuex";

export default {
  components: {
    Header,
    Bread,
    Footer,
  },

  setup() {
    const img_url = "banner.jpg";
    // const cart = reactive({data:[]});
    const store = useStore();
    const num = ref(0);

    const getCart = computed(() => {
      return store.getters["Product/getCart"];
    });

    onMounted(() => {
      //   cart.data = localStorage.getItem("cart");
      console.log(store.getters["Product/getCart"]);
      // console.log(store.getters);
      // console.log(store.getters.Product/cart);
      num.value = (getCart.value.length > 0 ? 1 : 0);

    });

    return { img_url, getCart, num };
  },
};
</script>

<template>
  <Header />
  <div class="container">
    <Bread />
    <h3>我的購物車</h3>
    <div v-if="!num">目前購物車是空的唷!</div>
    <div v-if="num">
      <div v-for="(item, idx) in getCart" :key="idx">
        <div class="wrap">
          <img
            :src="require(`@/images/${item.categary}/${item.img_name}`)"
            alt=""
          />
          <div class="detail">
            <h6>{{ item.name }}</h6>
            <h6>{{ item.price }} 元</h6>
            <h6>{{ item.quantity }} 份</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer>
    <Footer />
  </footer>
</template>

<style lang="scss" scoped>
.container {
  max-width: 980px;
  margin: 70px auto 0;
  float: none !important;
  text-align: center;

  h3 {
    color: #7a816e;
  }

  .wrap {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;

    img {
      width: 100px;
    }

    .detail {
      width: 150px;
      h6 {
        margin: 0 20px;
      }
    }
  }
}
</style>
