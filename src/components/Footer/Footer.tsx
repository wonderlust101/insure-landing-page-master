import Logo from '/src/assets/images/logo.svg'
import linkList from '/src/data/links.json'
import socialsList from '/src/data/socials.json'
import FooterSocials from "./FooterSocials.tsx";
import FooterLinks from "./FooterLinks.tsx";

const socials: Social[] = socialsList;
const links: LinkGroup[] = linkList;

type Social = {
    name: string;
    link: string;
    icon: string;
};

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
                    <FooterSocials socials={socials}/>
                </div>
                
                <hr className='footer__divider'/>

                <div className='footer__links'>
                    <FooterLinks links={links}/>
                </div>
            </div>
        </footer>
    )
}