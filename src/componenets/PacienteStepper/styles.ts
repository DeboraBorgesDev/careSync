// styles.ts

import { makeStyles, Theme } from '@material-ui/core/styles';

export const useConnectorDefaultStyles = makeStyles((theme: Theme) => ({
  alternativeLabel: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  active: {
    '& $line': {
      borderColor: theme.palette.primary.main,
    },
  },
  completed: {
    '& $line': {
      borderColor: theme.palette.primary.main,
    },
  },
  line: {
    borderColor: '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

export const useColorLibConnectorStyles = makeStyles((theme: Theme) => ({
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
      backgroundImage: `linear-gradient(95deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 50%, ${theme.palette.secondary.dark} 100%)`,
    },
  },
  completed: {
    '& $line': {
      backgroundImage: `linear-gradient(95deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 50%, ${theme.palette.secondary.dark} 100%)`,
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
}));

export const useStepIconsStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundImage: `linear-gradient(136deg, ${theme.palette.primary.main} 50%, ${theme.palette.primary.light} 100%)`,
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundImage: `linear-gradient(136deg, ${theme.palette.primary.main} 50%, ${theme.palette.primary.main} 100%)`,
  },
}));

export const useStepButtonStyles = makeStyles((theme: Theme) => ({
  button: {
    margin: theme.spacing(2),
  },
  buttonContainer: {
    marginBottom: theme.spacing(2),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
}));

export const useStepperStyles = makeStyles((theme: Theme) => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2),
    },
  },
}));
