import Logo from '/src/assets/images/logo.svg'
import FooterSocials from "./FooterSocials.tsx";
import FooterLinks from "./FooterLinks.tsx";

const socialsList: Social[] = [
    {
        name: 'Facebook',
        link: '#',
        icon: '/src/assets/images/icon-facebook.svg'
    },
    {
        name: 'Twitter',
        link: '#',
        icon: '/src/assets/images/icon-twitter.svg'
    },
    {
        name: 'Pinterest',
        link: '#',
        icon: '/src/assets/images/icon-pinterest.svg'
    },
    {
        name: 'Instagram',
        link: '#',
        icon: '/src/assets/images/icon-instagram.svg'
    },
]

type Social = {
    name: string;
    link: string;
    icon: string;
};

const links: LinkGroup[] = [
    {
        header: 'Our Company',
        links: [
            {
                location: 'How We Work',
                link: '#'
            },
            {
                location: 'Why Insure?',
                link: '#'
            },
            {
                location: 'View Plans',
                link: '#'
            },
            {
                location: 'Reviews',
                link: '#'
            },
        ],
    },
    {
        header: 'Help Me',
        links: [
            {
                location: 'FAQ',
                link: '#'
            },
            {
                location: 'Terms of Use',
                link: '#'
            },
            {
                location: 'Privacy Policy',
                link: '#'
            },
            {
                location: 'Cookies',
                link: '#'
            },
        ],
    },
    {
        header: 'Contact',
        links: [
            {
                location: 'Sales',
                link: '#'
            },
            {
                location: 'Support',
                link: '#'
            },
            {
                location: 'Live Chat',
                link: '#'
            },
        ],
    },
    {
        header: 'Others',
        links: [
            {
                location: 'Careers',
                link: '#'
            },
            {
                location: 'Press',
                link: '#'
            },
            {
                location: 'Licenses',
                link: '#'
            },
        ],
    },
]

interface LinkGroup {
    header: string;
    links: LinkItem[];
}

interface LinkItem {
    location: string;
    link: string;
}

export default function Footer() {
    return (
        <footer className='footer grid-bleed'>
            <div className="footer__content">
                <div className='footer__section'>
                    <img className="header__logo" src={Logo} alt="Insure Logo"/>
                    <FooterSocials socials={socialsList}/>
                </div>
                
                <hr className='footer__divider'/>

                <div className='footer__links'>
                    <FooterLinks links={links}/>
                </div>
            </div>
        </footer>
    )
}