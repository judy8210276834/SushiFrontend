<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Bread from "@/components/Bread.vue";

import { reactive, ref, onMounted,computed } from "vue";
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

    const getCart = computed(() => {
      return store.getters["Product/getCart"]
    });

    onMounted(() => {
    //   cart.data = localStorage.getItem("cart");
      console.log(store.getters["Product/getCart"]);
      // console.log(store.getters);
      // console.log(store.getters.Product/cart);
    });

    return {img_url,getCart};
  },
};
</script>

<template>
  <Header />
  <div class="container">
    <Bread />
    <div>
        訂單{{getCart}}
    </div>
  </div>
  <footer>
    <Footer />
  </footer>
</template>

<style></style>
