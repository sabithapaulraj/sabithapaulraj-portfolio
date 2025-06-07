import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";

interface ExternalLinksProps {
  githubLink: string;
  openLink?: string;
}

class ExternalLinks extends React.Component<ExternalLinksProps> {
  constructor(props: ExternalLinksProps) {
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
      <span className="external-links">
        <a className="github-icon" href={this.props.githubLink}>
          <GitHubIcon
            style={{
              fontSize: 20,
              color: "var(--lightest-slate)"
            }}
          ></GitHubIcon>
        </a>
        {this.props.openLink && (
          <a className="open-icon" href={this.props.openLink}>
            <OpenInBrowserIcon
              style={{
                fontSize: 25,
                color: "var(--lightest-slate)"
              }}
            ></OpenInBrowserIcon>
          </a>
        )}
      </span>
    );
  }
}

export default ExternalLinks; 