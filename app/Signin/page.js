"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Box,
  Typography,
  Container,
  IconButton,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
} from "@mui/material";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { AuthService } from "../api/AuthService/AuthService";

const theme = createTheme();

const Signin = () => {
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
    showPassword: false,
  });
  const [userName, setUserName] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);

    const storedUserName = localStorage.getItem("userName");
    if (loggedIn && storedUserName) {
      setUserName(storedUserName);
    }
  }, [router]);

  const validateForm = () => {
    const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    const isValid = emailRegex.test(userCredentials.email) && userCredentials.password.length > 0;
    setIsFormValid(isValid);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials((prevCredentials) => {
      const newCredentials = { ...prevCredentials, [name]: value };
      validateForm();
      return newCredentials;
    });
  };

  const togglePasswordVisibility = () => {
    setUserCredentials((prevState) => ({
      ...prevState,
      showPassword: !prevState.showPassword,
    }));
  };

  const handleClick = () => {
    router.replace("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (!userCredentials.email || !userCredentials.password) {
        setError("Please fill in all the fields");
        setLoading(false);
        return;
      }

      const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
      if (!emailRegex.test(userCredentials.email)) {
        setError("Invalid email format");
        setLoading(false);
        return;
      }

      const res = await AuthService.login(userCredentials);
      console.log("Login successful:", res);
      localStorage.setItem("accessToken", res.accessToken);
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userName", res.userName);

      setError("");
      setIsLoggedIn(true);
      setUserName(res.userName);

      router.replace("/");
      window.location.reload();
    } catch (error) {
      console.error("Login Error:", error);
      if (error.response && error.response.status === 401) {
        setError("Invalid email or password. Please try again.");
      } else {
        setError("An unexpected error occurred. Please try again later.");
      }
    } finally {
      setLoading(false);
      setUserCredentials({
        email: "",
        password: "",
        showPassword: false,
      });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.setItem("isLoggedIn", "false");
    localStorage.removeItem("userName");
    setIsLoggedIn(false);
    setUserName("");
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            mt: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={userCredentials.email}
              onChange={handleInputChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type={userCredentials.showPassword ? "text" : "password"}
              id="password"
              autoComplete="current-password"
              value={userCredentials.password}
              onChange={handleInputChange}
              InputProps={{
                endAdornment: (
                  <IconButton onClick={togglePasswordVisibility} edge="end">
                    {userCredentials.showPassword ? (
                      <Visibility />
                    ) : (
                      <VisibilityOff />
                    )}
                  </IconButton>
                ),
              }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{
                mt: 3,
                mb: 2,
                color: "black",
                fontWeight: "bold",
                fontSize: "15px",
              }}
              disabled={!isFormValid || loading}
              onClick={handleClick}
            >
              {loading ? "Processing" : "Sign In"}
            </Button>

            <Grid container>
              <Grid item xs />
              <Grid item>
                <Link href="/Signup">{"Don't have an account? Sign Up"}</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>

        <Dialog
          open={!!error}
          onClose={() => setError("")}
          aria-labelledby="alert-dialog-title"
        >
          <DialogTitle id="alert-dialog-title">Alert</DialogTitle>
          <DialogContent>
            <Alert severity="error">{error}</Alert>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setError("")} color="primary" autoFocus>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </ThemeProvider>
  );
};

export default Signin;