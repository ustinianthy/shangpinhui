import { reqShopList } from '@/api';
const actions = {
  async getShopList({ commit }) {
    let result = await reqShopList();
    if (result.code == 200) {
      commit('GETSHOPLIST', result.data);
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
  cartInfoList(state){
    return state.shopList[0] || {}
  }
};

export default {
  actions,
  mutations,
  state,
  getters,
};
