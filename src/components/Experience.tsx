import React, { useState } from "react";
import JobList from "./JobList";
import "../styles/Experience.css";
import FadeInSection from "./FadeInSection";
import { useTheme } from "@mui/material/styles";

const Experience: React.FC = () => {
  const theme = useTheme(); 
  const [value, setValue] = useState(0);

  const experienceItems: { [key: string]: { jobTitle: string; duration: string; desc: string[]; } } = {
    "BMW Group India": {
      jobTitle: "Data Analyst Intern @ ",
      duration: "October 2024 - March 2025",
      desc: [
       "Automated backend workflows handling over 1 million records using Python, SQL, VBA, and VBScript, reducing manual effort and delays by 60%.",
       "Optimized RDBMS by fixing SQL bugs, tuning queries, and adding station-wise progress tracking for global deployments.",
       "Developed Tableau dashboards to monitor the lifecycle of testing procedural documents and LOP progress across multiple global BMW plants.Now actively used in Thailand, Brazil, Egypt, Indonesia, Malaysia, and Vietnam.",
       "Created an AI-powered document versioning agent using sentence transformers to automatically detect changes, saving over 10 hours weekly on manual compliance checks.",
       "Built automated reporting and tracking tools—including a PowerPoint generator for compliance (COP, Plant Regulations), a Change Communication Tracker with KPI debugging, and the SBWE Cockpit—to streamline cross-department collaboration and accountability",
       "Developed Excel and SQL-based solutions like the Parts Inventory Tracker and data fetchers for Vehicle Inspection and SALAPA options, enhancing audit readiness and data-driven decision-making.",
       
      
      ]
    },
    "Tech Society": {
      jobTitle: "Joint Secretary @ ",
      duration: "August 2024 - Present",
      desc: [
        "Conducted a hands-on session on RAGs and LLMs, including a workshop on building a CLI-based RAG chatbot, aimed at making complex AI concepts more accessible to peers.",
        "Supported Hack Hustle, Saveetha’s first 24-hour hackathon, by assisting participants with queries related to problem statements and project technologies.",
        "Currently working on developing a chatbot for the college, and have helped coordinate several ML-focused events during campus tech events."
      ]
      
    },
    "NSIC": {
      jobTitle: "Machine Learning Intern @ ",
      duration: "June 2024 - July 2024",
      desc: [
        "Developed a traffic sign classification system using the LeNet-5 Convolutional Neural Network (CNN) architecture, achieving ~88% test accuracy on the GTSRB dataset. Applied techniques like grayscale normalization, data augmentation, and one-hot encoding to enhance model generalization.",
        "Built and trained the model using Python, Keras (TensorFlow backend), and optimized with the Adam optimizer and sparse categorical cross-entropy. Implemented live image prediction and class probability visualization via an interactive Streamlit dashboard.",
        "Integrated end-to-end workflow: from data preprocessing (NumPy, Pandas) to evaluation (confusion matrices, precision, recall, F1-score), and deployed real-time webcam-based detection using OpenCV and Streamlit, simulating conditions for autonomous vehicle systems.",
      ]
    },
    "Math Club": {
      jobTitle: "Coordinator @ ",
      duration: "August 2023 - October 2024",
      desc: [
        "Planned and organized a range of math-focused events — from interactive game-based competitions to technical math challenges, aimed at improving problem-solving engagement among students.",
        "Managed the end-to-end registration process, tracked attendance and on-duty approvals, and ensured smooth coordination during event execution.",
        "Successfully coordinated 7+ campus events over two semesters, collaborating with faculty and student volunteers to drive participation and deliver well-structured learning experiences.",
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
          <span className="section-title">/experience</span>
        </div>
        <JobList experienceItems={experienceItems} value={value} handleChange={handleChange} theme={theme} />
      </FadeInSection>
    </div>
  );
};

export default Experience;
