import React from "react";
import "../styles/Credits.css";
import FadeInSection from "./FadeInSection.tsx";

interface CreditsState {
  expanded: boolean;
  activeKey: string;
}

class Credits extends React.Component<{}, CreditsState> {
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
    return (
      <FadeInSection>
        <div id="credits">
          <div className="ending-credits">
            <div>Built and designed by Sabitha Paulraj. </div>
            <div>All rights reserved. ©</div>
          </div>
        </div>
      </FadeInSection>
    );
  }
}

export default Credits; 