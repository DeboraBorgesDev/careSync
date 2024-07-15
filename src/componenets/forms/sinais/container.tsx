import React, { useEffect, useState } from 'react';
import { Formik, FormikHelpers, FormikProps } from 'formik';
import { Button } from '@mui/material';
import { toast } from 'react-toastify';
import useStyles from './styles';
import { getAllPacientes } from '../../../services/paciente';
import { Paciente } from '../../../screens/PacientesList';
import SinaisForm from '.';
import { Usuario } from '../../../services/login/types';
import { getAllUsuarios } from '../../../services/usuario';
import validationSchema from './validationSchema';
import { useAuth } from '../../../hooks/auth';

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
  const {user} = useAuth();
  const isEdit = registro !== null;
  const [pacientes, setPacientes] = useState<Paciente[]>([]);
  const [showButton, setShowButton] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (
    values: SinaisValues, 
    { setSubmitting }: FormikHelpers<SinaisValues>
  ) => {
    // try {
    //   if (isEdit) {
    //     await editSinais(values, registro?.idProfissional as string); // or use the appropriate id
    //   } else {
    //     await newSinais(values);
    //     toast.success('Sinais vitais registrados com sucesso');
    //   }
    //   fetchInternacoes();
    //   onClose();
    // } catch (error) {
    //   // @ts-ignore
    //   toast.error(error.response.data);
    // } finally {
    //   setSubmitting(false);
    // }
  };

  useEffect(() => {
    setLoading(true);
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
        idProfissional: registro?.idProfissional || user?.id as string,
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
           />
          {showButton && (
            <div className={classes.buttons}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                onClick={fprops.submitForm}
                disabled={!fprops.isValid}
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
