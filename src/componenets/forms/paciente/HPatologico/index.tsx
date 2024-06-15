import React from 'react';
import { Grid, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { getIn, FormikProps } from 'formik';
import { FormValues } from './container';
import useStyles from './styles';
import TextInput from '../../../inputs/text-input';

interface HPatologicoProps {
  fprops: FormikProps<FormValues>;
}

const HPatologico: React.FC<HPatologicoProps> = ({ fprops }) => {
  const classes = useStyles();

 

  const renderRadioGroup = (name: keyof FormValues, label: string) => (
    <FormControl component="fieldset" className={classes.formControl}>
      <FormLabel component="legend">{label}</FormLabel>
      <RadioGroup
        row
        name={name}
        value={getIn(fprops.values, name)}
        onChange={(e) => {
            const formatted = e.target.value === 'true' ? true : false;
            fprops.setFieldValue(name, formatted)
            }
        }
      >
        <FormControlLabel value={true} control={<Radio />} label="Sim" />
        <FormControlLabel value={false} control={<Radio />} label="Não" />
      </RadioGroup>
    </FormControl>
  );

  console.log(fprops.values)

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextInput
          label="Queixa Principal"
          type="text"
          fprops={fprops}
          fkey="queixaPrincipal"
          fullWidth
          disabled={false}
          multiline
        />
      </Grid>
      <Grid item xs={12}>
        <TextInput
          label="História da Doença Atual"
          type="text"
          fprops={fprops}
          fkey="historiaDoencaAtual"
          fullWidth
          disabled={false}
          multiline
        />
      </Grid>
      <Grid item xs={3}>
        {renderRadioGroup('possuiDiabetes', 'Possui Diabetes?')}
      </Grid>
      <Grid item xs={3}>
        {renderRadioGroup('possuiHipertensao', 'Possui Hipertensão?')}
      </Grid>
      <Grid item xs={3}>
        {renderRadioGroup('possuiDislipidemia', 'Possui Dislipidemia?')}
      </Grid>
      <Grid item xs={3}>
        {renderRadioGroup('internadoAnteriormente', 'Internado Anteriormente')}
      </Grid>
      <Grid item xs={12}>
        {renderRadioGroup('medicacaoContinua', 'Medicação Contínua?')}
      </Grid>
      {fprops.values.medicacaoContinua && (
        <Grid item xs={12}>
          <TextInput
            label="Quais medicações?"
            type="text"
            fprops={fprops}
            fkey="medicacoes"
            fullWidth
            disabled={false}
            multiline
          />
        </Grid>
      )}
      <Grid item xs={3}>
        {renderRadioGroup('cirurgiasAnteriormente', 'Cirurgias Anteriormente?')}
      </Grid>
      {fprops.values.cirurgiasAnteriormente && (
        <Grid item xs={12}>
          <TextInput
            label="Cirurgias Anteriores Observações"
            type="text"
            fprops={fprops}
            fkey="cirurgiasAnterioresObservacoes"
            fullWidth
            disabled={false}
            multiline
          />
        </Grid>
      )}
      <Grid item xs={12}>
        <TextInput
          label="Vacinas"
          type="text"
          fprops={fprops}
          fkey="vacinas"
          fullWidth
          disabled={false}
          multiline
        />
      </Grid>
      <Grid item xs={12}>
        <TextInput
          label="Alergias"
          type="text"
          fprops={fprops}
          fkey="alergias"
          fullWidth
          disabled={false}
          multiline
        />
      </Grid>
    </Grid>
  );
};

export default HPatologico;
