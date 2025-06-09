import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection.tsx";

interface AboutState {
  expanded: boolean;
  activeKey: string;
}

class About extends React.Component<{}, AboutState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey: string) {
    this.setState({
      activeKey: eventKey
    });
  }
  render(): React.ReactNode {
    const one = (
      <>I'm currently in my 3rd year of pursuing my Under-Graduation in  <span className="green-bright-text"><b>Computer Science and Engineering</b></span> at
      <a href="https://www.saveetha.ac.in/"> Saveetha Engineering College.</a> I'm passionate about building scalable software and AI-powered products. <b />
      I worked as a Data Analyst Intern at <a href="https://www.bmw.in/en/index.html">BMW Group India</a>, where I worked on  backend automation, AI tools, and global database systems that support plants across 6+ countries.</>
    );
    const two = (
      <>In my free time, I enjoy exploring new technologies, working on personal projects, and participating in hackathons.<br /></>
    );

    const tech_stack: string[] = [
      "Python",
      "Java",
      "Javascript",
      "Typescript",
      "MERN Stack",
      "Spring Boot",
      "Software Development",
      "MySQL",
      "AWS",
      "AI / Machine Learning",
      "Generative AI",
      "Data Analytics",
      "Deep Learning",
      "Computer Vision",
      "NLP",
      "Databases",
      
      
    ];

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              <p>
                {one}
              </p>
              <p>
                These are some technologies and tech fields that I'm interested and have been working with:
              </p>
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <li key={tech_item + i}>{tech_item}</li>
                  );
                })}
              </ul>
              <p>{two}</p>
            </div>
            <div className="about-image">
              <img alt="Sabitha Paulraj" src={"/assets/profile.jpg"} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About; 