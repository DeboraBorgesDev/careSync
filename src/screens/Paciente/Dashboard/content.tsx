import React from 'react';
import { Card, Grid, Typography, Avatar } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { useStyles } from './styles';
import { useOutletContext } from 'react-router-dom';
import { Paciente } from '../../PacientesList';

const Content: React.FC = () => {
  const classes = useStyles();
  const {paciente} = useOutletContext<{
    paciente: Paciente;
  }>();

  const calcularIdade = (): number => {
    const diff = Date.now() - new Date(paciente?.dataNascimento).getTime();
    const idadeDate = new Date(diff);
    return Math.abs(idadeDate.getUTCFullYear() - 1970);
  };

  return (
    <>
      {/* Seção com informações do paciente */}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card className={classes.card}>
            <Grid container spacing={2} alignItems="center" justifyContent="space-between">
              <Grid item sm={4}>
                <Avatar className={classes.avatar}>
                  <PersonIcon className={classes.avatarIcon} />
                </Avatar>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography>
                  <strong>Nome:</strong> {paciente?.nome}
                </Typography>
                <Typography>
                  <strong>Idade:</strong> {calcularIdade()} anos
                </Typography>
                <Typography>
                  <strong>Sexo:</strong> {paciente?.sexo === 'f' ? 'Feminino' : 'Masculino'}
                </Typography>
                <Typography>
                  <strong>CPF:</strong> {paciente?.cpf}
                </Typography>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Content;
