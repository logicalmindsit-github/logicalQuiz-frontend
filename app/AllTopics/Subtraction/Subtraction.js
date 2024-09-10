"use client";

import React from "react";
import Link from "next/link";

const topics = [
  {
    id: 1,
    headingtitle: "UPPER KINDERGARTEN",
    subtopics: [
      { id: "G.1", title: "Subtract with pictures - numbers up to 10" },
      { id: "G.2", title: "Subtraction sentences - numbers up to 10" },
      {
        id: "G.3",
        title: "Form a number using subtraction - numbers up to 10",
      },
      { id: "G.4", title: "	Subtract - numbers up to 10" },
      {
        id: "G.5",
        title: "Complete the subtraction sentence - numbers up to 10",
      },
      { id: "G.6", title: "Subtraction word problems - numbers up to 10" },
    ],
  },
  {
    id: 2,
    headingtitle: "CLASS 1",
    subtopics: [
      { id: "L.1", title: "Subtraction facts - numbers up to 18" },
      { id: "L.2", title: "Subtraction sentences - numbers up to 10" },
      {
        id: "L.3",
        title: "Subtraction sentences using number lines - numbers up to 18",
      },
      { id: "L.4", title: "Subtract zero and all" },
      {
        id: "L.5",
        title: "Ways to subtract from a number - subtraction sentences",
      },
      {
        id: "L.6",
        title:
          "Subtract a one-digit number from a two-digit number - with and without regrouping",
      },
    ],
  },
  {
    id: 3,
    headingtitle: "CLASS 2",
    subtopics: [
      { id: "L.1", title: "Review - subtract one-digit numbers - up to 10" },
      { id: "L.2", title: "Review - ways to subtract - up to 10" },
      {
        id: "L.3",
        title: "Review - writing subtraction sentences - up to 10",
      },
      { id: "L.4", title: "Subtract doubles" },
      {
        id: "L.5",
        title: "Subtract a one-digit number from a two-digit number up to 18",
      },
    ],
  },

  {
    id: 4,
    headingtitle: "CLASS 3",
    subtopics: [
      { id: "N.1", title: "Subtract numbers up to three digits" },
      {
        id: "N.2",
        title: "Subtract numbers up to three digits: word problems",
      },
      {
        id: "N.3",
        title: "Complete the subtraction sentence - up to three digits",
      },
      {
        id: "N.4",
        title: "Balance subtraction equations - up to three digits",
      },
      { id: "N.5", title: "Sbtraction: fill in the missing digits" },
    ],
  },

  {
    id: 5,
    headingtitle: "CLASS 4",
    subtopics: [
      { id: "O.1", title: "Subtract numbers up to five digits" },
      {
        id: "O.2",
        title: "Subtract numbers up to five digits: word problems",
      },
      {
        id: "O.3",
        title: "Subtraction: fill in the missing digits",
      },
      {
        id: "O.4",
        title: "Choose numbers with a particular difference",
      },
    ],
  },

  {
    id: 6,
    headingtitle: "CLASS 5",
    subtopics: [
      { id: "Q.1", title: "Subtract whole numbers" },
      {
        id: "Q.2",
        title: "Subtract whole numbers: word problems",
      },
      { id: "Q.3", title: "Complete subtraction sentences" },

      { id: "Q.4", title: "Fill in the missing digits" },
    ],
  },
];

const TopicList = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Subraction Topics</h1>
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
