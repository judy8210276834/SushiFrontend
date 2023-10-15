<script>
import { createStore } from "vuex";
export default {
  setup() {
    const clear = () => {};
    return {};
  },
};
</script>

<template>
  <nav>
    <input type="checkbox" id="check" />
    <label for="check" class="checkbtn">
      <!-- explicit style -->
      <font-awesome-icon style="color: #7a816e" :icon="['fas', 'bars']" />
    </label>
    <label class="logo">彩·壽司</label>
    <ul>
      <li><router-link to="/">首頁</router-link></li>
      <li><router-link to="/cart">購物車</router-link></li>
      <li><router-link to="/product">點餐</router-link></li>
      <li @click="clear"><router-link to="/login">登出</router-link></li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
* {
  text-decoration: none;
  list-style: none;
  box-sizing: border-box;
}

nav {
  background-color: rgba(255, 255, 255, 0.758);
  height: 70px;
  width: 100%;
  position: fixed; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  z-index: 99;
}

label.logo {
  color: #7a816e;
  font-size: 35px;
  line-height: 70px;
  padding: 0 100px;
  // font-weight: bold;
  @media (max-width: 952px) {
    font-size: 30px;
    padding-left: 50px;
  }
}

nav ul {
  float: right;

  @media (max-width: 858px) {
    position: fixed;
    width: 100%;
    height: 100vh;
    background: #7a816e;
    top: 70px;
    left: -100%;
    text-align: center;
    transition: all 0.5s;
  }
  li {
    display: inline-block;
    line-height: 70px;
    margin: 0 5px;

    @media (max-width: 858px) {
      display: block;
    }

    a {
      color: #505050;
      font-size: 17px;
      text-transform: uppercase;
      padding: 7px 13px;

      @media (max-width: 952px) {
        font-size: 16px;
      }

      @media (max-width: 858px) {
        font-size: 20px;
        color: #ffffff;
      }

      &:hover,
      a.active {
        opacity: 0.7;
        @media (max-width: 858px) {
          background: none;
          color: #7a816e;
        }
      }
    }
  }
}

.checkbtn {
  font-size: 30px;
  color: white;
  float: right;
  line-height: 70px;
  margin-right: 40px;
  cursor: pointer;
  display: none;

  @media (max-width: 858px) {
    display: block;
  }
}

#check {
  display: none;
  @media (max-width: 858px) {
    &:checked ~ ul {
      left: 0;
    }
  }
}
// template {
//   position: relative;
// }

// header {
//   position: fixed;
//   top: 0;
//   width: 100%;
//   background-color: rgba(255, 255, 255, 0.77);
// }

// li {
//   list-style: none;
// }

// a {
//   color: #7A816E;
//   text-decoration: none;
// }

// .navbar {
//   width: 95%;
//   margin: auto;
//   min-height: 70px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// }

// .container {
//   width: 1280px;
//   margin: auto;
// }

// .nav-menu {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   gap: 60px;
// }

// .nav-branding {
//   font-size: 2rem;
// }

// main {
//   height: 700px;
//   margin-top: 70px;
//   border: 1px solid black;
// }

// @media (max-width: 1280px) {
//   .container {
//     width: 100%;
//   }
// }
</style>
