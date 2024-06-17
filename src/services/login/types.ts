export type Login =  {
    email: string,
    senha: string
}

export interface User {
    id: number;
    nome: string;
    email: string;
    token: string;
  }