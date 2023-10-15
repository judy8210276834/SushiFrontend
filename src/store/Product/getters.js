export default {
  productQuantity: (state) => (product) => {
    const item = state.cart.find((i) => i._id === product._id);

    if (item) return item.quantity;
    else return null;
  },

  getCart: (state) => {
    console.log(state.cart);
    return state.cart;
    // const item = state.cart;
    // console.log(item);
    // if (item == {}) return "null";
    // else return "!null";
  },

  getCard: (state) => {
    return state.cart;
    // const item = state.cart;
    // console.log('getter',item);
    // if (item == {}) return "null";
    // else return item;
    
  }
};
