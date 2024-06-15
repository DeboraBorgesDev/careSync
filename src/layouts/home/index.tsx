import React, { useState, Suspense } from 'react';
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
  Collapse,
  Hidden,
} from '@mui/material';
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Dashboard,
  Person,
  Add,
  Search,
  LocalHospital,
  MonitorHeart,
  Favorite,
  Group,
  ExpandLess,
  ExpandMore,
} from '@mui/icons-material';
import { useStyles } from './styles';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import logo from '../../media/logo/Group 1.png';
import classNames from 'classnames';
import CircularLoader from '../../componenets/CircularLoader';

const HomeLayout = () => {
  const classes = useStyles();
  const theme = useTheme();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [isOpenPacienteMenu, setIsOpenPacienteMenu] = useState(false);
  const [isOpenInternacoesMenu, setIsOpenInternacoesMenu] = useState(false);

  const CustomLink = React.forwardRef<HTMLAnchorElement, any>((linkProps, ref) => (
    <Link role="button" {...linkProps} ref={ref} />
  ));

  const itemDrawer = classNames({
    [classes.borderColor]: false,
  });

  const itemDrawerActive = classNames({
    [classes.borderColor]: true,
  });

  const itemNested = classNames({
    [classes.nestedItem]: true,
  });

  const itemNestedActive = classNames({
    [classes.nestedItem]: true,
    [classes.borderColor]: true,
  });

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
      onClick: handlePacienteMenu,
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
      onClick: handleInternacoesMenu,
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


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

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
        onClick={item.onClick || undefined}
        className={
          item.link === pathname ? itemDrawerActive : itemDrawer
        }
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
                className={
                  nestedItem.link === pathname
                    ? itemNestedActive
                    : itemNested
                }
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
          <Outlet />
        </Suspense>
      </main>
    </Box>
  );
};

export default HomeLayout;
