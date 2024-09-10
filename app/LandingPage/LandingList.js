"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";

// MUI icons
import {
  AddCircle as AddCircleIcon,
  Functions as FunctionsIcon,
  Compare as CompareIcon,
  AttachMoney as AttachMoneyIcon,
  BubbleChart as BubbleChartIcon,
  Timer as TimerIcon,
  Equalizer as EqualizerIcon,
  PieChart as PieChartIcon,
  LinearScale as LinearScaleIcon,
  MoneyOff as MoneyOffIcon,
  FilterList as FilterListIcon,
  SettingsInputComponent as SettingsInputComponentIcon,
  NetworkCheck as NetworkCheckIcon,
  Remove as RemoveIcon,
  Percent as PercentIcon,
  Pin as PinIcon,
  Pattern as PatternIcon,
  Balance as BalanceIcon,
  AlignVerticalBottom as AlignVerticalBottomIcon,
  Clear as ClearIcon,
  Architecture as ArchitectureIcon,
  AddHomeWork as AddHomeWorkIcon,
  EmojiSymbols as EmojiSymbolsIcon,
  PlusOne as PlusOneIcon,
  QueryStats as QueryStatsIcon,
  Calculate as CalculateIcon,
  
 
} from "@mui/icons-material";

const topics = [
  { name: "Addition", icon: <AddCircleIcon /> },
  { name: "Algebra", icon: <CalculateIcon/> },
  { name: "Comparing", icon: <BalanceIcon /> },
  { name: "Counting", icon: < PlusOneIcon/> },
  { name: "DataGraph", icon: <QueryStatsIcon /> },
  { name: "Division", icon: <EmojiSymbolsIcon/> },
  { name: "Estimation", icon: <AddHomeWorkIcon /> },
  { name: "Fraction", icon: <PieChartIcon /> },
  { name: "Geomentry", icon: <ArchitectureIcon /> },
  { name: "Integer", icon: <PatternIcon /> },
  { name: "Measurement", icon: <LinearScaleIcon /> },
  { name: "Mixedoperation", icon: <SettingsInputComponentIcon /> },
  { name: "Money", icon: <AttachMoneyIcon /> },
  { name: "Multiplication", icon: <ClearIcon /> },
  { name: "Numbertheory", icon: <PinIcon /> },
  { name: "Patterns", icon: <PatternIcon /> },
  { name: "PlaceValues", icon: <AlignVerticalBottomIcon /> },
  { name: "Ratiopropotion", icon: <PercentIcon /> },
  { name: "Subtraction", icon: <RemoveIcon /> },
  { name: "Timer", icon: <TimerIcon /> },
];

function getRandomColor() {
  const letters = "89ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
}

export default function GridList() {
  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={2}>
        {topics.map((topic, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Link href={`/AllTopics/${topic.name}`} passHref>
              <ListItem component="div" disablePadding>
                <ListItemButton
                  style={{
                    backgroundColor: getRandomColor(),
                    borderRadius: "50px",
                    padding: "10px 20px",
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    maxWidth: "250px",
                    margin: "auto",
                  }}
                >
                  {topic.icon && (
                    <span style={{ fontSize: 24, marginRight: 10 }}>
                      {topic.icon}
                    </span>
                  )}
                  <ListItemText
                    primary={topic.name}
                    style={{
                      color: "black",
                      textAlign: "center",
                      width: "100%",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}