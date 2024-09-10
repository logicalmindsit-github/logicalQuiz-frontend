"use client";

import React from "react";
import Link from "next/link";

const topics = [
  {
    id: 1,
    headingtitle: "CLASS 1",
    subtopics: [{ id: "D.1", title: "Estimate to the nearest ten" }],
  },

  {
    id: 2,
    headingtitle: "CLASS 2",
    subtopics: [
      { id: "D.1", title: "Estimate to the nearest ten" },
      { id: "D.2", title: "Round to the nearest ten" },
      { id: "D.3", title: "Estimate sums" },
    ],
  },
  {
    id: 3,
    headingtitle: "CLASS 3",
    subtopics: [
      { id: "E.1", title: "Estimate sums" },
      { id: "E.2", title: "Estimate sums: word problems" },
      { id: "E.3", title: "Estimate differences" },
      { id: "E.4", title: "Estimate differences: word problems" },
      { id: "E.5", title: "Estimate products" },
      { id: "E.6", title: "Estimate products: word problems" },
      {
        id: "E.7",
        title: "Estimate sums, differences and products: word problems",
      },
      { id: "E.8", title: "Rounding " },
    ],
  },
  {
    id: 4,
    headingtitle: "CLASS 4",
    subtopics: [
      { id: "E.1", title: "Estimate sums" },
      { id: "E.2", title: "Estimate sums: word problems" },
      { id: "E.3", title: "Estimate differences " },
      { id: "E.4", title: "Estimate differences: word problems" },
      { id: "E.5", title: "Estimate products - multiply by 1-digit numbers" },
      { id: "E.6", title: "Estimate products - multiply by larger numbers" },
      { id: "E.7", title: "Estimate quotients: word problems" },
      { id: "E.8", title: "Rounding" },
    ],
  },
  {
    id: 5,
    headingtitle: "CLASS 5",
    subtopics: [
      { id: "G.1", title: "Rounding  " },
      { id: "G.2", title: "Estimate sums and differences of whole numbers" },
      { id: "G.3", title: "Estimate products" },
      { id: "G.4", title: "Estimate products: word problems" },
      { id: "G.5", title: "Estimate quotients: word problems" },
      { id: "G.6", title: "Round decimals" },
    ],
  },

  {
    id: 6,
    headingtitle: "CLASS 6",
    subtopics: [
      {
        id: "H.1",
        title: " Estimate products✅",
        linkTo: "/QuestionPlay/EstimationH1",
      },
      {
        id: "H.2",
        title: " Estimate quotients",
        linkTo: "",
      },
      {
        id: "H.3",
        title: " Round whole numbers and decimals: find the missing digit❎",
        linkTo: "/QuestionsPlay/EstimationH3",
      },
      {
        id: "H.4",
        title: "Estimate sums and differences of decimals✅",
        linkTo: "/QuestionPlay/EstimationH4",
      },
      {
        id: "H.5",
        title: " Estimate metric measurements",
        linkTo: "",
      },
    ],
  },
];

const TopicList = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Estimation Topics</h1>
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
