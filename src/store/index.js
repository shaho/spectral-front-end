import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    selectedAsset: null,
  },

  mutations: {
    setSelectedAsset(state, item) {
      state.selectedAsset = item;
    },
  },

  getters: {
    selectedAsset(state) {
      return state.selectedAsset;
    },
  },
});
