import React from 'react';
import { Formik, FormikProps } from 'formik';
import useStyles from './styles';
import HPatologico from '.';
export interface FormValues {
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

interface HHPatologicoContainerProps {}

const HPatologicoContainer: React.FC<HHPatologicoContainerProps> = (props) => {
  const classes = useStyles();

  return (
    <Formik<FormValues>
      initialValues={{
        idPaciente: '77054aee-c6a4-439d-b3d2-faea44c414ed',
        queixaPrincipal: 'Dor abdominal',
        historiaDoencaAtual: 'Paciente apresenta dor abdominal há 2 dias...',
        possuiDiabetes: false,
        possuiHipertensao: false,
        possuiDislipidemia: false,
        medicacaoContinua: true,
        medicacoes: 'Medicamento X, Medicamento Y',
        internadoAnteriormente: false,
        cirurgiasAnteriormente: true,
        cirurgiasAnterioresObservacoes: 'Cirurgia de apendicite realizada em 2018',
        vacinas: 'Vacina A, Vacina B',
        alergias: 'Alergia a penicilina',
      }}
      onSubmit={() => {}}
      // validationSchema={() => {}}
    >
      {(fprops: FormikProps<FormValues>) => (
        <HPatologico fprops={fprops} />
      )}
    </Formik>
  );
};

export default HPatologicoContainer;
