import React, { useState } from "react";
import JobList from "./JobList";
import "../styles/Experience.css";
import FadeInSection from "./FadeInSection";
import { useTheme } from "@mui/material/styles";

const Experience: React.FC = () => {
  const theme = useTheme(); // This will be used in JobList, so it needs to be accessible, or JobList needs to manage its own theme
  const [value, setValue] = useState(0);

  const experienceItems: { [key: string]: { jobTitle: string; duration: string; desc: string[]; } } = {
    "IBMZ DATATHON": {
      jobTitle: "Won First Place in ",
      duration: "October 2023",
      desc: [
        "Successfully leveraged the IBM Z and LinuxONE Platform to create Logistic and Linear Regression models for Disease Classification and Patient Health Record Analysis respectively.",
        "Worked with the L1CC platform to create and run machine learning models that provided a scalable and secure infrastructure for developing and testing models"
      ]
    },
    "NATIONAL SMALL SCALE INDUSTRIES": {
      jobTitle: "Intern @ ",
      duration: "June 2024 - July 2024",
      desc: [
        "Artificial Intelligence & Machine Learning Intern , mastered concepts of Artificial Intelligence , Machine Learning, Deep Learning, Neural Networks and Computer Vision",
        "Developed and deployed a Traffic Sign Classification Model using LeNet Deep Network based Convolutional Neural Networks in Streamlit",
      ]
    },
    "MATH CLUB": {
      jobTitle: "Coordinator of",
      duration: "August 2023 - Present",
      desc: [
        "Hosted multiple events in a span of 4 months alongside other coordinators to promote excellence in mathematics",
        "Coordinated in enhancing event planning, hosting, set up, crowd management, hospitality including active participation in registration team "
      ]
    },
    "NATIONAL SMALL SCALE": {
      jobTitle: "Intern @ ",
      duration: "June 2024 - July 2024",
      desc: [
        "Artificial Intelligence & Machine Learning Intern , mastered concepts of Artificial Intelligence , Machine Learning, Deep Learning, Neural Networks and Computer Vision",
        "Developed and deployed a Traffic Sign Classification Model using LeNet Deep Network based Convolutional Neural Networks in Streamlit",
      ]
    },
    "MATH": {
      jobTitle: "Coordinator of",
      duration: "August 2023 - Present",
      desc: [
        "Hosted multiple events in a span of 4 months alongside other coordinators to promote excellence in mathematics",
        "Coordinated in enhancing event planning, hosting, set up, crowd management, hospitality including active participation in registration team "
      ]
    },
  };
  

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div id="experience">
      <FadeInSection>
        <div className="section-header ">
          <span className="section-title">/ experience</span>
        </div>
        <JobList experienceItems={experienceItems} value={value} handleChange={handleChange} theme={theme} />
      </FadeInSection>
    </div>
  );
};

export default Experience;
