import * as yup from 'yup';

export const hfisiologicaValidationSchema = yup.object({
  metodoParto: yup.string().nullable(),
  experienciaParto: yup.string().nullable(),
  saudeInfancia: yup.string().nullable(),
  pacienteId: yup.string().required('O id do paciente é obrigatório')
});
