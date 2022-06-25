import React from 'react';
import './Nav.scss' ;
import MenuIcon from '@mui/icons-material/Menu';


const Nav = () => {
    return (
        <div className='nav show nav--black'>
            <button className="nav__burger">
                < MenuIcon />
            </button>
            <img src="./img/logo.png" className='nav__logo' alt="netflix" />
            <nav className="nav__links">
                <a href="/" className="nav__link">
                    Accueil
                </a>
                <a href="/" className="nav__link">
                    Series
                </a>
                <a href="/" className="nav__link">
                    Films
                </a>
            </nav>
            <div className="nav__actions">
                    <a href="/" className="nav__action">
                        Search
                    </a>
                    <a href="/" className="nav__action">
                        Direct
                    </a>
                    <a href="/" className="nav__action">
                        Gift
                    </a>
                    <a href="/" className="nav__action">
                        Notif
                    </a>
                    <a href="/" className="nav__action">
                        <img src="./img/avatar.jpg" alt="avatar" />
                    </a>
                </div>
        </div>
    );
};

export default Nav;