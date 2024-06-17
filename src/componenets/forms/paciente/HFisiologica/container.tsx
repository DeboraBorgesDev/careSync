import React, { useState } from 'react';
import { Formik, FormikHelpers, FormikProps } from 'formik';
import useStyles from './styles';
import HFisiologica from '.';
import { Button } from '@mui/material';
import { Hfisiologica, editHFisiologica, newHFisiologica } from '../../../../services/paciente';
import { hfisiologicaValidationSchema } from './schema';
import { toast } from 'react-toastify';

export interface HfisiologicaValues {
  metodoParto: string;
  experienciaParto: string;
  saudeInfancia: string;
  pacienteId: string;
}

interface HFisiologicaContainerProps {
  handleNext?: () => void;
  activeStep?: number;
  handleBack?: () => void;
  idPaciente?: string;
  hFisiologica?: Hfisiologica;
}

const HFisiologicaContainer: React.FC<HFisiologicaContainerProps> = (
  {
    handleNext,
    activeStep,
    handleBack,
    idPaciente,
    hFisiologica = null,
  }
) => {
  const classes = useStyles();
  const isEdit = hFisiologica !== null;
  const [disable, setDisable] = useState(isEdit);

  const handleSubmitHfisiologica = async (
    values: HfisiologicaValues, 
    { setSubmitting }: FormikHelpers<HfisiologicaValues>
  ) => {
    try {
      if (isEdit) {
        await editHFisiologica(values, hFisiologica.experienciaParto as string);
        setDisable(true);
      } else {
        await newHFisiologica(values);
        if (handleNext) {
          handleNext();
        }
      }
    } catch (error) {
      // @ts-ignore
      toast.error(error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik<HfisiologicaValues>
      initialValues={{
        metodoParto: hFisiologica?.metodoParto || '',
        experienciaParto: hFisiologica?.experienciaParto || '',
        saudeInfancia: hFisiologica?.saudeInfancia || '',
        pacienteId: hFisiologica?.paciente.id || idPaciente as string ,
      }}
      onSubmit={handleSubmitHfisiologica}
      validationSchema={hfisiologicaValidationSchema}
    >
      {(fprops: FormikProps<HfisiologicaValues>) => (
        <>
          <HFisiologica fprops={fprops} disable={disable} />
          <div className={classes.buttons}>
            {isEdit ? (
              <>
                <Button
                  disabled={!disable}
                  onClick={() => setDisable(false)}
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
  );
};

export default HFisiologicaContainer;
