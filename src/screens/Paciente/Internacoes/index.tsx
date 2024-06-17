import React, { useEffect, useState } from 'react';
import { Grid, Button,  Tooltip, IconButton } from '@mui/material';
import { Internacao,  getAllInternacoesByPaciente } from '../../../services/internacoes';
import { formatDate } from '../../../utils/date'; 
import Datatable from '../../../componenets/Datatable';
import { Edit, Visibility } from '@mui/icons-material';
import { useOutletContext } from 'react-router-dom';
import { Paciente } from '../../PacientesList';

const InternacoesPage: React.FC = () => {
  const {paciente} = useOutletContext<{paciente: Paciente}>()
  const [internacoes, setInternacoes] = useState<Internacao[] | null>(null);
  const [loading, setLoading] = useState(true);



  const actions = (internacao: Internacao) => (
   <>
     <Tooltip title='Ver detalhes'>
      <IconButton
        color="primary"
        aria-label="Ver detalhes"
        onClick={() => {}}
      >
        <Visibility />
      </IconButton>
    </Tooltip>
    <Tooltip title='Ver paciente' style={{marginRight: '5px'}}>
    <IconButton
      color="primary"
      aria-label="Editar"
      onClick={() => {}}
    >
      <Edit />
    </IconButton>
  </Tooltip>
    {!internacao?.dataSaida && (
      <Button variant='outlined' color='primary'>
      Dar alta
    </Button>
    )}
   </>
);


  const columns = [
    { name: 'paciente', label: 'Paciente' },
    { name: 'cpf', label: 'CPF' },
    { name: 'dataEntrada', label: 'Data entrada' },
    { name: 'motivo', label: 'Motivo' },
    { name: 'dataSaida', label: 'Alta em' },
    { name: 'medico', label: 'Médico' },
    { 
      name: 'actions',
      label:'Ações',
      options: {
        customBodyRender: (value: Internacao) => actions(value),

      },
    }
  ];

  const internacoesData = internacoes
    ? internacoes.map((internacao) => [
        internacao.paciente.nome,
        internacao.paciente.cpf,
        formatDate(internacao.dataEntrada, 'dd/MM/yyyy HH:mm'),
        internacao.motivo,
        internacao.dataSaida ? formatDate(internacao.dataSaida, 'dd/MM/yyyy HH:mm') : '',
        internacao.medico.nome,
        internacao
      ])
    : [];

    const fetchInternacoes = async () => {
      await getAllInternacoesByPaciente(paciente.id)
      .then((data) => {
        setInternacoes(data);
      })
      .catch((error) => {
        console.error('Error fetching pacientes:', error);
      })
      .finally(() => {
        setLoading(false);
      });
    }

  useEffect(() => {
    fetchInternacoes()
  }, []);


  return (
    <Grid container>
      <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Internações</h1>
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
      {/* <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle>Nova internação</DialogTitle>
        <InternacaoContainer internacao={null} onClose={handleClose} fetchInternacoes={fetchInternacoes} />
      </Dialog> */}
    </Grid>
  );
};

export default InternacoesPage;
