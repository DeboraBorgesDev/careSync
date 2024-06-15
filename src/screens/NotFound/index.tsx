import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Typography variant="h1" align="center" gutterBottom>
        404 - Página não encontrada
      </Typography>
      <Typography variant="h4" align="center" gutterBottom>
        Parece que você se perdeu!
      </Typography>
      <Button
        variant="contained"
        component={Link}
        to="/"
        color="primary"
        size="large"
        style={{ marginTop: 20 }}
      >
        Voltar para a página inicial
      </Button>
    </Box>
  );
};

export default NotFoundPage;
