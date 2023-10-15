export default {
  // counter、更新localstorge
  addToCart(state, product) {
    console.log("addToCart");
    let item = state.cart.find((i) => i._id === product._id);

    if (item) {
      item.quantity++;
    } else {
      state.cart.push({ ...product, quantity: 1 });
    }

    updateLocalStorage(state.cart);
  },

  removeFromCart(state, product) {
    console.log("removeFromCart");
    let item = state.cart.find((i) => i._id === product._id);

    if (item) {
      if (item.quantity > 1) {
        item.quantity--;
      } else {
        state.cart = state.cart.filter((i) => i._id !== product._id);
      }
    }

    updateLocalStorage(state.cart);
  },

  updateCartFromLocalStorage(state) {
    const cart = localStorage.getItem("cart");
    if (cart) {
      state.cart = JSON.parse(cart);
    }
  },

  setFoodData(state, payload) {
    state.foodArr = payload;
    console.log('setFoodData',payload);
  },


  // 清空
  resetState (state) {
    Object.assign(state, getDefaultState())
  }
  
};

function updateLocalStorage(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}
