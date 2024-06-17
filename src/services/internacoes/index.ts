
import { authApi } from "..";
import { Paciente } from "../../screens/PacientesList";
import { User } from "../login/types";

export interface Internacao {
  id: string;
  paciente: Paciente;
  dataEntrada: string; 
  dataSaida: string;
  motivo: string;
  diagnostico: string;
  observacoes: string;
  medico: User;
}




export function getAllInternacoes(): Promise<Internacao[]> {
  return authApi.request({
    method: 'get',
    url: `internacao`,
  }).then(response => response.data);
}



