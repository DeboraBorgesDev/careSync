export type Login =  {
    email: string,
    senha: string
}

export interface User {
    id: string;
    nome: string;
    email: string;
    token: string;
    medico: boolean;
  }


export  interface Permissao {
    id: string;
    nome: string;
    authority: string;
  }
  
export  interface Usuario {
    id: string;
    nome: string;
    email: string;
    senha: string;
    crm: string;
    cpf: string;
    coren: string;
    matricula: string | null;
    permissao: Permissao;
    token: string | null;
    password: string;
    authorities: Permissao[];
    username: string;
    medico: boolean;
    enfermeiro: boolean;
    estudante: boolean;
    accountNonExpired: boolean;
    accountNonLocked: boolean;
    credentialsNonExpired: boolean;
    enabled: boolean;
  }
  