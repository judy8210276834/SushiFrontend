<script>
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
export default {
  props: ["product"],

  setup(props) {
    const store = useStore();

    onMounted(() => {
      // console.log(props.product);
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
      return store.getters["Product/productQuantity"](props.product) === null
        ? 0
        : store.getters["Product/productQuantity"](props.product);
    });

    const imgUrl = (imagePath) => {
      return "@/images/nigiri/" + imagePath;
    };

    return { addToCart, removeFromCart, product_total, imgUrl };
  },
};
</script>

<template>
  <div class="card">
    <!-- <img :src="imgUrl(product.img_name)" alt="" /> -->
    <div class="img-box">
      <img
        :src="require(`@/images/${product.categary}/${product.img_name}`)"
        alt=""
      />
    </div>

    <!-- <img src="@/images/nigiri/3.jpg" alt="" /> -->
    <!-- <img src="" alt="" /> -->
    <h3>{{ product.name }}</h3>
    <h5 class="price">{{ product.price }}元</h5>
    <div class="counter">
      <div class="minus" @click="removeFromCart">-</div>
      <div class="count" v-if="product_total">{{ product_total }}</div>
      <div class="count" v-if="!product_total">0</div>
      <div class="plus" @click="addToCart">+</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  text-align: center;
  width: 180px;
  margin: 1%;
  padding-bottom: 10px;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0 0 5px gray;
  font-size: 16px;

  .img-box {
    img {
      // width: 100%; /* or any custom size */
      object-fit: contain;

      // 暫時灰色底
      // background-color: gray;
      height: 130px;
    }
  }

  .counter {
    display: flex;
    justify-content: center;
    gap: 10px;
    padding: 10px;

    .minus,.plus{
      cursor: pointer;
      font-weight: 700;
    }
  }
}
</style>
