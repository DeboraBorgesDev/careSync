import React, { useState } from 'react';
import {
  Dashboard,
  Person ,
  Search,
  LocalHospital ,
  Add ,
  Favorite, 
  Group
} from '@material-ui/icons';
import {  MonitorHeart } from '@mui/icons-material';
import ResponsiveDrawer from '../Drawer';


const HomeDrawer: React.FC = () => {

  const [isOpenPacienteMenu, setIsOpenPacienteMenu] = useState(false);
  const [isOpenInternacoesMenu, setIsOpenInternacoesMenu] = useState(false);

  const handlePacienteMenu = () => {
    setIsOpenPacienteMenu((prev) => !prev);
  };

  const handleInternacoesMenu = () => {
    setIsOpenInternacoesMenu((prev) => !prev);
  };

  const drawerItems = [
    {
      label: 'Dashboard',
      link: '/dashboard',
      icon: <Dashboard />,
    },
    {
      label: 'Pacientes',
      icon: <Person />,
      onClick: () => handlePacienteMenu(),
      open: isOpenPacienteMenu,
      nestedItems: [
        {
          label: 'Novo Paciente',
          link: '/paciente/novo',
          icon: <Add />,
        },
        {
          label: 'Buscar paciente',
          link: '/paciente/buscar',
          icon: <Search />,
        },
      ],
    },
    {
      label: 'Internações',
      icon: <LocalHospital />,
      onClick: () => handleInternacoesMenu(),
      open: isOpenInternacoesMenu,
      nestedItems: [
        {
          label: 'Nova internação',
          link: '/internacoes/nova',
          icon: <Add />,
        },
        {
          label: 'Acompanhar paciente',
          link: '/internacoes/acompanhar',
          icon: <MonitorHeart />,
        },
      ],
    },
    {
      label: 'Registrar Sinais Vitais',
      link: '/registrar-sinais-vitais',
      icon: <Favorite />,
    },
    {
      label: 'Usuários',
      link: '/usuario',
      icon: <Group />,
    },
  ];

  return <ResponsiveDrawer items={drawerItems}  />;
};

export default HomeDrawer;
