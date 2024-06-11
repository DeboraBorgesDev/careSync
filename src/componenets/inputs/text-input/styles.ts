import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  input: {
    marginBottom: theme.spacing(2),
  },
  errorMessage: {
    color: theme.palette.error.main,
  },
  labelError: {
    color: theme.palette.error.main,
  },
}));

export default useStyles;
