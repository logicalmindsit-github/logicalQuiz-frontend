"use client";

import React from "react";
import Link from "next/link";

const topics = [
  {
    id: 1,
    headingtitle: "Addition",
    subtopics: [
      { id: "A.1", title: "Summate numbers up to five digits" },
      { id: "A.2", title: "Add numbers up to five digits: word problems" },
      { id: "A.3", title: "Addition: fill in the missing digits" },
      { id: "A.4", title: "Properties of addition" },
      { id: "A.5", title: "Add three or more numbers up to five digits each" },
    ],
  },
  {
    id: 2,
    headingtitle: "Comparing",
    subtopics: [
      { id: "B.1", title: "Inequalities with number lines" },
      { id: "B.2", title: "Compare numbers up to five digits" },
    ],
  },
  {
    id: 3,
    headingtitle: "Counting",
    subtopics: [
      { id: "C.1", title: "Word names for numbers" },
      { id: "C.2", title: "Ordinal numbers to 100th" },
      { id: "C.3", title: "Skip Counting" },
    ],
  },
  {
    id: 4,
    headingtitle: "Division",
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
    id: 5,
    headingtitle: "Estimation",
    subtopics: [
      { id: "E.1", title: "Estimate sums" },
      { id: "E.2", title: "Estimate sums: word problems" },
      { id: "E.3", title: "Estimate differences" },
      { id: "E.4", title: "Estimate differences: word problems" },
      { id: "E.5", title: "Estimate products - multiply by 1-digit numbers" },
      { id: "E.6", title: "Estimate products - multiply by larger numbers" },
      { id: "E.7", title: "Estimate quotients: word problems" },
      { id: "E.8", title: "Rounding" },
    ],
  },
  {
    id: 6,
    headingtitle: "Fractions",
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
    id: 7,
    headingtitle: "Geometry",
    subtopics: [
      { id: "G.1", title: "Which two-dimensional figure is being described?" },
      { id: "G.2", title: "Identify three-dimensional figures" },
      { id: "G.3", title: "Count vertices, edges and faces" },
      {
        id: "G.4",
        title: "Which three-dimensional figure is being described?",
      },
      { id: "G.5", title: "Rotational symmetry" },
    ],
  },
  {
    id: 8,
    headingtitle: "Money",
    subtopics: [
      { id: "H.1", title: "Compare money amounts" },
      { id: "H.2", title: "Round money amounts" },
      { id: "H.3", title: "Add and subtract money amounts" },
      { id: "H.4", title: "Add, subtract, multiply and divide money amounts" },
      { id: "H.5", title: "Making change" },
      { id: "H.6", title: "Price lists" },
      { id: "H.7", title: "Price lists with multiplication" },
    ],
  },
  {
    id: 9,
    headingtitle: "Measurement",
    subtopics: [
      { id: "I.1", title: "Choose the appropriate metric unit of measure" },
      { id: "I.2", title: "Compare and convert metric units of length" },
      { id: "I.3", title: "Compare and convert metric units of mass" },
      { id: "I.4", title: "Compare and convert metric units of volume" },
      { id: "I.5", title: "Metric mixed units" },
    ],
  },
  {
    id: 10,
    headingtitle: "Mixed operations",
    subtopics: [
      { id: "J.1", title: "Add, subtract, multiply and divide" },
      {
        id: "J.2",
        title:
          "Addition, subtraction, multiplication and division word problems",
      },
      { id: "J.3", title: "Solve word problems using guess-and-check" },
      { id: "J.4", title: "Multi-step word problems" },
    ],
  },
  {
    id: 11,
    headingtitle: "Multiplication",
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
    id: 12,
    headingtitle: "Number theory",
    subtopics: [{ id: "L.1", title: "Even or odd: arithmetic rules" }],
  },
  {
    id: 13,
    headingtitle: "Patterns",
    subtopics: [
      { id: "M.1", title: "Complete an increasing number pattern" },
      { id: "M.2", title: "Complete a geometric number pattern" },
      { id: "M.3", title: "Number patterns: word problems" },
      { id: "M.4", title: "Number patterns: mixed review" },
    ],
  },
  {
    id: 14,
    headingtitle: "Place values",
    subtopics: [
      { id: "N.1", title: "Place values" },
      { id: "N.2", title: "Convert between place values" },
    ],
  },
  {
    id: 15,
    headingtitle: "Subtraction",
    subtopics: [
      { id: "O.1", title: "Subtract numbers up to five digits" },
      {
        id: "O.2",
        title: "Subtract numbers up to five digits: word problems",
      },
      { id: "O.3", title: "Subtraction: fill in the missing digits" },
      { id: "O.4", title: "Choose numbers with a particular difference" },
    ],
  },
  {
    id: 16,
    headingtitle: "Time",
    subtopics: [
      { id: "P.1", title: "Convert time units" },
      { id: "P.2", title: "Add and subtract mixed time units" },
      { id: "P.3", title: "A.M. or P.M." },
      { id: "P.4", title: "Elapsed time" },
      {
        id: "P.5",
        title: "Find start and end times: multi-step word problems",
      },
      { id: "P.6", title: "Convert between 12-hour and 24-hour time" },
    ],
  },
];

const TopicList = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Class 4 Maths Topics</h1>
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
