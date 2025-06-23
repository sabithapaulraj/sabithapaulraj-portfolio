import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Intro from '../components/Intro';
import Credits from '../components/Credits';
import '../styles/Home.css';

const routes = [
    { path: '/home', label: '/home' },
    { path: '/about', label: '/about' },
    { path: '/education', label: '/education' },
    { path: '/experience', label: '/experience' },
    { path: '/projects', label: '/projects' },
    { path: '/blogs', label: '/blogs' },
    { path: '/hackathons', label: '/hackathons' },
    { path: '/others', label: '/certificates' },
    { path: '/sayhi', label: '/sayhi' },
];

const Home: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className="home-container">
            {/* Desktop Navs - all in one row */}
            <nav className="home-nav-top desktop-only">
                <Link to="/home" className="nav-logo">Sabitha.</Link>
                <Link to="/home" className="nav-link">/home</Link>
                <Link to="/about" className="nav-link">/about</Link>
                <Link to="/education" className="nav-link">/education</Link>
                <Link to="/experience" className="nav-link">/experience</Link>
            </nav>
            <nav className="home-nav-top-sayhi desktop-only">
                <Link to="/sayhi" className="nav-link-sayhi">/sayhi</Link>
            </nav>
            <div className="home-content">
                <Intro />
            </div>
            <div className="home-nav-bottom-left desktop-only">
                <Credits />
            </div>
            <nav className="home-nav-bottom-right desktop-only">
                <Link to="/projects">/projects</Link>
                <span className="bottom-link-gap"></span>
                <Link to="/blogs">/blogs</Link>
                <span className="bottom-link-gap"></span>
                <span className="nav-logo">Sabitha.</span>
            </nav>
            {/* Mobile Hamburger Button */}
            <button className="mobile-menu-btn mobile-only" onClick={() => setMenuOpen(true)}>
                <span className="hamburger-icon">&#9776;</span>
            </button>
            {/* Mobile Side Menu Drawer */}
            <div className={`mobile-side-menu${menuOpen ? ' open' : ''} mobile-only`}>
                <div className="mobile-side-menu-header">
                    <span className="mobile-menu-title">Sabitha.</span>
                    <button className="mobile-menu-close" onClick={() => setMenuOpen(false)}>&times;</button>
                </div>
                <div className="mobile-side-menu-links">
                    {routes.map(route => (
                        <Link key={route.path} to={route.path} onClick={() => setMenuOpen(false)}>{route.label}</Link>
                    ))}
                </div>
            </div>
            {menuOpen && <div className="mobile-menu-backdrop mobile-only" onClick={() => setMenuOpen(false)}></div>}
        </div>
    );
};

export default Home; 