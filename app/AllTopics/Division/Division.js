"use client";

import React from "react";
import Link from "next/link";

const topics = [
  {
    id: 1,
    headingtitle: "CLASS 3",
    subtopics: [
      { id: "D.1", title: "Divide by counting equal groups" },
      { id: "D.2", title: "Division facts up to 10" },
      { id: "D.3", title: "Divisibility rules for 2, 5 and 10" },
      { id: "D.4", title: "Division facts up to 10: find the missing number" },
      { id: "D.5", title: "Division word problems" },
    ],
  },
  {
    id: 2,
    headingtitle: "CLASS 4",
    subtopics: [
      { id: "D.1", title: "Division facts to 10" },
      { id: "D.2", title: "Division facts to 10: word problems" },
      { id: "D.3", title: "Divide larger numbers" },
      { id: "D.4", title: "Divide larger numbers: word problems" },
      { id: "D.5", title: "Properties of division" },
      { id: "D.6", title: "Divisibility rules" },
      { id: "D.7", title: "Divisibility rules: word problems" },
    ],
  },
  {
    id: 3,
    headingtitle: "CLASS 5",
    subtopics: [
      { id: "F.1", title: "Division facts to 12" },
      { id: "F.2", title: "Division facts to 12: word problems" },
      { id: "F.3", title: "Divisibility rules" },
      { id: "F.4", title: "Divisibility rules: word problems" },
      { id: "F.5", title: "Divide by one-digit numbers" },
      { id: "F.6", title: "Divide by two-digit numbers " },
    ],
  },

  {
    id: 4,
    headingtitle: "CLASS 6",
    subtopics: [
      {
        id: "F.1",
        title: " Rules of divisibility❎",
        linkTo: "/QuestionsPlay/DivisionF1",
      },
      {
        id: "F.2",
        title: "Division patterns with zeroes ✅",
        linkTo: "/QuestionPlay/DivisionF2",
      },
      {
        id: "F.3",
        title: " Divide numbers ending in zeroes: word problems✅",
        linkTo: "/QuestionPlay/DivisionF3",
      },
      {
        id: "F.4",
        title: " Divide whole numbers - two-digit divisors ✅",
        linkTo: "/QuestionPlay/DivisionF4",
      },
    ],
  },
];

const TopicList = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Division Topics</h1>
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
