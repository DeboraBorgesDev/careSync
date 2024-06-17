
import { useRoutes } from 'react-router-dom';
import { commonRoutes } from './commonRoutes';
import { homeRoutes } from './homeRoutes';
import { pacienteRoutes } from './pacienteRoutes';

const Routes = () => {


  const routes = [...homeRoutes, ...commonRoutes, ...pacienteRoutes];

  const element = useRoutes(routes);


  return <>{element}</>;
};

export default Routes;
