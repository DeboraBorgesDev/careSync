import React, { useEffect, useState } from 'react';
import { Autocomplete, Grid, TextField, Button, InputAdornment } from '@mui/material';
import { FormikProps } from 'formik'; 
import useStyles from './styles';
import { SinaisValues } from './container';
import { Paciente } from '../../../screens/PacientesList';
import { useAuth } from '../../../hooks/auth';

interface SinaisFormProps {
  fprops: FormikProps<SinaisValues>;
  disable: boolean;
  pacientes: Paciente[];
  onShow: (value: boolean) => void;
  showSinaisInputs: boolean;
  setShowSinaisInputs: (value: boolean) => void;
}

const SinaisForm: React.FC<SinaisFormProps> = (
  { 
    fprops, 
    disable, 
    pacientes, 
    onShow, 
    showSinaisInputs,
    setShowSinaisInputs
  }) => {
  const classes = useStyles();
  const {user} = useAuth();


  const handleNextClick = () => {
    setShowSinaisInputs(true);
    onShow(true);
  };

  useEffect(() => {
    if(user){
      fprops.setFieldValue('idProfissional', user.id)
    }
  }, [user])

  console.log(fprops)


  return (
    <Grid container spacing={2} className={classes.form}>
      {!showSinaisInputs && (
        <Grid container item xs={6} className={classes.selecaoPaciente} spacing={2}>
          <Grid item xs={12}>
            <Autocomplete
              options={pacientes}
              getOptionLabel={(option: Paciente) => option.nome}
              onChange={(event, value) => fprops.setFieldValue('idPaciente', value?.id || '')}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Selecione o paciente"
                  variant="outlined"
                  fullWidth
                  error={Boolean(fprops.errors.idPaciente && fprops.touched.idPaciente)}
                  helperText={fprops.errors.idPaciente && fprops.touched.idPaciente ? fprops.errors.idPaciente : ''}
                />
              )}
              value={pacientes.find(p => p.id === fprops.values.idPaciente) || null}
              disabled={disable}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleNextClick}
              disabled={!fprops.values.idPaciente}
            >
              Próximo
            </Button>
          </Grid>
        </Grid>
      )}

      {showSinaisInputs && (
        <>
          <Grid item xs={4}>
            <TextField
              label="Frequência Cardíaca"
              variant="outlined"
              fullWidth
              type="number"
              name="freqCardiaca"
              value={fprops.values.freqCardiaca}
              onChange={fprops.handleChange}
              onBlur={fprops.handleBlur}
              error={Boolean(fprops.errors.freqCardiaca && fprops.touched.freqCardiaca)}
              helperText={fprops.errors.freqCardiaca && fprops.touched.freqCardiaca ? fprops.errors.freqCardiaca : ''}
              disabled={disable}
              InputProps={{
                endAdornment: <InputAdornment position="end">bpm</InputAdornment>,
              }}
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              label="Frequência Respiratória"
              variant="outlined"
              fullWidth
              type="number"
              name="freqRespiratoria"
              value={fprops.values.freqRespiratoria}
              onChange={fprops.handleChange}
              onBlur={fprops.handleBlur}
              error={Boolean(fprops.errors.freqRespiratoria && fprops.touched.freqRespiratoria)}
              helperText={fprops.errors.freqRespiratoria && fprops.touched.freqRespiratoria ? fprops.errors.freqRespiratoria : ''}
              disabled={disable}
              InputProps={{
                endAdornment: <InputAdornment position="end">rpm</InputAdornment>,
              }}
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              label="Pressão Arterial"
              variant="outlined"
              fullWidth
              name="pressaoArterial"
              value={fprops.values.pressaoArterial}
              onChange={fprops.handleChange}
              onBlur={fprops.handleBlur}
              error={Boolean(fprops.errors.pressaoArterial && fprops.touched.pressaoArterial)}
              helperText={fprops.errors.pressaoArterial && fprops.touched.pressaoArterial ? fprops.errors.pressaoArterial : ''}
              disabled={disable}
              InputProps={{
                endAdornment: <InputAdornment position="end">mmHg</InputAdornment>,
              }}
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              label="Constipação"
              variant="outlined"
              fullWidth
              name="constipacao"
              value={fprops.values.constipacao}
              onChange={fprops.handleChange}
              onBlur={fprops.handleBlur}
              error={Boolean(fprops.errors.constipacao && fprops.touched.constipacao)}
              helperText={fprops.errors.constipacao && fprops.touched.constipacao ? fprops.errors.constipacao : ''}
              disabled={disable}
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              label="Glicemia"
              variant="outlined"
              fullWidth
              type="number"
              name="glicemia"
              value={fprops.values.glicemia}
              onChange={fprops.handleChange}
              onBlur={fprops.handleBlur}
              error={Boolean(fprops.errors.glicemia && fprops.touched.glicemia)}
              helperText={fprops.errors.glicemia && fprops.touched.glicemia ? fprops.errors.glicemia : ''}
              disabled={disable}
              InputProps={{
                endAdornment: <InputAdornment position="end">mg/dL</InputAdornment>,
              }}
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              label="Temperatura"
              variant="outlined"
              fullWidth
              type="number"
              name="temperatura"
              value={fprops.values.temperatura}
              onChange={fprops.handleChange}
              onBlur={fprops.handleBlur}
              error={Boolean(fprops.errors.temperatura && fprops.touched.temperatura)}
              helperText={fprops.errors.temperatura && fprops.touched.temperatura ? fprops.errors.temperatura : ''}
              disabled={disable}
              InputProps={{
                endAdornment: <InputAdornment position="end">°C</InputAdornment>,
              }}
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              label="Oxigenação"
              variant="outlined"
              fullWidth
              type="number"
              name="oxigenacao"
              value={fprops.values.oxigenacao}
              onChange={fprops.handleChange}
              onBlur={fprops.handleBlur}
              error={Boolean(fprops.errors.oxigenacao && fprops.touched.oxigenacao)}
              helperText={fprops.errors.oxigenacao && fprops.touched.oxigenacao ? fprops.errors.oxigenacao : ''}
              disabled={disable}
              InputProps={{
                endAdornment: <InputAdornment position="end">%</InputAdornment>,
              }}
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              label="Peso"
              variant="outlined"
              fullWidth
              type="number"
              name="peso"
              value={fprops.values.peso}
              onChange={fprops.handleChange}
              onBlur={fprops.handleBlur}
              error={Boolean(fprops.errors.peso && fprops.touched.peso)}
              helperText={fprops.errors.peso && fprops.touched.peso ? fprops.errors.peso : ''}
              disabled={disable}
              InputProps={{
                endAdornment: <InputAdornment position="end">kg</InputAdornment>,
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Mobilidade"
              variant="outlined"
              fullWidth
              multiline
              rows={2}
              name="mobilidade"
              value={fprops.values.mobilidade}
              onChange={fprops.handleChange}
              onBlur={fprops.handleBlur}
              error={Boolean(fprops.errors.mobilidade && fprops.touched.mobilidade)}
              helperText={fprops.errors.mobilidade && fprops.touched.mobilidade ? fprops.errors.mobilidade : ''}
              disabled={disable}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Observações"
              variant="outlined"
              fullWidth
              multiline
              rows={2}
              name="observacoes"
              value={fprops.values.observacoes}
              onChange={fprops.handleChange}
              onBlur={fprops.handleBlur}
              error={Boolean(fprops.errors.observacoes && fprops.touched.observacoes)}
              helperText={fprops.errors.observacoes && fprops.touched.observacoes ? fprops.errors.observacoes : ''}
              disabled={disable}
            />
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default SinaisForm;
