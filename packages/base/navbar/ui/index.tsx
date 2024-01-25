import './style.scss';

import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  const navItems = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'About me',
      path: '/about',
    },
    {
      name: 'Projects',
      path: '/projects',
    },
    {
      name: 'Contact',
      path: '/contact',
    },
  ];

  return (
    <nav className='navbar'>
      <ul className='navbar__links'>
        {navItems.map((item) => (
          <li key={item.name}>
            <NavLink to={item.path}>
              <p>{item.name}</p>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
