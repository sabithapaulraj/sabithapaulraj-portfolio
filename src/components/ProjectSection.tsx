import React from "react";
import "../styles/ProjectSection.css";
import FolderOpenRoundedIcon from "@mui/icons-material/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import ExternalLinks from "./ExternalLinks";

interface Project {
  desc: string;
  techStack: string;
  link: string;
  open?: string;
}

const ProjectSection: React.FC = () => {
  const projects: { [key: string]: Project } = {
    "JusticeBot": {
      desc: "Retrieval-Augmented Generation (RAG) based chatbot designed to revolutionize legal information access on Justice Department.",
      techStack: "Python, TensorFlow, RAG, Gemini Pro, transformers, langchain, FAISS, Flask",
      link: "https://github.com/sabithapaulraj/JusticeBot"
    },
    "SkyDrop": {
      desc: "Full-Stack App using React and Spring Boot 3 for effortless file uploads to Amazon S3 with real-time progress tracking.",
      techStack: "React.js, Spring Boot 3, AWS S3, REST API",
      link: "https://github.com/sabithapaulraj/SkyDrop"
    },
    "MedAI-Bot": {
      desc: "AI-Powered Healthcare Chatbot for Symptom Analysis, Disease Prediction, and Medical Imaging Insights and Healthcare Insurance Suggestions",
      techStack: "Python, TensorFlow, LLMs (Ollama), RAG, YoloV11, CNNs, HTML/CSS/JS",
      link: "https://github.com/sabithapaulraj/MedAI-Bot"
    },
    "Cura": {
      desc: "Leveraging state-of-the-art AI models using Intel's OpenVINO™ and oneAPI toolkits to develop a custom transfer learning model to diagnose the severity of Knee Osteoarthritis, improvising available health-tech.",
      techStack: "Intel OpenVINO, Python, TensorFlow, LLMs (Qwen 2.5 0.5B Instruct, Qwen 2.5 14B Instruct), Pytorch, ResNet,NuExtract",
      link: "https://github.com/sabithapaulraj/Cura"
    },
    "Ecosync": {
      desc: "A ML model that predicts energy consumption in smart cities and provides actionable insights to reduce wastage. This could involve optimizing energy distribution based on usage patterns and predicting future demand.",
      techStack: "Python, IBM LinuxOne, Flask, LSTM & GRU",
      link: "https://github.com/sabithapaulraj/ecosync-ibm"
    },
    "CompareAI": {
      desc: "Semantic PDF Comparison Tool ",
      techStack: "Python, Sentence Transformers",
      link: "https://github.com/sabithapaulraj/MedAI-Bot"
    },
    "Traffic Sign Identification and Classification": {
      desc: "A Lenet CNN based machine learning system developed for identifying and classifying traffic signs from images and live videos.",
      techStack: "Python, TensorFlow, Keras, OpenCV, NumPy, Pandas, Scikit-learn, Matplotlib, Jupyter Notebook, Flask/FastAPI, Docker.",
      link: "https://github.com/sabithapaulraj/bootstrap_template"
    },
    "Health-Hunch": {
      desc: "Developed a disease prediction system by symptom analysis using Logistic Regression designed to analyze symptoms for early detection and self-diagnosis. ",
      techStack: "Python, Streamlit, Pandas, Plotly, HTML, CSS, JavaScript",
      link: "https://github.com/sabithapaulraj/Health-Hunch-Dashboard"
    },
    "Personal-Portfolio-with-MongoDB-Atlas-Backend": {
      desc: "A personal portfolio website with a MongoDB Atlas-backed backend for managing and displaying dynamic content.",
      techStack: "MongoDB, ReactJS, NodeJS, ExpressJS, Javascript",
      link: "https://github.com/sabithapaulraj/Personal-Portfolio-with-MongoDB-Atlas-Backend"
    },
    "Job Management System": {
      desc: "Designed to manage, track, and organize job postings, applications, and related workflows efficiently.",
      techStack: "MongoDB, ReactJS, NodeJS, ExpressJS, Javascript",
      link: "https://github.com/sabithapaulraj/Job-Management-System"
    },
    "Task Management System": {
      desc: "Designed to help users efficiently organize, track, and manage their tasks and to-do lists. ",
      techStack: "MongoDB, ReactJS, NodeJS, ExpressJS, Javascript",
      link: "https://github.com/sabithapaulraj/Task-Management-App"
    },
    "Course Management System": {
      desc: "Designed to manage courses, including features for organizing, tracking, and administering course-related activities.",
      techStack: "MongoDB, ReactJS, NodeJS, ExpressJS, Javascript",
      link: "https://github.com/sabithapaulraj/Course-Management-App"
    },
   
    "Twitter Sentiment Analysis": {
      desc: "Twitter Sentiment Analysis using Logistic Regression Based Natural Language Processing",
      techStack: "Python, scikit-learn, pandas, NumPy, NLTK, Jupyter Notebook",
      link: "https://github.com/sabithapaulraj/Twitter-Sentiment-Analysis-using-Logistic-Regression-Based-Natural-Language-Processing"
    },
    "Deep-CGAN to Generate Handwritten Digits": {
      desc: "Implements a Deep Convolutional Generative Adversarial Network (DCGAN) to generate realistic-looking handwritten digits similar to those found in the MNIST dataset.",
      techStack: "Python, TensorFlow, PyTorch, NumPy, Pandas, Matplotlib, Seaborn, Jupyter Notebook, CUDA",
      link: "https://github.com/sabithapaulraj/Building-a-Deep-Convolutional-Generative-Adversarial-Network-to-Generate-Handwritten-Digits"
    },
    "Predicting Pandemic Deaths - A Gradient Boosting Regression Approach": {
      desc: "A project to predict the number of deaths during widespread pandemics, focusing on the COVID-19 pandemic in India from January 2020 to August 2021.",
      techStack: "Python, Gradient Boosting Regression",
      link: "https://github.com/sabithapaulraj/Predicting-Pandemic-Deaths-A-Gradient-Boosting-Regression-Approach"
    },
    "Road Accident Severity Analysis": {
      desc: "Analysing Road Accidents and Visualization",
      techStack: "Python, scikit-learn, matplotlib, seaborn",
      link: "https://github.com/sabithapaulraj/Mini-Project"
    },
    
    "Random Number Generator App": {
      desc: "A basic mobile application to generate random numbers using Android Studio",
      techStack: "Java, Android Studio",
      link: "https://github.com/sabithapaulraj/RANDOM-NUMBER-GENERATOR-APP"
    },
    "JWT Login Signup": {
      desc: " A JWT-based authentication system for user login and signup ",
      techStack: "MongoDB, ReactJS, NodeJS, ExpressJS, Javascript",
      link: "https://github.com/sabithapaulraj/JWT-Login-Signup"
    },
    "SEC Consultancy Services Website": {
      desc: "Designed to help users efficiently organize, track, and manage their tasks and to-do lists. ",
      techStack: "HTML, CSS",
      link: "https://github.com/sabithapaulraj/sec_consultancy_services_website"
    },
    "LogoDesign Company Website": {
      desc: "Designed to manage courses, including features for organizing, tracking, and administering course-related activities.",
      techStack: "HTML, CSS, BootStrap",
      link: "https://github.com/sabithapaulraj/bootstrap_template"
    },
    "Fashion Sale Website": {
      desc: " Fashion Sale website built to showcase and sell fashion products online. ",
      techStack: "HTML, CSS",
      link: "https://github.com/sabithapaulraj/JWT-Login-Signup"
    },
    "Travel Explorer - Chennai Website": {
      desc: "Explorer is a travel explorer website focused on discovering and experiencing Chennai. ",
      techStack: "HTML, CSS",
      link: "https://github.com/sabithapaulraj/sec_consultancy_services_website"
    },
    
  };

  const allProjects = Object.entries(projects);

  return (
    <div id="projects">
      <div className="section-header">
        <span className="section-title">/projects</span>
      </div>

      <div className="other-projects-container">
        <ul className="projects-grid">
          {allProjects.map(([key, project], i) => (
            <FadeInSection delay={`${i + 1}00ms`} key={i}>
              <li className="projects-card">
                <div className="card-header">
                  <div className="folder-icon">
                    <FolderOpenRoundedIcon style={{ fontSize: 35 }} />
                  </div>
                  <ExternalLinks
                    githubLink={project.link}
                    openLink={project.open}
                  />
                </div>
                <div className="card-title">{key}</div>
                <div className="card-desc">{project.desc}</div>
                <div className="card-tech">{project.techStack}</div>
              </li>
            </FadeInSection>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectSection;
