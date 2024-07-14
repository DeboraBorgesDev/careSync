import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  nome: Yup.string().required('O nome é obrigatório'),
  email: Yup.string().email('Email inválido').required('O email é obrigatório'),
  senha: Yup.string().required('A senha é obrigatória'),
  cpf: Yup.string().required('O CPF é obrigatório'),
  crm: Yup.string().when('isMedico', {
    is: (val: boolean) => val === true,
    then: (schema) => schema.required('O CRM é obrigatório para médicos'),
  }),
  coren: Yup.string().when('isEnfermeiro', {
    is: (val: boolean) => val === true,
    then: (schema) => schema.required('O COREN é obrigatório'),
  }),
  matricula: Yup.string().when('isEstudante', {
    is: (val: boolean) => val === true,
    then: (schema) => schema.required('A matrícula é obrigatória para estudantes'),
  }),
  permissao: Yup.string().required('A permissão é obrigatória'),
});

export default validationSchema;
