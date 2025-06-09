import React from "react";
import "../styles/Intro.css";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FadeInSection from "./FadeInSection.tsx";
import Button from 'react-bootstrap/Button';
import { FiDownload } from "react-icons/fi";
import { Typewriter } from 'react-simple-typewriter';

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
        <div className="intro-title">
          <Typewriter
            words={["hello, i'm sabitha paulraj."]}
            typeSpeed={100}
            cursor={true}
            cursorStyle="_"
            delaySpeed={500}
          />
        </div>

        <FadeInSection>
          <div className="intro-desc">
            I'm a 3rd yr CS undergrad obsessed with ML and GenAI. You'll usually find me working with LLMs or deep-diving into NLP just for fun. If it's AI and it's cool — I dive into it.
            <br />
            Lately, I've been getting into system design — learning how to architect large-scale systems, from LLDs to HLDs that actually scale.
            <br />
            I also love spinning up "brainrot" side projects — like spending 6 hours automating a 5-minute task because... why not?
            <br />
            Right now, I'm exploring Quant ML, Embedded CV etc. I read tech blogs like people binge shows, and I'm planning to launch my own blog one day to share my daily brainrot contents about tech lol.
          </div>

          <div className="intro-actions">
            <a href="/Sabitha_Resume.pdf" download>
              <Button className="custom-download-cv-button">
                <FiDownload /> Download CV
              </Button>
            </a>
            <div className="social-links">
              <a href="mailto:sabithaapaulraj@gmail.com">
                <EmailRoundedIcon style={{ fontSize: 20 }} />
              </a>
              <a href="https://github.com/sabithapaulraj" target="_blank" rel="noopener noreferrer">
                <GitHubIcon style={{ fontSize: 19 }} />
              </a>
              <a href="https://www.linkedin.com/in/sabithapaulraj/" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon style={{ fontSize: 21 }} />
              </a>
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default Intro;
