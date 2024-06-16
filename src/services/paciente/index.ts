import { authApi } from "..";
import { HFamiliarValues } from "../../componenets/forms/paciente/HFamiliar/container";
import { HfisiologicaValues } from "../../componenets/forms/paciente/HFisiologica/container";
import { HPatologicoValues } from "../../componenets/forms/paciente/HPatologico/container";
import { FormValues } from "../../componenets/forms/paciente/informacoes/container";
import { Paciente } from "../../screens/PacientesList";


export function newPaciente(data: FormValues): Promise<any> {
    return authApi.request({
      method: 'post',
      url: 'pacientes',
      data,
    }).then(response => response.data);
  }


export function newHFisiologica(data: HfisiologicaValues): Promise<any> {
  return authApi.request({
    method: 'post',
    url: 'historia-fisiologica',
    data,
  }).then(response => response.data);
}

export function newHPatologico(data: HPatologicoValues): Promise<any> {
  return authApi.request({
    method: 'post',
    url: 'historico-patologico',
    data,
  }).then(response => response.data);
}


export function newHFamiliar(data: HFamiliarValues): Promise<any> {
  return authApi.request({
    method: 'post',
    url: 'historia-familiar',
    data,
  }).then(response => response.data);
}


export function getAllPacientes(): Promise<Paciente[]> {
  return authApi.request({
    method: 'get',
    url: 'pacientes',
  }).then(response => response.data);
}

