import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        card: {
            padding: 0,
            margin: 0,
            minHeight: '500px'
        },
        cardContainer: {
            minHeight: '500px',
            [theme.breakpoints.down('sm')]: {
                flexDirection: 'column',
            },
        },
        imagesContainer: {
            background: theme.palette.primary.main,
            padding: theme.spacing(2),
            minHeight: '500px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            [theme.breakpoints.down('sm')]: {
                height: 'auto',
            },
        },
        loginForm: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: theme.spacing(2),
            [theme.breakpoints.down('sm')]: {
                padding: theme.spacing(2),
            },
        },
        img: {
            display: 'flex',
            justifyContent: 'center'
        },
        logo: {
            paddingTop: theme.spacing(8),
            display: 'flex',
            justifyContent: 'center'
        }
    })
);
