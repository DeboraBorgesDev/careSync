import { Theme} from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
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
        marginTop: theme.spacing(8)
    }
  })
);
