import HeaderTemplate from '../../componenets/header';
import { Toolbar } from '@mui/material';
import { useStyles } from './styles';
import { Outlet } from 'react-router-dom';

  
  const HomeLayout = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
          <HeaderTemplate />
          <Toolbar />
          <Outlet/>
        </div>
    );
  };
  
  export default HomeLayout;
  