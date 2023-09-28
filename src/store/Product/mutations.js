export default {
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

  updateCartFromLocalStorage(state) {
    const cart = localStorage.getItem("cart");
    if (cart) {
      state.cart = JSON.parse(cart);
    }
  },

  setFoodData(state, payload) {
    state.card = payload;
  },
};

function updateLocalStorage(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}