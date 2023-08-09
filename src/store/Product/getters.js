export default {
    productQuantity: (state) => (product) => {
        const item = state.cart.find((i) => i.id === product.id);
  
        if (item) return item.quantity;
        else return null;
      },
      test: (state) => {
        return "ok";
      },
}