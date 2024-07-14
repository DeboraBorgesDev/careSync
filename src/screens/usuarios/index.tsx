import React, { useEffect, useState } from 'react';
import { Button, Grid } from '@mui/material';
import { getAllUsuarios } from '../../services/usuario';
import { Usuario } from '../../services/login/types';
import Datatable from '../../componenets/Datatable';
import { useStyles } from './style';

const UsuariosPage: React.FC = () => {
  const classes = useStyles();
  const [usuarios,setUsuarios] = useState<Usuario[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchUsuarios = async () => {
    setLoading(true)
    try {
      const response = await getAllUsuarios(); 
      setUsuarios(response);
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
    } finally {
      setLoading(false)
    }
  };

  const columns = [
    { name: 'nome', label: 'Nome' },
    { name: 'email', label: 'Email'},
    { name: 'cpf', label: 'CPF' },
    { name: 'cargo', label:'Cargo'}
  ];

  const usuariosData = usuarios
    ? usuarios.map((usuario) => [
        usuario?.nome,
        usuario?.username,
        usuario?.cpf,
        usuario?.permissao?.nome || ''
      ])
    : [];

  useEffect(() => {
    fetchUsuarios()
  }, [])

  return (
    <Grid container>
      <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Usuário</h1>
        <Button variant="contained" color="primary" onClick={() => {}}>
          Novo usuário
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Datatable
          title="Lista de usuários"
          data={usuariosData}
          columns={columns}
          loading={loading}
          color="primary"
        />
      </Grid>
    </Grid>
  );
};

export default UsuariosPage;
