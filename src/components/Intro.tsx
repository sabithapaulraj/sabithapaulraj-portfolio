import React from "react";
import "../styles/Intro.css";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import FadeInSection from "./FadeInSection.tsx";
import Button from 'react-bootstrap/Button'; // Import the Button component from react-bootstrap
import { FiDownload } from "react-icons/fi"; // Import the FiDownload icon

interface IntroState {
  expanded: boolean;
  activeKey: string;
  visible: boolean;
}

class Intro extends React.Component<{}, IntroState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      expanded: true,
      activeKey: "1",
      visible: true,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey: string) {
    this.setState({
      activeKey: eventKey,
    });
  }
  render(): React.ReactNode {
    return (
      <div id="intro">
        <Typist avgTypingDelay={120} key="my-unique-key" cursor={{ show: false }}>
          <span className="intro-title">
            {"hello , i'm "}
            <span className="intro-name">{"sabitha paulraj"}</span>
          </span>
        </Typist>
        <FadeInSection>
          <div className="intro-desc">
            A passionate CompSci Student from Chennai, India. I'm always eager
            to explore new technologies and to collaborate with like-minded
            individuals. My passion lies in integrating emerging technologies
            into practical applications and developing solutions for real-world
            challenges.
          </div>
          <div className="intro-actions">
            <a href="/resume.pdf" download>
              <Button className="custom-download-cv-button">
                <FiDownload /> Download CV
              </Button>
            </a>
            <div className="social-links">
              <a href="mailto:gazijarin@gmail.com">
                <EmailRoundedIcon style={{ fontSize: 20 }} />
              </a>
              <a href="https://github.com/gazijarin" target="_blank" rel="noopener noreferrer">
                <GitHubIcon style={{ fontSize: 19 }} />
              </a>
              <a href="https://www.linkedin.com/in/gazi-jarin-3644b0172/" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon style={{ fontSize: 21 }} />
              </a>
              <a href="https://medium.com/@gazijarin.ai" target="_blank" rel="noopener noreferrer">
                <BorderColorIcon style={{ fontSize: 20 }} />
              </a>
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default Intro; 