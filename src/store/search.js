import {reqGetSearchInfo} from '@/api';
const actions = { 
  async getSearchList({commit}, params = {}){
      console.log(params);
    let result = await reqGetSearchInfo(params)
    if(result.code==200){
        commit("GETSEARCHLIST",result.data)
    }
  }
};
const mutations = {
    GETSEARCHLIST(state,searchList){
        state.searchList = searchList
    }
};
const state = {searchList:{}};
const getters = {
    attrsList(state){
        return state.searchList.attrsList || [];
    },
    goodsList(state){
        return state.searchList.goodsList || [];
    },
    trademarkList(state){
        return state.searchList.trademarkList || [];
    },
}
export default {
    actions,
    mutations,
    state ,
    getters
}