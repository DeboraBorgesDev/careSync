import React, { useState } from 'react';
import { Container, Paper } from '@material-ui/core';
import CustomStepper from '../../componenets/PacienteStepper';
import InformacoesPessoaisContainer from '../../componenets/forms/paciente/informacoes/container';
import useStyles from './styles';
import HFisiologicaContainer from '../../componenets/forms/paciente/HFisiologica/container';
import HPatologicoContainer from '../../componenets/forms/paciente/HPatologico/container';
import HFamiliarContainer from '../../componenets/forms/paciente/HFamiliar/container';

const CadastroPaciente: React.FC = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [idPaciente, setIdPaciente] = useState<string|null>(null)

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
          <InformacoesPessoaisContainer 
            handleNext={handleNext} 
            handleBack={handleBack}
            activeStep={activeStep}
            setIdPaciente={setIdPaciente}
          />
        );
      case 1:
        return (
          <HFisiologicaContainer
            handleNext={handleNext} 
            handleBack={handleBack}
            activeStep={activeStep}
            idPaciente={idPaciente as string}
          />
        );
      case 2:
        return (
          <HPatologicoContainer
            handleNext={handleNext} 
            handleBack={handleBack}
            activeStep={activeStep}
            idPaciente={idPaciente as string}
          />
        );
      case 3:
        return (
          <HFamiliarContainer
            handleNext={handleNext} 
            handleBack={handleBack}
            activeStep={activeStep}
            idPaciente={idPaciente as string}
          />
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
            </Paper>
          </div>
      </div>
      </CustomStepper>
    </Container>
  );
};

export default CadastroPaciente;
