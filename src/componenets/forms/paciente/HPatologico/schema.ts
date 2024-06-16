import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  idPaciente: Yup.string().required('ID do paciente é obrigatório'),
  queixaPrincipal: Yup.string().required('Queixa principal é obrigatória'),
});

