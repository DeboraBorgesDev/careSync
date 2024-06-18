import React, { useState } from 'react';
import { Button, Card, Grid, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/auth';
import useStyles from './styles';
import { toast } from 'react-toastify';

const LoginForm = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { login } = useAuth();

 
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await login({ email, senha });
      navigate('/');
    } catch (error) {
      console.error('Erro no login:', error);
      toast.error('Usuário ou senha incorretos')
    }
  };

  return (
    <Card className={classes.card}>
      <Typography variant='h4' color="primary" fontWeight={700}>Login</Typography>
      <form onSubmit={handleSubmit} className={classes.form}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={8} className={classes.gridItem}>
            <TextField
              fullWidth
              id="email"
              label="Email"
              variant="outlined"
              type="email"
              required
              // Define o valor do campo de email e atualiza-o conforme o usuário digita
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={8} className={classes.gridItem}>
            <TextField
              fullWidth
              id="password"
              label="Senha"
              variant="outlined"
              type="password"
              required
              // Define o valor do campo de senha e atualiza-o conforme o usuário digita
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} className={classes.gridItem}>
            <Button type="submit" variant="contained" color="primary" style={{ color: "#ffffff" }}>
              Entrar
            </Button>
          </Grid>
        </Grid>
      </form>
    </Card>
  );
};

export default LoginForm;
