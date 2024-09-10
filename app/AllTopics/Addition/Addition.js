"use client";

import React from "react";
import Link from "next/link";

const topics = [
  {
    id: 1,
    headingtitle: "UPPER KINDERGARTEN",
    subtopics: [
      { id: "A.1", title: "Picture Addition" },
      { id: "A.2", title: "Sum of two numbers up to 10" },
      { id: "A.3", title: "Addition word problems" },
      { id: "A.4", title: "Complete the addition sentence" },
      { id: "A.5", title: "Form a number using addition " },
    ],
  },
  {
    id: 2,
    headingtitle: "CLASS 1",
    subtopics: [
      { id: "A.1", title: "Basic Addition" },
      { id: "A.2", title: "Form a number using addition" },
      { id: "A.3", title: "Complete the addition sentence" },
      { id: "A.4", title: "Word Problems" },
      { id: "A.5", title: "Adding Zero" },
    ],
  },
  {
    headingtitle: "CLASS 2",
    subtopics: [
      { id: "A.1", title: "Add one- digit and two-digit numbers " },
      {
        id: "A.2",
        title: "Add a two-digit and a one-digit number - without regrouping",
      },
      {
        id: "A.3",
        title: "Add a two-digit and a one-digit number - with regrouping",
      },
      { id: "A.4", title: "Word Problems Involving Addition" },
      { id: "A.5", title: "Add three or more one-digit numbers" },
      { id: "A.6", title: "Missing Addend Problems" },
      { id: "A.7", title: "Addition input/output tables - up to two digits" },
    ],
  },
  {
    id: 3,
    headingtitle: "CLASS 3",
    subtopics: [
      { id: "A.1", title: "Add two numbers up to 3 digits" },
      {
        id: "A.2",
        title: "Add two numbers up to three digits - word problems",
      },
      { id: "A.3", title: "Complete the addition sentence" },
      { id: "A.4", title: "Balance addition equations - up to three digits" },
      { id: "A.5", title: "Add three or more numbers " },
      { id: "A.6", title: "Add three or more numbers  - word problems" },
      { id: "A.7", title: "Addition: Fill in the missing digits" },
    ],
  },

  {
    id: 4,
    headingtitle: "CLASS 4",
    subtopics: [
      { id: "A.1", title: "Summate numbers up to five digits" },
      { id: "A.2", title: "Add numbers up to five digits: word problems" },
      { id: "A.3", title: "Addition: fill in the missing digits" },
      { id: "A.4", title: "Properties of addition" },
      {
        id: "A.5",
        title: "Add three or more numbers up to five digits each",
      },
    ],
  },
  {
    id: 5,
    headingtitle: "CLASS 5",
    subtopics: [
      { id: "A.1", title: "Add  whole numbers" },
      { id: "A.2", title: "Add whole numbers: word problems" },
      { id: "A.3", title: "Complete addition  sentences" },
      { id: "A.4", title: "Fill in the missing digits" },
      { id: "A.5", title: "Properties of addition" },
    ],
  },
  {
    id: 6,
    headingtitle: "CLASS 6",
    subtopics: [
      { id: "A.1", title: " Add and subtract whole numbers", linkTo: "" },
      {
        id: "A.2",
        title: " Add and subtract whole numbers: word problems✅",
        linkTo: "/QuestionPlay/AddA2",
      },
      { id: "A.3", title: "Add and subtract decimal numbers", linkTo: "" },
      {
        id: "A.4",
        title: " Add and subtract decimals: word problems ✅",
        linkTo: "/QuestionPlay/AddA4",
      },
    ],
  },
];

const TopicList = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Addition Topics</h1>
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
