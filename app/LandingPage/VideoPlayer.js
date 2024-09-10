"use client";

import React, { useEffect, useState } from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";

const VideoPlayer = ({ videoSource }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [marginTop, setMarginTop] = useState("");

  const videos = [
    { src: "landing1.mp4" },
    { src: "landing2.mp4" },
    { src: "landing3.mp4" },
    { src: "landing4.mp4" },
    { src: "landing5.mp4" },
    { src: "landing6.mp4" },
    { src: "landing7.mp4" },
    { src: "landing8.mp4" },
    { src: "landing9.mp4" },
  ];

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      let newMarginTop = "10%"; // Default value for mobile view

      if (screenWidth >= 600 && screenWidth < 960) {
        newMarginTop = "5%"; // Tablet view
      } else if (screenWidth >= 960) {
        newMarginTop = "15%"; // Laptop view and above
      }

      setMarginTop(newMarginTop);
    };

    handleResize(); // Call it once to set the initial value

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // const handleVideoHover = (event) => {
  //   event.target.play(); // Start playing the video when mouse hovers over it
  // };

  const handlePageChange = (event, value) => {
    setCurrentVideoIndex(value - 1);
  };

  return (
    <Grid container justifyContent="center">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          height: "80%",
          margin: "20px auto",
          border: "2px solid #ccc",
          textAlign: "center",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#fff",
          position: "relative",
          marginTop: "20px",
          background: `url('https://i.postimg.cc/j2HCDMyJ/video1.avif')`,
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "auto",
            order: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <video
            key={videos[currentVideoIndex].src}
            controls
            // muted
            width="100%"
            height="auto"
            style={{ marginTop: "20px" }}
            // onMouseEnter={handleVideoHover}
            // onMouseLeave={(event) => event.target.pause()}
          >
            <source src={videos[currentVideoIndex].src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Stack spacing={2} sx={{ marginTop: "20px" }}>
            <Pagination
              count={videos.length}
              page={currentVideoIndex + 1}
              onChange={handlePageChange}
              renderItem={(item) => (
                <PaginationItem
                  slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                  {...item}
                />
              )}
            />
          </Stack>
        </Box>
        <Box
          sx={{
            width: "100%",
            order: 1,
            textAlign: "center",
            padding: "20px",
          }}
        >
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontSize: "30px",
              backgroundColor: "skyblue",
              borderRadius: "50px",
              padding: "10px 30px",
              display: "inline-block",
            }}
          >
            Content
          </Typography>

          <Typography
            variant="body1"
            style={{ fontSize: "20px", maxWidth: "30em" }}
          >
            Videos are some of the basic quiz Topics, which are based on simple
            math concepts like arithmetic, algebra, geometry, etc. Watch the AI
            videos with animations, enjoy it and learn new concepts..!
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export default VideoPlayer;
