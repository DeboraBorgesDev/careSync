import PacienteLayout from "../layouts/Paciente";

import DashboardPacientePage from "../screens/Paciente/Dashboard";
import HistoricosPage from "../screens/Paciente/Historicos";
import InternacoesPage from "../screens/Paciente/Internacoes";


export const pacienteRoutes = [
    {
        path: '/paciente/:id/',
        element: <PacienteLayout />,
        children: [
              {
                path: 'dashboard',
                element: (
                  <DashboardPacientePage/>
                ),
            },
            {
              path: 'historicos',
              element: (
                <HistoricosPage/>
              ),
          },
          {
            path: 'internacoes',
            element: (
              <InternacoesPage/>
            ),
        },
        ]
    }
]