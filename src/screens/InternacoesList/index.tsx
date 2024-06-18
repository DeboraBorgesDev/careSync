import React, { useEffect, useState } from 'react';
import { Grid, Button, Dialog, DialogTitle, DialogContent, DialogActions, Tooltip, IconButton } from '@mui/material';
import { Internacao, getAllInternacoes } from '../../services/internacoes';
import { formatDate } from '../../utils/date'; 
import { Edit, Visibility } from '@mui/icons-material';
import Datatable from '../../componenets/Datatable';
import InternacaoContainer from '../../componenets/forms/internacao/container';
import InternacaoDetailsModal from '../../componenets/InternacaoDetailsModal';


const InternacoesListPage: React.FC = () => {
  const [internacoes, setInternacoes] = useState<Internacao[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [selectedInternacao, setSelectedInternacao] = useState<Internacao | null>(null);

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

  useEffect(() => {
    fetchInternacoes();
  }, []);

  const fetchInternacoes = async () => {
    try {
      const data = await getAllInternacoes();
      setInternacoes(data);
    } catch (error) {
      console.error('Error fetching internacoes:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleOpen = (internacao: Internacao | null) => {
    setSelectedInternacao(internacao || null);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenModal = (internacao: Internacao) => {
    setSelectedInternacao(internacao);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setSelectedInternacao(null);
    setOpenModal(false);
  };

  const actions = (internacao: Internacao) => (
    <>
      <Tooltip title='Ver detalhes'>
        <IconButton
          color="primary"
          aria-label="Ver detalhes"
          onClick={() => handleOpenModal(internacao)}
        >
          <Visibility />
        </IconButton>
      </Tooltip>
      <Tooltip title='Editar' style={{marginRight: '5px'}}>
        <IconButton
          color="primary"
          aria-label="Editar"
          onClick={() => handleOpen(internacao)}
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

  return (
    <Grid container>
      <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Internações</h1>
        <Button variant="contained" color="primary" onClick={() => handleOpen(null)}>
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
        <DialogTitle>{!!selectedInternacao ? 'Editar internação' : 'Nova internação'}</DialogTitle>
        <InternacaoContainer internacao={selectedInternacao} onClose={handleClose} fetchInternacoes={fetchInternacoes} />
      </Dialog>
      <Dialog open={openModal} onClose={handleCloseModal} fullWidth maxWidth="md">
        <DialogTitle>Detalhes da Internação</DialogTitle>
        <DialogContent>
          {selectedInternacao && (
            <InternacaoDetailsModal selectedInternacao={selectedInternacao} />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default InternacoesListPage;
