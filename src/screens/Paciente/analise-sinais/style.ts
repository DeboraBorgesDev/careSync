import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        card: {
            padding: 0,
            margin: 0,
            minHeight: '500px'
        },
    })
);
