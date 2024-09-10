"use client";

import React, { useState } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Report from "../LandingPage/Report";

const ProgressContent = () => {
  // Sample data containing skill name, time spent, questions, and score improvement
  const skills = [
    {
      class: "LOWER KINDERGARTEN",
      topics: [
        {
          name: "Shapes",
          subtopics: [
            {
              name: "L-A.1 Name the shape",
              timeSpent: "8 min",
              questions: 23,
              improvement: 50,
            },
            {
              name: "L-A.2 Name the shape",
              timeSpent: "25 min",
              questions: 24,
              improvement: 40,
            },
            {
              name: "L-A.3 Name the shape",
              timeSpent: "45 min",
              questions: 94,
              improvement: 10,
            },
          ],
        },
        {
          name: "counting",
          subtopics: [
            {
              name: "L-A.1  counting 0 to 10 ",
              timeSpent: "8 min",
              questions: 23,
              improvement: 50,
            },
            {
              name: "L-A.2  counting 0 to 20 ",
              timeSpent: "25 min",
              questions: 24,
              improvement: 40,
            },
            {
              name: "L-A.3  counting 0 to 100 ",
              timeSpent: "45 min",
              questions: 94,
              improvement: 10,
            },
          ],
        },
      ],
    },
    // Add more classes with topics and subtopics as needed
  ];

  const [expandedClasses, setExpandedClasses] = useState({});
  const [expandedTopics, setExpandedTopics] = useState({});

  const toggleClass = (classIndex) => {
    setExpandedClasses((prevState) => ({
      ...prevState,
      [classIndex]: !prevState[classIndex],
    }));
  };

  const toggleTopic = (classIndex, topicIndex) => {
    setExpandedTopics((prevState) => ({
      ...prevState,
      [`${classIndex}-${topicIndex}`]:
        !prevState[`${classIndex}-${topicIndex}`],
    }));
  };

  return (
    <div>
      <Report />
      <Table
        style={{
          marginLeft: "10px",
          marginRight: "10%",
          marginTop: "20px",
          marginBottom: "20px",
          width: "98%",
        }}
      >
        <TableHead>
          <TableRow style={{ background: "#A9A9A9" }}>
            <TableCell>Skill</TableCell>
            <TableCell>Time Spent</TableCell>
            <TableCell>Question</TableCell>
            <TableCell>Score Improvement</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {skills.map((classItem, classIndex) => (
            <React.Fragment key={classIndex}>
              <TableRow
                style={{ background: "#F0FFF0" }}
                onClick={() => toggleClass(classIndex)}
              >
                <TableCell colSpan={4}>
                  <span>{classItem.class}</span>
                  <ArrowDropDownIcon
                    style={{
                      float: "right",
                      transform: expandedClasses[classIndex]
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                    }}
                  />
                </TableCell>
              </TableRow>
              {expandedClasses[classIndex] &&
                classItem.topics.map((topic, topicIndex) => (
                  <React.Fragment key={`${classIndex}-${topicIndex}`}>
                    <TableRow
                      style={{ background: "#F0E68C" }}
                      onClick={() => toggleTopic(classIndex, topicIndex)}
                    >
                      <TableCell colSpan={4}>
                        <span>{topic.name}</span>
                        <ArrowDropDownIcon
                          style={{
                            float: "right",
                            transform: expandedTopics[
                              `${classIndex}-${topicIndex}`
                            ]
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                          }}
                        />
                      </TableCell>
                    </TableRow>
                    {expandedTopics[`${classIndex}-${topicIndex}`] &&
                      topic.subtopics.map((subtopic, subtopicIndex) => (
                        <TableRow key={subtopicIndex}>
                          <TableCell>{subtopic.name}</TableCell>
                          <TableCell>{subtopic.timeSpent}</TableCell>
                          <TableCell>{subtopic.questions}</TableCell>
                          <TableCell>
                            <div
                              style={{
                                position: "relative",
                                height: "20px",
                                width: "100%",
                              }}
                            >
                              <div
                                style={{
                                  position: "absolute",
                                  top: "2px",
                                  left: "2px",
                                  fontSize: "12px",
                                  color: "white",
                                }}
                              >
                                0
                              </div>
                              <div
                                style={{
                                  position: "absolute",
                                  top: "2px",
                                  right: "2%",
                                  fontSize: "12px",
                                  color: "white",
                                }}
                              >
                                100
                              </div>
                              <div
                                style={{
                                  position: "absolute",
                                  top: "2px",
                                  right: "calc(4% + 6px)",
                                  fontSize: "12px",
                                  color: "black",
                                }}
                              >
                                {subtopic.improvement}
                              </div>
                              <div
                                style={{
                                  position: "absolute",
                                  top: "4px",
                                  left: "4%",
                                  height: "50%",
                                  width: `${Math.min(
                                    subtopic.improvement,
                                    10
                                  )}%`,
                                  backgroundColor: "white",
                                }}
                              ></div>
                              <div
                                style={{
                                  position: "absolute",
                                  top: "4px",
                                  left: "4%",
                                  height: "50%",
                                  width: `${Math.min(
                                    subtopic.improvement,
                                    100
                                  )}%`,
                                  backgroundColor: "green",
                                }}
                              ></div>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                  </React.Fragment>
                ))}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProgressContent;
