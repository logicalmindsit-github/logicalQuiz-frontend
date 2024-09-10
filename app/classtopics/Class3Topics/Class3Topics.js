"use client";

import React from "react";
import Link from "next/link";

const topics = [
  {
    id: 1,
    headingtitle: "ADDITION",
    subtopics: [
      { id: "A.1", title: "Add two numbers up to 3 digits" },
      {
        id: "A.2",
        title: "Add two numbers up to three digits - word problems",
      },
      { id: "A.3", title: "Complete the addition sentence" },
      { id: "A.4", title: "Balance addition equations - up to three digits" },
      { id: "A.5", title: "Add three or more numbers" },
      { id: "A.6", title: "Add three or more numbers - word problems" },
      { id: "A.7", title: "Addition: Fill in the missing digits" },
    ],
  },
  {
    id: 2,
    headingtitle: "COMPARING",
    subtopics: [
      { id: "B.1", title: "Comparing numbers" },
      { id: "B.2", title: "Which number is greatest/least?" },
      { id: "B.3", title: "Put numbers in order" },
    ],
  },
  {
    id: 3,
    headingtitle: "COUNTING",
    subtopics: [
      { id: "C.1", title: "Skip-counting puzzles" },
      { id: "C.2", title: "Ordinal numbers to 100th" },
      { id: "C.3", title: "Write numbers in words" },
    ],
  },
  {
    id: 4,
    headingtitle: "DIVISION",
    subtopics: [
      { id: "D.1", title: "Divide by counting equal groups" },
      { id: "D.2", title: "Division facts up to 10" },
      { id: "D.3", title: "Divisibility rules for 2, 5 and 10" },
      { id: "D.4", title: "Division facts up to 10: find the missing number" },
      { id: "D.5", title: "Division word problems" },
    ],
  },
  {
    id: 5,
    headingtitle: "ESTIMATION",
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
      { id: "E.8", title: "Rounding" },
    ],
  },
  {
    id: 6,
    headingtitle: "GEOMENTRY",
    subtopics: [
      { id: "F.1", title: "Identify two-dimensional shapes" },
      { id: "F.2", title: "Count and compare sides and vertices" },
      { id: "F.3", title: "Identify three-dimensional shapes" },
      { id: "F.4", title: "Count vertices, edges and faces" },
      { id: "F.5", title: "Is it a polygon?" },
    ],
  },
  {
    id: 7,
    headingtitle: "MEASUREMENT",
    subtopics: [
      { id: "G.1", title: "Which metric unit of length is appropriate?" },
      { id: "G.2", title: "Compare and convert metric units of length" },
      { id: "G.3", title: "Metric mixed units" },
      { id: "G.4", title: "Light and heavy" },
    ],
  },
  {
    id: 8,
    headingtitle: "MIXED OPERATIONS",
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
    id: 9,
    headingtitle: "MONEY",
    subtopics: [
      { id: "I.1", title: "Count coins and notes - up to 500-rupee note" },
      { id: "I.2", title: "Inequalities with money" },
      { id: "I.3", title: "Put money amounts in order" },
      { id: "I.4", title: "Add and subtract money amounts" },
      { id: "I.5", title: "Add money amounts - word problems" },
    ],
  },
  {
    id: 10,
    headingtitle: "MULTIPLICATION",
    subtopics: [
      {
        id: "J.1",
        title: "Identify multiplication expressions for equal groups",
      },
      { id: "J.2", title: "Identify multiplication expressions for arrays" },
      { id: "J.3", title: "Multiplication facts up to 10" },
      { id: "J.4", title: "Multiply numbers ending in zeros" },
      {
        id: "J.5",
        title:
          "Multiply one-digit numbers by two-digit and three-digit numbers",
      },
      { id: "J.6", title: "Multiplication word problems" },
    ],
  },
  {
    id: 11,
    headingtitle: "NUMBER THEORY",
    subtopics: [
      { id: "K.1", title: "Even or odd" },
      { id: "K.2", title: "Even or odd: arithmetic rules" },
    ],
  },
  {
    id: 12,
    headingtitle: "PATTERNS",
    subtopics: [
      { id: "L.1", title: "Skip-counting puzzles" },
      { id: "L.2", title: "Number sequences" },
      { id: "L.3", title: "Repeating patterns" },
      { id: "L.4", title: "Find next shape in a pattern" },
    ],
  },
  {
    id: 13,
    headingtitle: "PLACE VALUES",
    subtopics: [
      { id: "M.1", title: "Place value models up to hundreds" },
      { id: "M.2", title: "Place value names up to thousands" },
      { id: "M.3", title: "Value of a digit" },
      { id: "M.4", title: "Convert between place values" },
      { id: "M.5", title: "Convert from expanded form" },
      { id: "M.6", title: "Convert between standard and expanded form" },
      { id: "M.7", title: "Place value word problems" },
    ],
  },
  {
    id: 14,
    headingtitle: "SUBTRACTION",
    subtopics: [
      { id: "N.1", title: "Subtract numbers up to three digits" },
      {
        id: "N.2",
        title: "Subtract numbers up to three digits - word problems",
      },
      {
        id: "N.3",
        title: "Complete the subtraction sentence - up to three digits",
      },
      {
        id: "N.4",
        title: "Balance subtraction equations - up to three digits",
      },
      { id: "N.5", title: "Subtraction: fill in the missing digits" },
    ],
  },
  {
    id: 15,
    headingtitle: "TIME",
    subtopics: [
      { id: "O.1", title: "A.M. or P.M." },
      { id: "O.2", title: "Elapsed time" },
      { id: "O.3", title: "Elapsed time word problems" },
      { id: "O.4", title: "Time patterns" },
      { id: "O.5", title: "Read a calendar" },
      { id: "O.6", title: "Reading schedule" },
    ],
  },
];

const TopicList = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Class 3 Maths Topics</h1>
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
