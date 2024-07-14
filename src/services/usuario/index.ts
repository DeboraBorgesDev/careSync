import { authApi } from "..";
import { Usuario } from "../login/types";

export function getAllUsuarios(): Promise<Usuario[]> {
    return authApi.request({
      method: 'get',
      url: 'usuarios',
    }).then(response => response.data);
  }