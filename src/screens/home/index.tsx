import React, { useEffect, useState } from 'react';
import { Grid, Card, CardContent, Typography, CircularProgress, CardMedia } from '@mui/material';
import { getAllInternacoes, Internacao } from '../../services/internacoes';
import { getAllPacientes } from '../../services/paciente';
import { Paciente } from '../PacientesList';
import image from '../../media/illustrations/ilustration-home.png';

const HomePage: React.FC = () => {
  const [internacoes, setInternacoes] = useState<Internacao[] | null>(null);
  const [pacientes, setPacientes] = useState<Paciente[]>([]);
  const [loading, setLoading] = useState(true);

  //@ts-ignore
  const internacoesAtivas = internacoes?.filter(internacao => internacao.dataSaida === null).length;
  const numeroPacientes = pacientes.length;
  //@ts-ignore
  const altas = internacoes?.length - internacoesAtivas;

  const fetchInternacoes = async () => {
    try {
      const data = await getAllInternacoes();
      setInternacoes(data);
    } catch (error) {
      console.error('Error fetching internacoes:', error);
    }
  };

  const fetchPacientes = async () => {
    try {
      const data = await getAllPacientes();
      setPacientes(data);
    } catch (error) {
      console.error('Error fetching pacientes:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        await fetchPacientes();
        await fetchInternacoes();
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      {loading ? (
        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
          <CircularProgress />
        </Grid>
      ) : (
        <>
          <Grid item xs={6} style={{ display: 'flex', justifyContent: 'center' }}>
            <Card style={{ width: '70%', height: '200px' }}>
              <CardContent style={{ textAlign: 'center' }}>
                <Typography variant="h1">
                  {internacoesAtivas}
                </Typography>
                <Typography variant="h6">
                  Pacientes Internados
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} style={{ display: 'flex', justifyContent: 'center' }}>
            <Card style={{ width: '70%', height: '200px' }}>
              <CardContent style={{ textAlign: 'center' }}>
                <Typography variant="h1">
                  {altas}
                </Typography>
                <Typography variant="h6">
                  Altas
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} style={{ display: 'flex', justifyContent: 'center' }}>
            <Card style={{ width: '70%', height: '200px' }}>
              <CardContent style={{ textAlign: 'center' }}>
                <Typography variant="h1">
                  {numeroPacientes}
                </Typography>
                <Typography variant="h6">
                  Pacientes cadastrados
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} style={{ display: 'flex', justifyContent: 'center' }}>
            <Card style={{ width: '70%', height: '200px' }}>
              <CardMedia
                component="img"
                image={image}
                alt="Ilustração"
                style={{ maxHeight: '200px', objectFit: 'contain' }}
              />
            </Card>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default HomePage;
