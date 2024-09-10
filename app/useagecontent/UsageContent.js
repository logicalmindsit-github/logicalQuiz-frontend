 
"use client";
import React, { useState } from "react";
import data from "./Usagecontent.json";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Bar } from "react-chartjs-2";
import "chartjs-adapter-date-fns"; // Import adapter for date-fns
import { Chart } from "chart.js";
import { BarElement, CategoryScale, LinearScale, Title } from "chart.js";

Chart.register(BarElement, CategoryScale, LinearScale, Title);
const UsageContent = () => {
  const [selectedClass1, setSelectedClass1] = useState(null);
  const [selectedClass2, setSelectedClass2] = useState(null);
  const [selectedDateRange, setSelectedDateRange] = useState("sevenDaysAgo");
  const [totalAnsweredQuestions, setTotalAnsweredQuestions] = useState(0);
  const [totalTimeSpent, setTotalTimeSpent] = useState({
    minutes: 0,
    seconds: 0,
  });
  const [totalSubtopicsPracticed, setTotalSubtopicsPracticed] = useState(0);
  const [usageData, setUsageData] = useState([]);

  const dateRangeFilters = {
    today: (item) => {
      const todayString = new Date().toISOString().split("T")[0];
      return (
        item.dateRange.startDate === todayString &&
        item.dateRange.endDate === todayString
      );
    },
    yesterday: (item) => {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);

      const yesterdayString = yesterday.toISOString().split("T")[0];
      return (
        item.dateRange.startDate === yesterdayString &&
        item.dateRange.endDate === yesterdayString
      );
    },
    sevenDaysAgo: (item) => {
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
      const itemStartDate = new Date(item.dateRange.startDate);
      const itemEndDate = new Date(item.dateRange.endDate);
      return itemStartDate >= sevenDaysAgo && itemEndDate <= new Date();
    },
    thirtyDaysAgo: (item) => {
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      const itemStartDate = new Date(item.dateRange.startDate);
      const itemEndDate = new Date(item.dateRange.endDate);
      return itemStartDate >= thirtyDaysAgo && itemEndDate <= new Date();
    },
    this_week: (item) => {
      const today = new Date();
      const weekStart = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() - today.getDay()
      );
      const weekEnd = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() + (6 - today.getDay())
      );
      const itemStartDate = new Date(item.dateRange.startDate);
      const itemEndDate = new Date(item.dateRange.endDate);
      return itemStartDate <= weekEnd && itemEndDate >= weekStart;
    },
    this_month: (item) => {
      const today = new Date();
      const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);
      const monthEnd = new Date(today.getFullYear(), today.getMonth() + 1, 0);
      const itemStartDate = new Date(item.dateRange.startDate);
      const itemEndDate = new Date(item.dateRange.endDate);
      return itemStartDate >= monthStart && itemEndDate <= monthEnd;
    },
  };

  const handleDateRangeSelection = (value) => {
    setSelectedDateRange(value);
  };

  const renderOptions = () => {
    const classes = [];
    for (let i = 1; i <= 12; i++) {
      classes.push(`Class ${i}`);
    }
    return classes.map((className, index) => (
      <option key={index} value={className}>
        {className}
      </option>
    ));
  };

  const handleDoneClick = () => {
    console.log("Handle done clicked");
    let filteredData = [];

    // Filter data based on selected date range or class range
    if (
      selectedDateRange === "yesterday" ||
      selectedDateRange === "today" ||
      selectedDateRange === "sevenDaysAgo" ||
      selectedDateRange === "thirtyDaysAgo" ||
      selectedDateRange === "this_week" ||
      selectedDateRange === "this_month"
    ) {
      console.log("Filtering data based on selected date range");
      filteredData = data.filter((item) =>
        dateRangeFilters[selectedDateRange](item)
      );
    } else {
      console.log("Filtering data based on selected class range");
      const class1 = selectedClass1
        ? parseInt(selectedClass1.split(" ")[1])
        : 0;
      const class2 = selectedClass2
        ? parseInt(selectedClass2.split(" ")[1])
        : 0;
      filteredData = data.filter((item) => {
        const classNumber = parseInt(item.class);
        return classNumber >= class1 && classNumber <= class2;
      });
    }

    // Calculate total answered questions and total subtopics practiced
    console.log("Calculating total answered questions");
    const totalAnsweredQuestions = filteredData.reduce(
      (total, item) => total + item.usageDetails.answeredQuestions,
      0
    );
    console.log("Calculating total subtopics practiced");
    const totalSubtopicsPracticed = filteredData.reduce(
      (total, item) =>
        total +
        (item.usageDetails.topics?.subtopics
          ? parseInt(item.usageDetails.topics.subtopics)
          : 0),
      0
    );

    // Update state with filtered data and totals
    console.log("Updating state with filtered data and totals");
    setTotalAnsweredQuestions(totalAnsweredQuestions);
    setTotalSubtopicsPracticed(totalSubtopicsPracticed);
    setUsageData(filteredData);
    const totalTimeSpent = filteredData.reduce(
      (total, item) => {
        const timeParts = item.usageDetails.timeSpent.split(":");
        const minutes = parseInt(timeParts[0]);
        const seconds = parseInt(timeParts[1]);
        total.minutes += minutes;
        total.seconds += seconds;
        return total;
      },
      { minutes: 0, seconds: 0 }
    );
    totalTimeSpent.minutes += Math.floor(totalTimeSpent.seconds / 60);
    totalTimeSpent.seconds %= 60;
    setTotalTimeSpent(totalTimeSpent);
  };

  const calculateFormattedTimeSpent = (totalTimeSpent) => {
    const hours = Math.floor(totalTimeSpent.minutes / 60);
    const minutes = totalTimeSpent.minutes % 60;
    const seconds = totalTimeSpent.seconds;
    const formattedTimeSpent = `${hours}hrs ${minutes}mins ${seconds}secs`;
    console.log("formattedTimeSpent", totalTimeSpent);
    return formattedTimeSpent;
  };

  return (
    <div style={{ marginTop: "20px", marginLeft: "20px", fontSize: "30px" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h1 style={{ marginRight: "10px" }}>SKILL CLASSES:</h1>
        <select
          value={selectedClass1}
          onChange={(e) => setSelectedClass1(e.target.value)}
        >
          {renderOptions()}
        </select>
        <h1>to</h1>
        <select
          value={selectedClass2}
          onChange={(e) => setSelectedClass2(e.target.value)}
        >
          {renderOptions()}
        </select>
        <h1 style={{ marginLeft: "20px" }}>DATE RANGE:</h1>
        <select
          value={selectedDateRange}
          onChange={(e) => handleDateRangeSelection(e.target.value)}
        >
          <option value="today">Today</option>
          <option value="yesterday">Yesterday</option>
          <option value="sevenDaysAgo">Last 7days</option>
          <option value="thirtyDaysAgo">Last 30 days</option>
          <option value="this_week">This Week</option>
          <option value="this_month">This Month</option>
        </select>
        <button onClick={handleDoneClick}>Done</button>
      </div>
      <div>
        <div
          style={{
            color: "#464646",
            fontFamily: '"Roboto Slab", sans-serif',
            fontSize: "36px",
            fontWeight: 300,
            marginBottom: "5px",
            backgroundColor: "white",
            marginTop: "3%",
            textAlign: "left",
          }}
        >
          <h1>USAGE DETAILS</h1>
        </div>
        <div
          style={{
            color: "black",
            fontSize: "34px",
            fontWeight: 300,
            marginBottom: "5px",
            backgroundColor: "white",
            marginTop: "2%",
            textAlign: "left",
          }}
        >
          <p>Hi, {selectedDateRange}</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              flex: "0 1 calc(33% - 20px)",
              margin: "10px",
              padding: "20px",
              border: "2px solid #ddd",
              borderRadius: "5px",
              backgroundColor: "#f2f2f2",
              fontSize: "30px",
              color: "black",
              textAlign: "center",
            }}
          >
            <p>Total Answered Questions: {totalAnsweredQuestions}</p>
          </div>
          <div
            style={{
              flex: "0 1 calc(33% - 20px)",
              margin: "10px",
              padding: "20px",
              border: "2px solid #ddd",
              borderRadius: "5px",
              backgroundColor: "#f2f2f2",
              fontSize: "30px",
              color: "black",
              textAlign: "center",
            }}
          >
            <p>
              Spent Practising: {calculateFormattedTimeSpent(totalTimeSpent)}
            </p>
          </div>
          <div
            style={{
              flex: "0 1 calc(33% - 20px)",
              margin: "10px",
              padding: "20px",
              border: "2px solid #ddd",
              borderRadius: "5px",
              backgroundColor: "#f2f2f2",
              fontSize: "30px",
              color: "black",
              textAlign: "center",
            }}
          >
            <p>Total Subtopics Practised: {totalSubtopicsPracticed}</p>
          </div>
          <div>
            <Container maxWidth="100vh">
              <Box sx={{ bgcolor: "white", height: "50vh", width: "150%" }}>
                <p style={{ textAlign: "left" }}>PRACTICE BY YEAR</p>
                <div>
                  <Bar
                    data={{
                      labels: usageData.map((item) => item.dateRange.startDate), // Use start dates as labels
                      datasets: [
                        {
                          label: "Class",
                          data: usageData.map((item) =>
                            item.usageDetails.topics?.subtopics
                              ? parseInt(item.usageDetails.topics.subtopics)
                              : 0
                          ), // Use subtopics practiced as data
                          backgroundColor: "#cfe8fc", // Adjust as needed
                        },
                      ],
                    }}
                    options={{
                      scales: {
                        x: {
                          type: "category", // Define x-axis scale as category
                          title: {
                            display: true,
                            text: "Date Range",
                          },
                        },
                        y: {
                          title: {
                            display: true,
                            text: "Subtopics Practiced",
                          },
                        },
                      },
                    }}
                  />
                </div>
              </Box>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsageContent;
