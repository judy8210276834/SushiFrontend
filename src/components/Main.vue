<script>
import { onMounted } from "vue";
export default {
  props: {
    img_url: String,
  },
  setup(props) {
    const img_url = props.img_url;
    const img = require(`@/images/${props.img_url}`);

    onMounted(() => {
      console.log(props.img_url);
    });

    return {
      props,
      img
    }
  },
};
</script>

<template>
  <main>
    <!-- <img :src="require(`@/images/${props.img_url}`)" /> -->
    <!-- <div class="main-image"> -->
      <div class="main-image" :style="{'background-image':'url('+ img +')'}">
      <div class="container">
        <a href="#" class="button">活動辦法</a>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
// .container {
//   width: 100%;
// }

// .banner {
//   width: 100%;
//   height: 800px;
//   background-image: url(~@/images/banner.jpg);
//   background-size: cover;
// }

.main-image {
  // background-image: url(~@/images/banner.jpg) no-repeat center;
  background-color: gray;
  background-size: cover;
  height: auto;
  min-height: 93vh;
  width: 100%;
  overflow: hidden;
  position: relative;
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
}

.container {
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
}

a {
  color: aliceblue;
  padding: 10px 24px;
  background: #7a816e;
  text-decoration: none;
  border-radius: 5px;
  transition: 0.3s;
  opacity: 0.9;

  &:hover {
    opacity: 1;
  }
}
</style>
