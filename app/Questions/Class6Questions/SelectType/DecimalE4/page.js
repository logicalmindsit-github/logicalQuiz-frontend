"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import Timer from "../../../../TimerAnswer/Timer";
import Nextbutton from "../Nextbutton";
import QuestionReview from "../QuestionReview";
import ResultsSummary from "../ResultsSummary";
import "../QuestionPlay.css";

const DecimalE4 = () => {
  const [question, setQuestion] = useState(null);
  const [userAnswer, setUserAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [answerSubmitted, setAnswerSubmitted] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [explanation, setExplanation] = useState("");
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [text4, setText4] = useState("");
  const [finishClicked, setFinishClicked] = useState(false);

  const [QA, setQA] = useState(0);
  const [smartScore, setSmartScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [timeTaken, setTimeTaken] = useState(0);

  useEffect(() => {
    fetchQuestion();
  }, []);

  const fetchQuestion = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      const response = await axios.get(
        "https://logical-quiz-backend-43lpx.ondigitalocean.app/questions?std=6&id=E.4",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log("Question API Response:", response.data);
      const fetchedQuestion = response.data.data.question;
      setQuestion(fetchedQuestion);
      setText1(fetchedQuestion.question.text1);
      setText2(fetchedQuestion.question.text2);
      setText3(fetchedQuestion.question.text3);
      setText4(fetchedQuestion.question.text4);
      resetState();
    } catch (error) {
      console.error("Error fetching question:", error);
    }
  };

  const resetState = () => {
    setIsCorrect(false);
    setExplanation("");
    setAnswerSubmitted(false);
    setUserAnswer("");
    setShowReview(false);
    setFinishClicked(false);
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

        const accessToken = localStorage.getItem("accessToken");
        const response = await axios.post(
          "https://logical-quiz-backend-43lpx.ondigitalocean.app/question/answer",
          {
            questionId: question._id,
            docId: question.docId,
            standard: 6,
            questionGroupId: "E.4",
            answer: userAnswer.trim(),
          },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        const responseData = response.data;

        if (responseData.success) {
          const { isCorrect } = responseData.data;

          setQA((prevQA) => prevQA + 1);

          if (isCorrect) {
            setSmartScore((prevScore) => prevScore + 4); // Increase score by 4 for correct answer
            setCorrectAnswers((prevCorrect) => prevCorrect + 1);
          } else {
            setSmartScore((prevScore) => Math.max(0, prevScore - 1.5)); // Decrease score by 1.5 for wrong answer
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
      if (explanationData.explanation && Array.isArray(explanationData.explanation)) {
        const explanationText = explanationData.explanation.map(exp => exp.text).join('\n');
        console.log("Explanation fetched:", explanationText); 
        setExplanation(explanationText);
      }
    } catch (error) {
      console.error("Error fetching explanation:", error);
    }
  };

  const handleNextQuestion = async () => {
    resetState();
    await fetchQuestion();
  };

  const handleGotit = () => {
    setShowReview(false);
    fetchQuestion();
  };

  const handleFinishQuiz = () => {
    setFinishClicked(true);
  };

  const handleShowExplanation = () => {
    if (answerSubmitted && !isCorrect) {
      setShowReview(true);
    }
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
                  <div className="question-text">
                    {question && question.question && (
                      <>
                        <strong>{question.question.text}</strong>
                        <br />
                        <br />
                        <ul>
                          <li>
                            <strong>{question.question.text1}</strong>
                          </li>
                          <li>
                            <strong>{question.question.text2}</strong>
                          </li>
                          <li>
                            <strong>{question.question.text3}</strong>
                          </li>
                          <li>
                            <strong>{question.question.text4}</strong>
                          </li>
                        </ul>
                      </>
                    )}
                  </div>
                  <input
                    type="text"
                    value={userAnswer}
                    onChange={handleAnswerChange}
                    className={isCorrect ? "input-correct" : "input-incorrect"}
                    style={{
                      width: `${userAnswer.length * 0.7 + 5}rem`,
                      textAlign: "center",
                      border: "1px solid #000",
                    }}
                  />
                  <br />
                  <br />
                  <h3 style={{ color: "black", fontSize: "small" ,fontWeight:"bold"}}>
                    (Enter The Option in Capital)
                  </h3>
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
                        onClick={handleShowExplanation}
                        style={{
                          backgroundColor: "rgb(66, 165, 245)",
                          color: "black",
                        }}
                      >
                        Explanation
                      </Button>
                    )}
                    {answerSubmitted && QA < 25 && (
                      <Nextbutton handleGotit={handleNextQuestion} seconds={10} />
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
                  text1={text1}
                  text2={text2}
                  text3={text3}
                  text4={text4}
                  userAnswer={userAnswer}
                  isCorrect={isCorrect}
                  explanation={explanation}
                  handleGotit={handleGotit}
                />
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default DecimalE4;
