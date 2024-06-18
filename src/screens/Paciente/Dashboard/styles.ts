import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        card: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: theme.spacing(3)
        },
        avatar: {
            margin: '0 auto',
            backgroundColor: '#ff6f61',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: theme.spacing(2),
          },
          avatarIcon: {
            fontSize: '6rem',
            color: '#fff',
          },
          margin:{ 
            marginTop: theme.spacing(2)
        },
    })
);
