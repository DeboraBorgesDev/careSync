import { authApi } from "..";
import { FormValues } from "../../componenets/forms/paciente/informacoes/container";


export function newPaciente(data: FormValues): Promise<any> {
    return authApi.request({
      method: 'post',
      url: 'pacientes',
      data,
    }).then(response => response.data);
  }