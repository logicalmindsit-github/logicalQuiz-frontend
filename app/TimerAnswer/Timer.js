"use client";

import { useState, useEffect } from "react";
import { AiFillQuestionCircle } from "react-icons/ai";
import styled from "styled-components";

const Timer = ({ QA, smartScore, setTimeTaken, finishClicked }) => {
  const [mouseMoving, setMouseMoving] = useState(true);

  // Timer Section
  let [hrs, sethrs] = useState(0);
  let [min, setmin] = useState(0);
  let [sec, setsec] = useState(0);

  useEffect(() => {
    let interval;
    if (mouseMoving && !finishClicked) {
      interval = setInterval(() => {
        let resetsec = 0;

        setsec((prevSec) => (prevSec === 59 ? resetsec : prevSec + 1));

        if (sec === 59) {
          setmin((prevMin) => (prevMin === 59 ? 0 : prevMin + 1));
          if (min === 59) {
            sethrs((prevHrs) => prevHrs + 1);
          }
        }
      }, 1000);
    } else if (finishClicked) {
      const totalSeconds = hrs * 3600 + min * 60 + sec;
      setTimeTaken(totalSeconds);
    }
    return () => {
      clearInterval(interval);
    };
  }, [mouseMoving, finishClicked, hrs, min, sec, setTimeTaken]);

  // Mouse Moving Events
  useEffect(() => {
    let timeout;

    const handleMouseMove = () => {
      setMouseMoving(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setMouseMoving(false);
      }, 30000);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <TimerSection>
      <QuestionAnswered>
        <Title>Questions Answered</Title>
        <Count>{QA}</Count>
      </QuestionAnswered>

      <TimeElapsed mouseMoving={mouseMoving}>
        <Title>Time Elapsed</Title>
        {!mouseMoving && <Paused>Paused</Paused>}
        {mouseMoving && (
          <Time>
            <TimeUnit>
              <TimeValue>{hrs >= 0 && hrs < 10 ? `0${hrs}` : hrs}</TimeValue>
              <TimeText>Hours</TimeText>
            </TimeUnit>
            <TimeUnit>
              <TimeValue>
                {min > 59 ? `0${0}` : min >= 0 && min < 10 ? `0${min}` : min}
              </TimeValue>
              <TimeText>Minutes</TimeText>
            </TimeUnit>
            <TimeUnit>
              <TimeValue>
                {sec > 59 ? `0${0}` : sec >= 0 && sec < 10 ? `0${sec}` : sec}
              </TimeValue>
              <TimeText>Seconds</TimeText>
            </TimeUnit>
          </Time>
        )}
      </TimeElapsed>
      <SmartScore>
        <Title>
          Smart Score <AiFillQuestionCircle style={{ fontSize: "16px" }} />
        </Title>
        <CircularProgress>
          <Count>{`${smartScore}%`}</Count>
        </CircularProgress>
      </SmartScore>
    </TimerSection>
  );
};

export default Timer;

const TimerSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px;
  position: relative;

  @media (min-width: 768px) {
    gap: 20px;
  }

  @media (max-width: 768px) {
   flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    padding: 10px;
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: white;
    border-top: 1px solid #ddd; 
  }
`;

const Card = styled.div`
  text-align: center;
  padding: 10px;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 300px;

  @media (min-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 10px;
  }
`;

const QuestionAnswered = styled(Card)`
  background-color: #fffae6;
`;

const TimeElapsed = styled(Card)`
  background-color: ${(props) => (props.mouseMoving ? "#e6fff9" : "#ffe6e6")};

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SmartScore = styled(Card)`
  background-color: #e6e6ff;
`;

const Title = styled.h2`
  margin-bottom: 10px;
  font-size: 1.2em;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1em;
    margin-bottom: 5px;
  }
`;

const Count = styled.p`
  font-size: 2em;
  font-weight: bold;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

const Time = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 10px;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
  }
`;

const TimeUnit = styled.div`
  text-align: center;

  @media (max-width: 768px) {
    margin-bottom: 0;
    font-size: 0.5em;
  }
`;

const TimeValue = styled.p`
  font-size: 2.5em;
  font-weight: bold;
  color: #333;

  @media (max-width: 768px) {
    font-size: 2em;
  }
`;

const TimeText = styled.span`
  display: block;
  font-size: 0.8em;
  color: #666;

  @media (max-width: 768px) {
    font-size: 0.7em;
  }
`;

const Paused = styled.p`
  color: red;
  font-weight: bold;
  font-size: 1.2em;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

const CircularProgress = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 5px solid #007bff;
  background-color: #e6f0ff;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

const TimerSectionRow = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
  }
`;

const TimerSectionColumn = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    position: absolute;
    bottom: 0;
  }
`;