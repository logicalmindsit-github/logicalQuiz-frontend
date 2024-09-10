"use client";

import React from "react";
import Link from "next/link";

const topics = [
  {
    id: 1,
    headingtitle: "CLASS 3",
    subtopics: [
      {
        id: "J.1",
        title: "Identify multiplication expressions for equal groups",
      },
      { id: "J.2", title: "Identify multiplication expressions for arrays" },
      { id: "J.3", title: "Multiplication facts up to 10" },
      { id: "J.4", title: "Multiply numbers ending in zeroes" },

      {
        id: "J.5",
        title:
          "Multiply one-digit numbers by two-digit and three-digit numbers",
      },
      {
        id: "J.6",
        title: "Multiplication word problems",
      },
    ],
  },
  {
    id: 2,
    headingtitle: "CLASS 4",
    subtopics: [
      { id: "K.1", title: "Multiplication facts to 10" },
      {
        id: "K.2",
        title: "Multiplication facts up to 10: find the missing factor",
      },
      { id: "K.3", title: "Compare numbers using multiplication" },
      { id: "K.4", title: "Multiply 1-digit numbers by 2-digit numbers" },
      {
        id: "K.5",
        title: "Multiply 1-digit numbers by 3-digit or 4-digit numbers",
      },
      { id: "K.6", title: "Properties of multiplication" },
    ],
  },
  {
    id: 3,
    headingtitle: "CLASS 5",
    subtopics: [
      { id: "M.1", title: "Multiply by one-digit numbers" },
      { id: "M.2", title: "Multiply by one-digit numbers: word problems" },
      { id: "M.3", title: "Multiply numbers ending in zeroes" },
      { id: "M.4", title: "Multiply numbers ending in zeroes: word problems" },
      { id: "M.5", title: "Multiply 2-digit numbers by 3-digit numbers" },
      { id: "M.6", title: "Multiply three or four numbers" },
      { id: "M.7", title: "Properties of multiplication" },
    ],
  },
  {
    id: 4,
    headingtitle: "CLASS 6",
    subtopics: [
      {
        id: "N.1",
        title: " Multiply whole numbers ✅",
        linkTo: "/QuestionPlay/MultiplyN1",
      },
      {
        id: "N.2",
        title: " Multiply whole numbers: word problems ✅",
        linkTo: "/QuestionPlay/MultiplyN2",
      },
      {
        id: "N.3",
        title: " Multiply numbers ending in zeroes ✅",
        linkTo: "/QuestionPlay/MultiplyN3",
      },
      {
        id: "N.4",
        title: " Multiply numbers ending in zeroes: word problems ✅",
        linkTo: "/QuestionPlay/MultiplyN4",
      },
      {
        id: "N.5",
        title: "Multiply three or more numbers ✅",
        linkTo: "/QuestionPlay/MultiplyN5",
      },
      {
        id: "N.6",
        title: " Properties of multiplication❎",
        linkTo: "/QuestionsPlay/MultiplyN6",
      },
    ],
  },
];

const TopicList = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Multiplication Topics</h1>
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
