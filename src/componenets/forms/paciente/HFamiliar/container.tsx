import React from 'react';
import { Formik, FormikHelpers, FormikProps } from 'formik';
import HFamiliar from '.';
import { Button } from '@mui/material';
import useStyles from './styles';
import { newHFamiliar } from '../../../../services/paciente';
import { validationSchema } from './schema';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


export interface HFamiliarValues {
  pacienteId: string;
  idadeMortePai: number ;
  causaMortePai: string;
  idadeMorteMae: number;
  causaMorteMae: string;
  doencasMae: string;
  doencasPai: string;
  filhosSaudaveis: boolean;
  filhosObservacoes: string;
  historicoSaudeParentes: string;
}

interface HFamiliarContainerProps {
  handleNext: () => void;
  activeStep: number;
  handleBack: () => void;
  idPaciente: string
}

const HFamiliarContainer: React.FC<HFamiliarContainerProps> = (
  {
    handleNext,
    activeStep,
    handleBack,
    idPaciente
  }
) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleSubmit = async (values: HFamiliarValues, { setSubmitting }: FormikHelpers<HFamiliarValues>) => {
    try {
      await newHFamiliar(values);
      navigate('/paciente/lista');
    } catch (error) {
      //@ts-ignore
      toast.error(error.response.data as string)
    } finally {
      setSubmitting(false); 
    }
  };

  return (
    <Formik<HFamiliarValues>
      initialValues={{
        pacienteId: idPaciente,
        idadeMortePai: 0,
        causaMortePai: '',
        idadeMorteMae: 0,
        causaMorteMae: '',
        doencasMae: '',
        doencasPai: '',
        filhosSaudaveis: true,
        filhosObservacoes: '',
        historicoSaudeParentes: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(fprops: FormikProps<HFamiliarValues>) => {
        return (
          <>
            <HFamiliar fprops={fprops} />
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
        )
      }}
    </Formik>
  );
};

export default HFamiliarContainer;
