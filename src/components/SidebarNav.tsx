import React from "react";
import { Sidenav } from "rsuite";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import "../styles/SidebarNav.css";
import "react-typist/dist/Typist.css";
import FadeInSection from "./FadeInSection";

interface SidebarNavState {
  expanded: boolean;
  activeKey: string;
}

const isMobile = window.innerWidth < 600;

class SidebarNav extends React.Component<{}, SidebarNavState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey: string | undefined, event: React.SyntheticEvent<Element, Event>) {
    if (eventKey) {
      this.setState({
        activeKey: eventKey
      });
    }
  }
  render() {
    const { expanded } = this.state;

    const links: React.ReactNode[] = [
      <a href="#intro">/home</a>,
      <a href="#about">/about</a>,
      <a href="#experience">/experience</a>,
      <a href="#projects">/software-creations</a>
    ];

    return (
      <div className="sidebar-nav">
        {!isMobile && (
          <Sidenav
            expanded={expanded}
            defaultOpenKeys={["3", "4"]}
            activeKey={this.state.activeKey}
            onSelect={this.handleSelect}
            appearance={"subtle"}
          >
            <Sidenav.Body>
              <div className="sidebar-links">
                {links.map((link, i) => (
                  <FadeInSection key={i} delay={`${i + 1}00ms`}>
                    <div>{link}</div>
                  </FadeInSection>
                ))}
              </div>
            </Sidenav.Body>
          </Sidenav>
        )}
        <div className="sidebar-logos">
          <a href="mailto:gazijarin@gmail.com">
            <EmailRoundedIcon style={{ fontSize: 20 }}></EmailRoundedIcon>
          </a>
          <a href="https://github.com/gazijarin">
            <GitHubIcon style={{ fontSize: 19 }}></GitHubIcon>
          </a>
          <a href="https://www.linkedin.com/in/gazi-jarin-3644b0172/">
            <LinkedInIcon style={{ fontSize: 21 }}></LinkedInIcon>
          </a>
        </div>
      </div>
    );
  }
}

export default SidebarNav;
