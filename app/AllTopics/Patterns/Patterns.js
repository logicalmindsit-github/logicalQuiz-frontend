"use client";

import React from "react";
import Link from "next/link";

const topics = [
  {
    id: 1,
    headingtitle: "LOWER KINDERGARTEN",
    subtopics: [
      { id: "C.1", title: " Colour patterns" },
      { id: "C.2", title: "Size patterns" },
      { id: "C.3", title: "Shape patterns" },
      { id: "C.4", title: " What comes next?" },
    ],
  },
  {
    id: 2,
    headingtitle: "UPPER KINDERGARTEN",
    subtopics: [
      { id: "F.1", title: "Complete a sequence - up to 10" },
      { id: "F.2", title: "Complete a sequence - up to 20" },
      { id: "F.3", title: "Colour patterns" },
      { id: "F.4", title: "Size patterns" },
      { id: "F.5", title: "Shape patterns" },
      { id: "F.6", title: "Find the next shape in a pattern" },
    ],
  },
  {
    id: 3,
    headingtitle: "CLASS 1",
    subtopics: [
      { id: "J.1", title: "Introduction to patterns" },
      { id: "J.2", title: "Skip-counting patterns - with tables" },
      {
        id: "J.3",
        title: "Sequences - count up and down by 1, 2, 3, 5 and 10",
      },
      { id: "J.4", title: "Find the next shape in a pattern" },
      { id: "J.5", title: "Make and complete a pattern    " },
    ],
  },
  {
    id: 4,
    headingtitle: "CLASS 2",
    subtopics: [
      { id: "J.1", title: "Skip-counting sequences" },
      { id: "J.2", title: "Counting patterns - up to 100" },
      { id: "J.3", title: "Skip-counting puzzles" },
      { id: "J.4", title: "Repeating patterns" },
      { id: "J.5", title: "Make and complete a repeating patterns" },
      { id: "J.6", title: "Find the next shape in a pattern" },
    ],
  },
  {
    id: 5,
    headingtitle: "CLASS 3",
    subtopics: [
      { id: "L.1", title: "Skip-counting puzzles" },
      { id: "L.2", title: "Number sequences" },
      { id: "L.3", title: "Repeating patterns" },
      { id: "L.4", title: "Find next shape in a pattern" },
    ],
  },
  {
    id: 6,
    headingtitle: "CLASS 4",
    subtopics: [
      { id: "M.1", title: "Complete an increasing number pattern" },
      { id: "M.2", title: "Complete a geometric number pattern" },
      { id: "M.3", title: "Number patterns: word problems" },
      { id: "M.4", title: "Number patterns: mixed review" },
    ],
  },
  {
    id: 7,
    headingtitle: "CLASS 5",
    subtopics: [
      {
        id: "O.1",
        title: "Patterns of equivalent fractions",
      },
      { id: "O.2", title: "Complete an increasing numbers sequence" },
      { id: "O.3", title: "Complete a geomentric number sequence" },
      { id: "O.4", title: "Number sequences: mixed review" },
      { id: "O.5", title: "Time paterns" },
    ],
  },
];

const TopicList = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Patterns Topics</h1>
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
