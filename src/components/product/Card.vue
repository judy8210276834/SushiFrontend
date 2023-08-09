<script>
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
export default {
  props: ["product"],

  setup(props) {
    const store = useStore();

    onMounted(() => {
      // init();
      // console.log(store.getters.productQuantity(props.product));
    });

    const addToCart = () => {
      store.dispatch("Product/handAddToCart", {
        product: props.product,
      });
    };

    const removeFromCart = () => {
      store.dispatch("Product/handRemoveFromCart", {
        product: props.product,
      });
    };

  
    const product_total = computed(() => {
      return store.getters['Product/productQuantity'](props.product) === null ? 0 : store.getters['Product/productQuantity'](props.product)
    });

    return { addToCart, removeFromCart, product_total };
  },
};
</script>

<template>
  <div class="card">
    <img src="@/images/sushi/1.jpg" alt="" />
    <!-- <img src="" alt="" /> -->
    <h3>{{ product.name }}</h3>
    <h5 class="price">{{ product.price }}</h5>
    <div class="counter">
      <div class="minus" @click="removeFromCart">-</div>
      <div class="count">{{ product_total }}</div>
      <div class="plus" @click="addToCart">+</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
img {
  width: 100%; /* or any custom size */
  object-fit: contain;

  // 暫時灰色底
  // background-color: gray;
  // height: 100px;
}

.card {
  text-align: center;
  width: 180px;
  margin: 1%;
  padding-bottom: 10px;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0 0 5px gray;

  .counter {
    display: flex;
    justify-content: center;
  }
}
</style>
