import { Link } from 'react-scroll'
import './style.scss';

export const Navbar = () => {
    const navItems = [
        {
            name: 'Home',
            path: 'hero'
        }, 
        {
            name: 'About me',
            path: 'about'
        },
        {
            name: 'Skills',
            path: 'skills'
        }, 
        {
            name: 'Projects',
            path: 'projects'
        }, 
        {
            name: 'Contact',
            path: 'contact'
        }, 
    ]

    return (
        <nav className='navbar'>
            <ul className='navbar__links'>
                {
                    navItems.map((item) => (
                        <li key={item.name}>
                            <Link               
                            to={item.path}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={900}>
                                <p>{item.name}</p>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}