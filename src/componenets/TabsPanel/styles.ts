import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
          },
          horizontal: {
            flexDirection: 'row',
          },
          vertical: {
            flexDirection: 'column',
          },
          horizontalAppBar: {
            flexDirection: 'row',
          },
          verticalAppBar: {
            flexDirection: 'column',
          },
          tab: {
            minWidth: 72,
          },
          primaryBackground: {
            backgroundColor: theme.palette.primary.main,
          },
          secondaryBackground: {
            backgroundColor: theme.palette.secondary.main,
          },
          primaryText: {
            color: theme.palette.primary.contrastText,
          },
          secondaryText: {
            color: theme.palette.secondary.contrastText,
          },
          selected: {
            fontWeight: theme.typography.fontWeightMedium,
          },
          tabPanel: {
            padding: theme.spacing(2),
          },
    })
);
export default useStyles;