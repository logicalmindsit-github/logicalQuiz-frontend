import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import arrayofObject from "./testimonial.json";
import Grid from "@mui/material/Grid";

const Student = ({ role }) => {
  let Json = arrayofObject.alltestimonial;
  let filtername = Json.filter(
    (values) => values.keyword.toLowerCase() === role.toLowerCase()
  );

  return (
    <Grid container spacing={2} justifyContent="space-evenly">
      {filtername.map((values, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
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
              <hr style={{ borderColor: "#c0b9b9" }} />
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {values.subtitle}
              </Typography>
              <Typography variant="h6">
                <span style={{ color: "blue" }}>{values.username}</span>,{" "}
                {values.grade} <br />
                {values.location[0] ? values.location[0] : ""},{" "}
                {values.location[1] ? values.location[1] : ""}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Student;
