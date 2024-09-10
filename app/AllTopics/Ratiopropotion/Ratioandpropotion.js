"use client";

import React from "react";
import Link from "next/link";

const topics = [
  {
    id: 1,
    headingtitle: "CLASS 6",
    subtopics: [
      {
        id: "R.1",
        title: " Write a ratio❎",
        linkTo: "/QuestionsPlay/RatioR1",
      },
      {
        id: "R.2",
        title: " Write a ratio: word problems❎",
        linkTo: "/QuestionsPlay/RatioR2",
      },
      {
        id: "R.3",
        title: " Identify equivalent ratios❎",
        linkTo: "/QuestionsPlay/RatioR3",
      },
      {
        id: "R.4",
        title: " Compare ratios: word problems❎",
        linkTo: "/QuestionsPlay/RatioR4",
      },
      {
        id: "R.5",
        title: " Find the ratios form a proportion❎",
        linkTo: "/QuestionsPlay/RatioR5",
      },
      {
        id: "R.6",
        title: " Solve proportion✅",
        linkTo: "/QuestionPlay/RatioR6",
      },
      {
        id: "R.7",
        title: " Scale drawings: word problems✅",
        linkTo: "/QuestionPlay/RatioR7",
      },
    ],
  },
];

const TopicList = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Ratio & Propotion Topics</h1>
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
