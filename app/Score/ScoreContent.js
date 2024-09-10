"use client";
import React, { useState } from "react";
import ClassSkills from "./ClassSkills"; // Assuming this is the correct import path for ClassSkills
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Pie } from "react-chartjs-2";
import Report from "../LandingPage/Report";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const ScoreContent = () => {
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedDateRange, setSelectedDateRange] = useState("DATE RANGE");
  const [expandedTopics, setExpandedTopics] = useState({});
  const classSkills = new ClassSkills(); // Assuming ClassSkills is correctly implemented

  const handleClassSelect = (e) => {
    setSelectedClass(e.target.value);
  };

  const handleDateRangeSelect = (dateRange) => {
    setSelectedDateRange(dateRange);
  };

  const handleReset = () => {
    setSelectedClass("");
    setSelectedDateRange("DATE RANGE");
  };

  const toggleTopic = (classIndex, topicIndex) => {
    const key = `${classIndex}-${topicIndex}`;
    setExpandedTopics((prevExpandedTopics) => ({
      ...prevExpandedTopics,
      [key]: !prevExpandedTopics[key],
    }));
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: "numeric", month: "long", year: "numeric" };
    return date.toLocaleDateString("en-GB", options);
  };

  const topicColors = ["#4169e1"];

  const dateRanges = [
    "Today",
    "Yesterday",
    "This week",
    "Last 7 days",
    "This month",
    "Last 30 days",
    "This year",
    "All time",
  ];

  return (
    <div>
      <Report />
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
      >
        <Typography variant="h6" gutterBottom style={{ marginRight: "10px" }}>
          Select Class:
        </Typography>
        <select
          value={selectedClass}
          onChange={handleClassSelect}
          style={{ marginRight: "10px" }}
        >
          <option value="">Select Class</option>
          {Object.keys(classSkills.skills).map((classKey) => (
            <option key={classKey} value={classKey}>
              {classKey}
            </option>
          ))}
        </select>

        <Typography variant="h6" gutterBottom style={{ marginRight: "10px" }}>
          Date Range:
        </Typography>
        <select
          value={selectedDateRange}
          onChange={(e) => handleDateRangeSelect(e.target.value)}
          style={{ marginRight: "10px" }}
        >
          {dateRanges.map((range) => (
            <option key={range} value={range}>
              {range}
            </option>
          ))}
        </select>

        <button onClick={handleReset}>Reset</button>
      </div>

      {selectedClass && classSkills.skills[selectedClass] && (
        <TableContainer component={Paper}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Subtopic</StyledTableCell>
                <StyledTableCell align="right">SMARTSCORE</StyledTableCell>
                <StyledTableCell align="right">
                  QUESTIONS ANSWERED
                </StyledTableCell>
                <StyledTableCell align="right">TIME SPENT</StyledTableCell>
                <StyledTableCell align="right">LAST PRACTISED</StyledTableCell>
                <StyledTableCell align="right"> </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.entries(classSkills.skills[selectedClass]).map(
                ([topicCategory, subtopics], classIndex) => (
                  <>
                    <TableRow key={topicCategory}>
                      <TableCell colSpan={5}>
                        <Typography variant="h6">{topicCategory}</Typography>
                      </TableCell>
                    </TableRow>
                    {Object.entries(subtopics).map(
                      ([subtopic, data], topicIndex) => {
                        const date = new Date(data.LAST_PRACTISED);
                        const currentDate = new Date(); // Get current date
                        const itemDate = date.toLocaleDateString(); // Extract date from LAST_PRACTISED

                        // Calculate the start date for this week
                        const firstDayOfWeek = new Date(currentDate);
                        firstDayOfWeek.setDate(
                          firstDayOfWeek.getDate() - firstDayOfWeek.getDay()
                        );

                        // Calculate the start date for this month
                        const firstDayOfMonth = new Date(currentDate);
                        firstDayOfMonth.setDate(1);

                        // Calculate the start date for last 30 days
                        const last30Days = new Date(currentDate);
                        last30Days.setDate(last30Days.getDate() - 30);

                        switch (selectedDateRange) {
                          case "Today":
                            if (itemDate !== currentDate.toLocaleDateString()) {
                              return null; // Skip rendering if the date is not today
                            }
                            break;
                          case "Yesterday":
                            const yesterday = new Date(currentDate);
                            yesterday.setDate(yesterday.getDate() - 1);
                            if (itemDate !== yesterday.toLocaleDateString()) {
                              return null; // Skip rendering if the date is not yesterday
                            }
                            break;
                          case "This week":
                            if (date < firstDayOfWeek) {
                              return null; // Skip rendering if the date is before the start of the current week
                            }
                            break;
                          case "Last 7 days":
                            if (date < last30Days) {
                              return null; // Skip rendering if the date is before the last 30 days
                            }
                            break;
                          case "This month":
                            if (date < firstDayOfMonth) {
                              return null; // Skip rendering if the date is before the start of the current month
                            }
                            break;
                          case "Last 30 days":
                            if (date < last30Days) {
                              return null; // Skip rendering if the date is before the last 30 days
                            }
                            break;
                          case "This year":
                            if (
                              date.getFullYear() !== currentDate.getFullYear()
                            ) {
                              return null; // Skip rendering if the year does not match the current year
                            }
                            break;
                          case "All time":
                            // No need to skip rendering for all time
                            break;
                          default:
                            return null; // Skip rendering if an invalid date range is selected
                        }

                        return (
                          <TableRow key={subtopic}>
                            <TableCell>{subtopic}</TableCell>
                            <TableCell align="right">
                              {data.SMARTSCORE}
                            </TableCell>
                            <TableCell align="right">
                              {data.QUESTIONS_ANSWERED}
                            </TableCell>
                            <TableCell align="right">
                              {data.TIME_SPENT}
                            </TableCell>
                            <TableCell align="right">
                              {formatDate(data.LAST_PRACTISED)}
                            </TableCell>
                            <TableCell>
                              {Object.keys(classSkills.skills).includes(
                                subtopic
                              ) ? ( // Check if subtopic is a class
                                <ArrowDropDownIcon
                                  style={{
                                    float: "right",
                                    transform: expandedTopics[
                                      `${classIndex}-${topicIndex}`
                                    ]
                                      ? "rotate(180deg)"
                                      : "rotate(0deg)",
                                  }}
                                  onClick={() =>
                                    toggleTopic(classIndex, topicIndex)
                                  }
                                />
                              ) : null}
                            </TableCell>
                          </TableRow>
                        );
                      }
                    )}
                  </>
                )
              )}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default ScoreContent;
