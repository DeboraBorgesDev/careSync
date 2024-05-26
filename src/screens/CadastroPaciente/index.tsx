import React, { useState } from 'react';
import { Typography, Button, Container } from '@material-ui/core';
import CustomStepper from '../../componenets/PacienteStepper';

const CadastroPaciente: React.FC = () => {
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

  const handleReset = () => {
    setActiveStep(0);
  };

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <>
            <Typography variant="h6">Informações Pessoais</Typography>
          </>
        );
      case 1:
        return (
          <>
            <Typography variant="h6">História Fisiológica</Typography>
          </>
        );
      case 2:
        return (
          <>
            <Typography variant="h6">Histórico Patológico</Typography>
          </>
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
        {activeStep === steps.length ? (
          <div>
            <Typography variant="h6" gutterBottom>
              Cadastro Completo
            </Typography>
            <Button onClick={handleReset} variant="contained" color="primary">
              Resetar
            </Button>
          </div>
        ) : (
          <div>
            {renderStepContent(activeStep)}
            <div style={{ marginTop: 20 }}>
              <Button
                disabled={activeStep === 0}
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
          </div>
        )}
      </div>
      </CustomStepper>
    </Container>
  );
};

export default CadastroPaciente;
