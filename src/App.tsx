import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Others from './pages/Others';
import Education from './pages/Education';
import Blogs from './pages/Blogs';
import SayHi from './pages/SayHi';
import Hackathons from './pages/Hackathons';
import BackButton from './components/BackButton';

function App() {
    return <AppContent />;
}

function AppContent() {
    const location = useLocation();
    const showBackButton = location.pathname !== '/home' && location.pathname !== '/';

    return (
        <div className="App">
            {showBackButton && <BackButton />}
            <div id="content">
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/others" element={<Others />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/blogs" element={<Blogs />} />
                    <Route path="/sayhi" element={<SayHi />} />
                    <Route path="/hackathons" element={<Hackathons />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </div>
    );
}

export default App; 