"use client";

import React from "react";
import Link from "next/link";

const topics = [
  {
    id: 1,
    headingtitle: "CLASS 5",
    subtopics: [
      { id: "E.1", title: "What decimal number is illustrated?" },
      { id: "E.2", title: "Model decimals and fractions" },
      { id: "E.3", title: "Understanding decimals expressed in words" },
      { id: "E.4", title: "Equivalent decimals" },
      { id: "E.5", title: "Put decimal numbers in order" },
      { id: "E.6", title: "Convert fractions to decimals" },
      { id: "E.7", title: "Convert decimals to fractions" },
    ],
  },
  {
    id: 2,
    headingtitle: "CLASS 6",
    subtopics: [
      {
        id: "E.1",
        title: "What decimal number is illustrated?",
        linkTo: "",
      },
      {
        id: "E.2",
        title: " Decimal number lines",
        linkTo: "",
      },
      {
        id: "E.3",
        title: "Word names for decimal numbers ✅",
        linkTo: "/QuestionPlay/DecimalE3",
      },
      {
        id: "E.4",
        title: "Convert decimals to mixed numbers❎",
        linkTo: "/QuestionsPlay/DecimalE4",
      },
      {
        id: "E.5",
        title: "Put decimal numbers in order",
        linkTo: "",
      },
    ],
  },
];

const TopicList = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Decimal Topics</h1>
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
