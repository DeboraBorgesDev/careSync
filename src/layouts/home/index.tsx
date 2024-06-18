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
  Avatar,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Dashboard,
  Person,
  Add,
  Search,
  MonitorHeart,
  Favorite,
  Group,
  ExpandLess,
  ExpandMore,
  AccountCircle,
} from '@mui/icons-material';
import { useStyles } from './styles';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import logo from '../../media/logo/Group 1.png';
import classNames from 'classnames';
import CircularLoader from '../../componenets/CircularLoader';
import { useAuth } from '../../hooks/auth';

const HomeLayout = () => {
  const classes = useStyles();
  const theme = useTheme();
  const { pathname } = useLocation();
  const {logout} = useAuth();
  const [open, setOpen] = useState(false);
  const [isOpenPacienteMenu, setIsOpenPacienteMenu] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState(null);

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

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleOpenUserMenu = (event: any) => {
    //@ts-ignore
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
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
          link: '/paciente/lista',
          icon: <Search />,
        },
      ],
    },
    {
      label: 'Internações',
      link: '/internacoes',
      icon: <MonitorHeart />,
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
              <IconButton 
              onClick={handleOpenUserMenu}
              aria-label="open drawer"
               >
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
                className={item.link === pathname ? itemDrawerActive : itemDrawer}
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
                        className={nestedItem.link === pathname ? itemNestedActive : itemNested}
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
