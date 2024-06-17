import React, { useEffect, useState } from 'react';
import { Grid, Button, Dialog, DialogTitle } from '@mui/material';
import { Internacao, getAllInternacoes } from '../../services/internacoes';
import { formatDate } from '../../utils/date'; 
import Datatable from '../../componenets/Datatable';
import InternacaoContainer from '../../componenets/forms/internacao/container';

const InternacoesListPage: React.FC = () => {
  const [internacoes, setInternacoes] = useState<Internacao[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

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

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid container>
      <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Internações</h1>
        <Button variant="contained" color="primary" onClick={handleOpen}>
          Nova internação
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Datatable
          title="Lista de internações"
          data={internacoesData}
          columns={columns}
          loading={loading}
          color="primary"
        />
      </Grid>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle>Nova internação</DialogTitle>
        <InternacaoContainer internacao={null} onClose={handleClose} />
      </Dialog>
    </Grid>
  );
};

export default InternacoesListPage;
