import React, { useState, Suspense, useEffect } from 'react';
import {
  Box,
  CssBaseline,
  Drawer,
  AppBar,
  Toolbar,
  IconButton,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Hidden,
} from '@mui/material';
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Dashboard,
  ContentPaste,
  Article,
} from '@mui/icons-material';
import { useStyles } from './styles';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import logo from '../../media/logo/Group 1.png';
import classNames from 'classnames';
import CircularLoader from '../../componenets/CircularLoader';
import { Assessment } from '@material-ui/icons';
import { Paciente } from '../../screens/PacientesList';
import { getHFamiliarById, getHFisiologicaById, getPacienteById } from '../../services/paciente';

const PacienteLayout = () => {
  const classes = useStyles();
  const theme = useTheme();
  const { pathname } = useLocation();
  const { id } = useParams<{ id: string }>();
  const [open, setOpen] = useState(false);
  const [paciente, setPaciente] = useState<Paciente | null>(null);
  const [loading, setLoading] = useState(true);
  const [historiaFisiologica, setHistoriaFisiologica] = useState<any>(null); // Ajuste o tipo de acordo com a estrutura da resposta
  const [historiaFamiliar, setHistoriaFamiliar] = useState<any>(null);

  const CustomLink = React.forwardRef<HTMLAnchorElement, any>((linkProps, ref) => (
    <Link role="button" {...linkProps} ref={ref} />
  ));

  const itemDrawer = classNames({
    [classes.borderColor]: false,
  });

  const itemDrawerActive = classNames({
    [classes.borderColor]: true,
  });

  const drawerItems = [
    {
      label: 'Dashboard',
      link: `/paciente/${id}/dashboard`,
      icon: <Dashboard />,
    },
    {
      label: 'Históricos',
      link: `/paciente/${id}/historicos`,
      icon: <ContentPaste />,
    },
    {
      label: 'Internações',
      link: `/paciente/${id}/internacoes`,
      icon: <Article />,
    },
    {
      label: 'Sinais Vitais',
      link: '/paciente/sinais',
      icon: <Assessment />,
    },
  ];

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  const fetchPaciente = async () => {
    try {
      const response = await getPacienteById(id);
      setPaciente(response); 
    } catch (error) {
      console.error('Erro ao buscar paciente:', error);
    }
  };

  const fetchHistoriaFisiologica = async () => {
    try {
      const response = await getHFisiologicaById(id);
      setHistoriaFisiologica(response);
    } catch (error) {
      console.error('Erro ao buscar história fisiológica:', error);
    }
  };

  const fetchHistoriaFamiliar = async () => {
    try {
      const response = await getHFamiliarById(id);
      setHistoriaFamiliar(response); 
    } catch (error) {
      console.error('Erro ao buscar história familiar:', error);
    }
  };

  useEffect(() => {
   if(id){
    setLoading(true)
    Promise.all([
      fetchPaciente(),
      fetchHistoriaFisiologica(),
      fetchHistoriaFamiliar(),
    ])
      .catch((error) => {
        console.error('Erro ao buscar dados:', error);
      })
      .finally(() => {
        setLoading(false);
      });
   }
  }, [id]);


  return (
    <Box className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={`${classes.appBar} ${open ? 'open' : ''}`}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={`${classes.menuButton} ${open ? 'open' : ''}`}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.logoContainer}>
            <img src={logo} className={classes.logo} alt="Logo" />
          </div>
        </Toolbar>
      </AppBar>
      <Drawer className={classes.drawer} variant="persistent" anchor="left" open={open}>
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {drawerItems.map((item) => (
            <div key={item.label}>
              <ListItemButton
                component={item.link ? CustomLink : 'div'}
                to={item.link ? item.link : undefined}
                className={item.link === pathname ? itemDrawerActive : itemDrawer}
              >
                <ListItemIcon className={classes.icon}>{item.icon}</ListItemIcon>
                <Hidden smDown implementation="css">
                  <ListItemText primary={item.label} />
                </Hidden>
              </ListItemButton>
            </div>
          ))}
        </List>
      </Drawer>
      <main className={`${classes.content} ${open ? 'open' : ''}`}>
        <div className={classes.drawerHeader} />
        <Suspense
          fallback={
            <div className={classes.loaderContainer}>
              <CircularLoader color="secondary" marginTop={100} />
            </div>
          }
        >
          <Outlet
            context={{
              paciente,
              historiaFamiliar,
              historiaFisiologica,
              loading
             }}
            />
        </Suspense>
      </main>
    </Box>
  );
};

export default PacienteLayout;
