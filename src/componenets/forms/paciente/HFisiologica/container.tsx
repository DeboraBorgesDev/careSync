import React from 'react';
import { Formik, FormikProps } from 'formik';
import useStyles from './styles';
import HFisiologica from '.';

export interface FormValues {
  metodoParto: string;
  experienciaParto: string;
  saudeInfancia: string;
}

interface HFisiologicaContainerProps {}

const HFisiologicaContainer: React.FC<HFisiologicaContainerProps> = (props) => {
  const classes = useStyles();

  return (
    <Formik<FormValues>
      initialValues={{
        metodoParto: '',
        experienciaParto: '',
        saudeInfancia: '',
      }}
      onSubmit={() => {}}
      // validationSchema={() => {}}
    >
      {(fprops: FormikProps<FormValues>) => (
        <HFisiologica fprops={fprops} />
      )}
    </Formik>
  );
};

export default HFisiologicaContainer;
