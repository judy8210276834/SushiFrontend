import { createStore } from "vuex";
import Product from "./Product";

export default createStore({
  namespaced: true,
  state: {
    boo1:false,
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    Product,
  },
});
