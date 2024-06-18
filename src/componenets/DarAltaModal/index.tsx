import React from 'react';
import { Internacao, darAlta } from '../../services/internacoes';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import { toast } from 'react-toastify';


interface DarAltaModalProps {
  selectedInternacao: Internacao;
  open: boolean;
  close: () => void;
  fetchInternacoes: () => void;
}

const DarAltaModal: React.FC<DarAltaModalProps> = ({ selectedInternacao, open, close, fetchInternacoes }) => {

    const handleDarAlta = async () => {
        try {
          await darAlta(selectedInternacao?.id);
          fetchInternacoes()
          toast.success('Paciente liberado!');
          close();
        } catch (error) {
          //@ts-ignore
          toast.error(error.response.data);
          console.error('Error fetching internacoes:', error);
        } 
      };


  return (
    <Dialog open={open} onClose={close} fullWidth maxWidth="sm">
        <DialogTitle>Dar alta</DialogTitle>
        <DialogContent>
        <Typography>
            Tem certeza que deseja dar alta para o paciente  
            <b> {selectedInternacao?.paciente?.nome}</b>?
        </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={close} color="primary" variant="outlined">
            Cancelar
          </Button>
          <Button onClick={handleDarAlta} color="primary" variant="contained">
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
  );
};

export default DarAltaModal;
