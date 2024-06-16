import React from 'react';
import { Grid } from '@mui/material';
import { FormikProps } from 'formik'; // Corrigir o caminho de importação se necessário
import TextInput from '../../../inputs/text-input';
import useStyles from './styles';
import { HfisiologicaValues } from './container';

interface HFisiologicaProps {
  fprops: FormikProps<HfisiologicaValues>;
}

const HFisiologica: React.FC<HFisiologicaProps> = ({ fprops }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12}>
        <TextInput
          label="Método de Parto"
          type="text"
          fprops={fprops}
          fkey="metodoParto"
          fullWidth
          disabled={false}
        />
      </Grid>
      <Grid item xs={12} sm={12}>
        <TextInput
          label="Experiência de Parto"
          type="text"
          fprops={fprops}
          fkey="experienciaParto"
          fullWidth
          disabled={false}
        />
      </Grid>
      <Grid item xs={12} sm={12}>
        <TextInput
          label="Saúde na Infância"
          type="text"
          fprops={fprops}
          fkey="saudeInfancia"
          fullWidth
          disabled={false}
        />
      </Grid>
    </Grid>
  );
};

export default HFisiologica;
