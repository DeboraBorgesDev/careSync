
import { authApi } from "..";
import { InternacaoValues } from "../../componenets/forms/internacao/container";
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

export function getAllInternacoesByPaciente(id: string): Promise<Internacao[]> {
  return authApi.request({
    method: 'get',
    url: `internacao/paciente/${id}`,
  }).then(response => response.data);
}

export function newInternacao(data: InternacaoValues): Promise<any> {
  return authApi.request({
    method: 'post',
    url: 'internacao',
    data,
  }).then(response => response.data);
}

export function editInternacao(data: InternacaoValues, id: string): Promise<any> {
  return authApi.request({
    method: 'put',
    url: `internacao/${id}`,
    data,
  }).then(response => response.data);
}

