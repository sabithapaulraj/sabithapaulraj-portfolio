import React from "react";
import { Theme } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FadeInSection from "./FadeInSection.tsx";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

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
          <Typography style={{ fontFamily: 'NTR, sans-serif' }}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

interface ExperienceItem {
  jobTitle: string;
  duration: string;
  desc: string[];
}

interface JobListProps {
  experienceItems: { [key: string]: ExperienceItem };
  value: number;
  handleChange: (event: React.SyntheticEvent, newValue: number) => void;
  theme: Theme;
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const JobList: React.FC<JobListProps> = ({ experienceItems, value, handleChange, theme }) => {

  return (
    <div className="job-list-root">
      <Tabs
        orientation="horizontal"
        variant="fullWidth"
        value={value}
        onChange={handleChange}
        sx={{
          borderBottom: `1px solid ${theme.palette.divider}`,
          borderRight: 'none',
        }}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab label={key} {...a11yProps(i)} key={i} />
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