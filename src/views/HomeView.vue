
<script>
import Header from "@/components/Header.vue";
import Main from "@/components/home/Main.vue";
import Bread from "@/components/home/Bread.vue";
export default {
  components: {
    Header,
    Main,
    Bread
  },
};
</script>

<template>
  <Header />

  <main>
    <article>article</article>
    <aside>aside</aside>
  </main>
  <footer>footer<time></time></footer>
</template>


<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
</style>

