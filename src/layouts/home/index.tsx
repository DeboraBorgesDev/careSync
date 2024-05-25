import HeaderTemplate from '../../componenets/header';
import { useStyles } from './styles';
import { Outlet } from 'react-router-dom';
import HomeDrawer from '../../componenets/HomeDrawer';

  
  const HomeLayout = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
          <HeaderTemplate/>
          <HomeDrawer />
          <Outlet/>
        </div>
    );
  };
  
  export default HomeLayout;
  