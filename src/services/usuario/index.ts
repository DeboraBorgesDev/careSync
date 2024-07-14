import { authApi } from "..";
import { Usuario } from "../login/types";

export type Permissao = {
  id: string;
  authority: string;
  nome: string;
}

export function getAllUsuarios(): Promise<Usuario[]> {
    return authApi.request({
      method: 'get',
      url: 'usuarios',
    }).then(response => response.data);
  }

  export function getAllPermissoes(): Promise<Permissao[]> {
    return authApi.request({
      method: 'get',
      url: 'permissoes',
    }).then(response => response.data);
  }