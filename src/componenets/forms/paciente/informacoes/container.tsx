import { Formik, FormikHelpers, FormikProps } from 'formik';
import InformacoesPessoais from '.';
import useStyles from './styles';
import validationSchema from './schema';
import { Button } from '@mui/material';
import { newPaciente } from '../../../../services/paciente';
import { toast } from 'react-toastify';


export interface FormValues {
    nome: string;
    dataNascimento: Date | null;
    cpf: string;
    sexo: string;
    estadoCivil: string;
    possuiFilhos: boolean;
    profissao: string;
    religiao: string;
    nivelEnsino: string;
    endereco: string;
  }
  

  interface InformacoesPessoaisContainerProps {
    handleNext: () => void;
    activeStep: number;
    handleBack: () => void;

  }
  const InformacoesPessoaisContainer: React.FC<InformacoesPessoaisContainerProps> = ({
    handleNext,
    activeStep,
    handleBack
  }) => {
    const classes = useStyles();
  
  
    const handleSubmit = async (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
      try {
        await newPaciente(values);
        handleNext();
      } catch (error) {
        //@ts-ignore
        toast.error(error.response.data as string)
        console.error('Erro ao criar novo paciente:', error);
      } finally {
        setSubmitting(false); 
      }
    };
  
    return (
      <>
        <Formik<FormValues>
          initialValues={{
            nome: '',
            dataNascimento: null,
            cpf: '',
            sexo: 'm',
            estadoCivil: '',
            possuiFilhos: false,
            profissao: '',
            religiao: '',
            nivelEnsino: '',
            endereco: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {(fprops: FormikProps<FormValues>) => (
           <>
            <InformacoesPessoais fprops={fprops} />
            <div className={classes.buttons}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                style={{ marginRight: 10 }}
              >
                Voltar
              </Button>
              <Button
                variant="contained"
                color="primary"
                type="submit" 
                onClick={fprops.submitForm}
                disabled={!fprops.isValid}
              >
                {activeStep === 3 ? 'Finalizar' : 'Próximo'}
              </Button>
            </div>
           </>
          )}
        </Formik>
      </>
    );
  };
  

export default InformacoesPessoaisContainer;
