"use client";

import { useState, useEffect } from "react";

const Timer = ({ QA }) => {
  const [mouseMoving, setMouseMoving] = useState(true);

  // Timer Section
  let [hrs, sethrs] = useState(0);
  let [min, setmin] = useState(0);
  let [sec, setsec] = useState(0);

  useEffect(() => {
    let interval;
    if (mouseMoving === true) {
      interval = setInterval(() => {
        let resetsec = 0;

        setsec(sec === 60 ? resetsec + 1 : sec + 1);

        setmin(sec === 60 ? min + 1 : min);

        if (sec === 60 && min >= 59) {
          sethrs(hrs + 1);
          setmin(0);
        }
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [mouseMoving, hrs, min, sec]);

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
    <section style={styles.timer}>
      <div style={styles.questionAnswered}>
        <h2 style={styles.title1}>Questions Answered</h2>
        <p style={styles.title1Count}>{QA}</p>
      </div>

      <br/>
      <div style={mouseMoving ? styles.TimeElapsed : styles.TimeElapsedError}>
        <h2 style={styles.title2}>Time Elapsed</h2>
        {mouseMoving === false && <p style={styles.paused}>Paused</p>}
        {mouseMoving === true && (
          <div style={styles.time}>
            <div style={styles.hours}>
              <p style={styles.hoursTime}>
                {hrs >= 0 && hrs < 10 ? ` 0${hrs}` : hrs}
              </p>
              <span style={styles.hoursText}>Hours</span>
            </div>

            <div style={styles.minutes}>
              <p style={styles.minutesTime}>
                {min > 59 ? `0${0}` : min >= 0 && min < 10 ? `0${min}` : min}
              </p>
              <span style={styles.minutesText}>Minutes</span>
            </div>

            <div style={styles.seconds}>
              <p style={styles.secondsTime}>
                {sec > 59 ? `0${0}` : sec >= 0 && sec < 10 ? `0${sec} ` : sec}
              </p>
              <span style={styles.secondsText}>Seconds</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Timer;
const styles = {
  timer: {
    marginTop:"-30px",
    width: "300px",
    height: "70%",
    margin: "20px auto",
    padding: "20px",
    border: "2px solid #ccc",
    borderRadius: "8px",
    backgroundColor:"#e6fff9",
  },
  questionAnswered: {
    marginBottom: "20px",
    textAlign: "center",
  },
  title1: {
    fontSize: "18px",
    marginBottom: "5px",
  },
  title1Count: {
    fontSize: "24px",
    fontWeight: "bold",
    textAlign: "center",
  },
  TimeElapsed: {
    backgroundColor: "#e8f7ff",
    padding: "15px",
    borderRadius: "8px",
  },
  TimeElapsedError: {
    backgroundColor: "#ffeded",
    padding: "15px",
    borderRadius: "8px",
  },
  title2: {
    fontSize: "18px",
    marginBottom: "5px",
    textAlign: "center",
  },
  paused: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#f00",
    textAlign: "center",
  },
  time: {
    display: "flex",
    justifyContent: "space-between",
  },
  hours: {
    textAlign: "center",
  },
  minutes: {
    textAlign: "center",
  },
  seconds: {
    textAlign: "center",
  },
  hoursTime: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "5px",
  },
  minutesTime: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "5px",
  },
  secondsTime: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "5px",
  },
  hoursText: {
    fontSize: "14px",
    color: "#888",
  },
  minutesText: {
    fontSize: "14px",
    color: "#888",
  },
  secondsText: {
    fontSize: "14px",
    color: "#888",
  },
};
