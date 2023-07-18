<script>
export default {};
</script>

<template>
  <main>
    <div class="main-image">
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
  background: url(~@/images/banner.jpg) no-repeat center;
  background-size: cover;
  height: 800px;
  width: 100%;
  overflow: hidden;
  position: relative;
  
}

.container{
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%,-50%);
  text-align: center;
  color: white;

}

a{
  color: aliceblue;
  padding: 10px 24px;
  background: #7a816e;
  text-decoration: none;
  border-radius: 5px;
  transition: .3s;
  opacity: .9;

    &:hover{
      opacity: 1;
    }
}


</style>
