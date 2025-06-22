import React from 'react';
import '../styles/Others.css';
import FadeInSection from '../components/FadeInSection';

const Others: React.FC = () => {
  return (
    <div className="others-container">
      <FadeInSection>
        <div className="timeline-content">
          <h1 className="title">Certificates & Competitions</h1>
          <h2 className="subtitle">
            A collection of my awarded certificates and hackathon participations.
          </h2>
          <div className="timeline">
            {/* ... timeline items ... */}
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default Others; 