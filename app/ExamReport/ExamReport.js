"use client"

import React, { useEffect, useState } from "react";
import axios from "axios";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import CircularProgress from "@mui/material/CircularProgress";

export default function ExamReport() {
  const [report, setReport] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const standard = 6;

  useEffect(() => {
    const fetchReport = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        const response = await axios.get(
          `https://logical-quiz-backend-43lpx.ondigitalocean.app/examReport`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
            params: { standard },
          }
        );
        if (response.data.success) {
          setReport(response.data.data);
        } else {
          setError("Failed to fetch report");
        }
      } catch (error) {
        setError("An error occurred while fetching the report");
      } finally {
        setLoading(false);
      }
    };

    fetchReport();
  }, [standard]);

  if (loading) return <CircularProgress />;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1 style={{ fontWeight: "bold", fontSize: "1.4rem", color: "#333" }}>Exam Report :</h1>
      <TableContainer component={Paper} sx={{ margin: "20px 0", border: "2px solid #ddd" }}>
        <Table sx={{ minWidth: 650 }} aria-label="exam report table">
          <TableHead sx={{ backgroundColor: '#f4f4f4' }}>
            <TableRow>
              <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#333', borderRight: '2px solid #ddd' }}>Examination Name</TableCell>
              {/* <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#333', borderRight: '2px solid #ddd' }}>Attended Questions</TableCell> */}
              {/* <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#333', borderRight: '2px solid #ddd' }}>Total Marks</TableCell> */}
              <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#333', borderRight: '2px solid #ddd' }}>Total Questions</TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#333', borderRight: '2px solid #ddd' }}>Is Completed</TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#333', borderRight: '2px solid #ddd' }}>Examination Started Date</TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#333', borderRight: '2px solid #ddd' }}>Attended Questions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {report.map((item) => (
              <TableRow
                key={item._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center" sx={{ borderRight: '1px solid #ddd' }}>{item.examinationName}</TableCell>
                {/* <TableCell align="center" sx={{ borderRight: '1px solid #ddd' }}>{item.attentedQuestions}</TableCell> */}
                {/* <TableCell align="center" sx={{ borderRight: '1px solid #ddd' }}>{item.total}</TableCell> */}
                <TableCell align="center" sx={{ borderRight: '1px solid #ddd' }}>{item.totalQuestions}</TableCell>
                <TableCell align="center" sx={{ borderRight: '1px solid #ddd' }}>{item.isCompleted ? "Yes" : "No"}</TableCell>
                <TableCell align="center" sx={{ borderRight: '1px solid #ddd' }}>{new Date(item.examinationStartedDate).toLocaleString()}</TableCell>
                <TableCell align="center" sx={{ borderRight: '1px solid #ddd' }}>{item.tickerCount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}