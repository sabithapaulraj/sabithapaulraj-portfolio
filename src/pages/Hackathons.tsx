import React from 'react';
import '../styles/Hackathons.css';
import FadeInSection from '../components/FadeInSection';

const Hackathons: React.FC = () => {
  return (
    <div className="hackathons-container">
      <FadeInSection>
        <div className="hackathons-header">
          <h1 className="hackathons-title">Hackathons</h1>
          <p className="hackathons-subtitle">
            Here are some of the exciting hackathons I've participated in and the projects I've built.
          </p>
        </div>

        <div className="hackathons-content">
          <div className="hackathon-stats">
            <div className="stat-card">
              <div className="stat-number">5+</div>
              <div className="stat-label">Hackathons Participated</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">3</div>
              <div className="stat-label">Winning Projects</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100+</div>
              <div className="stat-label">Hours of Coding</div>
            </div>
          </div>

          <div className="hackathons-list">
            <div className="hackathon-item">
              <div className="hackathon-header">
                <h3>AI Innovation Challenge</h3>
                <span className="hackathon-date">March 2024</span>
              </div>
              <div className="hackathon-details">
                <p className="hackathon-description">
                  Built an AI-powered solution for sustainable agriculture using computer vision and machine learning.
                </p>
                <div className="hackathon-tech">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">TensorFlow</span>
                  <span className="tech-tag">OpenCV</span>
                  <span className="tech-tag">Flask</span>
                </div>
                <div className="hackathon-achievement">
                  <span className="achievement-badge">🏆 1st Place</span>
                </div>
              </div>
            </div>

            <div className="hackathon-item">
              <div className="hackathon-header">
                <h3>Web3 Development Hackathon</h3>
                <span className="hackathon-date">January 2024</span>
              </div>
              <div className="hackathon-details">
                <p className="hackathon-description">
                  Created a decentralized application for secure document verification using blockchain technology.
                </p>
                <div className="hackathon-tech">
                  <span className="tech-tag">Solidity</span>
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Web3.js</span>
                  <span className="tech-tag">IPFS</span>
                </div>
                <div className="hackathon-achievement">
                  <span className="achievement-badge">🥈 2nd Place</span>
                </div>
              </div>
            </div>

            <div className="hackathon-item">
              <div className="hackathon-header">
                <h3>Data Science Challenge</h3>
                <span className="hackathon-date">November 2023</span>
              </div>
              <div className="hackathon-details">
                <p className="hackathon-description">
                  Developed a predictive model for customer churn analysis with 95% accuracy using advanced ML algorithms.
                </p>
                <div className="hackathon-tech">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">Scikit-learn</span>
                  <span className="tech-tag">Pandas</span>
                  <span className="tech-tag">Jupyter</span>
                </div>
                <div className="hackathon-achievement">
                  <span className="achievement-badge">🏆 1st Place</span>
                </div>
              </div>
            </div>

            <div className="hackathon-item">
              <div className="hackathon-header">
                <h3>Mobile App Development</h3>
                <span className="hackathon-date">September 2023</span>
              </div>
              <div className="hackathon-details">
                <p className="hackathon-description">
                  Built a cross-platform mobile app for real-time language translation with offline capabilities.
                </p>
                <div className="hackathon-tech">
                  <span className="tech-tag">React Native</span>
                  <span className="tech-tag">Node.js</span>
                  <span className="tech-tag">MongoDB</span>
                  <span className="tech-tag">Google Translate API</span>
                </div>
                <div className="hackathon-achievement">
                  <span className="achievement-badge">🥉 3rd Place</span>
                </div>
              </div>
            </div>
          </div>

          <div className="upcoming-hackathons">
            <h2>Upcoming Hackathons</h2>
            <p>Always on the lookout for the next exciting challenge!</p>
            <div className="upcoming-list">
              <div className="upcoming-item">
                <span className="upcoming-icon">🚀</span>
                <span>Quantum Computing Hackathon</span>
              </div>
              <div className="upcoming-item">
                <span className="upcoming-icon">🤖</span>
                <span>AI Ethics Challenge</span>
              </div>
              <div className="upcoming-item">
                <span className="upcoming-icon">🌍</span>
                <span>Climate Tech Innovation</span>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default Hackathons; 