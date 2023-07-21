<script>
import Header from "@/components/Header.vue";
import Main from "@/components/home/Main.vue";
import Bread from "@/components/home/Bread.vue";
import Category from "@/components/home/Category.vue";
export default {
  components: {
    Header,
    Main,
    Bread,
    Category,
  },
};
</script>

<template>
  <Header />
  <Main />
  <dic class="container">
    <Category />
  </dic>

  <footer>footer<time></time></footer>
</template>

<style scoped lang="scss">
* {
  padding: 0;
  margin: 0;
}

.container {
  max-width: 1080px; 
	margin: 0 auto !important; 
	float: none !important; 
}
</style>
