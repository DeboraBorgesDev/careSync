import React, { useEffect, useState } from 'react';
import { Formik, FormikHelpers, FormikProps } from 'formik';
import { Button } from '@mui/material';
import { toast } from 'react-toastify';
import { Internacao, editInternacao, newInternacao } from '../../../services/internacoes';
import useStyles from './styles';
import { getAllPacientes } from '../../../services/paciente';
import { Paciente } from '../../../screens/PacientesList';
import InternacaoForm from '.';
import { User } from '../../../services/login/types';
import { getAllUsuarios } from '../../../services/usuario';
import validationSchema from './validationSchema';

export type InternacaoValues = {
    idPaciente: string | null;
    motivo: string;
    diagnostico: string;
    observacoes: string;
    idMedico: string | null;
}

interface InternacaoContainerProps {
 internacao: Internacao | null;
 onClose: () => void;
 fetchInternacoes: () => void;
}

const InternacaoContainer: React.FC<InternacaoContainerProps> = (
  {
    internacao = null,
    onClose,
    fetchInternacoes
  }
) => {
  const classes = useStyles();
  const isEdit = internacao !== null;
  const [disable, setDisable] = useState(isEdit);
  const [pacientes, setPacientes] = useState<Paciente[]>([]);
  const [medicos, setMedicos] = useState<User[]>()
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (
    values: InternacaoValues, 
    { setSubmitting }: FormikHelpers<InternacaoValues>
  ) => {
    try {
      if (isEdit) {
        await editInternacao(values, internacao.id as string);
        setDisable(true);
      } else {
        await newInternacao(values);
        toast.success('Internação criada com sucesso');
      }
      fetchInternacoes()
      onClose()
    } catch (error) {
      // @ts-ignore
      toast.error(error.response.data);
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
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    getAllUsuarios()
      .then((data) => {
        setMedicos(data?.filter(user => user?.medico));
      })
      .catch((error) => {
        console.error('Error fetching usuarios:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Formik<InternacaoValues>
      initialValues={{
        idPaciente: internacao?.paciente?.id || null,
        motivo: internacao?.motivo || '',
        diagnostico: internacao?.diagnostico || '',
        observacoes: internacao?.observacoes || '',
        idMedico: internacao?.medico?.id || null,
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {(fprops: FormikProps<InternacaoValues>) => (
        <>
          <InternacaoForm fprops={fprops} disable={disable} pacientes={pacientes} medicos={medicos as User[]} />
          <div className={classes.buttons}>
                <Button
                  onClick={onClose}
                  style={{ marginRight: 10 }}
                >
                  Cancelar
                </Button>
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
        </>
      )}
    </Formik>
  );
};

export default InternacaoContainer;
