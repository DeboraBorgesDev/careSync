import { useState } from 'react';
import { Formik, FormikHelpers, FormikProps } from 'formik';
import { Button } from '@mui/material';
import { toast } from 'react-toastify';
import useStyles from './styles';
import UsuarioForm from '.';
import { Usuario } from '../../../services/login/types';
import { createUsuario, editUsuario, Permissao } from '../../../services/usuario';

export type UsuarioValues = {
  nome: string;
  email: string;
  senha: string;
  isMedico?: boolean;
  crm?: string;
  cpf: string;
  isEnfermeiro?: boolean;
  coren?: string;
  isEstudante?: boolean;
  matricula?: string | null;
  permissao?: string;
}

interface UsuarioContainerProps {
 usuario : Usuario | null;
 onClose: () => void;
 fetchUsuarios: () => void;
 permissoes: Permissao[];
}

const UsuarioContainer: React.FC<UsuarioContainerProps> = (
  {
    usuario = null,
    onClose,
    fetchUsuarios,
    permissoes
  }
) => {
  const classes = useStyles();
  const isEdit = usuario !== null;
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (
    values: UsuarioValues, 
    { setSubmitting }: FormikHelpers<UsuarioValues>
  ) => {
    try {
      setLoading(true)
      if (isEdit) {
        await editUsuario(values, usuario.id as string);
        toast.success('Usuário criada com sucesso');
      } else {
        await createUsuario(values);
        toast.success('Usuário criado com sucesso');
      }
      fetchUsuarios()
      onClose()
    } catch (error) {
      // @ts-ignore
      toast.error(error.response.data);
    } finally {
      setSubmitting(false);
      setLoading(false)
    }
  };

  return (
    <Formik<UsuarioValues>
      initialValues={{
        nome: usuario?.nome || '',
        email: usuario?.email || '',
        senha: '',
        isMedico: usuario?.medico || false,
        crm: usuario?.crm || '',
        cpf: usuario?.cpf || '',
        isEnfermeiro: usuario?.enfermeiro || false,
        coren: usuario?.coren || '',
        isEstudante: usuario?.estudante || false,
        matricula: usuario?.matricula || '',
        permissao: usuario?.permissao.id || ''
      }}
      onSubmit={handleSubmit}
    >
      {(fprops: FormikProps<UsuarioValues>) => (
        <>
          <UsuarioForm fprops={fprops} disable={false} permissoes={permissoes} />
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
              disabled={!fprops.isValid || loading}
            >
              Salvar
            </Button>
          </div>
        </>
      )}
    </Formik>
  );
};

export default UsuarioContainer;
