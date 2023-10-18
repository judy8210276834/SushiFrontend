
<script>

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Main from "@/components/Main.vue";
import Bread from "@/components/Bread.vue";
import Describe from '@/components/home/Describe.vue';


export default {
components: {
    Header,
    Footer,
    Main,
    Bread,
    Describe
  },
  setup() {
    const img_url = 'home/resturant.jpg';
    return {
      img_url
    }
  }
}
</script>

<template>
  <Header />
  <Main :img_url="img_url" />
  <div class="container">
    <Bread />
    <Describe />
  </div>
   <footer>
    <Footer />
  </footer>
</template>


<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  overflow-x: hidden;
}

.container {
  max-width: 980px;
  margin: 0 auto !important;
  float: none !important;
  padding: 10px;
}

footer {
  margin-top: 10%;
}
</style>