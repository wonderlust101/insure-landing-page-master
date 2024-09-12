type FooterSocialsProps = {
    socials: Social[];
}

type Social = {
    name: string;
    link: string;
    icon: string;
};

export default function FooterSocials({socials} :FooterSocialsProps) {
    
    return (
        <div className='footer__socials'>
            <ul className='footer__socials-flex'>
                
                {socials.map((social) => (
                    <li key={social.name}>
                        <a href={social.link} aria-label={'Go to Insure ' + social.name + ' page'}>
                            <img src={social.icon} alt="" role='presentation'/>
                        </a>
                    </li>
                ))}
                
            </ul>
        </div>
    )
}