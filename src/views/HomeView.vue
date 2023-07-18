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
  <Category />

  
  <footer>footer<time></time></footer>
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
</style>
