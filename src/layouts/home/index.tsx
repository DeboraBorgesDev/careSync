import { useStyles } from './styles';
import { Outlet } from 'react-router-dom';
import HomeDrawer from '../../componenets/HomeDrawer';
import { Suspense } from 'react';
import CircularLoader from '../../componenets/CircularLoader';

  
  const HomeLayout = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
          <HomeDrawer />
          <main className={classes.main}>
                <div className={classes.content}>
                  <Suspense
                    fallback={(
                      <div className={classes.loaderContainer}>
                        <CircularLoader color="secondary" marginTop={100} />
                      </div>
                    )}
                  >
                    <Outlet
                    />
                  </Suspense>
                </div>
              </main>
        </div>
    );
  };
  
  export default HomeLayout;
  