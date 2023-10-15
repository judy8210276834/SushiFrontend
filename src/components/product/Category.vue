<script>
import { reactive, ref, onMounted } from "vue";
import { useStore } from "vuex";

export default {
  props: {
    changeTypeApi: Function,
  },
  setup(props) {
    const store = useStore();
    const categoryArr = reactive([
      { name: "生魚片" },
      { name: "捲類" },
      { name: "握壽司" },
      { name: "飯、麵" },
      { name: "飲料、甜點" },
    ]);

    const type = ref(0);

    const changetype = (n) => {
      props.changeTypeApi(n);
    };

    return { categoryArr, changetype, type };
  },
};
</script>

<template>
  <section class="container">
    <div
      class="card"
      v-for="(item, idx) in categoryArr"
      :key="idx"
      @click="changetype(idx + 1)"
    >
      <div class="card-image"></div>
      <p>{{ item.name }}</p>
    </div>
  </section>
</template>

<style scoped lang="scss">
* {
  box-sizing: border-box;
}

.container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 30px;
}

.card {
  background-image: linear-gradient(to top left, #4d5246be, #7a816eae);
  width: 100px;
  height: 40px;
  color: aliceblue;
  // border-radius: 5px;
  margin: 1%;
  line-height: 40px;
  text-align: center;

  &:hover {
    background-image: linear-gradient(to top left, #4d5246ce, #7a816ec6);
    color: white;
    cursor: pointer;
  }
}
</style>
