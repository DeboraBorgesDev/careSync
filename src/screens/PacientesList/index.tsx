import React, { useEffect, useState } from 'react';
import { Grid, IconButton, Tooltip } from '@mui/material';
import { getAllPacientes } from '../../services/paciente';
import Datatable from '../../componenets/Datatable';
import { Visibility } from '@material-ui/icons';

export interface Paciente {
  id: string;
  nome: string;
  dataNascimento: string;
  cpf: string;
  sexo: string;
  estadoCivil: string;
  possuiFilhos: boolean;
  profissao: string;
  religiao: string;
  nivelEnsino: string;
}

const PacientesListPage: React.FC = () => {
  const [pacientes, setPacientes] = useState<Paciente[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const actions = (paciente: Paciente) => (
      <Tooltip title='Ver paciente'>
        <IconButton
          color="primary"
          aria-label="Ver paciente"
          onClick={() => {}}
        >
          <Visibility />
        </IconButton>
      </Tooltip>
  );

  const columns = [
    { name: 'nome', label: 'Nome' },
    { name: 'dataNascimento', label: 'Data de Nascimento' },
    { name: 'cpf', label: 'CPF' },
    { 
      name: 'actions',
      label:'Ações',
      options: {
        customBodyRender: (value: Paciente) => actions(value),

      },
    }
  ];


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

  return (
    <Grid container>
      <Grid item xs={12}>
        <h1>Pacientes</h1>
      </Grid>
      <Grid item xs={12}>
        <Datatable
            title="Lista de Pacientes"
            data={pacientes}
            columns={columns}
            loading={loading}
            color="primary"
          />
      </Grid>
    </Grid>
  );
};

export default PacientesListPage;
