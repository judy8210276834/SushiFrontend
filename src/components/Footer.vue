<template>
  <div class="container-footer">
    <div class="item logo">彩·壽司</div>
    <div class="item">
      <div class="title">社群網站</div>
      <div class="box">
        <div class="line"></div>
        <ul>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Youtube</li>
        </ul>
      </div>
    </div>
    <div class="item">
      <div class="title">店家資訊</div>
      <div class="box">
        <div class="line"></div>
        <ul>
          <li>台北市內湖區OO街</li>
          <li>0987-654-321</li>
          <li>0800-1700</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
* {
  text-decoration: none;
  list-style: none;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  color: white;
}

.container-footer {
  width: 100%;
  background-color: #313131;
  padding: 5%;
  display: flex;

  @media (max-width: 952px) {
    flex-wrap: wrap;
    gap: 30px;
    text-align: center;
  }

  .item {
    width: 100%;
    justify-content: center;

    .title {
      margin-bottom: 4%;
    }

    .box {
      display: flex;
      @media (max-width: 952px) {
        text-align: center;
        justify-content: center;
        display: block;
      }

      .line {
        border-left: 1px solid white;
        height: 150px;

        @media (max-width: 952px) {
          display: none;
        }
      }

      ul {
        li {
          font-size: 14px;
          margin: 25px;

          @media (max-width: 952px) {
            margin: 10px;
          }
        }
      }
    }
  }

  .logo {
    color: #7a816e;
    text-align: center;
    display: flex;
    align-items: center;
    font-size: 28px;
  }
}
</style>
