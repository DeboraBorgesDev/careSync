import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  idPaciente: Yup.string().required('O paciente é obrigatório'),
  idMedico: Yup.string().required('O médico é obrigatório'),
  motivo: Yup.string().required('O motivo é obrigatório'),
  observacoes: Yup.string(),
});

export default validationSchema;
