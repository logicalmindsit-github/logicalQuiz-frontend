"use client";
import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
import { Suspense } from "react";
import dynamic from "next/dynamic";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navLinkContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#5DBDA8",
  },
  navLink: {
    cursor: "pointer",
    padding: "10px",
    textDecoration: "none",
    color: "#fff",
  },
  activeNavLink: {
    borderBottom: "2px solid #fff",
  },
  gapBetweenElements: {
    marginLeft: "20px",
  },
}));

const DynamicLink = dynamic(() => import("next/link"), {
  loading: () => <div>Loading...</div>, // Optional loading component
});

const Report = () => {
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
    <Suspense fallback={<div>Loading...</div>}>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar className={classes.navLinkContainer}>
            <DynamicLink href="/Score">
              <Typography
                variant="h6"
                className={`${classes.navLink} ${
                  activeLink === "/Score" && classes.activeNavLink
                }`}
                onClick={() => handleLinkClick("/Score")}
              >
                Score
              </Typography>
            </DynamicLink>
            <DynamicLink href="/Progress">
              <Typography
                variant="h6"
                className={`${classes.navLink} ${classes.gapBetweenElements} ${
                  activeLink === "/Progress" && classes.activeNavLink
                }`}
                onClick={() => handleLinkClick("/Progress")}
              >
                Progress
              </Typography>
            </DynamicLink>
            <DynamicLink href="/CertificateGenerator">
              <Typography
                variant="h6"
                className={`${classes.navLink} ${
                  activeLink === "/CertificateGenerator" &&
                  classes.activeNavLink
                }`}
                onClick={() => handleLinkClick("/CertificateGenerator")}
              >
                Certificate
              </Typography>
            </DynamicLink>
          </Toolbar>
        </AppBar>
      </div>
    </Suspense>
  );
};

export default Report;
