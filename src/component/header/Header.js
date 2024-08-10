import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const threshold = 50;

        setIsScrolled(scrollPosition > threshold);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`header ${isScrolled ? 'scrolled-background' : 'home-background'}`}>
            <div className="header-content">
                <img 
                    src={isScrolled ? "https://fulcro-prod-website-assets.fulcroworld.com/assets/media/IBS_Fulcro_Logo_250x50_01_81cc3dfb17.png" : "https://fulcro-prod-website-assets.fulcroworld.com/assets/media/IBS_Fulcro_Logo_250x50_02_0ff5ffa377.png"} 
                    alt="Fulcro Logo" 
                    className="logo" 
                />
                <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
                    <a href="#">Services</a>
                    <a href="#">Case Studies</a>
                    <a href="#">Clients</a>
                    <a href="#">About</a>
                    <button className="start-project-btn">START A PROJECT</button>
                </nav>
                <button className="menu-icon" onClick={toggleMenu}>
                    ☰
                </button>
            </div>
        </header>
    );
};

export default Header;
