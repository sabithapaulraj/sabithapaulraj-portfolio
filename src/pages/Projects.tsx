import React from 'react';
import ProjectSection from '../components/ProjectSection';
import Credits from '../components/Credits';

const ProjectsPage: React.FC = () => {
  return (
    <div className="page-container">
      <ProjectSection />
      <Credits />
    </div>
  );
};

export default ProjectsPage; 