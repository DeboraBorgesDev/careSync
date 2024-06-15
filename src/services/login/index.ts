import { api } from "..";
import { Login, User } from "./types";


export function apiLogin(data: Login): Promise<User> {
    return api.request<User>({
      method: 'post',
      url: 'auth/login',
      data,
    }).then(response => response.data);
  }