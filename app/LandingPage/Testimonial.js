"use client";
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import Link from "next/link";
import Tooltip from "@mui/material/Tooltip";

const cardStyles = {
  minWidth: 1000,
  padding: "30px",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  cursor: "pointer",
  transition: "transform 0.3s",
  textAlign: "center",
  borderRadius: "10px",
  backgroundColor: "#f0f0f0",
  margin: "10px",
};

const backgroundStyles = {
  backgroundImage: `url('https://i.postimg.cc/3W5nCyCC/tesimonial-background-image.jpg')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "50vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export default function Testimonial() {
  return (
    <div style={backgroundStyles}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <Card sx={{ ...cardStyles, backgroundColor: "#ffffff" }}>
          <CardContent style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Avatar
              style={{
                backgroundColor: deepOrange[500],
                marginBottom: "10px",
              }}
            >
              T
            </Avatar>
            <Typography variant="h5" component="div">
              <b>Logical Quiz Testimonial</b>
            </Typography>
            <Typography variant="body2" style={{ textAlign: "center" }}>
              <b>&quot;Testimonial for Administrators, Teachers, Parents & Students&quot;</b>
            </Typography>
          </CardContent>

          <CardActions style={{ justifyContent: "center" }}>
            <Link href="/Testimonials" passHref>
              <Tooltip title="Learn More" arrow>
                <Button
                  size="small"
                  style={{
                    background: "linear-gradient(90deg, #0072ff 0%, #00d4ff 100%)",
                    color: "white",
                    borderRadius: "10px",
                    padding: "10px",
                  }}
                >
                  Learn More
                </Button>
              </Tooltip>
            </Link>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}