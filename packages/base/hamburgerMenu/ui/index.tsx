import './style.scss';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HamburgerIcon, CloseIcon } from '../../../core/assets/svgIcons';

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
              <Link to={item.path}>
                <p>{item.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};
