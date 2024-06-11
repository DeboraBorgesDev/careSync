import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  buttons: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'flex-end'
  }

}));

export default useStyles;
