import React from 'react';
import { Typography, Box } from '@mui/material';
import { Internacao } from '../../services/internacoes';
import { formatDate } from '../../utils/date';

interface InternacaoDetailsModalProps {
  selectedInternacao: Internacao;
}

const InternacaoDetailsModal: React.FC<InternacaoDetailsModalProps> = ({ selectedInternacao }) => {
  return (
    <Box p={2}>
      <Typography variant="subtitle1" gutterBottom>
        Paciente: {selectedInternacao.paciente.nome}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        CPF: {selectedInternacao.paciente.cpf}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Data de Entrada: {formatDate(selectedInternacao.dataEntrada, 'dd/MM/yyyy HH:mm')}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Motivo: {selectedInternacao.motivo}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Diagnóstico: {selectedInternacao.diagnostico}
      </Typography>
      {selectedInternacao.dataSaida && (
        <Typography variant="subtitle1" gutterBottom>
          Alta em: {formatDate(selectedInternacao.dataSaida, 'dd/MM/yyyy HH:mm')}
        </Typography>
      )}
      <Typography variant="subtitle1" gutterBottom>
        Médico responsável: {selectedInternacao.medico.nome}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Observações: {selectedInternacao.observacoes}
      </Typography>
    </Box>
  );
};

export default InternacaoDetailsModal;
