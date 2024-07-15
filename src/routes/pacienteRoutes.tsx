import PacienteLayout from "../layouts/Paciente";

import DashboardPacientePage from "../screens/Paciente/Dashboard";
import HistoricosPage from "../screens/Paciente/Historicos";
import InternacoesPage from "../screens/Paciente/Internacoes";
import SinaisPage from "../screens/Paciente/sinais";


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
          {
            path: 'sinais',
            element: (
              <SinaisPage/>
            ),
          },
        ]
    }
]