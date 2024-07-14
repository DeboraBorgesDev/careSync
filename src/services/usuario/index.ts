import { authApi } from "..";
import { UsuarioValues } from "../../componenets/forms/usuario/container";
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


export function createUsuario(usuario: UsuarioValues): Promise<Usuario> {
  return authApi.request({
    method: 'post',
    url: 'usuarios/novo',
    data: usuario,
  }).then(response => response.data);
}

export function editUsuario(usuario: UsuarioValues, id: string): Promise<Usuario> {
  return authApi.request({
    method: 'put',
    url: `usuarios/${id}`,
    data: usuario,
  }).then(response => response.data);
}
