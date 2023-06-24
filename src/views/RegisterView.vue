
<script>
import { reactive, ref } from "vue";
import axios from "axios";
export default {
  setup() {
    const statusShow = ref(false);
    const statusMsg = ref("");
    const registered = reactive({
      name: "",
      email: "",
      password: "",
    });

    const handSubmit = () => {
      axios
        .post("http://localhost:8000/register", {
          name: registered.name,
          email: registered.email,
          password: registered.password,
        })
        .then((response) => {
          statusShow.value = true;
          statusMsg.value = response.data.result.status;
        })
        .catch((error) => {
          console.log(error);
        });
    };
    return {
      registered,
      handSubmit,
      statusShow,
      statusMsg,
    };
  },
};
</script>

<template>
  <section>
    <div class="form-container">
      <h1>彩．壽司</h1>
      <form>
        <div class="status" v-if="statusShow">
          <span>{{ statusMsg }}</span>
        </div>
        <div class="control">
          <input
            type="text"
            placeholder="請輸入姓名"
            v-model="registered.name"
          />
        </div>
        <div class="control">
          <input
            type="text"
            placeholder="請輸入信箱"
            v-model="registered.email"
          />
        </div>
        <div class="control">
          <input
            type="text"
            placeholder="請輸入密碼"
            v-model="registered.password"
          />
        </div>
        <div class="control">
          <input class="submit" @click="handSubmit" value="註冊" />
        </div>
        <router-link to="/login" style="color: white">登入</router-link>
      </form>
    </div>
  </section>
</template>


<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Open sans";
  color: #fff;
}

section {
  position: relative;
  height: 100vh;
  width: 100%;
  background: url("~@/images/restaurant.jpg");
  background-size: cover;
  background-position: center center;
}

.form-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
  width: 380px;
  padding: 50px 30px;
  border-radius: 10px;
  box-shadow: 7px 7px 60px #000;
}

h1 {
  text-transform: uppercase;
  font-size: 2em;
  text-align: center;
  margin-bottom: 2em;
  color: #fff;
}

.control input {
  width: 100%;
  display: block;
  padding: 10px;
  /* color: #000; */
  border: none;
  outline: none;
  margin: 1em 0;
  border-radius: 5px;
}

.submit {
  background: #7a816e;
  color: #fff;
  text-transform: uppercase;
  font-size: 1.2em;
  opacity: 0.7;
  transform: opacity 0.3s ease;
  text-align: center;
}

.submit:hover {
  opacity: 1;
}

.status {
  width: 100%;
  display: block;
  padding: 10px;
  color: #ffffff;
  border: none;
  outline: none;
  margin: 1em 0;
  border-radius: 5px;
  background-color: #ffffff2d;
  text-align: center;
}
</style>