import React, { useState } from 'react';
import './Nav.scss' ;
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import NotificationsIcon from '@mui/icons-material/Notifications';


const Nav = () => {

    // Scroll
     const [navBlack, setNavBlack] = useState(false); 
     const [toggleMenu, setToggleMenu] = useState(false); 
     const transitionNav = () => {
        window.scrollY > 100 ? setNavBlack(true) : setNavBlack(false);
     }
     useState(() => {
         document.addEventListener("scroll", transitionNav);
     })

    
     const clickMenu = () => {
         console.log(toggleMenu);
        toggleMenu ? setToggleMenu (false) : setToggleMenu(true) ;
     }


    return (
        <div className={`nav  ${navBlack  || toggleMenu ? "nav--black" : "nav--transparent"} ${toggleMenu && "show "}`}>
            <button  onClick={clickMenu} className="nav__burger">
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
                            < SearchIcon />
                    </a>
                    <a href="/" className="nav__action">
                        Direct
                    </a>
                    <a href="/" className="nav__action">
                        < CardGiftcardIcon />
                    </a>
                    <a href="/" className="nav__action">
                        < NotificationsIcon />
                    </a>
                    {/* <a href="/" className="nav__action">
                        <img src="./img/avatar.jpg" alt="avatar" />
                    </a> */}
                </div>
        </div>
    );
};

export default Nav;