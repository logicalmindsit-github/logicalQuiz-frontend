"use client";

import React from "react";
import Link from "next/link";

const topics = [
  {
    id: 1,
    headingtitle: "LOWER KINDERGARTEN",
    subtopics: [
      { id: "A.1", title: "Compare in a mixed group" },
      { id: "A.2", title: "Same and different" },
      { id: "A.3", title: "classify shapes" },
      { id: "A.4", title: "Classify shapes by colour" },
      { id: "A.5", title: "Classify and sort by colour" },
      { id: "A.6", title: "Classify and sort by shape" },
    ],
  },
  {
    id: 2,
    headingtitle: "UPPER KINDERGARTEN",
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
    headingtitle: "CLASS 1",
    subtopics: [
      { id: "B.1", title: "Comparing - review" },
      { id: "B.2", title: "Comparing numbers up to 10" },
      { id: "B.3", title: "Comparing numbers up to 100" },
      { id: "B.4", title: "Comparison word problems" },
      { id: "B.5", title: "Count shapes in a Venn diagram" },
    ],
  },
  {
    id: 4,
    headingtitle: "CLASS 2",
    subtopics: [
      { id: "B.1", title: "Comparing numbers up to 100" },
      { id: "B.2", title: "Put numbers up to 100 in order" },
      { id: "B.3", title: "Greatest and least - word problems - up to 100" },
    ],
  },

  {
    id: 5,
    headingtitle: "CLASS 3",
    subtopics: [
      { id: "B.1", title: "Comparing numbers" },
      { id: "B.2", title: "Which number is greatest/least?" },
      { id: "B.3", title: "Put numbers in order" },
    ],
  },

  {
    headingtitle: "CLASS 4",
    subtopics: [
      { id: "B.1", title: "Inequalities with number lines" },
      { id: "B.2", title: "Compare numbers up to five digits" },
    ],
  },
  {
    headingtitle: "CLASS 5",
    subtopics: [
      { id: "B.1", title: "Compare numbers" },
      { id: "B.2", title: "Compare decimals on number lines" },
      { id: "B.3", title: "Compare decimal numbers" },
      { id: "B.4", title: "Put decimal numbers in order" },
      { id: "B.5", title: "Compare fractions" },
    ],
  },
  {
    headingtitle: "CLASS 6",
    subtopics: [
      { id: "C.1", title: "Put decimal numbers in order" },
      { id: "C.2", title: "Inequalities with decimals" },
      {
        id: "C.3",
        title: "Compare fractions with like and unlike denominators",
      },
      { id: "C.4", title: "Compare fractions: word problems" },
      {
        id: "C.5",
        title: "Put a mix of decimals, fractions and mixed numbers in order",
      },
    ],
  },
];

const TopicList = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Comparing Topics</h1>
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
