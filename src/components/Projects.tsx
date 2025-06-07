import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@mui/icons-material/FolderOpenRounded";
import FadeInSection from "./FadeInSection.tsx";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks.tsx";

interface SpotlightProject {
  title: string;
  desc: string;
  techStack: string;
  link: string;
  open?: string;
  image: string;
}

interface Project {
  desc: string;
  techStack: string;
  link: string;
  open?: string;
}

interface ProjectsState {
  expanded: boolean;
  activeKey: string;
}

class Projects extends React.Component<{}, ProjectsState> {
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
    const spotlightProjects: { [key: string]: SpotlightProject } = {
      "Health-Hunch": {
        title: "Health-Hunch",
        desc:
          "A ML project to identify diseases based on symptoms",
        techStack: "Python , Streamlit , Spyder",
        link: "https://github.com/sabithapaulraj/Health-Hunch-Dashboard",
        open: "https://health-hunch-dashboard.streamlit.app/",
        image: "/assets/truth.png"
      },
      "Te(ra)fic": {
        title: "Te(ra)fic",
        desc:
          "A LeNet based CNN project to identify and interpret Traffic Signs for Autonomous Vehicles",
        techStack: "Python , Tensorflow , Streamlit",
        link: "https://github.com/sabithapaulraj/traffic-sign_identifiation",
        open: "https://trafficpredictionwebapppy-h6nxawvxmvefljg7jxh9lk.streamlit.app/",
        image: "/assets/truth.png"
      },
      "CardioVista": {
        title: "CardioVista",
        desc:
          "A digital tool to help heart surgeons/cardiologists plan preventive cardiac measures",
        techStack: "Python , React.js , Node.js",
        link: "https://github.com/sabithapaulraj/CardioVista",
        
        image: "/assets/truth.png"
      },
     
      
    };
    const projects: { [key: string]: Project } = {
      "Predicting Pandemic Deaths - A Gradient Boosting Regression Approach": {
        desc:
          "A project to predict the number of deaths during widespread pandemics, focusing on the COVID-19 pandemic in India from January 2020 to August 2021.",
        techStack: "Python , Gradient Boosting Regression",
        link: "https://github.com/sabithapaulraj/Predicting-Pandemic-Deaths-A-Gradient-Boosting-Regression-Approach",
        
      },
      "Road Accident Severity Analysis": {
        desc:
          "Analysing Road Accidents and Visualization",
        techStack: "Python , scikit-learn , matplotlib , seaborn",
        link: "https://github.com/sabithapaulraj/Mini-Project",
        
      },
      "Random Number Generator App": {
        desc:
          "A basic mobile application to generate random numbers using Android Studio",
        techStack: "Java , Android Studio",
        link:
          "https://github.com/sabithapaulraj/RANDOM-NUMBER-GENERATOR-APP"
      }
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ pet projects</span>
        </div>
        <Carousel>
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item key={i}>
              <img
                className="d-block w-100"
                src={spotlightProjects[key]["image"]}
                alt={key}
              />
              <div className="caption-bg">
                <Carousel.Caption>
                  <h3>{spotlightProjects[key]["title"]}</h3>
                  <p>
                    {spotlightProjects[key]["desc"]}
                    <p className="techStack">
                      {spotlightProjects[key]["techStack"]}
                    </p>
                  </p>
                  <ExternalLinks
                    githubLink={spotlightProjects[key]["link"]}
                    openLink={spotlightProjects[key]["open"]}
                  ></ExternalLinks>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`} key={i}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects; 