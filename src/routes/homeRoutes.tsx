import HomeLayout from "../layouts/home";
import CadastroPaciente from "../screens/CadastroPaciente";
import InternacoesListPage from "../screens/InternacoesList";
import PacientesListPage from "../screens/PacientesList";
import HomePage from "../screens/home";

export const homeRoutes = [
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
              {
                path: 'paciente/lista',
                element: (
                  <PacientesListPage/>
                ),
              },
              {
                path: 'internacoes',
                element: (
                  <InternacoesListPage/>
                ),
              },
        ]
    }
]