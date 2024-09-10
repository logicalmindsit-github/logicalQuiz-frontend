"use client";
import React, { useState } from "react";
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import Popover from "@mui/material/Popover";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Image from "next/image";

const LANGS = [
  {
    value: "India",
    label: "India",
    icon: "https://i.postimg.cc/QxFC9jHc/download.png",
  },
  {
    value: "USA",
    label: "USA",
    icon: "https://i.postimg.cc/266KPtgm/usa.jpg",
  },
  {
    value: "UK",
    label: "UK",
    icon: "https://i.postimg.cc/bJLrbJx9/union-jack-26119-640.webp",
  },
];

export default function Country() {
  const [open, setOpen] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(LANGS[0].value);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
    handleClose();
  };

  return (
    <div style={{ display: "" }}>
      <>
        <IconButton
          onClick={handleOpen}
          sx={{
            width: 40,
            height: 40,
            ...(open && {
              bgcolor: "action.selected",
            }),
          }}
        >
          <Image
            src={LANGS.find((item) => item.value === selectedCountry)?.icon}
            alt={selectedCountry}
            width={50}
            height={40}
          />{" "}
          {/* Use the Image component */}
        </IconButton>

        <Popover
          open={!!open}
          anchorEl={open}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          PaperProps={{
            sx: {
              p: 0,
              mt: 1,
              ml: 0.75,
              width: 180,
            },
          }}
        >
          <List>
            {LANGS.map((option) => (
              <ListItem
                key={option.value}
                selected={option.value === selectedCountry}
                onClick={() => handleSelectCountry(option.value)}
                sx={{ typography: "body2" }}
              >
                <Link href={"/"} legacyBehavior>
                  <a style={{ display: "flex", alignItems: "center" }}>
                    <Image
                      src={option.icon}
                      alt={option.label}
                      width={50}
                      height={50}
                      style={{ marginRight: 2 }}
                    />
                    <ListItemText primary={option.label} />
                  </a>
                </Link>
              </ListItem>
            ))}
          </List>
        </Popover>
      </>
    </div>
  );
}
