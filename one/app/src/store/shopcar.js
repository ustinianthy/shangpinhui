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
  async deleteAllCart({ dispatch, getters }) {
    let PromiseAll = [];
    await getters.cartInfoList.cartInfoList.forEach((item) => {
      let a = item.isChecked == 1 ? dispatch('getDelateList', item.skuId) : '';
      PromiseAll.push(a);
    });
    return Promise.all(PromiseAll);
  },
  async last({ dispatch, getters},e) {
    let PromiseAll = [];
    console.log(e.target.checked);
    await getters.cartInfoList.cartInfoList.forEach((item) => {
      console.log(item);
      let a = e.target.checked == true ? dispatch('getSwitchOver', { skuId: item.skuId, isChecked: 1 }) : dispatch('getSwitchOver', { skuId: item.skuId, isChecked: 0 });
      PromiseAll.push(a);
    });
    return Promise.all(PromiseAll);
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
