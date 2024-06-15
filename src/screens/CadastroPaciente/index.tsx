import React, { useState } from 'react';
import { Typography, Button, Container, Paper } from '@material-ui/core';
import CustomStepper from '../../componenets/PacienteStepper';
import InformacoesPessoaisContainer from '../../componenets/forms/paciente/informacoes/container';
import useStyles from './styles';
import HFisiologicaContainer from '../../componenets/forms/paciente/HFisiologica/container';
import HPatologicoContainer from '../../componenets/forms/paciente/HPatologico/container';

const CadastroPaciente: React.FC = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    'Informações Pessoais',
    'História Fisiológica',
    'Histórico Patológico',
    'História Familiar',
  ];

 
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <InformacoesPessoaisContainer/>
        );
      case 1:
        return (
          <HFisiologicaContainer/>
        );
      case 2:
        return (
          <HPatologicoContainer/>
        );
      case 3:
        return (
          <>
            <Typography variant="h6">História Familiar</Typography>
          </>
        );
      default:
        return 'Desconhecido';
    }
  };

  return (
    <Container>
      <CustomStepper
       steps={steps}
       activeStep={activeStep}
        >
      <div>
          <div>
            <Paper className={classes.paper}>
              {renderStepContent(activeStep)}
              <div className={classes.buttons}>
              <Button
                // disabled={activeStep === 0}
                onClick={handleBack}
                style={{ marginRight: 10 }}
              >
                Voltar
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
              >
                {activeStep === steps.length - 1 ? 'Finalizar' : 'Próximo'}
              </Button>
            </div>
            </Paper>
          </div>
      </div>
      </CustomStepper>
    </Container>
  );
};

export default CadastroPaciente;
