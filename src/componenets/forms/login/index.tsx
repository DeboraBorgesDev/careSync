import React from 'react';
import { Button, Card, Grid, TextField, Typography } from '@mui/material';
import { useStyles } from './styles'; 
const LoginForm = () => {
  const classes = useStyles();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
  };

  return (
    <Card className={classes.card}>
         <Typography variant='h4' color="primary"  fontWeight={700}>Login</Typography>
      <form onSubmit={handleSubmit} className={classes.form}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid item xs={6} justifyContent="center">
           
            </Grid>
          <Grid item xs={8} className={classes.gridItem}>
            <TextField
              fullWidth
              id="email"
              label="Email"
              variant="outlined"
              type="email"
              required
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
            />
          </Grid>
          <Grid item xs={12} className={classes.gridItem}>
            <Button type="submit" variant="contained" color="primary" style={{color: "#ffffff"}}>
              Entrar
            </Button>
          </Grid>
        </Grid>
      </form>
    </Card>
  );
};

export default LoginForm;
