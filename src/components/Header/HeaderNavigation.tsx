type HeaderNavigationProps = {
    links: string[];
    open: boolean
}

export default function HeaderNavigation({links,open}:HeaderNavigationProps) {
    
    return (
        <nav className={'header__navigation-container ' + (open ? '' : 'header__navigation-container--hidden')}>
            <ul className='header__navigation'>
                {links.map((link) => (
                    <li key={link} className='header__navigation-link'>
                        <a href="#">{link}</a>
                    </li>
                ))}
                
                <li className="button header__button"><a href="#">View Plans</a></li>
            </ul>
        </nav>
    )
}