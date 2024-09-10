"use client";

import Head from "next/head";
import { useState } from "react";

import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import Learning from "../LandingPage/Learning";
import Link from "next/link";
const NationalCurriculum = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  return (
    <div>
      <Learning />
      <Container sx={{ marginTop: 3, marginBottom: 6 }}>
        <Head>
          <title>National Curriculum - Quiz Site</title>
        </Head>

        <Typography
          variant="h3"
          align="center"
          gutterBottom
          style={{ color: "#3f51b5" }}
        >
          National Curriculum
        </Typography>

        <Typography variant="body1" paragraph align="center">
          Welcome to our National Curriculum page! Here, you will find quizzes
          and educational resources aligned with the national curriculum
          standards. Whether you`re a student preparing for exams or a teacher
          looking for supplemental materials, we`ve got you covered.
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12}>
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              style={{ color: "#ff5722" }}
            >
              Subject-Based Quizzes
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Link
              href="/NationalCurriculam/ClassSelection/Class-1"
              underline="none"
            >
              <Card>
                <CardContent>
                  <Typography
                    variant="h5"
                    gutterBottom
                    style={{ color: "#f50057" }}
                  >
                    Mathematics
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Practice quizzes on algebra, geometry, calculus, and more.
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Link
              href=""
              underline="none"
            >
              <Card>
                <CardContent>
                  <Typography
                    variant="h5"
                    gutterBottom
                    style={{ color: "#009688" }}
                  >
                    English
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Practice quizzes on algebra, geometry, calculus, and more.
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              style={{ color: "#ff9800" }}
            >
              Educational Resources
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography
                  variant="h5"
                  gutterBottom
                  style={{ color: "#ffc107" }}
                >
                  Quiz Practice Problems
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Sharpen your skills with a variety of practice problems and
                  exercises.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography
                  variant="h5"
                  gutterBottom
                  style={{ color: "#795548" }}
                >
                  Videos
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Watch educational videos and tutorials to reinforce your
                  learning.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography
                  variant="h5"
                  gutterBottom
                  style={{ color: "#e91e63" }}
                >
                  Games
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Access comprehensive study guides to help you understand key
                  concepts.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default NationalCurriculum;