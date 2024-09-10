"use client";

import React from "react";
import Link from "next/link";

const topics = [
  {
    id: 1,
    headingtitle: "ADDITION",
    subtopics: [
      { id: "A.1", title: "Add one-digit and two-digit numbers" },
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
    id: 2,
    headingtitle: "COMPARING",
    subtopics: [
      { id: "B.1", title: "Comparing numbers up to 100" },
      { id: "B.2", title: "Put numbers up to 100 in order" },
      { id: "B.3", title: "Greatest and least - word problems - up to 100" },
    ],
  },
  {
    id: 3,
    headingtitle: "COUNTING",
    subtopics: [
      { id: "C.1", title: "Skip-counting" },
      { id: "C.2", title: "Skip-counting sequences" },
      { id: "C.3", title: "Counting patterns" },
      { id: "C.4", title: "Number lines - up to 100" },
      { id: "C.5", title: "Hundred chart" },
    ],
  },
  {
    id: 4,
    headingtitle: "ESTIMATION",
    subtopics: [
      { id: "D.1", title: "Estimate to the nearest ten" },
      { id: "D.2", title: "Round to the nearest ten" },
      { id: "D.3", title: "Estimate sums" },
    ],
  },
  {
    id: 5,
    headingtitle: "GEOMENTRY",
    subtopics: [
      {
        id: "E.1",
        title: "Name the two-dimensional shape and three-dimensional shape",
      },
      { id: "E.2", title: "Identify two and three-dimensional shapes" },
      { id: "E.3", title: "Count vertices, edges and faces" },
      { id: "E.4", title: "Count sides and vertices" },
      { id: "E.5", title: "Compare vertices, edges and faces" },
      { id: "E.6", title: "Compare sides and vertices" },
    ],
  },
  {
    id: 6,
    headingtitle: "MEASUREMENT",
    subtopics: [
      { id: "F.1", title: "Holds more or less" },
      { id: "F.2", title: "Compare size, weight and capacity" },
      { id: "F.3", title: "Choose the appropriate measuring tool" },
      { id: "F.4", title: "Measure using objects" },
    ],
  },
  {
    id: 7,
    headingtitle: "MIXED OPERATIONS",
    subtopics: [
      { id: "G.1", title: "Fact families" },
      { id: "G.2", title: "Addition and subtraction terms" },
      { id: "G.3", title: "Add and subtract numbers up to 20" },
      {
        id: "G.4",
        title: "Addition and subtraction - ways to make a number - up to 100",
      },
      { id: "G.5", title: "Write addition and subtraction sentences" },
    ],
  },
  {
    id: 8,
    headingtitle: "MONEY",
    subtopics: [
      { id: "H.1", title: "Coin values" },
      { id: "H.2", title: "Count money - up to 50 rupees" },
      { id: "H.3", title: "Equivalent amounts of money - up to 50 rupees" },
      {
        id: "H.4",
        title: "Add and subtract money - word problems - up to 10 rupees",
      },
    ],
  },
  {
    id: 9,
    headingtitle: "NUMBER THEORY",
    subtopics: [
      { id: "I.1", title: "Identify numbers as even or odd" },
      { id: "I.2", title: "Select even or odd numbers" },
      { id: "I.3", title: "Which even or odd number comes before or after?" },
      { id: "I.4", title: "Writing numbers in words" },
      { id: "I.5", title: "Ordinal numbers up to 100th" },
      { id: "I.6", title: "Differentiate ordinal and cardinal numbers" },
    ],
  },
  {
    id: 10,
    headingtitle: "PATTERNS",
    subtopics: [
      { id: "J.1", title: "Skip-counting sequences" },
      { id: "J.2", title: "Counting patterns - up to 100" },
      { id: "J.3", title: "Skip-counting puzzles" },
      { id: "J.4", title: "Repeating patterns" },
      { id: "J.5", title: "Make and complete a repeating pattern" },
      { id: "J.6", title: "Find the next shape in a pattern" },
    ],
  },
  {
    id: 11,
    headingtitle: "PLACE VALUES",
    subtopics: [
      { id: "K.1", title: "Place value models-tens and ones" },
      { id: "K.2", title: "Value of a digit - tens and ones" },
      { id: "K.3", title: "Regroup tens and ones" },
      { id: "K.4", title: "Convert between place values - tens and ones" },
    ],
  },
  {
    id: 12,
    headingtitle: "SUBTRACTION",
    subtopics: [
      { id: "L.1", title: "Review - subtract one-digit numbers - up to 10" },
      { id: "L.2", title: "Review - ways to subtract - up to 10" },
      { id: "L.3", title: "Review - writing subtraction sentences - up to 10" },
      { id: "L.4", title: "Subtract doubles" },
      {
        id: "L.5",
        title: "Subtract a one-digit number from a two-digit number up to 18",
      },
    ],
  },
  {
    id: 13,
    headingtitle: "TIME",
    subtopics: [
      { id: "M.1", title: "Find A.M. or P.M." },
      { id: "M.2", title: "Days of the week" },
      { id: "M.3", title: "Seasons" },
      { id: "M.4", title: "Read a calendar" },
      { id: "M.5", title: "Months of the year" },
      { id: "M.6", title: "Number of days in each month" },
      { id: "M.7", title: "Relate time units" },
    ],
  },
];

const TopicList = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Class 2 Maths Topics</h1>
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
