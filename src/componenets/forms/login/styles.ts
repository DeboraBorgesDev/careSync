import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      maxWidth: '500px',
      minHeight: '400px',
      padding: theme.spacing(2),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    gridItem: {
      textAlign: 'center',
    },
    form: {
      marginTop: theme.spacing(8),
    },
  })
);

export default useStyles;
