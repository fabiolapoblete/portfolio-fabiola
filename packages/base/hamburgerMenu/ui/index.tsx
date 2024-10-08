import './style.scss';

import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HamburgerIcon, CloseIcon } from '@portfolio/assets';

export const HamburgerMenu = () => {
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

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`hamburgerMenu ${isOpen ? 'open' : ''}`}>
      <div className='hamburgerMenu__icons' onClick={toggleMenu}>
        {isOpen ? CloseIcon : HamburgerIcon}
      </div>
      {isOpen && (
        <ul className='hamburgerMenu__links'>
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink to={item.path}>
                <p>{item.name}</p>
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};
