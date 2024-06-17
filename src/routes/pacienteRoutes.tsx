import PacienteLayout from "../layouts/Paciente";

import DashboardPacientePage from "../screens/Paciente/Dashboard";


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
        ]
    }
]