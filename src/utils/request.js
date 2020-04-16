import axios from 'axios';
import { message } from 'ant-design-vue';

const axiosInstance = axios.create({
  withCredentials: true, // send cookies when cross-domain requests
});

// 添加请求拦截器
// axiosInstance.interceptors.request.use(function (config) {
//   return config;
// }, function (error) {
//   return Promise.reject(error);
// });

// 添加响应拦截器
axiosInstance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response.data;
}, function (error) {
  // 对响应错误做点什么
  console.error(error);
  message.error(error.message || 'OOPS,出错了!');
  return Promise.reject(error);
});

export default axiosInstance;
