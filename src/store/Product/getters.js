export default {
  productQuantity: (state) => (product) => {
    const item = state.cart.find((i) => i.id === product.id);

    if (item) return item.quantity;
    else return null;
  },

  getCart: (state) => {
    const item = state.cart;
    console.log(item);
    if (item == {}) return "null";
    else return "!null";
  },

  getCard: (state) => {
    return state.card;
    // const item = state.card;
    // console.log('getter',item);
    // if (item == {}) return "null";
    // else return item;
    
  }
};
