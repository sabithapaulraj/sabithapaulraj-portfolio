import React from "react";
import { useTheme } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FadeInSection from "./FadeInSection.tsx";

const isHorizontal = typeof window !== 'undefined' && window.innerWidth < 600;

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  if (isHorizontal) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  } else {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
}

interface ExperienceItem {
  jobTitle: string;
  duration: string;
  desc: string[];
}

function a11yProps(index: number) {
  if (isHorizontal) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`
    };
  } else {
    return {
      id: `vertical-tab-${index}`
    };
  }
}

const JobList: React.FC = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const experienceItems: { [key: string]: ExperienceItem } = {
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
   
   
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="job-list-root">
      <Tabs
        orientation={!isHorizontal ? "vertical" : undefined}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
        sx={{
          borderRight: !isHorizontal ? `1px solid ${theme.palette.divider}` : 'none',
        }}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab label={isHorizontal ? `0${i}.` : key} {...a11yProps(i)} key={i} />
        ))}
      </Tabs>
      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel value={value} index={i} key={i}>
          <span className="joblist-job-title">
            {experienceItems[key]["jobTitle"] + " "}
          </span>
          <span className="joblist-job-company">{key}</span>
          <div className="joblist-duration">
            {experienceItems[key]["duration"]}
          </div>
          <ul className="job-description">
            {experienceItems[key]["desc"].map(function (descItem, i) {
              return (
                <FadeInSection delay={`${i + 1}00ms`} key={i}>
                  <li key={i}>{descItem}</li>
                </FadeInSection>
              );
            })}
          </ul>
        </TabPanel>
      ))}
    </div>
  );
};

export default JobList; 