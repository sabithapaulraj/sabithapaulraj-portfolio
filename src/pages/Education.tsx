import React from 'react';
import '../styles/Education.css';
import FadeInSection from '../components/FadeInSection';

const Education: React.FC = () => {
    const educationData = [
        {
            institution: 'Saveetha Engineering College',
            degree: 'Bachelor of Engineering - BE, Computer Science and Engineering',
            duration: '2022 - 2026',
            details: [
                'CGPA: 9.2 (till 5th sem)',
                'Relevant Coursework: Data Structures, Algorithms, Object Oriented Programming, Machine Learning, Natural Language Processing, Web Server Programming, NoSQL Database Design, Web Application Development, Operating Systems, Database Management Systems, Computer Networks. Languages: Python, Java, C, C++',
            ],
        },
        {
            institution: 'The Velammal International School',
            degree: 'Higher Secondary School',
            duration: '2020 - 2022',
            details: [
                'Percentage: 95.6%'
            ],
        },
        {
            institution: 'Velammal Vidhyashram, Surapet',
            degree: 'High School',
            duration: '2012 - 2020',
            details: [
                'Percentage: 96.2%'
               
                
            ],
        },
    ];

    return (
        <div className="education-container">
            <FadeInSection>
                <div className="section-header">
                    <span className="section-title">/education</span>
                </div>
                <div className="education-timeline">
                    {educationData.map((edu, index) => (
                        <div className="timeline-item" key={index}>
                            <div className="timeline-content">
                                <h3>{edu.institution}</h3>
                                <h4>{edu.degree}</h4>
                                <span className="duration">{edu.duration}</span>
                                <ul>
                                    {edu.details.map((detail, i) => (
                                        <li key={i}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </FadeInSection>
        </div>
    );
};

export default Education; 