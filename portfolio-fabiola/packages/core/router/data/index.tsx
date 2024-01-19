import {
    createBrowserRouter,
    RouterProvider,
  } from 'react-router-dom';
  
import { HomePage } from '@portfolio/home-page';


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
]);

export const AppRoutes = () => {
  return <RouterProvider router={router} />;
};