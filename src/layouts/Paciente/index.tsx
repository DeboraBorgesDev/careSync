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
  MenuItem,
  Typography,
  Menu,
  Avatar,
  Collapse,
} from '@mui/material';
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Dashboard,
  ContentPaste,
  Article,
  ArrowBack,
  AccountCircle,
  Favorite,
  ExpandLess,
  ExpandMore,
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
import { useAuth } from '../../hooks/auth';

const PacienteLayout = () => {
  const classes = useStyles();
  const theme = useTheme();
  const { pathname } = useLocation();
  const {logout} = useAuth();
  const { id } = useParams<{ id: string }>();
  const [open, setOpen] = useState(false);
  const [paciente, setPaciente] = useState<Paciente | null>(null);
  const [loading, setLoading] = useState(true);
  const [historiaFisiologica, setHistoriaFisiologica] = useState<any>(null);
  const [historiaFamiliar, setHistoriaFamiliar] = useState<any>(null);
  const [isOpenSinaisMenu, setIsOpenSinaisMenu] = useState<boolean>(false)
  const [anchorElUser, setAnchorElUser] = useState(null);


  const CustomLink = React.forwardRef<HTMLAnchorElement, any>((linkProps, ref) => (
    <Link role="button" {...linkProps} ref={ref} />
  ));

  const handleSinaisMenu = () => {
    setIsOpenSinaisMenu((prev) => !prev);
  };

  const itemDrawer = classNames({
    [classes.borderColor]: false,
  });

  const itemDrawerActive = classNames({
    [classes.borderColor]: true,
  });

  const drawerItems = [
    {
      label: 'Voltar para Home',
      link: `/`,
      icon: <ArrowBack />,
    },
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
      label: 'Sinais vitais',
      icon: <Favorite />,
      onClick: handleSinaisMenu,
      open: isOpenSinaisMenu,
      nestedItems: [
        {
          label: 'Gráficos',
          link:  `/paciente/${id}/sinais/graficos`,
          icon: <Assessment />,
        },
        {
          label: 'Lista de registros',
          link: `/paciente/${id}/sinais/lista`,
          icon: <Article />,
        },
      ],
    },
  ];

  const handleOpenUserMenu = (event: any) => {
    //@ts-ignore
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


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
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ flexGrow: 0 }}>
            <IconButton onClick={handleOpenUserMenu} aria-label="open drawer">
              <Avatar>
                <AccountCircle />
              </Avatar>
            </IconButton>

            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={logout}>
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
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
                onClick={item.onClick || undefined}
                className={pathname.includes(item?.link as string) ? classes.listItemActive : classes.listItem}
              >
                <ListItemIcon className={classes.icon}>{item.icon}</ListItemIcon>
                <Hidden smDown implementation="css">
                  <ListItemText primary={item.label} />
                </Hidden>
                {item.nestedItems && (item.open ? <ExpandLess /> : <ExpandMore />)}
              </ListItemButton>
              {item.nestedItems && (
                <Collapse in={item.open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {item.nestedItems.map((nestedItem) => (
                      <ListItemButton
                        key={nestedItem.label}
                        component={CustomLink}
                        to={nestedItem.link}
                        className={pathname.includes(nestedItem.link) ? classes.listItemActive : classes.listItem}
                      >
                        <ListItemIcon>{nestedItem.icon}</ListItemIcon>
                        <ListItemText primary={nestedItem.label} />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              )}
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
            loading,
            historiaFamiliar,
            historiaFisiologica,
          }}
           />
        </Suspense>
      </main>
    </Box>
  );
};

export default PacienteLayout;
