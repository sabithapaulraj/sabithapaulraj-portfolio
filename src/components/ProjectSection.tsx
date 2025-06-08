import React, { useState, useEffect, useCallback, useRef } from "react";
import "../styles/ProjectSection.css";
import FolderOpenRoundedIcon from "@mui/icons-material/FolderOpenRounded";
import FadeInSection from "./FadeInSection.tsx";
import ExternalLinks from "./ExternalLinks.tsx";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

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

const ProjectSection: React.FC = () => {
  const spotlightProjects: { [key: string]: SpotlightProject } = {
    "Health-Hunch": {
      title: "Health-Hunch",
      desc: "A ML project to identify diseases based on symptoms",
      techStack: "Python , Streamlit , Spyder",
      link: "https://github.com/sabithapaulraj/Health-Hunch-Dashboard",
      open: "https://health-hunch-dashboard.streamlit.app/",
      image: "/assets/truth.png"
    },
    "Te(ra)fic": {
      title: "Te(ra)fic",
      desc: "A LeNet based CNN project to identify and interpret Traffic Signs for Autonomous Vehicles",
      techStack: "Python , Tensorflow , Streamlit",
      link: "https://github.com/sabithapaulraj/traffic-sign_identifiation",
      open: "https://trafficpredictionwebapppy-h6nxawvxmvefljg7jxh9lk.streamlit.app/",
      image: "/assets/truth.png"
    },
    "CardioVista": {
      title: "CardioVista",
      desc: "A digital tool to help heart surgeons/cardiologists plan preventive cardiac measures",
      techStack: "Python , React.js , Node.js",
      link: "https://github.com/sabithapaulraj/CardioVista",
      image: "/assets/truth.png"
    },
  };

  const projects: { [key: string]: Project } = {
    "Predicting Pandemic Deaths - A Gradient Boosting Regression Approach": {
      desc: "A project to predict the number of deaths during widespread pandemics, focusing on the COVID-19 pandemic in India from January 2020 to August 2021.",
      techStack: "Python , Gradient Boosting Regression",
      link: "https://github.com/sabithapaulraj/Predicting-Pandemic-Deaths-A-Gradient-Boosting-Regression-Approach",
    },
    "Road Accident Severity Analysis": {
      desc: "Analysing Road Accidents and Visualization",
      techStack: "Python , scikit-learn , matplotlib , seaborn",
      link: "https://github.com/sabithapaulraj/Mini-Project",
    },
    "Random Number Generator App": {
      desc: "A basic mobile application to generate random numbers using Android Studio",
      techStack: "Java , Android Studio",
      link: "https://github.com/sabithapaulraj/RANDOM-NUMBER-GENERATOR-APP"
    }
  };

  const allProjects = Object.entries(projects); // Revert to original projects only

  const slides = Object.values(spotlightProjects);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const carouselRef = useRef<HTMLDivElement>(null); // Ref for the carousel container

  // Removed nextSlide, prevSlide, goToSlide, handleTouchStart, handleTouchMove, handleKeyDown

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      // Re-implementing nextSlide inline for carousel's auto-play
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, slides.length]); // Depend on slides.length as nextSlide is inline

  const handleMouseMove = (e: React.MouseEvent) => {
    if (carouselRef.current) {
      const { left, top, width, height } = carouselRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5; // -0.5 to 0.5
      const y = (e.clientY - top) / height - 0.5; // -0.5 to 0.5
      setMousePosition({ x, y });
    }
  };

  const handleMouseLeaveCarousel = () => {
    setMousePosition({ x: 0, y: 0 }); // Reset parallax on mouse leave
  };

  return (
    <div id="projects">
      <div className="section-header">
        <span className="section-title">/ pet projects</span>
      </div>
      <div
        className="advanced-carousel-container"
        ref={carouselRef} /* Attach ref to carousel container */
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => { setIsPlaying(true); handleMouseLeaveCarousel(); }} /* Reset parallax on mouse leave */
        onMouseMove={handleMouseMove} /* Add mouse move listener */
        /* Removed onTouchStart, onTouchMove, onKeyDown */
        tabIndex={0}
        role="region"
        aria-label="Project carousel"
      >
        {slides.map((slide, index) => {
          const parallaxStyle = {
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
          };
          return (
            <div
              key={index}
              className={`carousel-slide ${currentIndex === index ? "active" : index > currentIndex ? "next" : "prev"}`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="carousel-image"
                loading="lazy"
                style={parallaxStyle} /* Apply parallax style */
              />
              <div className="carousel-caption-overlay">
                <div className="carousel-caption-content">
                  <h2 className="carousel-title">{slide.title}</h2>
                  <p className="carousel-description">{slide.desc}</p>
                  <p className="carousel-techstack">{slide.techStack}</p>
                  <ExternalLinks
                    githubLink={slide.link}
                    openLink={slide.open}
                  ></ExternalLinks>
                </div>
              </div>
            </div>
          );
        })}

        <button
          onClick={() => setCurrentIndex((prevIndex) => prevIndex === 0 ? slides.length - 1 : prevIndex - 1)} /* Inline prevSlide */
          className="carousel-button carousel-button-left"
          aria-label="Previous slide"
        >
          <FiChevronLeft className="carousel-icon" />
        </button>

        <button
          onClick={() => setCurrentIndex((prevIndex) => prevIndex === slides.length - 1 ? 0 : prevIndex + 1)} /* Inline nextSlide */
          className="carousel-button carousel-button-right"
          aria-label="Next slide"
        >
          <FiChevronRight className="carousel-icon" />
        </button>

        <div className="carousel-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)} /* Inline goToSlide */
              className={`carousel-dot ${currentIndex === index ? "active" : ""}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Static Card Grid Section */}
      <div
        className="other-projects-container" /* Renamed for clarity */
        /* Removed onMouseEnter and onMouseLeave handlers as infinite scroll is removed */
      >
        <h2>Other Projects</h2>
        <ul className="projects-grid"> {/* No ref needed for infinite scroll */}
          {allProjects.map(([key, project], i) => (
            <FadeInSection delay={`${i + 1}00ms`} key={i}>
              <li className="projects-card">
                <div className="card-header">
                  <div className="folder-icon">
                    <FolderOpenRoundedIcon
                      style={{ fontSize: 35 }}
                    ></FolderOpenRoundedIcon>
                  </div>
                  <ExternalLinks
                    githubLink={project["link"]}
                    openLink={project["open"]}
                  ></ExternalLinks>
                </div>

                <div className="card-title">{key}</div>
                <div className="card-desc">{project["desc"]}</div>
                <div className="card-tech">{project["techStack"]}</div>
              </li>
            </FadeInSection>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectSection; 