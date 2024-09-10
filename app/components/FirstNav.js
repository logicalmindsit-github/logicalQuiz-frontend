"use client";

import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Link from "next/link";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { useRouter } from "next/navigation";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { signOut, useSession } from "next-auth/react";
import SearchBar from "../LandingPage/SearchBar";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Tooltip from "@mui/material/Tooltip";

import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Divider from "@mui/material/Divider";

import { FaBookReader } from "react-icons/fa";
import { TbReportSearch } from "react-icons/tb";
import { MdTopic } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";
import { PiExamFill } from "react-icons/pi";
import { GiProgression } from "react-icons/gi";
import { PiCertificateBold } from "react-icons/pi";
import { RiLoginCircleFill } from "react-icons/ri";
import { TbReport } from "react-icons/tb";
import Image from "next/image";

const drawerWidth = 240;

const DrawerHeader = ({ handleDrawerClose }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: "8px",
    }}
  >
    <IconButton onClick={handleDrawerClose}>
      <ChevronLeftIcon />
    </IconButton>
  </div>
);

const Country = dynamic(() => import("../LandingPage/Country"), {
  loading: () => <div>Loading...</div>,
});

const FirstNav = () => {
  const { data: session, status } = useSession();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const router = useRouter();
  useEffect(() => {
    if (session) {
      setUsername(session.user.name);
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userName", session.user.name);
      setIsLoggedIn(true);
    } else {
      const loggedIn = localStorage.getItem("isLoggedIn") === "true";
      if (loggedIn) {
        const storedUsername = localStorage.getItem("userName");
        if (storedUsername) {
          setUsername(storedUsername);
          setIsLoggedIn(true);
        }
      } else {
        setUsername("");
        setIsLoggedIn(false);
      }
    }
  }, [session]);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    if (window.confirm("Are you sure you want to log out?")) {
      localStorage.removeItem("accessToken");
      localStorage.setItem("isLoggedIn", "false");
      localStorage.removeItem("userName");
      await signOut({ redirect: false });
      setUsername(""); // Clear username in state
      setIsLoggedIn(false);
      alert("You have been logged out.");
      router.push("/");
      
    }
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AppBar
        position="static"
        style={{
          background: "linear-gradient(90deg, #A9A9A9 0%, #C0C0C0 100%)",
          minHeight: 64,
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            style={{ marginLeft: 1 }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>

          <Link href={"/"}>
            <Image
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              style={{ marginRight: 10 }}
              src="/logo2.png"
              alt="Logo"
              width={200}
              height={50}
            />
          </Link>

          <div style={{ flexGrow: 1 }} />

          {/* <SearchBar /> */}

          <div style={{ marginLeft: "auto" }}>
            {isLoggedIn ? (
              <>
                <span
                  style={{
                    color: "red",
                    backgroundColor: "#E5E8E8",
                    padding: "5px 10px",
                    borderRadius: "8px",
                    marginRight: 10,
                    fontWeight: "bold",
                  }}
                >
                  {username}
                </span>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  color="inherit"
                  onClick={handleMenuOpen}
                  style={{ marginRight: 10 }}
                >
                  <Tooltip title="User" arrow>
                    <AccountCircleIcon />
                  </Tooltip>
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                  sx={{
                    mt: 1.5,
                    "& .MuiPaper-root": {
                      backgroundColor: "#68BBE3",
                      color: "white",
                      fontWeight: "bold",
                      borderRadius: "8px",
                      minWidth: 10,
                      textAlign: "center",
                    },
                  }}
                >
                  <MenuItem
                    onClick={() => {
                      handleLogout();
                      window.location.reload();
                    }}
                  >
                    Logout
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <Link href="/Signin" passHref>
                <Tooltip title="Signin" arrow>
                  <Button
                    variant="contained"
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      margin: "0 10px",
                      borderRadius: "8px",
                      padding: "5px 15px",
                      background: "#68BBE3",
                    }}
                  >
                    <RiLoginCircleFill style={{ marginRight: 5 }} />
                    Sign in
                  </Button>
                </Tooltip>
              </Link>
            )}
          </div>
          {/* <Country /> */}
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={toggleDrawer}
        sx={{
          width: drawerWidth,
        }}
      >
        <DrawerHeader handleDrawerClose={handleDrawerClose} />
        <Divider />

        <List sx="width:250px;">
          <ListItem
            buttonbase
            component={Link}
            href="/"
            onClick={handleDrawerClose}
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>

          <ListItem
            buttonbase
            component={Link}
            href="/Rowcard"
            onClick={handleDrawerClose}
          >
            <ListItemIcon>
              <FaBookReader />
            </ListItemIcon>
            <ListItemText primary="Learning" />
          </ListItem>

          <ListItem
            buttonbase
            component={Link}
            href="/Score"
            onClick={handleDrawerClose}
          >
            <ListItemIcon>
              <TbReportSearch />
            </ListItemIcon>
            <ListItemText primary="Report" />
          </ListItem>

          <ListItem
            buttonbase
            component={Link}
            href="/Progress"
            onClick={handleDrawerClose}
          >
            <ListItemIcon>
              <GiProgression />
            </ListItemIcon>
            <ListItemText primary="Progress" />
          </ListItem>

          <ListItem
            buttonbase
            component={Link}
            href="/CertificateGenerator"
            onClick={handleDrawerClose}
          >
            <ListItemIcon>
              <PiCertificateBold />
            </ListItemIcon>
            <ListItemText primary="Certificate" />
          </ListItem>

          <ListItem
            buttonbase
            component={Link}
            href="/ClassCard"
            onClick={handleDrawerClose}
          >
            <ListItemIcon>
              <MdTopic />
            </ListItemIcon>
            <ListItemText primary="Classes" />
          </ListItem>

          <ListItem
            buttonbase
            component={Link}
            href="/NationalCurriculam"
            onClick={handleDrawerClose}
          >
            <ListItemIcon>
              <TbListDetails />
            </ListItemIcon>
            <ListItemText primary="National Curriculum" />
          </ListItem>

          <ListItem
            buttonbase
            component={Link}
            href="/Examclasscard"
            onClick={handleDrawerClose}
          >
            <ListItemIcon>
              <PiExamFill />
            </ListItemIcon>
            <ListItemText primary="Exams" />
          </ListItem>

          <ListItem
            buttonbase
            component={Link}
            href="/ExamReport"
            onClick={handleDrawerClose}
          >
            <ListItemIcon>
              <TbReport />
            </ListItemIcon>
            <ListItemText primary="ExamReport" />
          </ListItem>
        </List>
      </Drawer>
    </Suspense>
  );
};

export default FirstNav;
