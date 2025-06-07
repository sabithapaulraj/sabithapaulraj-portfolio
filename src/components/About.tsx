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
      <p>
        I am currently in 3rd year of pursuing my Under-Graduation in  <span className="green-bright-text"><b>Computer Science and Engineering</b></span> with <span className="green-bright-text"><b>Specialization in Data Analytics</b> </span>at
        
        <a href="https://www.saveetha.ac.in/"> Saveetha Engineering College.</a> I have developed a strong expertise
         in <b>Web Development, Machine Learning, and Data Analysis. </b>
         Passionate about solving real-world problems through coding, I am actively seeking opportunities to 
         expand my skills and contribute to impactful projects.
      </p>
    );
    const two = (
      <p>
        In my free time, I enjoy exploring new technologies, working on personal projects, and participating in hackathons.<br></br>
      </p>
    );

    const tech_stack: string[] = [
      "Python",
      "C & C++",
      "Java",
      "Data Analytics",
      "MERN Stack",
      "Machine Learning",
      "Deep Learning",
      "Neural Networks",
    ];

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">About Me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"These are some technologies and tech fields that I'm interested and have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              <img alt="Sabitha Paulraj" src={"/assets/sabithapaulraj.jpg"} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About; 