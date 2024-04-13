<script>
export default {};
</script>

<template>
  <div class="container">
    <img src="@/images/home/chef.jpg" alt="Paris" width="400" height="300" />

    <div class="text">
      歡迎來到我們的日式餐廳，這裡為您提供一場獨特的日本美食之旅。我們的廚師們精湛的技藝，致力於為您獻上最新鮮、最美味的料理。每一道菜都融合了傳統和現代元素，營造出極具風味的日本料理體驗。
    </div>
  </div>

  <div class="container2">
    <img src="@/images/home/chef2.jpg" alt="Paris" width="400" height="300" />

    <div class="text">
      我們餐廳的環境營造充滿和風氛圍，讓您感受到來自遠東的寧靜和美感。不論您是想品嚐壽司、刺身、炙燒、烤肉或烏冬麵，我們都有豐富的選擇，滿足各種口味。
    </div>
  </div>

  <div class="container3">
    <div class="text">
      我們以真誠的服務、新鮮的食材和獨特的口味，為您提供了一個難忘的日本料理體驗。無論是特別場合還是休閒晚餐，我們都期待能為您服務，帶給您來自日本的精緻滋味。
    </div>
    <br />
    <div>
      <!-- <img
        src="@/images/home/background.jpg"
        alt="Paris"
        width="100%"
        height="300"
      /> -->
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57816.674935513736!2d121.5903754!3d25.0835017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ac8cce7a9b6d%3A0x377d7129bd402c63!2zMTE05Y-w5YyX5biC5YWn5rmW5Y2A!5e0!3m2!1szh-TW!2stw!4v1695779438044!5m2!1szh-TW!2stw"
        style="border: 0; width: 100%; height: 300px"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
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
  color: #484848;
  font-size: 16px;
  letter-spacing:3px;

  @media (max-width: 991px) { display: block; }
  @media (max-width: 575px) { display: block; }
}

.container2 {
  width: 100%;
  display: flex;
  gap: 20px;
  margin-top: 40px;
  flex-direction: row-reverse;
  align-items: center;
  text-align: center;
  color: #484848;
  font-size: 16px;
  letter-spacing:3px;

  @media (max-width: 991px) { display: block; }
  @media (max-width: 575px) { display: block; }
}

.container3 {
  margin-top: 40px;
  align-items: center;
  text-align: center;
  .text {
    padding: 50px;
  }
  color: #484848;
  font-size: 16px;
  letter-spacing:3px;

  @media (max-width: 991px) { display: block; }
  @media (max-width: 575px) { display: block; }
}

img {
  opacity: 0.9;

  &:hover {
    opacity: 1;
  }
}
</style>
