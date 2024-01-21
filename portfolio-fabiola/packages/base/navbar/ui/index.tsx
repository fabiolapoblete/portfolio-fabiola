import { Link } from "react-router-dom"
import { HamburgerMenu } from '@portfolio/hamburger-menu'
import './style.scss';

export const Navbar = () => {
    const navItems = [
        {
            name: 'Home',
            path: '/'
        }, 
        {
            name: 'Skills',
            path: '/skills'
        }, 
        {
            name: 'Projects',
            path: '/projects'
        }, 
        {
            name: 'Contact',
            path: '/contact'
        }, 
    ]

    const handleActivePath = (path: string, name: string) => {
        if (path === "/" && name.toLowerCase() === 'home') {
            return 'active'
        }

        const currentPath = path.replace('/', '')
        if (currentPath === name.toLowerCase()) {
            return 'active'
        }

        return '';
    }

    return (
        <header className="header">
            <nav className='navbar'>
                <ul className='navbar__links'>
                    {
                        navItems.map((item) => (
                            <li>
                                <Link className={handleActivePath(item.path, item.name)} to={item.path}>
                                    <p>{item.name}</p>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
            <HamburgerMenu />
        </header>
    )
}