"use client";
import React from "react";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import KeyboardDoubleArrowUpRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowUpRounded";

const floatAnimation = {
  animation: "floatAnimation 2s ease-in-out infinite",
};

const glitterAnimation = {
  animation: "glitterAnimation 1s ease-in-out infinite",
};

const styles = {
  root: {
    position: "fixed",
    bottom: '16px', // theme.spacing(2) is typically 16px
    right: '16px',
    zIndex: 999,
    transition: "transform 0.3s, background-color 0.3s",
  },
  rootHover: {
    transform: "scale(1.2)",
    backgroundColor: "#FFD700", // Change this to the desired glittering color
  },
  "@keyframes floatAnimation": {
    "0%, 100%": {
      transform: "translateY(0)",
    },
    "50%": {
      transform: "translateY(-10px)",
    },
  },
  "@keyframes glitterAnimation": {
    "0%, 100%": {
      backgroundColor: "#FFD700", // Change this to the desired glittering color
      boxShadow: "0 0 10px #FFD700", // Change this to the desired glittering color
    },
    "50%": {
      backgroundColor: "#FFFF00", // Change this to the desired glittering color
      boxShadow: "0 0 20px #FFFF00", // Change this to the desired glittering color
    },
  },
};

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = React.useState(false);
  const [hover, setHover] = React.useState(false);

  const handleScroll = () => {
    const scrolled = document.documentElement.scrollTop;
    setShowButton(scrolled > 300); // Show the button when scrolled down 300px or more
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Zoom in={showButton}>
      <Fab
        color="primary"
        size="small"
        style={{
          ...styles.root,
          ...floatAnimation,
          ...glitterAnimation,
          ...(hover ? styles.rootHover : {}),
        }}
        onClick={handleClick}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        aria-label="scroll back to top"
      >
        <KeyboardDoubleArrowUpRoundedIcon />
      </Fab>
    </Zoom>
  );
};

export default ScrollToTopButton;
