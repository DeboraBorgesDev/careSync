import React, { useEffect, useState } from 'react';
import { Grid, } from '@mui/material';
import { useOutletContext } from 'react-router-dom';
import { Paciente } from '../../PacientesList';
import { getRegistrosByPaciente, Registro } from '../../../services/paciente';
import { formatDate } from '../../../utils/date';
import Datatable from '../../../componenets/Datatable';

const SinaisPage: React.FC = () => {
  const { paciente } = useOutletContext<{ paciente: Paciente }>();
  const [sinais, setSinais] = useState<Registro[]>([]);
  const [loading, setLoading] = useState(true);

  const columns = [
    { name: 'dataRegistro', label: 'Data do registro' },
    { name: 'profissional', label: 'Registrado por' },
    { name: 'pressaoArterial', label: 'Pressão Arterial' },
    { name: 'freqCardiaca', label: 'Freq. Cardíaca' },
    { name: 'freqRespiratoria', label: 'Freq. Respiratória' },
    { name: 'glicemia', label: 'Glicemia' },
    { name: 'oxigenacao', label: 'Oxigenação' },
  ];

  const sinaisData = sinais
    ? sinais
    .map((item) => [
      item?.dataHora ? formatDate(item?.dataHora, 'dd/MM/yyyy HH:mm'): '-',
      item?.profissional?.nome,
      item?.pressaoArterial,
      item?.freqCardiaca,
      item?.freqRespiratoria,
      item?.glicemia,
      item?.oxigenacao,
    ])     
    : [];

  const fetchSinais = async () => {
    await getRegistrosByPaciente(paciente.id)
      .then((data) => {
        setSinais(data);
      })
      .catch((error) => {
        console.error('Error fetching pacientes:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchSinais();
  }, []);


  return (
    <Grid container spacing={2}>
      <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Sinais vitais</h1>
      </Grid>
      <Grid item xs={12}>
        <Datatable
          title="Lista de sinais vitais"
          data={sinaisData}
          columns={columns}
          loading={loading}
          color="primary"
        />
      </Grid>
    </Grid>
  );
};

export default SinaisPage;
