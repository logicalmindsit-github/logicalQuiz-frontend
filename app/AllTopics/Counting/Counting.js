"use client";

import React from "react";
import Link from "next/link";

const topics = [
  {
    id: 1,
    headingtitle: "LOWER KINDERGARTEN",
    subtopics: [
      { id: "B.1", title: "Learn to count " },
      { id: "B.2", title: "Count objects " },
      { id: "B.3", title: "Count dots" },
      { id: "B.4", title: "Count shapes" },
      { id: "B.5", title: "Count on ten frames" },
    ],
  },
  {
    id: 2,
    headingtitle: "UPPER KINDERGARTEN",
    subtopics: [
      { id: "C.1", title: "Count using stickers " },
      { id: "C.2", title: "Represent numbers" },
      { id: "C.3", title: "Learn to count to 10" },
      { id: "C.4", title: "count up and down" },
      { id: "C.5", title: "Tally marks up to 10" },
      { id: "C.6", title: "Number lines up to 20" },
    ],
  },
  {
    id: 3,

    headingtitle: "CLASS 1",
    subtopics: [
      { id: "C.1", title: "Counting review " },
      { id: "C.2", title: "Count to fill a ten frame" },
      { id: "C.3", title: "Counting tens and ones" },
      { id: "C.4", title: "Number lines -up to 100" },
      { id: "C.5", title: "Hundred chart" },
      { id: "C.6", title: "Sequences - count up and down by 100" },
    ],
  },
  {
    id: 4,
    headingtitle: "CLASS 2",
    subtopics: [
      { id: "C.1", title: "Skip-counting" },
      { id: "C.2", title: "Skip-counting sequences" },
      { id: "C.3", title: "Counting patterns" },
      { id: "C.4", title: "Number lines -up to 100" },
      { id: "C.5", title: "Hundred chart" },
    ],
  },
  {
    id: 5,
    headingtitle: "CLASS 3",
    subtopics: [
      { id: "C.1", title: "Skip-counting puzzles" },
      { id: "C.2", title: "Ordinal numbers to 100th" },
      { id: "C.3", title: "Write numbers in words" },
    ],
  },
  {
    id: 6,
    headingtitle: "CLASS 4",
    subtopics: [
      { id: "C.1", title: "Word names for numbers" },
      { id: "C.2", title: "Ordinal numbers to 100th" },
      { id: "C.3", title: "Skip Counting" },
    ],
  },
  {
    id: 7,
    headingtitle: "CLASS 5",
    subtopics: [{ id: "C.1", title: "Word names for numbers" }],
  },
  {
    id: 8,
    headingtitle: "CLASS 6",
    subtopics: [
      {
        id: "D.1",
        title: " Roman numerals ✅",
        linkTo: "/QuestionPlay/CountingD1",
      },
    ],
  },
];

const TopicList = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Counting Topics</h1>
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
