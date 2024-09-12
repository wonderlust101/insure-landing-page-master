type FooterLinks = {
    links: LinkGroup[];
}

interface LinkGroup {
    header: string;
    links: LinkItem[];
}

interface LinkItem {
    location: string;
    link: string;
}

export default function FooterLinks({links}: FooterLinks) {

    return (
        <>
            {links.map((linkHeader) => (
                <ul key={linkHeader.header} className='footer__link-section'>
                    <h2 className='footer__link-header'>{linkHeader.header}</h2>
                    
                    <ul className='footer__sublink-section'>
                        {linkHeader.links.map((link) => (
                            <li key={link.location} className='footer__sublink'>
                                <a href={link.link} aria-label={'Go to ' + link.location +' page'}>{link.location}</a>
                            </li>
                        ))}
                    </ul>
                    
                </ul>
            ))}
        </>
    )
}