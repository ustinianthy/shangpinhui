import { reqCartList, reqDeleteCartById, reqUpdateCheckedByid } from '@/api';
const actions = {
  async getCartList({ commit }) {
    let result = await reqCartList();
    if (result.code == 200) {
      commit('GETCARTLIST', result.data);
    }
  },

  async deleteCartListBySkuId({ commit }, skuId) {
    let result = await reqDeleteCartById(skuId);
    if (result.code == 200) {
      return 'of';
    } else {
      return Promise.reject(new Error('faile'));
    }
  },
  // 修改购物车某一个产品的选中状态
  async updateCheckedById({ commit }, { skuId, isChecked }) {
    let result = await reqUpdateCheckedByid(skuId, isChecked);
    if (result.code == 200) {
      return 'ok';
    } else {
      return Promise.reject(new Error('faile'));
    }
  },
  // 删除全部勾选的产品
  deleteAllCheckedCart({ dispatch, getters }) {
    let PromiseAll = [];
    getters.cartList.cartInfoList.forEach((item) => {
      let promise = item.isChecked == 1 ? dispatch('deleteCartListBySkuId', item.skuId) : '';
      PromiseAll.push(promise);
    });
    return Promise.all(PromiseAll);
  },
  updateAllCartIsChecked({ dispatch, state }, isChecked) {
    let promiseAll = [];
    state.cartList[0].cartInfoList.forEach((item) => {
      let promise = dispatch('updateCheckedById', {
        skuId: item.skuId,
        isChecked,
      });
      promiseAll.push(promise);
    });
    return Promise.all(promiseAll);
  },
};
const mutations = {
  GETCARTLIST(state, cartList) {
    state.cartList = cartList;
  },
};
const state = {
  cartList: [],
};
const getters = {
  cartList(state) {
    return state.cartList[0] || {};
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
