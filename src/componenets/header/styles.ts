import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { container, boxShadow } from '../../assets/theme';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      display: 'flex',
      border: '0',
      color: '#555',
      width: '100%',
      backgroundColor: '#fff',
      boxShadow:
        '0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)',
      transition: 'padding-top 150ms ease 0s',
      alignItems: 'center',
      flexFlow: 'row nowrap',
      justifyContent: 'flex-start',
      position: 'relative',
      zIndex: theme.zIndex.drawer + 1,
      ...theme.mixins.toolbar,
    },
    absolute: {
      position: 'absolute',
    },
    fixed: {
      position: 'fixed',
    },
    toolbar: {
      maxHeight: '50px',
      flex: '1',
      alignItems: 'center',
      justifyContent: 'space-between',
      display: 'flex',
      flexWrap: 'nowrap',
    },
    container: {
      ...container,
    },
    flex: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      maxWidth: 150,
      height: 50,
      padding: 5,
    },
    logo: {
      maxWidth: '100%',
      maxHeight: '100%',
    },
    appResponsive: {
      margin: '20px 10px',
    },
    primary: {
      background: `linear-gradient(-47deg, ${theme.palette.primary.light} 10%, ${theme.palette.primary.main} 100%)`,
      color: theme.palette.primary.contrastText,
    },
    secondary: {
      background: `linear-gradient(-47deg, ${theme.palette.secondary.light} 10%, ${theme.palette.secondary.main} 100%)`,
      color: theme.palette.secondary.contrastText,
    },
    transparent: {
      backgroundColor: 'transparent !important',
      boxShadow: 'none',
      paddingTop: '25px',
      color: '#FFFFFF',
    },
    transparentContrastText: {
      backgroundColor: 'transparent !important',
      boxShadow: 'none',
      paddingTop: '25px',
      color: theme.palette.primary.contrastText,
    },
    drawerPaper: {
      border: 'none',
      bottom: '0',
      transitionProperty: 'top, bottom, width',
      transitionDuration: '.2s, .2s, .35s',
      transitionTimingFunction: 'linear, linear, ease',
      width: 260,
      ...boxShadow,
      position: 'fixed',
      display: 'block',
      top: '0',
      height: '100vh',
      right: '0',
      left: 'auto',
      visibility: 'visible',
      overflowY: 'visible',
      borderTop: 'none',
      textAlign: 'left',
      paddingRight: '0px',
      paddingLeft: '0',
      transition: 'all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)',
    },
    rightLinks: {
      // Adicionei a classe rightLinks para uso nos links de navegação
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: 'auto',
    },
  })
);

export default useStyles;
