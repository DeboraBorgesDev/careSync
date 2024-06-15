import DefaultLayout from "../layouts/Default";
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
        ]
    }
]