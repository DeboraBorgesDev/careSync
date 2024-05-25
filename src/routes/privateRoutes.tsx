import HomeLayout from "../layouts/home";
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
        ]
    }
]