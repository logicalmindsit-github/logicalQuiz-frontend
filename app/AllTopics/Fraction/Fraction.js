"use client";

import React from "react";
import Link from "next/link";

const topics = [
  {
    id: 1,
    headingtitle: "CLASS 4",
    subtopics: [
      { id: "F.1", title: "Halves and quarters" },
      { id: "F.2", title: "Equal parts" },
      {
        id: "F.3",
        title: "Simple fractions: what fraction does the shape show?",
      },
      {
        id: "F.4",
        title: "Simple fractions: which shape matches the fraction?",
      },
      { id: "F.5", title: "Simple fractions: parts of a group" },
    ],
  },
  {
    id: 2,
    headingtitle: "CLASS 5",
    subtopics: [
      { id: "H.1", title: "Examine fractions" },
      { id: "H.2", title: "unit fractions: word problems" },
      { id: "H.3", title: "Write fractions in lowest terms" },
      { id: "H.4", title: "Fractions of a group: word problems" },
      { id: "H.5", title: "Equivalent fractions" },
      { id: "H.6", title: "Put fractions in order" },
      { id: "H.7", title: "Fractions of a number" },
      { id: "H.8", title: "Mixed numbers" },
    ],
  },
  {
    id: 3,
    headingtitle: "CLASS 6",
    subtopics: [
      {
        id: "I.1",
        title: " Convert decimals to mixed numbers❎",
        linkTo: "/QuestionsPlay/FractionI1",
      },
      {
        id: "I.2",
        title: "Understanding fractions: word problems✅",
        linkTo: "/QuestionPlay/FractionI2",
      },
      {
        id: "I.3",
        title: " Equivalent fractions ❎",
        linkTo: "/QuestionsPlay/FractionI3",
      },
      {
        id: "I.4",
        title: "Write fractions in lowest terms✅",
        linkTo: "/QuestionPlay/FractionI4",
      },
      {
        id: "I.5",
        title: "Fractions: word problems✅",
        linkTo: "/QuestionPlay/FractionI5",
      },
    ],
  },
];

const TopicList = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Fraction Topics</h1>
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
