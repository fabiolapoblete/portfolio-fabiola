import { Navbar } from '@portfolio/navbar'
import { HamburgerMenu } from '@portfolio/hamburger-menu'
import './style.scss'

export const Header = () => {
    return (
        <header className='header'>
            <Navbar />
            <HamburgerMenu />
        </header>)
}