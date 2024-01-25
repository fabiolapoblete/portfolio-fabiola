import './style.scss';

import { Link } from 'react-router-dom';

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
            <Link to={item.path}>
              <p>{item.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
