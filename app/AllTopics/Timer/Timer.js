"use client";

import React from "react";
import Link from "next/link";

const topics = [
  {
    id: 1,
    headingtitle: "CLASS 1",
    subtopics: [
      { id: "M.1", title: "Find A.M. or P.M." },
      { id: "M.2", title: "Days of the week" },
      { id: "M.3", title: "Seasons of the year" },
      { id: "M.4", title: "Read a calendar" },
      { id: "M.5", title: "Months of the year" },
    ],
  },
  {
    id:2,
    headingtitle: "CLASS 2",
    subtopics: [
      { id: "M.1", title: "Find A.M. or P.M." },
      { id: "M.2", title: "Days of the week" },
      { id: "M.3", title: "Seasons" },
      { id: "M.4", title: "Read a calendar" },
      { id: "M.5", title: "Months of the year" },
      { id: "M.6", title: "Number of days in each month" },
      { id: "M.7", title: "Relate time units" },
    ],
  },
  {
    id: 3,
    headingtitle: "CLASS 3",
    subtopics: [
      { id: "O.1", title: "A.M. or P.M." },
      { id: "O.2", title: "Elapsed time" },
      { id: "O.3", title: "Elapsed time word problems" },
      { id: "O.4", title: "Time patterns" },
      { id: "O.5", title: "Read a calendar" },
      { id: "O.6", title: "Reading schedule" },
    ],
  },
  {
    id: 4,
    headingtitle: "CLASS 4",
    subtopics: [
      { id: "P.1", title: "Convert time units" },
      { id: "P.2", title: "Add and subtract mixed time units" },
      { id: "P.3", title: "A.M. or P.M." },
      { id: "P.4", title: "Elapsed time" },
      {
        id: "P.5",
        title: "Find start and end times: multi-step word problems",
      },
      { id: "P.6", title: "Convert between 12-hour and 24-hour time" },
    ],
  },

  {
    id: 5,
    headingtitle: "CLASS 5",
    subtopics: [
      { id: "R.1", title: "Convert time units" },
      { id: "R.2", title: "Add and subtract mixed time units" },
      { id: "R.3", title: "Elapsed time" },
      { id: "R.4", title: "Find start and end times: word problems" },
      { id: "R.5", title: "Convert between 12-hour and 24-hour time" },
    ],
  },

  {
    id: 6,
    headingtitle: "CLASS 6",
    subtopics: [
      {
        id: "S.1",
        title: " Elapsed time❎",
        linkTo: "/QuestionsPlay/TimeS1",
      },
      {
        id: "S.2",
        title: " Find Time units❎",
        linkTo: "/QuestionsPlay/TimeS2",
      },
      {
        id: "S.3",
        title: " Convert between 12-hour and 24-hour time✅",
        linkTo: "/QuestionPlay/TimeS3",
      },
      {
        id: "S.4",
        title: " To find stating and ending times❎",
        linkTo: "/QuestionsPlay/TimeS4",
      },
      {
        id: "S.5",
        title: "Transportation schedules❎",
        linkTo: "/QuestionsPlay/TimeS5",
      },
    ],
  },
];

const TopicList = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Timer Topics</h1>
      <div className="topic-list">
        {topics.map((topic) => (
          <div key={topic.id} className="topic-item">
            <h2 className="topic-heading">{topic.headingtitle}</h2>
            <ul className="subtopic-list">
              {topic.subtopics.map((subtopic) => (
                <li key={subtopic.id} className="subtopic-item">
                  {subtopic.linkTo ? (
                    <Link href={subtopic.linkTo}>
                      <span className="subtopic-link">
                        <span className="subtopic-id">{subtopic.id}</span> -{" "}
                        {subtopic.title}
                      </span>
                    </Link>
                  ) : (
                    <span>
                      <span className="subtopic-id">{subtopic.id}</span> -{" "}
                      {subtopic.title}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <style jsx>{`
        .page-container {
          padding: 50px;
        }
        .page-title {
          text-align: left;
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 20px;
          color: #008080;
        }
        .topic-list {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(7, auto);
          gap: 50px;
          font-size: 15px;
        }
        .topic-item {
          text-align: center;
        }
        .topic-heading {
          text-align: left;
          font-weight: bold;
          font-size: 20px;
          color: #008080;
        }
        .subtopic-list {
          margin-top: 20px;
          list-style: none;
          padding: 0;
          margin: 0;
          text-align: left;
        }
        .subtopic-item {
          margin: 5px 0;
        }
        .subtopic-link {
          text-decoration: none;
          color: #000;
        }
        .subtopic-id {
          font-weight: bold;
          color: #008080;
        }
        @media (max-width: 800px) {
          .topic-list {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 500px) {
          .topic-list {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default TopicList;
