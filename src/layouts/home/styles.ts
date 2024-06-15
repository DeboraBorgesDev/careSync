
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

const drawerWidth = 240;

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    '&.open': {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    '&.open': {
      display: 'none',
    },
  },
  toolbar: {
    display: 'flex',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    marginLeft: theme.spacing(2),
    height: '40px', 
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width: drawerWidth,
      boxSizing: 'border-box',
    },
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
    '&.open': {
      marginLeft: 0,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
  },
  loaderContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  nestedItem: {
    paddingLeft: theme.spacing(3),
  },
  borderColor: {
    background: theme.palette.secondary.light,
    color: '#ffffff',
    '&:hover': {
      background: theme.palette.secondary.main,
    },
    '& > div:first-child > svg:first-child > path': {
      color: '#ffffff',
    },
  },
  menuTitle: {
    marginTop: theme.spacing(10),
    color: '#000000',
    padding: theme.spacing(1),
  },
  icon: {
    minWidth: '50px',
  },
}));
