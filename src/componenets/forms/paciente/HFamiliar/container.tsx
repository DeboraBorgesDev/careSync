import React from 'react';
import { Formik, FormikProps } from 'formik';
import HFamiliar from '.';

export interface FormValues {
  pacienteId: string;
  idadeMortePai: number | null;
  causaMortePai: string;
  idadeMorteMae: number | null;
  causaMorteMae: string;
  doencasMae: string;
  doencasPai: string;
  filhosSaudaveis: boolean;
  filhosObservacoes: string;
  historicoSaudeParentes: string;
}

interface HFamiliarContainerProps {}

const HFamiliarContainer: React.FC<HFamiliarContainerProps> = (props) => {
  return (
    <Formik<FormValues>
      initialValues={{
        pacienteId: '',
        idadeMortePai: null,
        causaMortePai: '',
        idadeMorteMae: null,
        causaMorteMae: '',
        doencasMae: '',
        doencasPai: '',
        filhosSaudaveis: false,
        filhosObservacoes: '',
        historicoSaudeParentes: '',
      }}
      onSubmit={(values) => {
        // Aqui você pode fazer o que quiser com os valores do formulário após o envio
        console.log(values);
      }}
    >
      {(fprops: FormikProps<FormValues>) => <HFamiliar fprops={fprops} />}
    </Formik>
  );
};

export default HFamiliarContainer;
