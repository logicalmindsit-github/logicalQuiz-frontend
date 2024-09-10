import React from "react";
import { useRouter } from "next/router";
import { Button, Box, Typography, Container } from "@mui/material";

const Custom404 = () => {
  const router = useRouter();

  const handleGoHome = () => {
    router.push("/");
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
          Oops, looks like the page is lost.
        </Typography>
        <Typography component="p" variant="body1" sx={{ mb: 4 }}>
          This is not a fault, just an accident that was not intentional.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleGoHome}
          sx={{
            color: "black",
            fontWeight: "bold",
            fontSize: "15px",
          }}
        >
          Go to Homepage
        </Button>
      </Box>
    </Container>
  );
};

export default Custom404;
