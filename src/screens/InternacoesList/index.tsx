import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import Datatable from '../../componenets/Datatable';
import { Internacao, getAllInternacoes } from '../../services/internacoes';
import { formatDate } from '../../utils/date';

const InternacoesListPage: React.FC = () => {
const [internacoes, setInternacoes] = useState<Internacao[] | null>(null)
const [loading, setLoading] = useState(true)

const columns = [
  { name: 'paciente', label: 'Paciente' },
  { name: 'cpf', label: 'CPF' },
  { name: 'dataEntrada', label: 'Data entrada' },
  { name: 'motivo', label: 'Motivo' },
  { name: 'dataSaida', label: 'Alta em' },
  { name: 'medico', label: 'Médico' }
];

const internacoesData = internacoes
? internacoes.map((internacao) => [
  internacao.paciente.nome,
  internacao.paciente.cpf,
  formatDate(internacao.dataEntrada, 'dd/MM/yyyy HH:mm'),
  internacao.motivo,
  internacao.dataSaida ? formatDate(internacao.dataSaida, 'dd/MM/yyyy HH:mm') : '',
  internacao.medico.nome
])
: [];


  useEffect(() => {
    getAllInternacoes()
      .then((data) => {
        setInternacoes(data);
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
      <h1>Internações</h1>
      <Grid item xs={12}>
        <Datatable
            title="Lista de internações"
            data={internacoesData}
            columns={columns}
            loading={loading}
            color="primary"
          />
      </Grid>
    </Grid>
  );
};

export default InternacoesListPage;
