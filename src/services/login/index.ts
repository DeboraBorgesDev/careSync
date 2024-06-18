import { api } from "..";
import { Login, User } from "./types";


export function apiLogin(data: Login): Promise<User> {
    return api.request<User>({
      method: 'post',
      url: 'auth/login',
      data,
    }).then(response => response.data);
  }

export function validateToken(token: string): Promise<User> {
    return api.request<User>({
      method: 'get',
      url: `auth/validate?token=${token}`,
    }).then(response => response.data);
  }