import requests from './requests';
import mockAjax from './mockAjax';

export const ReqCategory = () => requests({ url: '/product/getBaseCategoryList', method: 'GET' });
export const getBannerList = () => mockAjax.get('/banner');
export const reqFloorList = () => mockAjax.get('/floor');
export const reqGetSearch = (params) => requests({ url: '/list', method: 'POST', data: params });
export const reqGoodsList = (skuId) => requests({ url: `/item/${skuId}`, method: 'get' });
export const reqLogin = (skuId, skuNum) => requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: 'post' });
