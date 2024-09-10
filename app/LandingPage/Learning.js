"use client";

import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navLinkContainer: {
    display: "flex",
    justifyContent: "center", // Center the links horizontally
    alignItems: "center",
    width: "100%",
    backgroundColor: "white",
    height: "50px", // Reduce the height
    padding: "0 20px", // Add padding to the sides
  },
  navLinkBox: {
    margin: "0 10px", // Add margin between boxes
    border: "2px solid green", // Add border around each box
    borderRadius: "8px", // Add border radius for rounded corners
    padding: "5px 15px", // Add padding inside the box
    transition: "background-color 0.3s ease", // Add transition effect
  },
  navLink: {
    cursor: "pointer",
    textDecoration: "none",
    color: "green",
    fontSize: "18px", // Reduce the font size
  },
  activeNavLink: {
    backgroundColor: "", // Change background color for active link
    color: "Red", // Change text color for active link
  },
}));

const Learning = () => {
  const classes = useStyles();
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    // Set the initial active link when the component mounts
    setActiveLink(window.location.pathname);
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.navLinkContainer}>
          <Box className={`${classes.navLinkBox}`}>
            <Link href="/Rowcard">
              <Typography
                variant="body1" // Use body1 variant for smaller text
                className={`${classes.navLink} ${
                  activeLink === "/Rowcard" && classes.activeNavLink
                }`}
                onClick={() => handleLinkClick("/Rowcard")}
              >
                Topics
              </Typography>
            </Link>
          </Box>
          <Box className={`${classes.navLinkBox}`}>
            <Link href="/ClassCard">
              <Typography
                variant="body1"
                className={`${classes.navLink} ${
                  activeLink === "/ClassCard" && classes.activeNavLink
                }`}
                onClick={() => handleLinkClick("/ClassCard")}
              >
                Classes
              </Typography>
            </Link>
          </Box>
          <Box className={`${classes.navLinkBox}`}>
            <Link href="/NationalCurriculam">
              <Typography
                variant="body1"
                className={`${classes.navLink} ${
                  activeLink === "/NationalCurriculam" &&
                  classes.activeNavLink
                }`}
                onClick={() =>
                  handleLinkClick("/NationalCurriculam")
                }
              >
                National Curriculum
              </Typography>
            </Link>
          </Box>
          <Box className={`${classes.navLinkBox}`}>
            <Link href="/Examclasscard">
              <Typography
                variant="body1"
                className={`${classes.navLink} ${
                  activeLink === "/Examclasscard" &&
                  classes.activeNavLink
                }`}
                onClick={() =>
                  handleLinkClick("/Examclasscard")
                }
              >
                Exams
              </Typography>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Learning;
