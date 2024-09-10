import React from "react";
import Button from "@mui/material/Button";
import "./QuestionPlay.css";
import Image from "next/image";


const QuestionReview = ({
  question,
  userAnswer,
  isCorrect,
  explanation,
  handleGotit,
}) => {
  return (
    <div className="review-container">
      <h2><b>Review</b></h2>
      <div className="review-question">
        <strong>Question:</strong> {question.question.text}
      </div>
      <div className="review-user-answer">
        <strong>Your Answer:</strong> {userAnswer}
      </div>
      <div className="review-explanation">
        {isCorrect ? (
          <p className="correct-text">Correct!</p>
        ) : (
          <div>
            <p className="incorrect-text">Incorrect!</p>
            <div className="review-buttons">
              <Button
                variant="contained"
                onClick={handleGotit}
                style={{ backgroundColor: "rgb(66, 165, 245)", color: "black" }}
              >
                Got it
              </Button>
            </div>
            {explanation && <Image src={explanation} alt="Explanation" className="explanation-image"/>}
          </div>
        )}
      </div>
      <div className="review-buttons">
        <Button
          variant="contained"
          onClick={handleGotit}
          style={{ backgroundColor: "rgb(66, 165, 245)", color: "black" }}
        >
          Got it
        </Button>
      </div>
    </div>
  );
};

export default QuestionReview;
