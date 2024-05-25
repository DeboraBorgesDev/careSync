import React from 'react';
import LoginPage from '../screens/login';

export const commonRoutes = [
    {
        path: '/',
        element: <></>,
        children: [
          {
            path: 'login',
            element: <LoginPage />,
          },
        ],
      }
]
