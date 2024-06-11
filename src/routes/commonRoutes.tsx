import DefaultLayout from "../layouts/Default";
import CadastroPaciente from "../screens/CadastroPaciente";
import LoginPage from "../screens/login";

export const commonRoutes = [
    {
        path: '/',
        element: <DefaultLayout/>,
        children: [
            {
                path: 'login',
                element: (
                  <LoginPage/>
                ),
            },
              {
                path: 'paciente/novo',
                element: (
                  <CadastroPaciente/>
                ),
              },
        ]
    }
]