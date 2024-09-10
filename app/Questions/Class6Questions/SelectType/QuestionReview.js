import React from "react";
import Button from "@mui/material/Button";
import "./QuestionPlay.css";

const QuestionReview = ({
  question,
  userAnswer,
  isCorrect,
  explanation,
  text1,
  text2,
  text3,
  text4,
  handleGotit,
}) => {
  return (
    <div className="review-container">
      <h2><b>Review</b></h2>
      <div className="review-question">
        <strong>Question:</strong> {question.question.text}
      </div>
      <br/>
      <div className="review-options">
        <strong>Options:</strong> 
        <br/>
          {text1}&nbsp;&nbsp;
          {text2}&nbsp;&nbsp;
          {text3}&nbsp;&nbsp;
          {text4}
      </div>
      <br/>
      <div className="review-user-answer">
        <strong>Your Answer:</strong> {userAnswer}
      </div>
     
      <div className="review-explanation">
        {isCorrect ? (
          <p className="correct-text">Correct!</p>
        ) : (
          <div>
            <p className="incorrect-text">Incorrect!</p>
            <br/>
            {explanation && (
              <div>
                <h3><b>Explanation:</b></h3>
                {explanation.split('\n').map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
      <br/>
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
