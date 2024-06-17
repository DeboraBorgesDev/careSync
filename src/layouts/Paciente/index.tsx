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
  Hidden,
} from '@mui/material';
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Dashboard,
  Favorite,
  Group,
} from '@mui/icons-material';
import { useStyles } from './styles';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import logo from '../../media/logo/Group 1.png';
import classNames from 'classnames';
import CircularLoader from '../../componenets/CircularLoader';

const PacienteLayout = () => {
  const classes = useStyles();
  const theme = useTheme();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

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
      link: '/paciente/dashboard',
      icon: <Dashboard />,
    },
    {
      label: 'Históricos',
      link: '/pacientes/historicos',
      icon: <Favorite />,
    },
    {
      label: 'Internações',
      link: '/paciente/internações',
      icon: <Group />,
    },
    {
      label: 'Sinais Vitais',
      link: '/paciente/sinais',
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
          <Outlet />
        </Suspense>
      </main>
    </Box>
  );
};

export default PacienteLayout;
