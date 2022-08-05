import { ReqCategory, getBannerList, reqFloorList} from '@/api';
const actions = {
  async categoryList({ commit }) {
    let result = await ReqCategory();
    if (result.code == 200) {
      commit('CATEGORYLIST', result.data);
    }
  },

  async getBanner({ commit }) {
    let result = await getBannerList();
    if (result.code == 200) {
      commit('GETBANNER', result.data);
    }
  },

  async getFloorList({commit}) {
    let result = await reqFloorList();
    if(result.code == 200) {
      commit('GETFLOORLIST', result.data)
    }
  }
};
const mutations = {
  CATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList;
  },
  GETBANNER(state, getBanner) {
    state.getBanner = getBanner;
  },
  GETFLOORLIST(state, getFloorList) {
    state.getFloorList = getFloorList
  }
};
const state = {
  categoryList: [],
  getBanner: [],
  getFloorList: []
};
const getters = {};
export default {
  state,
  mutations,
  actions,
  getters,
};
