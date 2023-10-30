import React, { useEffect, useState } from 'react';
import '../styles/Nav.css'

const Nav = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    useEffect(() => {
        const navToggler = document.querySelector('.js-nav-toggler');
        const nav = document.querySelector('.js-nav');

        const toggleNav = () => {
            setIsNavOpen((prev) => !prev);
            navToggler.classList.toggle('active');
            nav.classList.toggle('open');
        };

        const closeNav = () => {
            setIsNavOpen(false);
            navToggler.classList.remove('active');
            nav.classList.remove('open');
        };

        navToggler.addEventListener('click', toggleNav);

        const navLinks = document.querySelectorAll('.nav-item a');
        navLinks.forEach((link) => {
            link.addEventListener('click', closeNav);
        });

        return () => {
            navToggler.removeEventListener('click', toggleNav);
            navLinks.forEach((link) => {
                link.removeEventListener('click', closeNav);
            });
        };
    }, []);

    useEffect(() => {
        if (isNavOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isNavOpen]);
    
    return(
        <header className="header">
            <div className="container header-container">
                <div className="header-logo">
                    <a href="#hero"
                        ><img
                        className="nav-logo"
                            src="./assets/logo.svg"
                            alt=""
                        />
                    </a>
                </div>

            <div className="demo nav-toggler js-nav-toggler">
                <div className="menu-icon">
                  <input className="menu-icon__cheeckbox" type="checkbox" checked={isNavOpen} />
                    <div>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>

            <nav className="nav js-nav">
                <ul>
                    <li className="nav-item"><a href="#aboutMe" style={{ '--i': 0 }}>A propos</a></li>
                    <li className="nav-item"><a href="#timeline" style={{ '--i': 1 }}>Parcours</a></li>
                    <li className="nav-item"><a href="#skill" style={{ '--i': 2 }}>Compétences</a></li>
                    <li className="nav-item"><a href="#package" style={{ '--i': 3 }}>Projets</a></li>
                </ul>
            </nav>
        </div>
    </header>
    );
}

export default Nav