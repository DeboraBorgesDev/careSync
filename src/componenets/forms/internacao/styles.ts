import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    form: {
      padding: theme.spacing(2),
     },
    buttons: {
      marginTop: theme.spacing(2),
      display: 'flex',
      justifyContent: 'flex-end',
      padding: theme.spacing(2),
    }
  })
);

export default useStyles;
