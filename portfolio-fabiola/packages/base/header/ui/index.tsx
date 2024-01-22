import { Navbar } from '@portfolio/navbar'
import { HamburgerMenu } from '@portfolio/hamburger-menu'

export const Header = () => {
    return (
        <header className='header'>
            <Navbar />
            <HamburgerMenu />
        </header>)
}