import { reqVerification, reqRegister } from '@/api';
const actions = {
  async getVerification({ commit }, phone) {
    let result = await reqVerification(phone);
    if (result.code == 200) {
      commit('GETVERIFICATION', result.data);
      return 'ok';
    } else {
      console.log(Promise.reject(new Error('faile')));
      return Promise.reject(new Error('faile'));
    }
  },
  async getRegister({ commit }, data) {
    console.log(2);
    let result = await reqRegister(data);
    if (result.code == 200) {
      commit('GETREGISTER', result.data);
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
