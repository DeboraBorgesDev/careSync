export type Login =  {
    email: string,
    senha: string
}

export interface User {
    id: number;
    name: string;
    email: string;
    token: string;
  }