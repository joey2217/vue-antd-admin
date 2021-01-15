import { AxiosPromise } from 'axios';
import request from '@/utils/request';

export interface LoginData {
  username: string;
  password: string;
}

export function login(data: LoginData): AxiosPromise<{ token: string }> {
  return request({
    url: '/login',
    method: 'POST',
    data,
  });
}

export interface Menu {
  fullPath: string;
  title: string;
  redirect?: string;
  icon?: string;
  children?: Menu[];
}

export interface UserInfo {
  username: string;
  nickname: string;
  roles: string[];
  menus: Menu[];
  avatar?: string;
}

export function getUserInfo(): AxiosPromise<UserInfo> {
  return request({
    url: '/user-info',
    method: 'GET',
  });
}
