import { Formik, FormikHelpers, FormikProps } from 'formik';
import InformacoesPessoais from '.';
import useStyles from './styles';
import validationSchema from './schema';
import { Button } from '@mui/material';
import { editInformacoes, newPaciente } from '../../../../services/paciente';
import { toast } from 'react-toastify';
import { Paciente } from '../../../../screens/PacientesList';
import { useState } from 'react';


export interface FormValues {
    nome: string;
    dataNascimento: string | null;
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
    handleNext?: () => void;
    activeStep?: number;
    handleBack?: () => void;
    setIdPaciente?: (id: string) => void;
    paciente?: Paciente 

  }
  const InformacoesPessoaisContainer: React.FC<InformacoesPessoaisContainerProps> = ({
    handleNext,
    activeStep,
    handleBack,
    setIdPaciente,
    paciente = null
  }) => {
    const classes = useStyles();
    const isEdit = paciente !== null;
    const [disable, setDisable] = useState(isEdit)
  
  
    const handleSubmit = async (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
      try {
        if(isEdit){
          await editInformacoes(values, paciente.id);
          setDisable(true);
        }else {
          const paciente = await newPaciente(values);
          if(setIdPaciente){
            setIdPaciente(paciente.id)
          }
          if(handleNext){
            handleNext();
          }
        }
        
      } catch (error) {
        //@ts-ignore
        toast.error(error.message)
      } finally {
        setSubmitting(false); 
      }
    };
  
    return (
      <>
        <Formik<FormValues>
          initialValues={{
            nome: paciente?.nome || '',
            dataNascimento: paciente?.dataNascimento || null,
            cpf: paciente?.cpf || '',
            sexo: paciente?.sexo || 'm',
            estadoCivil: paciente?.estadoCivil || '',
            possuiFilhos: paciente?.possuiFilhos || false,
            profissao: paciente?.profissao || '',
            religiao: paciente?.religiao || '',
            nivelEnsino: paciente?.nivelEnsino || '',
            endereco: paciente?.endereco || '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {(fprops: FormikProps<FormValues>) => (
           <>
            <InformacoesPessoais fprops={fprops} disable={disable} isEdit={isEdit} />
            <div className={classes.buttons}>
              {isEdit ? (
                <>
                <Button
                  disabled={!disable}
                  onClick={(prev) => setDisable(!prev)}
                  style={{ marginRight: 10 }}
                >
                  Editar
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit" 
                  onClick={fprops.submitForm}
                  disabled={disable}
                >
                  Salvar
                </Button>
                </>
              ) : (
                <>
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
                </>
              )}
            </div>
           </>
          )}
        </Formik>
      </>
    );
  };
  

export default InformacoesPessoaisContainer;
