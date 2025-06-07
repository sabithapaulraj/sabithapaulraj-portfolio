import React from "react";
import JobList from "./JobList";
import "../styles/Experience.css";
import FadeInSection from "./FadeInSection";

interface ExperienceState {
  expanded: boolean;
  activeKey: string;
}

class Experience extends React.Component<{}, ExperienceState> {
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
  render() {
    return (
      <div id="experience">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ experience</span>
          </div>
          <JobList></JobList>
        </FadeInSection>
      </div>
    );
  }
}

export default Experience;
