import React from 'react';
import '../styles/SayHi.css';
import FadeInSection from '../components/FadeInSection';

const SayHi: React.FC = () => {
    return (
        <div className="sayhi-container">
            <FadeInSection>
                <div className="section-header">
                    <span className="section-title">/say hi</span>
                </div>
                <div className="contact-through-text">Contact me through</div>
                <div className="sayhi-links-row">
                    <div className="sayhi-card">
                        <div className="sayhi-card-title">LinkedIn</div>
                        <div className="sayhi-card-id">sabithapaulraj</div>
                        <a href="https://www.linkedin.com/in/sabithapaulraj/" target="_blank" rel="noopener noreferrer">
                            <button className="sayhi-card-btn">View LinkedIn</button>
                        </a>
                    </div>
                    <div className="sayhi-card">
                        <div className="sayhi-card-title">Email</div>
                        <div className="sayhi-card-id">sabithaapaulraj@gmail.com</div>
                        <a href="mailto:sabithaapaulraj@gmail.com" target="_blank" rel="noopener noreferrer">
                            <button className="sayhi-card-btn">Send Email</button>
                        </a>
                    </div>
                </div>
                <div className="sayhi-extra">
                    <div className="opportunities-section">
                        <h2>Currently looking for opportunities</h2>
                        <ul>
                            <li>Full-time roles in Software Engineering, Backend Engineering, Machine Learning, Applied Science, Data Analysis, Business Analysis, Consulting</li>
                            <li>Internship positions in the same above mentioned fields</li>
                            <li>Collaborative projects and Research on Machine Learning and AI</li>
                            <li>Tech discussions and Mentorship</li>
                        </ul>
                    </div>
                    <div className="response-time-wide">
                        <span className="response-time-icon" role="img" aria-label="lightbulb">💡</span>
                        <div className="response-time-content">
                            <span className="response-time-label">Quick Response</span>
                            <span className="response-time-message">I typically respond within 24 hours during weekdays!</span>
                        </div>
                    </div>
                </div>
            </FadeInSection>
        </div>
    );
};

export default SayHi; 