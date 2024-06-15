import React from 'react';
import { Grid, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { FormikProps } from 'formik';
import { FormValues } from './container';
import TextInput from '../../../inputs/text-input';
import useStyles from './styles';

interface InformacoesPessoaisProps {
  fprops: FormikProps<FormValues>;
}

const InformacoesPessoais: React.FC<InformacoesPessoaisProps> = ({ fprops }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        <TextInput
          label="Nome"
          type="text"
          fprops={fprops}
          fkey="name"
          fullWidth
          disabled={false}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextInput
          type="date"
          label="Data de Nascimento"
          fprops={fprops}
          fkey="dataNacimento"
          fullWidth
          disabled={false}
          required
          disablePast
          inputVariant="outlined"
          ampm
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextInput
          label="CPF"
          type="text"
          fprops={fprops}
          fkey="cpf"
          fullWidth
          placeholder="999.999.999-99"
          mask="999.999.999-99"
          disabled={false}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Gênero</FormLabel>
          <RadioGroup
            row
            aria-label="gênero"
            name="genero"
            value={fprops.values.genero}
            onChange={(e) => fprops.setFieldValue('genero', e.target.value)}
          >
            <FormControlLabel value="masculino" control={<Radio />} label="Masculino" />
            <FormControlLabel value="feminino" control={<Radio />} label="Feminino" />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={4}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Possui Filhos</FormLabel>
          <RadioGroup
            row
            aria-label="possuiFilhos"
            name="possuiFilhos"
            value={fprops.values.possuiFilhos}
            onChange={(e) => fprops.setFieldValue('possuiFilhos', e.target.value)}
          >
            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
            <FormControlLabel value="nao" control={<Radio />} label="Não" />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextInput
          label="Profissão"
          type="text"
          fprops={fprops}
          fkey="profissao"
          fullWidth
          disabled={false}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextInput
          label="Religião"
          type="text"
          fprops={fprops}
          fkey="religiao"
          fullWidth
          disabled={false}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextInput
          label="Nível de Ensino"
          type="text"
          fprops={fprops}
          fkey="nivelEnsino"
          fullWidth
          disabled={false}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextInput
          label="Endereço"
          type="text"
          fprops={fprops}
          fkey="endereco"
          fullWidth
          disabled={false}
        />
      </Grid>
    </Grid>
  );
};

export default InformacoesPessoais;
