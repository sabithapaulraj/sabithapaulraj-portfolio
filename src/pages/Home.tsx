import React from 'react';
import { Link } from 'react-router-dom';
import Intro from '../components/Intro';
import Credits from '../components/Credits';
import '../styles/Home.css';

const Home: React.FC = () => {
    return (
        <div className="home-container">
            <nav className="home-nav-top">
                <Link to="/home" className="nav-logo">Sabitha.</Link>
                <div className="top-links">
                    <Link to="/home">/home</Link>
                    <Link to="/about">/about</Link>
                    <Link to="/education">/education</Link>
                    <Link to="/experience">/experience</Link>
                </div>
            </nav>

            <nav className="home-nav-top-right">
                <Link to="/sayhi">/sayhi</Link>
            </nav>

            <div className="home-content">
                <Intro />
            </div>

            <div className="home-nav-bottom-left">
                <Credits />
            </div>

            <nav className="home-nav-bottom-right">
                <Link to="/projects">/projects</Link>
                <Link to="/blogs">/blogs</Link>
                {/* <Link to="/hackathons">/hackathons</Link> */}
                {/* <Link to="/others">/certificates</Link> */}
                <span className="nav-logo">Sabitha.</span>
            </nav>
        </div>
    );
};

export default Home; 