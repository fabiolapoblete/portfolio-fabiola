// import { Link } from 'react-scroll'
import './style.scss';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    // const navItems = [
    //     {
    //         name: 'Home',
    //         path: 'hero'
    //     }, 
    //     {
    //         name: 'About me',
    //         path: 'about'
    //     },
    //     {
    //         name: 'Skills',
    //         path: 'skills'
    //     }, 
    //     {
    //         name: 'Projects',
    //         path: 'projects'
    //     }, 
    //     {
    //         name: 'Contact',
    //         path: 'contact'
    //     }, 
    // ]

    const navItems = [
        {
            name: 'Home',
            path: '/'
        }, 
        {
            name: 'About me',
            path: '/about'
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

    // const navigate = useNavigate()
    // const handleNavigate = () => {
    //     navigate('/portfolio')
    // }
    return (
        <nav className='navbar'>
            <ul className='navbar__links'>
                {
                    navItems.map((item) => (
                        <li key={item.name}>
                            <Link to={item.path}>
                                <p>{item.name}</p>
                            </Link>
                            {/* <Link               
                            to={item.path}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={900}
                            activeClass='navbar__active'
                            onClick={handleNavigate()}>
                            
                                <p>{item.name}</p>
                            </Link> */}
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}