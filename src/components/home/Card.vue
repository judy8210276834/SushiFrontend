<script>
import { onMounted, ref } from "vue";
import { useStore } from "vuex";
export default {
  props: ["product"],

  setup(props) {
    const store = useStore();
    const qty = ref(1);
    const loading = ref(false);
    const toAdd = ref(true);
    // const init = () => {
    //   store.dispatch("handAddRemoveCart");
    // };

    onMounted(() => {
      // init();
    });

    const addOrRemove = async (number) => {
      loading.value = true;
      if (number == 1) {
        if (qty.value < 10) {
          qty.value++;
          props.product.qty = qty.value;
          console.log(props.product);
          store.dispatch("handUpdateCart", {
            product: props.product,
          });

          // await this.$store.commit('updateCart',{product:props.product})
          // toast.success('ok');
        } else {
          // toast.warning('limit');
        }
      }
    };

    return {
      addOrRemove,
      qty,
    };
  },
};
</script>

<template>
  <div class="card">
    <img src="@/images/sushi/1.jpg" alt="" />
    <h3>{{ product.name }}</h3>
    <h5 class="price">{{ product.price }}</h5>
    <div class="counter">
      <div class="minus">-</div>
      <div class="count">{{ qty }}</div>
      <div class="plus" @click="addOrRemove(1)">+</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
img {
  width: 100%; /* or any custom size */
  object-fit: contain;
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
