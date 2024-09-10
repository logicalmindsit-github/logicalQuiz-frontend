import React from "react";
import "./QuestionPlay.css";
import Image from "next/image";

const ResultsSummary = ({
  QA,
  smartScore,
  correctAnswers,
  wrongAnswers,
  timeTaken,
}) => {
  const imageUrl =
  smartScore > 50 ? "/image1.png" : "/image2.png";

  return (
    <div className="results-summary">
      <h2 style={{ textAlign: "center" }}>Quiz Summary 🎖</h2>
      <table className="summary-table">
        <tbody>
          <tr>
            <td>Total Questions Answered:</td>
            <td>{QA}</td>
          </tr>
          <tr>
            <td>Total Correct Answers:</td>
            <td>{correctAnswers}</td>
          </tr>
          <tr>
            <td>Total Wrong Answers:</td>
            <td>{wrongAnswers}</td>
          </tr>
          <tr>
            <td>Total Smart Score:</td>
            <td>{smartScore}</td>
          </tr>
          <tr>
            <td>Total Time Taken:</td>
            <td>{timeTaken} seconds</td>
          </tr>
        </tbody>
      </table>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Image src={imageUrl} alt="Result Image" style={{ maxWidth: "100%" }} />
      </div>
    </div>
  );
};

export default ResultsSummary;
