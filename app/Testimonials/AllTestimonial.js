import React from "react";
import arrayofObject from "./testimonial.json";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const AllTestimonial = () => {
  let Json = arrayofObject.alltestimonial.filter(
    (entry) => entry.keyword !== "Video"
  );

  return (
    <Grid container spacing={1} justifyContent="space-evenly">
      {Json.map((values, index) => (
        <Grid item key={index} xs={24} sm={12} md={6} lg={4}>
          <Card
            sx={{
              display: "inline-block",
              mx: "2px",
              transform: "scale(0.8)",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            }}
            variant="outlined"
            style={{ borderRadius: "10px" }}
          >
            <CardContent>
              <Typography
                sx={{ fontSize: 10 }}
                color="text.secondary"
                gutterBottom
              >
                {values.title}
              </Typography>

              <Typography variant="h6" component="div">
                <p>
                  <span
                    style={{
                      color: "green",
                      fontSize: "28px",
                      fontFamily: "Trebuchet MS,sans-serif",
                    }}
                  >
                    “
                  </span>{" "}
                  {values.content}{" "}
                  <span
                    style={{
                      color: "green",
                      fontSize: "28px",
                      fontFamily: "Trebuchet MS,sans-serif",
                    }}
                  >
                    ”
                  </span>
                </p>
              </Typography>

              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {values.subtitle}
              </Typography>
              <hr style={{ borderColor: "#c0b9b9" }} />
              <Typography variant="h6">
                <span style={{ color: "blue" }}>{values.username}</span>,{" "}
                {values.grade} <br />
                {values.location?.[0]}, {values.location?.[1] ?? ""}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default AllTestimonial;
