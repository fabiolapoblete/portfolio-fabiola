import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { HomePage } from '@portfolio/home-page';
import { AboutPage } from '@portfolio/about-page';
import { ProjectsPage } from '@portfolio/projects-page';
import { ContactPage } from '@portfolio/contact-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/projects',
    element: <ProjectsPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
]);

export const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
