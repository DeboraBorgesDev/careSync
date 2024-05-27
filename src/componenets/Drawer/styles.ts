import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { boxShadow } from "../../assets/theme";

const drawerWidth = 240;
const drawerMobileWidth = 60;

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
  },
  icon: {
    minWidth: '50px',
  },
  drawer: {
    flexShrink: 0,
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
    },
    [theme.breakpoints.down('sm')]: {
      width: drawerMobileWidth,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    [theme.breakpoints.down('sm')]: {
      width: `calc(100% - ${drawerMobileWidth}px)`,
      marginLeft: drawerMobileWidth,
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
    },
    [theme.breakpoints.down('sm')]: {
      width: drawerMobileWidth,
    },
    ...boxShadow,
    backgroundColor: theme.palette.primary.main
  },
  nestedItem: {
    paddingLeft: theme.spacing(3),
  },
  borderColor: {
    background: theme.palette.secondary.main,
    '&:hover': {
      background: theme.palette.secondary.main,
    },
  },
  menuTitle: {
    marginTop: theme.spacing(10),
    color: '#000000',
    padding: theme.spacing(1),
  },
  logo: {
    maxWidth: '100%',
    maxHeight: '100%',
    padding: theme.spacing(2)
  },
}));

export default useStyles;
