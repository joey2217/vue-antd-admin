import request from '../utils/request.js';

/**
 * 登录 获取令牌
 * @param {userName,password} loginData
 */
export function login (loginData) {
  return request({
    url: '/api/user/login',
    method: 'POST',
    data: loginData,
  });
}
