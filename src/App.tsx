import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Intro from './components/Intro';
import About from './components/About';
import Experience from './components/Experience';
import ProjectSection from './components/ProjectSection';
import Credits from './components/Credits';

function App(): React.ReactNode {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div id="content">
        <Intro></Intro>
        <About></About>
        <Experience></Experience>
        <ProjectSection></ProjectSection>
        <Credits></Credits>
      </div>
    </div>
  );
}

export default App; 