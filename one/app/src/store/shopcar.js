import { reqShopList, reqDelateList, reqSwitchOver } from '@/api';
const actions = {
  async getShopList({ commit }) {
    let result = await reqShopList();
    if (result.code == 200) {
      commit('GETSHOPLIST', result.data);
    }
  },
  async getDelateList({ commit }, skuId) {
    let result = await reqDelateList(skuId);
    if (result.code == 200) {
      return 'ok';
    } else {
      Promise.reject(new Error('faile'));
    }
  },
  async getSwitchOver({ commit }, { skuId, isChecked }) {
    let result = await reqSwitchOver(skuId, isChecked);
    if (result.code == 200) {
      return 'ok';
    } else {
      Promise.reject(new Error('faile'));
    }
  },
};
const mutations = {
  GETSHOPLIST(state, shopList) {
    state.shopList = shopList;
  },
};
const state = {
  shopList: {},
};
const getters = {
  cartInfoList(state) {
    return state.shopList[0] || {};
  },
};

export default {
  actions,
  mutations,
  state,
  getters,
};
