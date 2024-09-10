"use client";

import React from "react";
import Link from "next/link";

const topics = [
  {
    id: 1,
    headingtitle: "CLASS 1",
    subtopics: [
      { id: "I.1", title: "Identify numbers as even or odd" },
      { id: "I.2", title: "Which even or odd number comes before or after?" },
      { id: "I.3", title: "Number Bonds" },
      { id: "I.4", title: "Identifying and Writing Numbers" },
    ],
  },
  {
    id: 2,
    headingtitle: "CLASS 2",
    subtopics: [
      { id: "I.1", title: "	Identify numbers as even or odd" },
      { id: "I.2", title: "Select even or odd numbers" },
      { id: "I.3", title: "Which even or odd number comes before or after?" },
      { id: "I.4", title: "	Writing numbers in words" },
      { id: "I.5", title: "Ordinal numbers up to 100th" },
      { id: "I.6", title: "Differentiate ordinal and cardinal numbers" },
    ],
  },
  {
    id: 3,
    headingtitle: "CLASS 3",
    subtopics: [
      { id: "K.1", title: "Even or odd" },
      { id: "K.2", title: "Even or odd: arithmetic rules" },
    ],
  },
  {
    id: 4,
    headingtitle: "CLASS 4",
    subtopics: [{ id: "L.1", title: "Even or odd: arithmetic rules" }],
  },
  {
    id: 5,
    headingtitle: "CLASS 5",
    subtopics: [{ id: "N.1", title: "Even or odd: arithmetic rules" }],
  },

  {
    id: 6,
    headingtitle: "CLASS 4",
    subtopics: [
      {
        id: "P.1",
        title: " Prime or composite❎",
        linkTo: "/QuestionsPlay/NumTheoryP1",
      },
      {
        id: "P.2",
        title: " Identify factors❎",
        linkTo: "/QuestionsPlay/NumTheoryP2",
      },
      {
        id: "P.3",
        title: " Prime factorisation❎",
        linkTo: "/QuestionsPlay/NumTheoryP1",
      },
      {
        id: "P.4",
        title: " Highest common factor✅",
        linkTo: "/QuestionPlay/NumTheoryP4",
      },
      {
        id: "P.5",
        title: " Lowest common multiple✅",
        linkTo: "/QuestionPlay/NumTheoryP5",
      },
      {
        id: "P.6",
        title: " HCF and LCM: word problems✅",
        linkTo: "/QuestionPlay/NumTheoryP6",
      },
    ],
  },
];

const TopicList = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Numbertheory Topics</h1>
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
