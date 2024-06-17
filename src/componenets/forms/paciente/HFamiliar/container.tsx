import React, { useState } from 'react';
import { Formik, FormikHelpers, FormikProps } from 'formik';
import { Button } from '@mui/material';
import useStyles from './styles';
import { HFamiliarType, editHFamiliar, newHFamiliar } from '../../../../services/paciente';
import { validationSchema } from './schema';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import HFamiliar from '.';


export interface HFamiliarValues {
  pacienteId: string;
  idadeMortePai: number ;
  causaMortePai: string;
  idadeMorteMae: number;
  causaMorteMae: string;
  doencasMae: string;
  doencasPai: string;
  filhosSaudaveis: boolean;
  filhosObservacoes: string;
  historicoSaudeParentes: string;
}

interface HFamiliarContainerProps {
  activeStep?: number;
  handleBack?: () => void;
  idPaciente?: string;
  hFamiliar?: HFamiliarType;
}

const HFamiliarContainer: React.FC<HFamiliarContainerProps> = (
  {
    activeStep,
    handleBack,
    idPaciente,
    hFamiliar = null
  }
) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const isEdit = hFamiliar !== null;
  const [disable, setDisable] = useState(isEdit)



  const handleSubmit = async (values: HFamiliarValues, { setSubmitting }: FormikHelpers<HFamiliarValues>) => {
    try {
      if(isEdit){
        await editHFamiliar(values, hFamiliar.id);
        setDisable(true);
      }else {
        await newHFamiliar(values);
        navigate('/paciente/lista');
      }
      
    } catch (error) {
      //@ts-ignore
      toast.error(error.message)
    } finally {
      setSubmitting(false); 
    }
  };

  return (
    <Formik<HFamiliarValues>
      initialValues={{
        //@ts-ignore
        pacienteId: hFamiliar?.paciente?.id || idPaciente,
        idadeMortePai: hFamiliar?.idadeMortePai || 0,
        causaMortePai: hFamiliar?.causaMortePai || '',
        idadeMorteMae: hFamiliar?.idadeMorteMae || 0,
        causaMorteMae: hFamiliar?.causaMortePai ||'',
        doencasMae: hFamiliar?.doencasMae ||'',
        doencasPai: hFamiliar?.doencasPai || '',
        filhosSaudaveis: hFamiliar?.filhosSaudaveis || true,
        filhosObservacoes: hFamiliar?.filhosObservacoes ||'',
        historicoSaudeParentes: hFamiliar?.historicoSaudeParentes ||'',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(fprops: FormikProps<HFamiliarValues>) => {
        return (
          <>
            <HFamiliar fprops={fprops} disable={disable} />
            <div className={classes.buttons}>
              {isEdit ? (
                <>
                <Button
                  disabled={!disable}
                  onClick={(prev) => setDisable(!prev)}
                  style={{ marginRight: 10 }}
                >
                  Editar
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit" 
                  onClick={fprops.submitForm}
                  disabled={disable}
                >
                  Salvar
                </Button>
                </>
              ) : (
                <>
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
                type="submit" 
                onClick={fprops.submitForm}
                disabled={!fprops.isValid}
              >
                {activeStep === 3 ? 'Finalizar' : 'Próximo'}
              </Button>
                </>
              )}
            </div>
          </>
        )
      }}
    </Formik>
  );
};

export default HFamiliarContainer;
