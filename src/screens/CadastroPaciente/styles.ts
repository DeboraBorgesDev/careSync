import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
paper: {
    padding: theme.spacing(3),
    marginTop: theme.spacing(2)
},
buttonsContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingTop: theme.spacing(2)
},
root: {
    background: theme.palette.primary.main,
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
}));
