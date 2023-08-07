import { createStore } from "vuex";

function updateLocalStorage(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export default createStore({
  state: {
    cart: [],
  },
  getters: {
    productQuantity: (state) => (product) => {
      const item = state.cart.find((i) => i.id === product.id)

      if (item) return item.quantity
      else return null
    }
  },
  mutations: {
    addToCart(state, product) {
      console.log("addToCart");
      let item = state.cart.find((i) => i.id === product.id);

      if (item) {
        item.quantity++;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }

      updateLocalStorage(state.cart);
    },
    removeFromCart(state, product) {
      console.log("removeFromCart");
      let item = state.cart.find((i) => i.id === product.id);

      if (item) {
        if (item.quantity > 1) {
          item.quantity--;
        } else {
          state.cart = state.cart.filter((i) => i.id !== product.id);
        }
      }

      updateLocalStorage(state.cart);
    },
    updateCartFromLocalStorage(state, payload) {
      console.log("updateCartFromLocalStorage");
      const cart = localStorage.getItem("cart");
      if (cart) {
        state.cart = JSON.parse(cart);
      }
    },
  },
  actions: {
    handAddToCart({ commit }, payload) {
      commit("addToCart", payload.product);
    },
    handRemoveFromCart({ commit }, payload) {
      // console.log(payload.products);
      commit("removeFromCart", payload.product);
    },
    handUpdateCartFromLocalStorage({ commit }, payload) {
      // console.log(payload.products);
      commit("updateCartFromLocalStorage");
    },
  },
  modules: {},
});
