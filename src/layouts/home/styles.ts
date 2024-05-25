import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  loader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  main: {
    flexGrow: 1,
    minHeight: 'calc(100vh - 100px)',
    [theme.breakpoints.down('md')]: {
      paddingLeft: '60px',
    },
    [theme.breakpoints.up('md')]: {
      paddingLeft: '240px',
    },
  },
  content: {
    display: 'flex',
    flex: 1,
    padding: theme.spacing(3),
    paddingBottom: '60px',
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(2),
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(1),
      paddingBottom: '80px',
    },
  },
  loaderContainer: {
    width: '100%',
  },
}));
