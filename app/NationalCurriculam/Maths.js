"use client";

import React from "react";

import { Grid, Button } from "@mui/material";

import { useState } from "react";

const Maths = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  const classLinks = [
    "/NationalCurriculam/ClassSelection/Class-1",
    "/NationalCurriculam/ClassSelection/Class-2",
    "/NationalCurriculam/ClassSelection/Class-3",
    "/NationalCurriculam/ClassSelection/Class-4",
    "/NationalCurriculam/ClassSelection/Class-5",
    "/NationalCurriculam/ClassSelection/Class-6",
  ];

  return (
    <div style={{ marginTop: "20px" }}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={1}>
          {[...Array(6)].map((_, index) => (
            <Grid item key={index}>
              <Button
                component="a"
                href={classLinks[index]}
                variant={activeButton === index ? "contained" : "outlined"}
                color="primary"
                onClick={() => handleButtonClick(index)}
                sx={{ "&:hover": { backgroundColor: "#3A9BDC" } }}
              >
                Class {index + 1}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default Maths;
