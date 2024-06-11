import { Formik, FormikProps } from 'formik';
import InformacoesPessoais from '.';
import useStyles from './styles';


export interface FormValues {
    name: string;
    dataNacimento: string;
    cpf: string;
    genero: string;
    estadoCivil: string;
    possuiFilhos: boolean;
    profissao: string;
    religiao: string;
    nivelEnsino: string;
    endereco: string;
  }
  

  interface InformacoesPessoaisContainerProps {
  }
  
  const InformacoesPessoaisContainer: React.FC<InformacoesPessoaisContainerProps> = (props) => {
    const classes = useStyles();
  
    return (
      <>
        <Formik<FormValues>
          initialValues={{
            name: '',
            dataNacimento: '',
            cpf: '',
            genero: 'm',
            estadoCivil: '',
            possuiFilhos: false,
            profissao: '',
            religiao: '',
            nivelEnsino: '',
            endereco: '',
          }}
          onSubmit={() => {}}
        //   validationSchema={() => {}}
        >
          {(fprops: FormikProps<FormValues>) => (
            <InformacoesPessoais fprops={fprops} />
          )}
        </Formik>
      </>
    );
  };
  


export default InformacoesPessoaisContainer;
