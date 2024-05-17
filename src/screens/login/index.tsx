import React from 'react';
import { Card, Grid } from '@mui/material';
import { useStyles } from './styles';

import loginImage from '../../media/illustrations/Online doctor consultation.png';
import logo from '../../media/logo/Group 1.png';
import LoginForm from '../../componenets/forms/login';

const LoginPage = () => {
    const classes = useStyles();

    return (
        <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
            <Card className={classes.card} elevation={2}>
                <Grid container className={classes.cardContainer}>
                    <Grid item md={6} className={classes.imagesContainer}>
                        <Grid container direction="column" justifyContent="center">
                            <Grid item className={classes.img}>
                                <img src={loginImage} alt="teste" style={{ width: '75%' }} />
                            </Grid>
                            <Grid item className={classes.img}>
                                <img src={logo} alt="logo"  />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={6} className={classes.loginForm}>
                        <LoginForm />
                    </Grid>
                </Grid>
            </Card>
        </Grid>
    );
};

export default LoginPage;
