import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  nome: Yup.string().required('O nome é obrigatório'),
  dataNascimento: Yup.date().nullable().required('A data de nascimento é obrigatória'),
  cpf: Yup.string().required('O CPF é obrigatório'),
  sexo: Yup.string().required('O gênero é obrigatório'),
});

export default validationSchema;
