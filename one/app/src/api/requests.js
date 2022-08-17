import axios from 'axios';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import store from '@/store';
let requests = axios.create({
  baseURL: '/api',
  timeout: 5000,
});

requests.interceptors.request.use((config) => {
  if (store.state.detail.uuid_token) {
    config.headers.userTempId = store.state.detail.uuid_token;
  }
  NProgress.start();
  return config;
});

requests.interceptors.response.use(
  (res) => {
    NProgress.done();
    return res.data;
  },
  (err) => {
    alert('服务器响应数据失败');
  }
);
export default requests;
