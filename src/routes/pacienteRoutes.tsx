import PacienteLayout from "../layouts/Paciente";
import AnaliseSinaisPage from "../screens/Paciente/analise-sinais";

import DashboardPacientePage from "../screens/Paciente/Dashboard";
import HistoricosPage from "../screens/Paciente/Historicos";
import InternacoesPage from "../screens/Paciente/Internacoes";
import SinaisPage from "../screens/Paciente/registros";


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
            path: 'sinais/lista',
            element: (
              <SinaisPage/>
            ),
          },
          {
            path: 'sinais/graficos',
            element: (
              <AnaliseSinaisPage/>
            ),
          },
        ]
    }
]