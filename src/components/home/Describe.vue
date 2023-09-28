<script>
export default {};
</script>

<template>
  <div class="container">
    <img src="@/images/restaurant.jpg" alt="Paris" width="400" height="300" />

    <div class="text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quibusdam
      quos nobis incidunt porro architecto possimus cumque, qui repellat
      numquam? Illo iste et iusto laborum quasi, nam nemo dolores atque.
    </div>
  </div>
  
  <div class="container2">
    <img src="@/images/restaurant.jpg" alt="Paris" width="400" height="300" />

    <div class="text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quibusdam
      quos nobis incidunt porro architecto possimus cumque, qui repellat
      numquam? Illo iste et iusto laborum quasi, nam nemo dolores atque.
    </div>
  </div>

  <div class="container3">
    <div class="text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quibusdam
      quos nobis incidunt porro architecto possimus cumque, qui repellat
      numquam? Illo iste et iusto laborum quasi, nam nemo dolores atque.
    </div>
    <br>
    <div>
        <img src="@/images/restaurant.jpg" alt="Paris" width="100%" height="300" />
    </div>
    <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57816.674935513736!2d121.5903754!3d25.0835017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ac8cce7a9b6d%3A0x377d7129bd402c63!2zMTE05Y-w5YyX5biC5YWn5rmW5Y2A!5e0!3m2!1szh-TW!2stw!4v1695779438044!5m2!1szh-TW!2stw" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> -->
  </div>

  
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  display: flex;
  gap: 20px;
  margin-top: 40px;
  text-align: center;
  align-items: center;
}

.container2 {
  width: 100%;
  display: flex;
  gap: 20px;
  margin-top: 40px;
  flex-direction:row-reverse;
  align-items: center;
  text-align: center;
}

.container3 {
    margin-top: 40px;
    align-items: center;
    text-align: center;
    .text{
        padding: 50px;
    }
}

img{
    // float: left;
}
</style>
