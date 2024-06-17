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