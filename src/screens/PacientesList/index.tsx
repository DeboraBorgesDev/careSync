import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { getAllPacientes } from '../../services/paciente';
import Datatable from '../../componenets/Datatable';

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

  const columns = [
    { name: 'nome', label: 'Nome' },
    { name: 'dataNascimento', label: 'Data de Nascimento' },
    { name: 'cpf', label: 'CPF' },
    { name: 'sexo', label: 'Sexo' },
    { name: 'estadoCivil', label: 'Estado Civil' },
    { name: 'possuiFilhos', label: 'Possui Filhos' },
    { name: 'profissao', label: 'Profissão' },
    { name: 'religiao', label: 'Religião' },
    { name: 'nivelEnsino', label: 'Nível de Ensino' },
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
