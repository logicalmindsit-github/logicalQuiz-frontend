"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import ExamTimer from "../ExamTimer/Timer";
import Footer from "../../footercomponent/footer/page.js"

export default function ExamThree() {
  const [question, setQuestion] = useState({});
  const [answer, setAnswer] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [questionCount, setQuestionCount] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAnswerTyped, setIsAnswerTyped] = useState(false);

  const fetchQuestion = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");

      const response = await axios.get(
        ` 
        https://logical-quiz-backend-43lpx.ondigitalocean.app/exam/getExamQuestions?std=6&examinationName=test.3`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      const { data } = response.data;
      //console.log("Received question data:", data);
      if (data.isCompleted) {
        setIsCompleted(true);
        setIsAnswerTyped(false);
      } else {
        setQuestion(data.question);
        setAnswer("");
        setIsAnswerTyped(false);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchQuestion();
  }, []);

  const handleAnswerChange = (event) => {
    setAnswer(event.target.value);
    setIsAnswerTyped(true);
  };

  const handleSubmitAnswer = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      //console.log("Submitting answer:", answer);
      if (!isAnswerTyped || !answer.trim()) {
        alert("Please type your answer before submitting.");
        return;
      }
      const requestBody = {
        questionId: question._id,
        docId: question.docId,
        answer,
        standard: question.standard,
        examinationName: "test.3",
      };
      setIsSubmitting(true);
      await axios.post(
        "https://logical-quiz-backend-43lpx.ondigitalocean.app/exam/examAnswer",
        requestBody,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      setAnswer("");
      setQuestionCount((prevCount) => prevCount + 1);
      fetchQuestion();
    } catch (error) {
      setError("post method some error ", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return <div style={{ textAlign: "center" }}>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (isCompleted) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "100vh",
          color: "#52B700",
          marginTop: "100px",
          fontSize: "50px",
        }}
      >
        Exam Completed!
      </div>
    );
  }
  return (
    <div style={{ fontFamily: "verdana, sans-serif" }}>
      <h1
        style={{
          fontSize: "3rem",
          color: "#52B700",
        }}
      >
        Exam:
      </h1>
      <div
        style={{
          display: "flex",
          height: "70vh",
          marginTop: "10px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ width: "85%", textAlign: "center", padding: "20px" }}>
            <h1 style={{ fontSize: "1.5rem", color: "black",marginRight:'20%' }}>
            Questions... 
            </h1>
            <br />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginLeft:"15%",
              }}
            >
              <p
                style={{
                  fontSize: "1.2rem",
                  marginBottom: "10px",
                  width: "70%",
                  padding: "10px",
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                  backgroundColor: "#f5f5f5",
                  marginLeft: "90px",
                }}
              >
                {question.question.text}
              </p>
              <input
                style={{
                  border: "2px solid black",
                  borderRadius: "5px",
                  padding: "10px",
                  fontSize: "1rem",
                  boxSizing: "border-box",
                  margin: "20px 20px 20px 20px",
                  
                  marginLeft:"58%",
                }}
                type="text"
                value={answer}
                onChange={handleAnswerChange}
                placeholder="Type your answer here"
              />
              <button
                style={{
                  backgroundColor: "#52B700",
                  color: "#fff",
                  padding: "10px 10px",
                  fontSize: "1rem",
                  borderRadius: "5px",
                  border: "none",
                  cursor: "pointer",
                  margin: "20px 20px 20px 20px",
                  marginRight:"48%",
                }}
                onClick={handleSubmitAnswer}
                disabled={!isAnswerTyped || isSubmitting}

              >
                {isSubmitting ? "Submitting..." : "Submit Answer"}
              </button>
            </div>
          </div>
        </div>
        <div style={{ position: "static" , marginRight:"20px"}}>
          <ExamTimer QA={questionCount} />
        </div>
      </div>
      <Footer />
    </div>
  );
}