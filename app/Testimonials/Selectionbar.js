"use client";

import React, { useState } from "react";
import Student from "./Student";
import Parent from "./Parent";
import Teacher from "./Teacher";
 
import Administrator from "./Administrator";
import AllTestimonial from "./AllTestimonial";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
 

const Selection = () => {
  const [value, setValue] = useState("alltestimonial");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            centered
            aria-label="selection tabs"
            sx={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "#d0fefe",
            }}
          >
            <Tab label="All Testimonials" value="alltestimonial" />
            <Tab label="Administrators" value="administrator" />
            <Tab label="Teachers" value="teacher" />
            <Tab label="Parents" value="parent" />
            <Tab label="Students" value="student" />
            {/* <Tab label="Media" value="video" /> */}
          </TabList>
        </Box>
        <TabPanel value="alltestimonial">
          <AllTestimonial />
        </TabPanel>
        <TabPanel value="administrator">
          <Administrator role="administrator" />
        </TabPanel>
        <TabPanel value="teacher">
          <Teacher role="teacher" />
        </TabPanel>
        <TabPanel value="parent">
          <Parent role="parent" />
        </TabPanel>
        <TabPanel value="student">
          <Student role="student" />
        </TabPanel>
        {/* <TabPanel value="video">
          <ActionAreaCard role="image" />
          <Video role="Video" />
        </TabPanel> */}
      </TabContext>
    </Box>
  );
};

export default Selection;
