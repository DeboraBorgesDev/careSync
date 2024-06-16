import { createTheme } from '@material-ui/core/styles';

const getColor = (theme, color) => {
  switch (color) {
    case 'primary':
      return theme.palette.primary.main;
    case 'secondary':
      return theme.palette.secondary.main;
    case 'tertiary':
      return theme.palette.tertiary.main;
    default:
      return null;
  }
};
const muiTheme = (theme, color) => createTheme({
  palette: theme.palette,
  typography: theme.typography,
  overrides: {
    MuiPaper: {
      root: {
        padding: 0,
        width: '100%',
      },
    },
    MUIDataTableToolbar: {
      root: {
        backgroundColor: theme.palette.primary.main,
      },
      titleRoot: {
        color: '#FFF',
      },
      icon: {
        color: '#FFF',
        '&:hover,&:focus': {
          color: '#FFF',
          backgroundColor: 'rgba(200, 200, 200, 0.2)',
        },
      },
      iconActive: {
        color: '#FFF',
        backgroundColor: 'rgba(200, 200, 200, 0.2)',
      },
    },
    MuiTableCell: {
      head: {
        fontWeight: 600,
      },
      body: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
      },
    },
    MUIDataTableBodyCell: {
      stackedParent: {
        '@media (max-width:959.95px)': {
          display: 'flex',
          alignItems: 'center',
        },
      },
    },
    MuiFormLabel: {
      root: {
        color: theme.palette.primary.main,
        '&:hover,&:focus': {
          color: theme.palette.primary.main,
        },
      },
    },
    MuiIconButton: {
      colorPrimary: {
        color: theme.palette.primary.main,
      },
    },
    MUIDataTableSearch: {
      searchText: {
        background: 'rgba(255, 255, 255, 1)',
        borderRadius: '4px',
        padding: theme.spacing(1),
      },
      clearIcon: {
        color: '#FFF',
        '&:hover,&:focus': {
          color: '#FFF',
          backgroundColor: 'rgba(200, 200, 200, 0.2)',
        },
      },
      searchIcon: {
        color: '#FFF',
      },
    },
    MuiMenuItem: {
      root: {
        whiteSpace: 'normal',
      },
    },
    MuiPopover: {
      paper: {
        maxWidth: '10%',
      },
    },
  },
});

export default muiTheme;
