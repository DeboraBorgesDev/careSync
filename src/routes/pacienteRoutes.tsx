import PacienteLayout from "../layouts/Paciente";

import DashboardPacientePage from "../screens/Paciente/Dashboard";
import HistoricosPage from "../screens/Paciente/Historicos";


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
        ]
    }
]