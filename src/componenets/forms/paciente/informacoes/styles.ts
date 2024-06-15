import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
      marginTop: theme.spacing(2)
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      fullWidth: true,
    },
  })
);

export default useStyles;
