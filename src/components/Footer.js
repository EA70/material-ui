import React from 'react';
import './Footer.scss';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="footer__socials">
                    <a href="/" className="footer__social">
                        < FacebookIcon />
                    </a>
                    <a href="/" className="footer__social">
                        < InstagramIcon />
                    </a>
                    <a href="/" className="footer__social">
                        < TwitterIcon />
                    </a>
                    <a href="/" className="footer__social">
                        < YouTubeIcon />
                    </a>

                </div>
                <ul className="footer__links">
                    <li className="footer__link">
                        <a href="/">Top 50</a>
                    </li>
                    <li className="footer__link">
                        <a href="/">Series & Films</a>
                    </li>
                    <li className="footer__link">
                        <a href="/">Nouveautés</a>
                    </li>
                    <li className="footer__link">
                        <a href="/">Politiques et confidentialités</a>
                    </li>
                    <li className="footer__link">
                        <a href="/">Nous contacter</a>
                    </li>
                    <li className="footer__link">
                        <a href="/">Abonnements</a>
                    </li>
                    <li className="footer__link">
                        <a href="/">Connexion</a>
                    </li>
                    <li className="footer__link">
                        <a href="/">Inscription</a>
                    </li>
                    <li className="footer__link">
                        <a href="/">Obtener un abonnement gratuit</a>
                    </li>
                </ul>

                <div className="footer__copy">Netflix clone - tous droits reserves</div>
            </div>
        </div>
    );
};

export default Footer;