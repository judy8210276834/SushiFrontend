<script>
import { onMounted, ref } from "vue";
export default {
  props: ["product"],

  setup() {
    const count = ref(0);

    onMounted(() => {});

    const add = () => {
      count.value++;
      console.log(count);
    };

    return {
      add,
      count
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
      <div class="count">{{count}}</div>
      <div class="plus" @click="add">+</div>
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
