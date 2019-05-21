import vue from 'vue'
import vuex from 'vuex';
import state from './states';
import mutations from './mutations';
import * as actions from './actions';
import * as getters from './getters';

vue.use(vuex)

const store = {
  state,
  actions,
  getters,
  mutations
};

export const initStore = function(vmPage, Vue) {
  // Vue.use(vuex);

  if (vmPage.$app) {
    // 快应用
    // if (!vmPage.$app.$def.$store) {
    //   vmPage.$app.$def.$store = new vuex.Store(store);
    // }
    Object.defineProperty(vmPage, '$store', {
      get() {
        return vmPage.$app.$store;
      }
    });
  } else {
    // web端
  }
};

export default new vuex.Store(store)
