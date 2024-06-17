import { authApi } from "..";
import { User } from "../login/types";

export function getAllUsuarios(): Promise<User[]> {
    return authApi.request({
      method: 'get',
      url: 'usuarios',
    }).then(response => response.data);
  }