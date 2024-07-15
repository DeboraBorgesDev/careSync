import React, { useEffect, useState } from 'react';
import { Formik, FormikHelpers, FormikProps } from 'formik';
import { Button } from '@mui/material';
import { toast } from 'react-toastify';
import useStyles from './styles';
import { getAllPacientes, newRegistro } from '../../../services/paciente';
import { Paciente } from '../../../screens/PacientesList';
import SinaisForm from '.';
import validationSchema from './validationSchema';

export type SinaisValues = {
  idPaciente: string | null;
  idProfissional: string;
  freqCardiaca: number;
  freqRespiratoria: number;
  pressaoArterial: string;
  constipacao: string;
  glicemia: number;
  temperatura: number;
  oxigenacao: number;
  peso: number;
  mobilidade: string;
  observacoes: string;
}

interface SinaisContainerProps {
  registro: SinaisValues | null;
}

const SinaisContainer: React.FC<SinaisContainerProps> = ({
  registro = null,
}) => {
  const classes = useStyles();
  const [pacientes, setPacientes] = useState<Paciente[]>([]);
  const [showButton, setShowButton] = useState(false);
  const [showSinaisInputs, setShowSinaisInputs] = useState(false);


  const handleSubmit = async (
    values: SinaisValues, 
    { setSubmitting, resetForm }: FormikHelpers<SinaisValues>
  ) => {
    try {
        await newRegistro(values);
        toast.success('Sinais vitais registrados com sucesso');
        resetForm();
        setShowSinaisInputs(false)

    } catch (error) {
      const { 
        //@ts-ignore
       response
      } = error;
      if (response && response.data && response.data.errors) {
        const errorMessages = response.data.errors.join(', ');
        toast.error(`Erro ao registrar sinais: ${errorMessages}`);
      } else {
        toast.error('Erro ao registrar sinais. Tente novamente mais tarde.');
      }
    } finally {
      setSubmitting(false);
    }
  };


  useEffect(() => {
    getAllPacientes()
      .then((data) => {
        setPacientes(data);
      })
      .catch((error) => {
        console.error('Error fetching pacientes:', error);
      });
    }, [])

  return (
    <Formik<SinaisValues>
      initialValues={{
        idPaciente: registro?.idPaciente || '',
        idProfissional: registro?.idProfissional || '',
        freqCardiaca: registro?.freqCardiaca || 0,
        freqRespiratoria: registro?.freqRespiratoria || 0,
        pressaoArterial: registro?.pressaoArterial || '',
        constipacao: registro?.constipacao || '',
        glicemia: registro?.glicemia || 0,
        temperatura: registro?.temperatura || 0,
        oxigenacao: registro?.oxigenacao || 0,
        peso: registro?.peso || 0,
        mobilidade: registro?.mobilidade || '',
        observacoes: registro?.observacoes || ''
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {(fprops: FormikProps<SinaisValues>) => (
        <>
          <SinaisForm 
            fprops={fprops}
            disable={false}
            pacientes={pacientes}
            onShow={setShowButton}
            showSinaisInputs={showSinaisInputs}
            setShowSinaisInputs={setShowSinaisInputs}
           />
          {showButton && (
            <div className={classes.buttons}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                onClick={fprops.submitForm}
              >
                Salvar
              </Button>
            </div>
          )}
        </>
      )}
    </Formik>
  );
};

export default SinaisContainer;
