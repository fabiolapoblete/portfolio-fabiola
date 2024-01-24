import {
    createBrowserRouter,
    RouterProvider,
  } from 'react-router-dom';
  
import { HomePage } from '@portfolio/home-page';
import { AboutPage } from '@portfolio/about-page';
import { ProjectsPage } from '@portfolio/projects-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutPage />
  },
  {
    path: '/projects',
    element: <ProjectsPage />
  }
]);

export const AppRoutes = () => {
  return <RouterProvider router={router} />;
};