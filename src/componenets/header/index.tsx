import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Hidden from '@mui/material/Hidden';
import Drawer from '@mui/material/Drawer';
import { useTheme } from '@mui/material/styles';
import Menu from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import useStyles from './styles';
import logo from '../../media/logo/Group 1.png';

const HeaderTemplate: React.FC = () => {
  const theme = useTheme();
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [headerColor, setHeaderColor] = useState<'primary' | 'secondary' | 'transparent'>('primary');
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

  const appBarClasses = classNames({
    [classes.appBar]: true,
    [classes[headerColor]]: headerColor,
    [classes.absolute]: true,
    [classes.fixed]: true,
  });

  const toolbarClasses = classNames({
    [classes.toolbar]: true,
    [classes.container]: !isMediumScreen,
  });

  const headerColorChange = () => {
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > 100) { 
      setHeaderColor('secondary');
    } else {
      setHeaderColor('transparent');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', headerColorChange);
    return () => {
      window.removeEventListener('scroll', headerColorChange);
    };
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar className={appBarClasses}>
      <Toolbar className={toolbarClasses}>
        <div>
          <img
            src={logo}  
            className={classes.logo}
            alt="Logo"
          />
        </div>
        <Hidden mdUp>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
      <Hidden mdUp implementation="js">
        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          classes={{ paper: classes.drawerPaper }}
          onClose={handleDrawerToggle}
        >
          <div className={classes.appResponsive}>
            {/* Links de navegação para mobile */}
            <a href="#home" onClick={handleDrawerToggle}>Home</a>
            <a href="#about" onClick={handleDrawerToggle}>About</a>
            <a href="#contact" onClick={handleDrawerToggle}>Contact</a>
          </div>
        </Drawer>
      </Hidden>
    </AppBar>
  );
};

export default HeaderTemplate;
