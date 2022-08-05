import { reqGetSearch } from '@/api/index';
const actions = {
  async getSearch({ commit }, params = {}) {
    let result = await reqGetSearch(params);
    if ((result.code = 200)) {
      commit('GETSEARCH', result.data);
    }
  },
};
const mutations = {
  GETSEARCH(state, searchList) {
    state.searchList = searchList;
  },
};
const state = {
  searchList: {},
};
const getters = {
  goodsList(state) {
    return state.searchList.goodsList || [];
  },
  attrsList(state) {
    return state.searchList.attrsList || [];
  },
  trademarkList(state) {
    return state.searchList.trademarkList || [];
  },
};
export default {
  state,
  mutations,
  actions,
  getters,
};
