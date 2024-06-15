import DefaultLayout from "../layouts/Default";
import NotFoundPage from "../screens/NotFound";
import LoginPage from "../screens/login";

export const commonRoutes = [
    {
        path: '/',
        element: <DefaultLayout/>,
        children: [
            {
                path: 'login',
                element: <LoginPage/>,
            },
            {
                path: '*',
                element: <NotFoundPage/>,
            },
        ]
    }
]
