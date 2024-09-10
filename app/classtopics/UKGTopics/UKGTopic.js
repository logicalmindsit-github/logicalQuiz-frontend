"use client";

import React from "react";
import Link from "next/link";

const topics = [
  {
    id: 1,
    headingtitle: "ADDITION",
    subtopics: [
      { id: "A.1", title: "Picture Addition" },
      { id: "A.2", title: "Sum of two numbers up to 10" },
      { id: "A.3", title: "Addition word problems" },
      { id: "A.4", title: "Complete the addition sentence" },
      { id: "A.5", title: "Form a number using addition" },
    ],
  },
  {
    id: 2,
    headingtitle: "COMPARING",
    subtopics: [
      { id: "B.1", title: "Are there enough?" },
      { id: "B.2", title: "Fewer and more - compare by matching" },
      { id: "B.3", title: "Fewer and more - compare by counting" },
      { id: "B.4", title: "Fewer and more - compare in a mixed group" },
      { id: "B.5", title: "Fewer, more and same" },
      { id: "B.6", title: "Compare two numbers - up to 10" },
      { id: "B.7", title: "Compare three numbers - up to 10" },
    ],
  },
  {
    id: 3,
    headingtitle: "COUNTING",
    subtopics: [
      { id: "C.1", title: "Count using stickers" },
      { id: "C.2", title: "Represent numbers" },
      { id: "C.3", title: "Learn to count to 10" },
      { id: "C.4", title: "Count up and down" },
      { id: "C.5", title: "Tally marks up to 10" },
      { id: "C.6", title: "Number lines up to 20" },
    ],
  },
  {
    id: 4,
    headingtitle: "GEOMENTRY",
    subtopics: [
      { id: "D.1", title: "Classify Two-dimensional shapes" },
      { id: "D.2", title: "Count sides and corners" },
      { id: "D.3", title: "Compare sides and corners" },
    ],
  },
  {
    id: 5,
    headingtitle: "MIXED OPERATIONS",
    subtopics: [{ id: "E.1", title: "Sum and difference" }],
  },
  {
    id: 6,
    headingtitle: "PATTERNS",
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
    id: 7,
    headingtitle: "SUBTRACTION",
    subtopics: [
      { id: "G.1", title: "Subtract with pictures - numbers up to 10" },
      { id: "G.2", title: "Subtraction sentences - numbers up to 10" },
      {
        id: "G.3",
        title: "Form a number using subtraction - numbers up to 10",
      },
      { id: "G.4", title: "Subtract - numbers up to 10" },
      {
        id: "G.5",
        title: "Complete the subtraction sentence - numbers up to 10",
      },
      { id: "G.6", title: "Subtraction word problems - numbers up to 10" },
    ],
  },
];

const TopicList = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Class UKG Maths Topics</h1>
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
