import { authApi } from "..";
import { HfisiologicaValues } from "../../componenets/forms/paciente/HFisiologica/container";
import { FormValues } from "../../componenets/forms/paciente/informacoes/container";


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