"use client";

import React from "react";
import Link from "next/link";

const topics = [
  {
    id: 1,
    headingtitle: "CLASS 1",
    subtopics: [
      { id: "K.1", title: "Find place value models- up to hundreds" },
      { id: "K.2", title: "Write tens and ones -up to 100" },
    ],
  },
  {
    id: 2,
    headingtitle: "CLASS 2",
    subtopics: [
      { id: "K.1", title: "Place value models-tens and ones" },
      { id: "K.2", title: "Value of a digit - tens and ones" },
      { id: "K.3", title: "Regroup tens and ones" },
      { id: "K.4", title: "Convert between place values - tens and ones " },
    ],
  },
  {
    id: 3,
    headingtitle: "CLASS 3",
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
    id: 4,
    headingtitle: "CLASS 4",
    subtopics: [
      { id: "N.1", title: "Place values" },
      { id: "N.2", title: "Convert between place values " },
    ],
  },

  {
    id: 4,
    headingtitle: "CLASS 5",
    subtopics: [
      { id: "P.1", title: "Place values" },
      { id: "P.2", title: "Convert between place values" },
      { id: "P.3", title: "Place values in decimal numbers" },
    ],
  },

  {
    id:5,
    headingtitle: "CLASS 6",
    subtopics: [
      {
        id: "Q.1",
        title: " Place values in whole numbers❎",
        linkTo: "/QuestionsPlay/PlacevalueQ1",
      },
      {
        id: "Q.2",
        title: " Word names for numbers❎",
        linkTo: "/QuestionsPlay/PlacevalueQ2",
      },

      {
        id: "Q.3",
        title: " Decimal place values❎",
        linkTo: "/QuestionsPlay/PlacevalueQ3",
      },
    ],
  },
];

const TopicList = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Placevalues Topics</h1>
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
