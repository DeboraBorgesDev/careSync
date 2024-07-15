import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  idPaciente: Yup.string().required('Paciente é obrigatório'),
  idProfissional: Yup.string().required('Profissional é obrigatório'),
  freqCardiaca: Yup.number()
    .required('Frequência Cardíaca é obrigatória')
    .min(1, 'Frequência Cardíaca deve ser maior que 0'),
  pressaoArterial: Yup.string().required('Pressão Arterial é obrigatória'),
  oxigenacao: Yup.number()
    .required('Oxigenação é obrigatória')
    .min(1, 'Oxigenação deve ser maior que 0'),
});

export default validationSchema;
