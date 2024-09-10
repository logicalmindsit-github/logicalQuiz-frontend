"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import Timer from "../../../../TimerAnswer/Timer";
import "../QuestionPlay.css";
import Nextbutton from "../Nextbutton";
import QuestionReview from "../QuestionReview";
import ResultsSummary from "../ResultsSummary";

const FractionH4 = () => {
  const [question, setQuestion] = useState(null);
  const [userAnswer, setUserAnswer] = useState("");
  const [showExplanation, setShowExplanation] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [answerSubmitted, setAnswerSubmitted] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [explanation, setExplanation] = useState("");
  const [finishClicked, setFinishClicked] = useState(false);
  const [nextQuestionLoading, setNextQuestionLoading] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [allQuestionsAnswered, setAllQuestionsAnswered] = useState(false);
  const [questionText, setQuestionText] = useState("");

  let [QA, setQA] = useState(0);
  let [smartScore, setsmartScore] = useState(0);
  let [correctAnswers, setCorrectAnswers] = useState(0);
  let [wrongAnswers, setWrongAnswers] = useState(0);
  let [timeTaken, setTimeTaken] = useState(0);

  useEffect(() => {
    fetchQuestion();
  }, []);

  const fetchQuestion = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      const response = await axios.get(
        "https://logical-quiz-backend-43lpx.ondigitalocean.app/questions?std=5&id=H5.4",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log("Question API Response:", response.data);
      const fetchedQuestion = response.data.data.question;
      setQuestion(fetchedQuestion);
      setQuestionText(fetchedQuestion.question.text);
      setShowExplanation(false);
      setIsCorrect(false);
      setAnswerSubmitted(false);
      setUserAnswer("");
      setShowReview(false);
      setCorrectAnswer(fetchedQuestion.answer);
      console.log("Answewr:",fetchedQuestion.answer);
    } catch (error) {
      console.error("Error fetching question:", error);
    }
  };

  const handleAnswerChange = (event) => {
    setUserAnswer(event.target.value);
    
  };

  const handleAnswerSubmit = async () => {
    if (!answerSubmitted) {
      try {
        if (!userAnswer.trim()) {
          console.error("Error: Answer cannot be empty");
          return;
        }

        if (!question || !question.question || !question.question.text) {
          console.error("Error: Question text is missing");
          return;
        }

        const accessToken = localStorage.getItem("accessToken");

        const response = await axios.post(
          "https://logical-quiz-backend-43lpx.ondigitalocean.app/question/answer",
          {
            questionId: question._id,
            docId: question.docId,
            standard: 5,
            questionGroupId: "H5.4",
            answer: userAnswer.trim(),
          },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        console.log("Answer:",userAnswer);
        const responseData = response.data;

        if (responseData.success) {
          const { isCorrect } = responseData.data;

          // Update QA count
          setQA((prevQA) => {
            const newQA = prevQA + 1;
            if (newQA >= 5) {
              setAllQuestionsAnswered(true);
            }
            return newQA;
          });

          if (isCorrect) {
            // Update smart score for correct answer
            setsmartScore((prevScore) => prevScore + 4);
            setCorrectAnswers((prevCorrect) => prevCorrect + 1);
          } else {
            // Update smart score for wrong answer
            setsmartScore((prevScore) => Math.max(0, prevScore - 1.5));
            setWrongAnswers((prevWrong) => prevWrong + 1);
          }

          setIsCorrect(isCorrect);
          setAnswerSubmitted(true);

          if (!isCorrect) {
            await fetchExplanation();
          }
        } else {
          console.error("Error submitting answer:", responseData.error);
        }
      } catch (error) {
        console.error("Error submitting answer:", error);
      }
    }
  };

  const handleNextQuestion = async () => {
    setNextQuestionLoading(true);
    await fetchQuestion();
    setNextQuestionLoading(false);
  };

  const handleShowReview = () => {
    setShowReview(true);
  };

  const handleGotit = async () => {
    await fetchQuestion();
    setShowReview(false);
  };

  const fetchExplanation = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      const response = await axios.get(
        "https://logical-quiz-backend-43lpx.ondigitalocean.app/getExplanation",
        {
          params: {
            questionId: question._id,
          },
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      const explanationData = response.data.data;

      setExplanation(explanationData.explanation.text);
    } catch (error) {
      console.error("Error fetching explanation:", error);
    }
  };

  const handleFinishQuiz = () => {
    setFinishClicked(true);
    setAllQuestionsAnswered(true);
  };

  const renderQuestionWithInput = () => {
    if (!question || !question.question || !question.question.text) {
      return null;
    }
    const parts = question.question.text.split("___"); // Split the sentence where the blank is

    return (
      <div className="question-text">
        {parts.map((part, index) => (
          <React.Fragment key={index}>
            {part}
            {index < parts.length - 1 && (
              <input
              type="text"
              value={userAnswer}
              onChange={(e) => {
                // Restrict input to 6 digits or less
                if (e.target.value.length <= 6) {
                  handleAnswerChange(e);
                }
              }}
              className={isCorrect ? "input-correct" : "input-incorrect"}
              style={{
                width: "5rem",
                textAlign: "center",
                border: "1px solid #000",
              }}
            />
            
            )}
          </React.Fragment>
        ))}
      </div>
    );
  };

  return (
    <div className="question-container">
      <div className="timer">
        <Timer
          QA={QA}
          smartScore={smartScore}
          setTimeTaken={setTimeTaken}
          finishClicked={finishClicked}
        />
      </div>
      <div className="content-container">
        {finishClicked ? (
          <ResultsSummary
            QA={QA}
            smartScore={smartScore}
            correctAnswers={correctAnswers}
            wrongAnswers={wrongAnswers}
            timeTaken={timeTaken}
          />
        ) : (
          question && (
            <div className="question-wrapper">
              {!showReview ? (
                <div className="question-content">
                  <h2 className="question-heading">Question</h2>
         
                   <br />
                  {renderQuestionWithInput()}
                  <br />

                  <div className="buttons-container">
                    <Button
                      variant="contained"
                      onClick={handleAnswerSubmit}
                      disabled={answerSubmitted}
                      style={{
                        backgroundColor: "rgb(66, 165, 245)",
                        color: "black",
                      }}
                    >
                      SUBMIT
                    </Button>
                    {answerSubmitted && !isCorrect && (
                      <Button
                        variant="contained"
                        onClick={handleShowReview}
                        style={{
                          backgroundColor: "rgb(66, 165, 245)",
                          color: "black",
                        }}
                      >
                        Explanation
                      </Button>
                    )}
                    {answerSubmitted && QA < 25 && (
                      <Nextbutton
                        handleGotit={handleNextQuestion}
                        seconds={10}
                      />
                    )}
                    {answerSubmitted && QA >= 25 && (
                      <Button
                        variant="contained"
                        onClick={handleFinishQuiz}
                        style={{
                          backgroundColor: "rgb(66, 165, 245)",
                          color: "black",
                        }}
                      >
                        FINISH
                      </Button>
                    )}
                  </div>
                  {answerSubmitted && (
                    <div className="feedback-container">
                      {isCorrect ? (
                        <p className="correct-text">Correct!</p>
                      ) : (
                        <p className="incorrect-text">Incorrect!</p>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <QuestionReview
                  question={question}
                  userAnswer={userAnswer}
                  isCorrect={isCorrect}
                  explanation={explanation}
                  handleGotit={handleGotit}
                />
              )}

              {showExplanation && !showReview && (
                <div className="explanation-container">
                  {isCorrect ? (
                    <p className="correct-text">Correct!</p>
                  ) : (
                    <div>
                      <p className="incorrect-text">Incorrect!</p>
                      {explanation && (
                        <div>
                          <p>{explanation.text}</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default FractionH4;
