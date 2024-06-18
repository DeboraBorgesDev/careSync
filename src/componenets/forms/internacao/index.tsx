import React from 'react';
import { Autocomplete, Grid, TextField, FormHelperText } from '@mui/material';
import { FormikProps } from 'formik'; 
import useStyles from './styles';
import { InternacaoValues } from './container';
import TextInput from '../../inputs/text-input';
import { Paciente } from '../../../screens/PacientesList';
import { User } from '../../../services/login/types';

interface InternacaoFormProps {
  fprops: FormikProps<InternacaoValues>;
  disable: boolean;
  pacientes: Paciente[];
  medicos: User[];
}

const InternacaoForm: React.FC<InternacaoFormProps> = ({ fprops, disable, pacientes, medicos }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={2} className={classes.form}>
      {(!!pacientes && !!medicos) && (
        <>
          <Grid item xs={8} sm={12}>
            <Autocomplete
              options={pacientes}
              getOptionLabel={(option: Paciente) => option.nome}
              value={pacientes.find(p => p.id === fprops.values.idPaciente) || null}
              onChange={(event, value) => fprops.setFieldValue('idPaciente', value ? value.id : null)}
              renderInput={(params) => (
                <>
                  <TextField 
                    {...params} 
                    label="Paciente" 
                    variant="standard" 
                    disabled={disable} 
                    fullWidth 
                  />
                  {fprops.errors.idPaciente && (
                    <FormHelperText error>{fprops.errors.idPaciente}</FormHelperText>
                  )}
                </>
              )}
            />
          </Grid>
          <Grid item xs={8} sm={12}>
            <Autocomplete
              options={medicos}
              getOptionLabel={(option: User) => option.nome}
              value={medicos.find(m => m.id === fprops.values.idMedico) || null}
              onChange={(event, value) => fprops.setFieldValue('idMedico', value ? value.id : null)}
              renderInput={(params) => (
                <>
                  <TextField 
                    {...params} 
                    label="Médico" 
                    variant="standard" 
                    disabled={disable} 
                    fullWidth 
                  />
                  {fprops.errors.idMedico && (
                    <FormHelperText error>{fprops.errors.idMedico}</FormHelperText>
                  )}
                </>
              )}
            />
          </Grid>
        </>
      )}
      <Grid item xs={8} sm={12}>
        <TextInput
          label="Motivo"
          type="text"
          fprops={fprops}
          fkey="motivo"
          fullWidth
          disabled={disable}
        />
      </Grid>
      <Grid item xs={8} sm={12}>
        <TextInput
          label="Diagnóstico"
          type="text"
          fprops={fprops}
          fkey="diagnostico"
          fullWidth
          disabled={disable}
        />
        {fprops.errors.diagnostico && (
          <FormHelperText error>{fprops.errors.diagnostico}</FormHelperText>
        )}
      </Grid>
      <Grid item xs={8} sm={12}>
        <TextInput
          label="Observações"
          type="text"
          fprops={fprops}
          fkey="observacoes"
          fullWidth
          disabled={disable}
        />
        {fprops.errors.observacoes && (
          <FormHelperText error>{fprops.errors.observacoes}</FormHelperText>
        )}
      </Grid>
    </Grid>
  );
};

export default InternacaoForm;
