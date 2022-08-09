import { reqGoodsList } from '@/api';
const actions = {
  async getGoodsList({ commit }, skuId) {
    let result = await reqGoodsList(skuId);
    if (result.code == 200) {
      commit('GETGOODSLIST', result.data);
    }
  },
};
const mutations = {
  GETGOODSLIST(state, goodsList) {
    state.goodsList = goodsList;
  },
};
const state = {
  goodsList: {},
};
const getters = {
  categoryView(state) {
    return state.goodsList.categoryView || {};
  },
  skuInfo(state) {
    return state.goodsList.skuInfo || {};
  },
  spuSaleAttrList(state) {
    return state.goodsList.spuSaleAttrList || [];
  },
};

export default {
  actions,
  mutations,
  state,
  getters,
};
