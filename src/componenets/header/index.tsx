
import classNames from 'classnames';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import useStyles from './styles';
import logo from '../../media/logo/Group 1.png';

const HeaderTemplate: React.FC = () => {
  const theme = useTheme();
  const classes = useStyles();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

  const appBarClasses = classNames({
    [classes.appBar]: true,
    [classes.absolute]: false,
    [classes.fixed]: false,
  });

  const toolbarClasses = classNames({
    [classes.toolbar]: true,
    [classes.container]: !isMediumScreen,
  });

  return (
    <AppBar className={appBarClasses}>
      <Toolbar className={toolbarClasses}>
        <div>
          <img
            src={logo}  
            className={classes.logo}
            alt="Logo"
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderTemplate;
