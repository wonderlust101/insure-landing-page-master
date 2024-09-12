import Logo from '/src/assets/images/logo.svg'
import BurgerIcon from '/src/assets/images/icon-hamburger.svg'
import CloseIcon from '/src/assets/images/icon-close.svg'
import HeaderNavigation from "./HeaderNavigation.tsx";
import {useState} from "react";


const links: string[] = ['How we work', 'Blog', 'Account']

export default function Header() {
    const [open, setOpen] = useState(false);
    
    function handleToggleMenu() {
        setOpen(!open);
    }
    

    return (
        <header className="header">
            <div className='header__logo-container'>
                <img className="header__logo" src={Logo} alt="Insure Logo"/>
                <button className='header__burger-menu' onClick={handleToggleMenu}><img src={open ? CloseIcon: BurgerIcon} alt=""/></button>
            </div>
            <HeaderNavigation links={links} open={open}/>
        </header>
    )
}