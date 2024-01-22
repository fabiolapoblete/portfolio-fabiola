import {
    createBrowserRouter,
    RouterProvider,
  } from 'react-router-dom';
  
import { MainPage } from '@portfolio/main-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
]);

export const AppRoutes = () => {
  return <RouterProvider router={router} />;
};