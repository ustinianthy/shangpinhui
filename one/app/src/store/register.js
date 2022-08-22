import { reqVerification } from '@/api';
const actions = {
  async getVerification({ commit }, phone) {
    let result = await reqVerification(phone);
    if (result.code == 200) {
      commit('GETVERIFICATION', result.data);
      return 'ok';
    } else {
      return Promise.reject(new Error('faile'));
    }
  },
};
const mutations = {
  GETVERIFICATION(state, code) {
    state.code = code;
  },
};
const state = {
  code: '',
};
const getters = {};

export default {
  actions,
  mutations,
  state,
  getters,
};
