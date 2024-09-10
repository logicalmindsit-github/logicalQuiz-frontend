"use client";

import React from "react";
import Link from "next/link";

const topics = [
  {
    id: 1,
    headingtitle: "UPPER KINDERGARTEN",
    subtopics: [{ id: "E.1", title: "Sum and difference" }],
  },
  {
    id: 2,
    headingtitle: "CLASS 1",
    subtopics: [
      { id: "G.1", title: "Make a number with addition and subtraction" },
      { id: "G.2", title: "Addition and Subtraction facts " },
      { id: "G.3", title: "Addition and subtraction word problem" },
    ],
  },
  {
    id: 3,
    headingtitle: "CLASS 2",
    subtopics: [
      { id: "G.1", title: "Fact families" },
      { id: "G.2", title: "Addition and subtraction terms" },
      { id: "G.3", title: "Add and subtract numbers up to 20" },
      {
        id: "G.4",
        title: "Addition and subtraction - ways to make a number - up to 100",
      },
      { id: "G.5", title: "Write addition and subtraction sentences " },
    ],
  },
  {
    id: 4,
    headingtitle: "CLASS 3",
    subtopics: [
      {
        id: "H.1",
        title: "Addition, subtraction, multiplication and division terms",
      },
      {
        id: "H.2",
        title:
          "Complete the addition, subtraction, multiplication or division sentence",
      },
      {
        id: "H.3",
        title: "Multiplication and division facts up to 12: true or false?",
      },
      { id: "H.4", title: "Add, subtract, multiply and divide" },
      {
        id: "H.5",
        title:
          "Addition, subtraction, multiplication and division word problems",
      },
      { id: "H.6", title: "Add and subtract data from tables" },
    ],
  },
  {
    id: 5,
    headingtitle: "CLASS 4",
    subtopics: [
      { id: "J.1", title: "Add, subtract, multiply and divide" },
      {
        id: "J.2",
        title:
          "Addition, subtraction, multiplication and division word problems",
      },
      {
        id: "J.3",
        title: "solve word problem using guess-and-check",
      },
      { id: "J.4", title: "Multi-step word problems" },
    ],
  },
  {
    id: 6,
    headingtitle: "CLASS 5",
    subtopics: [
      { id: "K.1", title: "Add, subtract, multiply and divide whole numbers" },
      {
        id: "K.2",
        title:
          "Add, subtract, multiply and divide whole numbers: word problems",
      },
      { id: "K.3", title: "Complete addition and subtraction sentences" },
    ],
  },
  {
    id: 7,
    headingtitle: "CLASS 6",
    subtopics: [
      {
        id: "M.1",
        title: " Add and subtract fractions with like denominators✅",
        linkTo: "/QuestionPlay/MixedM1",
      },
      {
        id: "M.2",
        title:
          " Add and subtract fractions with like denominators: word problems",
        linkTo: "",
      },
      {
        id: "M.3",
        title:
          " Add and subtract fractions with unlike denominators: word problems✅",
        linkTo: "/QuestionPlay/MixedM3",
      },
      {
        id: "M.4",
        title: " Add and subtract mixed numbers✅",
        linkTo: "/QuestionPlay/MixedM4",
      },
      {
        id: "M.5",
        title: ". Add and subtract mixed numbers: word problems✅",
        linkTo: "/QuestionPlay/MixedM5",
      },
    ],
  },
];

const TopicList = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">MixedOperation Topics</h1>
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
