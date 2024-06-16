import React from 'react';
import { Formik, FormikHelpers, FormikProps } from 'formik';
import useStyles from './styles';
import HPatologico from '.';
import { Button } from '@mui/material';
import { newHPatologico } from '../../../../services/paciente';
import { validationSchema } from './schema';

export interface HPatologicoValues {
  idPaciente: string;
  queixaPrincipal: string;
  historiaDoencaAtual: string;
  possuiDiabetes: boolean;
  possuiHipertensao: boolean;
  possuiDislipidemia: boolean;
  medicacaoContinua: boolean;
  medicacoes: string;
  internadoAnteriormente: boolean;
  cirurgiasAnteriormente: boolean;
  cirurgiasAnterioresObservacoes: string;
  vacinas: string;
  alergias: string;
}

interface HHPatologicoContainerProps {
  handleNext: () => void;
  activeStep: number;
  handleBack: () => void;
  idPaciente: string
}

const HPatologicoContainer: React.FC<HHPatologicoContainerProps> = (
  {
    handleNext,
    activeStep,
    handleBack,
    idPaciente
  }
) => {
  const classes = useStyles();

  const handleSubmit = async (values: HPatologicoValues, { setSubmitting }: FormikHelpers<HPatologicoValues>) => {
    try {
      await newHPatologico(values);
      handleNext();
    } catch (error) {
      //@ts-ignore
      toast.error(error.response.data as string)
    } finally {
      setSubmitting(false); 
    }
  };

  return (
    <Formik<HPatologicoValues>
      initialValues={{
        idPaciente: idPaciente,
        queixaPrincipal: '',
        historiaDoencaAtual: '',
        possuiDiabetes: false,
        possuiHipertensao: false,
        possuiDislipidemia: false,
        medicacaoContinua: true,
        medicacoes: '',
        internadoAnteriormente: false,
        cirurgiasAnteriormente: true,
        cirurgiasAnterioresObservacoes: '',
        vacinas: '',
        alergias: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {(fprops: FormikProps<HPatologicoValues>) => (
        <>
           <HPatologico fprops={fprops} />
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

export default HPatologicoContainer;
