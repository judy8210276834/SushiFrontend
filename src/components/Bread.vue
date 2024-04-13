<script>
export default {
  props: {
    page_name: String,
  },
};
</script>

<template>
  <div class="container">
    <span><router-link to="/home" class="home">首頁</router-link> > </span><span class="now_page">{{ page_name }}</span>
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 1280px;
  // margin: auto;
  margin-top: 20px;

  .home {
    text-decoration:none;
    // width: 95%;
    margin: auto;
    min-height: 70px;
    // display: flex;
    // justify-content: space-between;
    align-items: center;
    color: #7a816e;
    font-weight: 700;
  }
  .now_page {
    opacity: 0.7;
  }
}
</style>
