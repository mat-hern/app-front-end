import { createBrowserRouter, type RouteObject } from "react-router-dom";
import Layout from "./components/main-layout/layout";
import Login from "./pages /login/login";
import MyDevices from "./pages /my-devices/my-devices";

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
        element: <MyDevices/>
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
