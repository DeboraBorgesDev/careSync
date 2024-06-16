import React from 'react';
import { Formik, FormikHelpers, FormikProps } from 'formik';
import useStyles from './styles';
import HFisiologica from '.';
import { Button } from '@mui/material';
import { newHFisiologica } from '../../../../services/paciente';
import { hfisiologicaValidationSchema } from './schema';

export interface HfisiologicaValues {
  metodoParto: string;
  experienciaParto: string;
  saudeInfancia: string;
  pacienteId: string;
}

interface HFisiologicaContainerProps {
  handleNext: () => void;
  activeStep: number;
  handleBack: () => void;
  idPaciente: string
}

const HFisiologicaContainer: React.FC<HFisiologicaContainerProps> = (
  {
    handleNext,
    activeStep,
    handleBack,
    idPaciente
  }
) => {
  const classes = useStyles();

  const handleSubmit = async (values: HfisiologicaValues, { setSubmitting }: FormikHelpers<HfisiologicaValues>) => {
    try {
      await newHFisiologica(values);
      handleNext();
    } catch (error) {
      //@ts-ignore
      toast.error(error.response.data as string)
    } finally {
      setSubmitting(false); 
    }
  };

  return (
    <Formik<HfisiologicaValues>
      initialValues={{
        metodoParto: '',
        experienciaParto: '',
        saudeInfancia: '',
        pacienteId: idPaciente,
      }}
      onSubmit={handleSubmit}
      validationSchema={hfisiologicaValidationSchema}
    >
      {(fprops: FormikProps<HfisiologicaValues>) => (
        <>
          <HFisiologica fprops={fprops} />
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
  );
};

export default HFisiologicaContainer;
