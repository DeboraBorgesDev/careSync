import HomeLayout from "../layouts/home";
import CadastroPaciente from "../screens/CadastroPaciente";
import HomePage from "../screens/home";

export const privateRoutes = [
    {
        path: '/',
        element: <HomeLayout />,
        children: [
            {
                path: '',
                element: (
                  <HomePage/>
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