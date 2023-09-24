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
    return axios.get('http://localhost:8000/product?gid=3')
    .then((res)=>{
      // console.log('action');
      commit("setFoodData",res.data.result);
      return res.data.result;
    })
    .catch((err)=>{console.log(err);});
    
  },
};
