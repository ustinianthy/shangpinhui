import { reqGoodsList, reqLogin } from '@/api';
import { getUUID } from '@/utils/uuid_token';
const actions = {
  async getGoodsList({ commit }, skuId) {
    let result = await reqGoodsList(skuId);
    if (result.code == 200) {
      commit('GETGOODSLIST', result.data);
    }
  },
  async getLogin({ commit }, { skuId, skuNum }) {
    let result = await reqLogin(skuId, skuNum);
    if (result.code == 200) {
      return 'ok';
    } else {
      return Promise.reject(new Error('faile'));
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
  uuid_token: getUUID(),
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
