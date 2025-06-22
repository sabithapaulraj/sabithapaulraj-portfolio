import React from "react";
import Masonry from "react-masonry-css";
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
      desc: "Full-Stack App using React and Spring Boot 3 for effortless file uploads to Amazon S3 with real-time progress tracking. Enabled drag-and-drop multi-file upload feature with real-time progress and resumable uploads.",
      techStack: "React.js, Spring Boot 3, AWS S3, REST API",
      link: "https://github.com/sabithapaulraj/SkyDrop"
    },
    "MedAI-Bot": {
      desc: "AI-Powered Healthcare Chatbot for Symptom Analysis, Disease Prediction, and Medical Imaging Insights and Healthcare Insurance Suggestions.  ChromaDB is integrated for effective data management and retrieval, while Langchain enhances the bot's ability to handle complex queries and workflows. ",
      techStack: "Python, TensorFlow, LLMs (Ollama),Langchain, Vector Database, RAG, YoloV11, CNNs, HTML/CSS/JS",
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
    "AlphaGraph": {
      desc: "Smart Assistant for discovering alpha-generating insights from financial data. Analyzes news articles, Reddit posts, and earnings call transcripts then applies Large Language Models (LLMs) like Gemini AI to: Summarize Key Points , Classify Sentiment (Bullish / Bearish / Neutral), Extract Companies & Stock Tickers, Score Market Impact (1–10 scale), Track Trends Over Time",
      techStack: "React JS, Tailwind CSS, MongoDB, Docker, FastAPI, LLMs(Gemini), RestAPIs",
      link: "https://github.com/sabithapaulraj/AlphaGraph"
    },
    "Taxiwala(Uber Clone)": {
      desc: "Bulit for practicing NextJS and to try implementing Stripe Payment Gateway via RESTful API",
      techStack: "NextJS, Typescript, PostgresQL, RestAPI",
      link: "https://github.com/sabithapaulraj/Taxiwala"
    },
    "Chatgram": {
      desc: "Real-time Chat App with live messaging, global state management, and secure JWT-based authentication with scalable socket-based communication for distributed real-time interaction.",
      techStack: "MERN Stack, Websockets,JWT",
      link: "https://github.com/sabithapaulraj/Chatgram"
    },
    "Traffic Sign Identification and Classification": {
      desc: "Capstone: Internship Project(NSIC) - A Lenet CNN based machine learning system developed for identifying and classifying traffic signs from images and live videos.",
      techStack: "Python, TensorFlow, Keras, OpenCV, NumPy, Pandas, Scikit-learn, Matplotlib, Jupyter Notebook, Flask/FastAPI, Docker.",
      link: "https://github.com/sabithapaulraj/bootstrap_template"
    },
    "Health-Hunch": {
      desc: "Developed a disease prediction system by symptom analysis using Logistic Regression designed to analyze symptoms for early detection and self-diagnosis. ",
      techStack: "Python, Streamlit, Pandas, Plotly, HTML, CSS, JavaScript",
      link: "https://github.com/sabithapaulraj/Health-Hunch-Dashboard"
    },
    "Personal-Portfolio-with-MongoDB-Atlas-Backend": {
      desc: "Capstone Project - 19AI512C(MERN Full Stack)  - A personal portfolio website with a MongoDB Atlas-backed backend for managing and displaying dynamic content.",
      techStack: "MongoDB, ReactJS, NodeJS, ExpressJS, Javascript",
      link: "https://github.com/sabithapaulraj/Personal-Portfolio-with-MongoDB-Atlas-Backend"
    },
    "Job Management System": {
      desc: "Capstone Project - 19AI512C(MERN Full Stack)  - Designed to manage, track, and organize job postings, applications, and related workflows efficiently.",
      techStack: "MongoDB, ReactJS, NodeJS, ExpressJS, Javascript",
      link: "https://github.com/sabithapaulraj/Job-Management-System"
    },
    "Task Management System": {
      desc: "Capstone Project - 19AI512C(MERN Full Stack)  - Designed to help users efficiently organize, track, and manage their tasks and to-do lists. ",
      techStack: "MongoDB, ReactJS, NodeJS, ExpressJS, Javascript",
      link: "https://github.com/sabithapaulraj/Task-Management-App"
    },
    "Course Management System": {
      desc: "Capstone Project - 19AI512C(MERN Full Stack)  - Designed to manage courses, including features for organizing, tracking, and administering course-related activities.",
      techStack: "MongoDB, ReactJS, NodeJS, ExpressJS, Javascript",
      link: "https://github.com/sabithapaulraj/Course-Management-App"
    },
   
    "Twitter Sentiment Analysis": {
      desc: "Capstone Project - 19AI403(Introduction to Data Science) - Twitter Sentiment Analysis using Logistic Regression Based Natural Language Processing",
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
      desc: "Capstone Project - 19AI403(Introduction to Data Science) - Analysing Road Accidents and Visualization",
      techStack: "Python, scikit-learn, matplotlib, seaborn",
      link: "https://github.com/sabithapaulraj/Mini-Project"
    },
    
    "Random Number Generator App": {
      desc: "Capstone Project - 19CS414(Mobile Application Development) - A basic mobile application to generate random numbers using Android Studio",
      techStack: "Java, Android Studio",
      link: "https://github.com/sabithapaulraj/RANDOM-NUMBER-GENERATOR-APP"
    },
    "JWT Login Signup": {
      desc: "Capstone Project - 19AI512C(MERN Full Stack) - A JWT-based authentication system for user login and signup ",
      techStack: "MongoDB, ReactJS, NodeJS, ExpressJS, Javascript",
      link: "https://github.com/sabithapaulraj/JWT-Login-Signup"
    },
    
  };

  const allProjects = Object.entries(projects);

  // Palette of 7 visually distinct dark color classes for cards
  const colorClasses = [
    "card-dark-blue",
    "card-dark-green",
    "card-dark-purple",
    "card-dark-red",
    "card-dark-teal",
    "card-dark-brown",
    "card-dark-orange",
    "card-dark-magenta"
  ];
  function getColorClass(i: number) {
    return colorClasses[i % colorClasses.length];
  }

  // Masonry breakpoints
  const breakpointColumnsObj = {
    default: 3,
    1080: 2,
    700: 1
  };

  return (
    <div id="projects">
      <div className="section-header">
        <span className="section-title">/projects</span>
      </div>

      <div className="other-projects-container">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="projects-grid-masonry"
          columnClassName="projects-grid-masonry-column"
        >
          {allProjects.map(([key, project], i) => (
            <FadeInSection key={i}>
              <div className={`projects-card ${getColorClass(i)}`}>
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
              </div>
            </FadeInSection>
          ))}
        </Masonry>
      </div>
    </div>
  );
};

export default ProjectSection;