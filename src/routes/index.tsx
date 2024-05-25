
import { useRoutes } from 'react-router-dom';
import { commonRoutes } from './commonRoutes';
import { privateRoutes } from './privateRoutes';

const Routes = () => {


  const routes = [...privateRoutes, ...commonRoutes];

  const element = useRoutes(routes);


  return <>{element}</>;
};

export default Routes;
