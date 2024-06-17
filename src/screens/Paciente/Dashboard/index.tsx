import React from 'react';
import { Grid } from '@mui/material';
import Content from './content';

const DashboardPacientePage: React.FC = () => {
  return (
    <Grid container>
      <h1>Dashboard</h1>
      <Grid item xs={12}>
        <Content/>
      </Grid>
    </Grid>
  );
};

export default DashboardPacientePage;
