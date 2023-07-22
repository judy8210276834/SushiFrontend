
<script>
import { onMounted } from "vue";
export default {
  props: ["product"],
};
</script>

<template>
  <div class="card">
    <h3>{{ product.name }}</h3>
  </div>
</template>


<style scoped lang="scss">
</style>