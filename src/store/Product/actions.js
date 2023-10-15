import axios from "axios";
export default {
  handAddToCart({ commit }, payload) {
    commit("addToCart", payload.product);
  },
  handRemoveFromCart({ commit }, payload) {
    commit("removeFromCart", payload.product);
  },
  handUpdateCartFromLocalStorage({ commit }, payload) {
    commit("updateCartFromLocalStorage");
  },
  handSetFoodData({ commit }, payload) {
    console.log("payload", payload.type);

    return axios
      .get("http://localhost:8000/product?gid=" + payload.type)
      .then((res) => {
        // console.log('action');
        console.log(res.data.result);
        commit("setFoodData", res.data.result);
        return res.data.result;
      })
      .catch((err) => {
        console.log(err);
      });
  },


  // 清空
  resetCartState ({ commit }) {
    commit('resetState')
  },
};
