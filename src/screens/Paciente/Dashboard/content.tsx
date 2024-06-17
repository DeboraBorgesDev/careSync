import React from 'react';
import { Card, Grid, Typography } from '@mui/material';
import { useStyles } from './styles';

const Content: React.FC = () => {
    const classes = useStyles();
    return (
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3}>
            <Card className={classes.card} style={{backgroundColor: '#19e1af'}}>
              <Typography variant="h2" align="center">
                10
              </Typography>
              <Typography align="center">
                Dias em internação
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Card className={classes.card} style={{backgroundColor: '#19e1af'}}>
              <Typography variant="h2" align="center">
                10
              </Typography>
              <Typography align="center">
                Registros de dados vitais
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Card className={classes.card} style={{backgroundColor: '#19e1af'}}>
              <Typography variant="h2" align="center">
                10
              </Typography>
              <Typography align="center">
                Internações
              </Typography>
            </Card>
          </Grid>
        </Grid>
      );
    };

export default Content;
