import { createStore } from "vuex";

export default createStore({
  state: {
    cart: [],
    cartTotal: 0,
  },
  getters: {},
  mutations: {
    addRemoveCart(state, payload) {
      console.log("addRemoveCart");
      // payload.toAdd
      //   ? state.cart.push(payload.product)
      //   : (state.cart = state.cart.filter(function (obj) {
      //       return obj.id !== payload.product.id;
      //     }));
      // state.cartTotal = state.cart.reduce((accumulator, object) => {
      //   return parseFloat(accumulator) + parseFloat(object.price * object.qty);
      // });
      // localStorage.setItem('cartTotal',JSON.stringify(state.cartTotal));
      // localStorage.setItem('cartTotal',JSON.stringify(state.cart));
      // console.log(state.cartTotal);
      // console.log(state.cart);
    },
    updateCart(state, payload) {
      console.log("updateCart");
      // state.cart.find(o => o.id === payload.product.id).qty = payload.product.qty;
      // state.cartTotal = state.cart.reduce((accumulator, object) => {
      //   return parseFloat(accumulator) + parseFloat(object.price * object.qty);
      // });
      // localStorage.setItem('cartTotal',JSON.stringify(state.cartTotal));
      // localStorage.setItem('cartTotal',JSON.stringify(state.cart));
      // console.log(state.cartTotal);
      // console.log(state.cart);
    },
  },
  actions: {
    handAddRemoveCart({ commit }) {
      commit("addRemoveCart");
    },
    handUpdateCart({ commit }, payload) {
      // console.log(payload.products);
      commit("updateCart");
    },
  },
  modules: {},
});
