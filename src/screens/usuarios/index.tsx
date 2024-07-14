import React, { useEffect, useState } from 'react';
import { Button, Dialog, DialogTitle, Grid, IconButton, Tooltip } from '@mui/material';
import { getAllPermissoes, getAllUsuarios } from '../../services/usuario';
import { Permissao, Usuario } from '../../services/login/types';
import Datatable from '../../componenets/Datatable';
import { useStyles } from './style';
import UsuarioContainer from '../../componenets/forms/usuario/container';
import { Edit } from '@mui/icons-material';

const UsuariosPage: React.FC = () => {
  const classes = useStyles();
  const [usuarios,setUsuarios] = useState<Usuario[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedUsuario, setSelectedUsuario] = useState<Usuario | null>(null)
  const [openCadastro, setOpenCadastro] = useState<boolean>(false);
  const [permissoes, setPermissoes] = useState<Permissao[]>([])

  const handleOpenModalCadastro = (usuario?: Usuario | null) => {
    setSelectedUsuario(usuario || null);
    setOpenCadastro(true);
  };

  const handleClose = () => {
    setOpenCadastro(false);
  };


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


  const fetchPermissoes = async () => {
    setLoading(true)
    try {
      const response = await getAllPermissoes(); 
      setPermissoes(response);
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
    } finally {
      setLoading(false)
    }
  };

  const actions = (usuario: Usuario) => (
    <>
      <Tooltip title='Editar' style={{marginRight: '5px'}}>
        <IconButton
          color="primary"
          aria-label="Editar"
          onClick={() => handleOpenModalCadastro(usuario)}
        >
          <Edit />
        </IconButton>
      </Tooltip>
    </>
  );

  const columns = [
    { name: 'nome', label: 'Nome' },
    { name: 'email', label: 'Email'},
    { name: 'cpf', label: 'CPF' },
    { name: 'cargo', label:'Cargo'},
    { 
      name: 'actions',
      label:'Ações',
      options: {
        customBodyRender: (value: Usuario) => actions(value),
      },
    }
  ];

  const usuariosData = usuarios
    ? usuarios.map((usuario) => [
        usuario?.nome,
        usuario?.username,
        usuario?.cpf,
        usuario?.permissao?.nome || '',
        usuario
      ])
    : [];

  useEffect(() => {
    fetchUsuarios()
    fetchPermissoes()
  }, [])

  return (
    <Grid container>
      <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Usuário</h1>
        <Button variant="contained" color="primary" onClick={() => handleOpenModalCadastro()}>
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
      <Dialog open={openCadastro} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle>{!!selectedUsuario ? 'Editar' : 'Novo Usuário'}</DialogTitle>
        <UsuarioContainer
          permissoes={permissoes}
          usuario={selectedUsuario}
          onClose={handleClose}
          fetchUsuarios={fetchUsuarios}
        />
      </Dialog>
    </Grid>
  );
};

export default UsuariosPage;
