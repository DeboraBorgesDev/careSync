import React, { useEffect } from 'react';
import { Grid, FormHelperText, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { FormikProps } from 'formik'; 
import useStyles from './styles';
import { UsuarioValues } from './container';
import TextInput from '../../inputs/text-input';
import { Permissao } from '../../../services/usuario';

interface UsuarioFormProps {
  fprops: FormikProps<UsuarioValues>;
  disable: boolean;
  permissoes: Permissao[];
}

const UsuarioForm: React.FC<UsuarioFormProps> = ({ fprops, disable, permissoes }) => {
  const classes = useStyles();

  const selectedPermissao = permissoes.find(p => p.id === fprops.values.permissao);

  const isMedico = selectedPermissao?.nome === 'MEDICO';
  const isEnfermeiro = selectedPermissao?.nome === 'ENFERMEIRO';
  const isEstudante = selectedPermissao?.nome === 'ESTUDANTE';


  useEffect(() => {
    fprops.setFieldValue('isEnfermeiro', isEnfermeiro)
    fprops.setFieldValue('isMedico', isMedico)
    fprops.setFieldValue('isEstudante', isEstudante)
  }, [selectedPermissao])


  return (
    <Grid container spacing={2} className={classes.form}>
      <Grid item xs={6}>
        <TextInput
          label="Nome"
          type="text"
          fprops={fprops}
          fkey="nome"
          fullWidth
          disabled={disable}
        />
        {fprops.errors.nome && (
          <FormHelperText error>{fprops.errors.nome}</FormHelperText>
        )}
      </Grid>
      <Grid item xs={6}>
        <TextInput
          label="Email"
          type="email"
          fprops={fprops}
          fkey="email"
          fullWidth
          disabled={disable}
        />
        {fprops.errors.email && (
          <FormHelperText error>{fprops.errors.email}</FormHelperText>
        )}
      </Grid>
      <Grid item xs={6}>
        <TextInput
          label="Senha"
          type="password"
          fprops={fprops}
          fkey="senha"
          fullWidth
          disabled={disable}
        />
        {fprops.errors.senha && (
          <FormHelperText error>{fprops.errors.senha}</FormHelperText>
        )}
      </Grid>
      <Grid item xs={6}>
        <TextInput
          label="CPF"
          type="text"
          fprops={fprops}
          fkey="cpf"
          fullWidth
          disabled={disable}
        />
        {fprops.errors.cpf && (
          <FormHelperText error>{fprops.errors.cpf}</FormHelperText>
        )}
      </Grid>
      <Grid item xs={6}>
        <FormControl variant="standard" fullWidth disabled={disable}>
          <InputLabel id="permissao-label">Permissão</InputLabel>
          <Select
            labelId="permissao-label"
            id="permissao-select"
            value={fprops.values.permissao}
            onChange={(event) => fprops.setFieldValue('permissao', event.target.value)}
          >
            {permissoes.map((permissao) => (
              <MenuItem key={permissao.id} value={permissao.id}>
                {permissao.nome}
              </MenuItem>
            ))}
          </Select>
          {fprops.errors.permissao && (
            <FormHelperText error>{fprops.errors.permissao}</FormHelperText>
          )}
        </FormControl>
      </Grid>
      {isMedico && (
        <Grid item xs={6}>
          <TextInput
            label="CRM"
            type="text"
            fprops={fprops}
            fkey="crm"
            fullWidth
            disabled={disable}
          />
          {fprops.errors.crm && (
            <FormHelperText error>{fprops.errors.crm}</FormHelperText>
          )}
        </Grid>
      )}
      {isEnfermeiro && (
        <Grid item xs={6}>
          <TextInput
            label="COREN"
            type="text"
            fprops={fprops}
            fkey="coren"
            fullWidth
            disabled={disable}
          />
          {fprops.errors.coren && (
            <FormHelperText error>{fprops.errors.coren}</FormHelperText>
          )}
        </Grid>
      )}
      {isEstudante && (
        <Grid item xs={6}>
          <TextInput
            label="Matrícula"
            type="text"
            fprops={fprops}
            fkey="matricula"
            fullWidth
            disabled={disable}
          />
          {fprops.errors.matricula && (
            <FormHelperText error>{fprops.errors.matricula}</FormHelperText>
          )}
        </Grid>
      )}
    </Grid>
  );
};

export default UsuarioForm;
