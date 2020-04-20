import request from '../utils/request.js';

/**
 * 登录 获取令牌
 * @param {userName,password} loginData
 */
export function login(loginData) {
  return request({
    url: '/api/user/login',
    method: 'POST',
    data: loginData,
  });
}

/**
 * 携带cookies令牌,获取用户信息
 */
export function getUserInfo() {
  return request({
    url: '/api/user/user-info',
    method: 'GET',
  });
}

/**
 * 退出登录 移除令牌
 */
export function logout() {
  return request({
    url: '/api/user/logout',
    method: 'POST',
  });
}
