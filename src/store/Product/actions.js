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
};
