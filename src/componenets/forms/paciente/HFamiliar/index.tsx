import React, { useState } from 'react';
import { Grid, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { getIn, FormikProps } from 'formik';
import { FormValues } from './container';

import TextInput from '../../../inputs/text-input';
import useStyles from './styles';

interface HFamiliarProps {
  fprops: FormikProps<FormValues>;
}

const HFamiliar: React.FC<HFamiliarProps> = ({ fprops }) => {
  const classes = useStyles();
  const [showFilhosObservacoes, setShowFilhosObservacoes] = useState(false);

  const renderRadioGroup = (name: keyof FormValues, label: string) => (
    <FormControl component="fieldset" className={classes.formControl}>
      <FormLabel component="legend">{label}</FormLabel>
      <RadioGroup
        row
        name={name}
        value={getIn(fprops.values, name)}
        onChange={(e) => {
          fprops.setFieldValue(name, e.target.value);
          if (name === 'filhosSaudaveis') {
            setShowFilhosObservacoes(e.target.value === 'false');
          }
        }}
      >
        <FormControlLabel value={true} control={<Radio />} label="Sim" />
        <FormControlLabel value={false} control={<Radio />} label="Não" />
      </RadioGroup>
    </FormControl>
  );

  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <TextInput
          label="Idade de Morte do Pai"
          type="number"
          fprops={fprops}
          fkey="idadeMortePai"
          fullWidth
          disabled={false}
        />
      </Grid>
      <Grid item xs={8}>
        <TextInput
          label="Causa de Morte do Pai"
          type="text"
          fprops={fprops}
          fkey="causaMortePai"
          fullWidth
          disabled={false}
        />
      </Grid>
      <Grid item xs={12}>
        <TextInput
          label="Doenças do Pai"
          type="text"
          fprops={fprops}
          fkey="doencasPai"
          fullWidth
          disabled={false}
        />
      </Grid>
      <Grid item xs={4}>
        <TextInput
          label="Idade de Morte da Mãe"
          type="number"
          fprops={fprops}
          fkey="idadeMorteMae"
          fullWidth
          disabled={false}
        />
      </Grid>
      <Grid item xs={8}>
        <TextInput
          label="Causa de Morte da Mãe"
          type="text"
          fprops={fprops}
          fkey="causaMorteMae"
          fullWidth
          disabled={false}
        />
      </Grid>
      <Grid item xs={12}>
        <TextInput
          label="Doenças da Mãe"
          type="text"
          fprops={fprops}
          fkey="doencasMae"
          fullWidth
          disabled={false}
        />
      </Grid>
      <Grid item xs={12}>
        {renderRadioGroup('filhosSaudaveis', 'Filhos Saudáveis?')}
      </Grid>
      {showFilhosObservacoes && (
        <Grid item xs={12}>
          <TextInput
            label="Observações sobre os Filhos"
            type="text"
            fprops={fprops}
            fkey="filhosObservacoes"
            fullWidth
            disabled={false}
          />
        </Grid>
      )}
      <Grid item xs={12}>
        <TextInput
          label="Histórico de Saúde de Parentes"
          type="text"
          fprops={fprops}
          fkey="historicoSaudeParentes"
          fullWidth
          disabled={false}
          multiline
        />
      </Grid>
    </Grid>
  );
};

export default HFamiliar;
