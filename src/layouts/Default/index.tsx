import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

  
  const DefaultLayout = () => {

    return (
      <Suspense>
        <Outlet/>
      </Suspense>
    );
  };
  
  export default DefaultLayout;
  