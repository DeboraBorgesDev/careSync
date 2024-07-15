import React, { useEffect, useState } from 'react';
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useOutletContext } from 'react-router-dom';
import Chart from 'react-apexcharts';
import { Paciente } from '../../PacientesList';
import { getRegistrosByPaciente, Registro } from '../../../services/paciente';
import { formatDate } from '../../../utils/date';

const AnaliseSinaisPage: React.FC = () => {
  const { paciente } = useOutletContext<{ paciente: Paciente }>();
  const [sinais, setSinais] = useState<Registro[]>([]);
  const [filterName, setFilterName] = useState<string>('');
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [chartOptions, setChartOptions] = useState<any>({
    chart: {
      id: 'basic-bar'
    },
    xaxis: {
      categories: []
    }
  });
  const [chartSeries, setChartSeries] = useState<any[]>([
    {
      name: 'series-1',
      data: []
    }
  ]);
  const [showNoDataMessage, setShowNoDataMessage] = useState<boolean>(false);

  const fetchSinais = async () => {
    await getRegistrosByPaciente(paciente.id)
      .then((data) => {
        setSinais(data);
      })
      .catch((error) => {
        console.error('Error fetching pacientes:', error);
      });
  };

  useEffect(() => {
    fetchSinais();
  }, []);

  const handleGenerateGraphs = () => {
    if (!filterName) return;

    const start = new Date(startDate);
    const end = new Date(endDate);
    end.setHours(23, 59, 59, 999);
    const filteredSinais = sinais
      .filter((item) => {
        if (startDate && endDate) {
          const date = new Date(item.dataHora);
          return date >= start && date <= end;
        }
        return true;
      })
      .map((item) => ({
        valor: item[filterName as keyof Registro],
        dataHora: item.dataHora,
      }))
      .filter((item) => item.valor !== undefined);

    if (filteredSinais.length === 0) {
      setShowNoDataMessage(true);
    } else {
      setShowNoDataMessage(false);
      setChartOptions({
        chart: {
          id: 'basic-bar'
        },
        xaxis: {
          categories: filteredSinais.map(item => formatDate(item.dataHora, 'dd/MM/yyyy HH:mm'))
        }
      });
      setChartSeries([
        {
          name: filterName,
          data: filteredSinais.map(item => item.valor)
        }
      ]);
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Sinais vitais</h1>
      </Grid>
      <Grid item xs={3}>
        <FormControl fullWidth>
          <InputLabel id="filter-name-label">Filtrar por nome do sinal vital</InputLabel>
          <Select
            labelId="filter-name-label"
            value={filterName}
            label="Filtrar por nome do sinal vital"
            onChange={(e) => setFilterName(e.target.value as string)}
          >
            <MenuItem value="">Todos</MenuItem>
            <MenuItem value="pressaoArterial">Pressão Arterial</MenuItem>
            <MenuItem value="freqCardiaca">Freq. Cardíaca</MenuItem>
            <MenuItem value="freqRespiratoria">Freq. Respiratória</MenuItem>
            <MenuItem value="glicemia">Glicemia</MenuItem>
            <MenuItem value="oxigenacao">Oxigenação</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={3}>
        <TextField
          label="Data inicial"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          fullWidth
          type="date"
          InputLabelProps={{ shrink: true }}
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          label="Data final"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          fullWidth
          type="date"
          InputLabelProps={{ shrink: true }}
        />
      </Grid>
      <Grid item xs={3}>
        <Button variant="contained" color="primary" onClick={handleGenerateGraphs}>
          Gerar gráficos
        </Button>
      </Grid>
      <Grid item xs={12} style={{ textAlign: 'center' }}>
        {showNoDataMessage && (
          <Typography variant="body1" color="textSecondary">
            Não há dados para exibir com os filtros selecionados.
          </Typography>
        )}
        <div className="mixed-chart" style={{ display: showNoDataMessage ? 'none' : 'block' }}>
          <Chart
            options={chartOptions}
            series={chartSeries}
            type="line"
            width="60%"
            height={400}
          />
        </div>
      </Grid>
    </Grid>
  );
};

export default AnaliseSinaisPage;
