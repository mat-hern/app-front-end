import { createBrowserRouter, type RouteObject } from "react-router-dom";
import Layout from "./shared/components/main-layout/layout";
import Login from "./shared/pages /login/login";
import MyDevices from "./shared/pages /my-devices/my-devices";
import ProtectedRoute from "./shared/components/protected-route";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        path: 'login',
        element: <Login />,
      },
      {
        path: 'my-devices',
        element: ( 
        <ProtectedRoute>
          <MyDevices/>
        </ProtectedRoute>
        )
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
