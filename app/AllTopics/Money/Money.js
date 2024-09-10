"use client";

import React from "react";
import Link from "next/link";

const topics = [
  {
    id: 1,
    headingtitle: "CLASS 1",
    subtopics: [
      { id: "H.1", title: "Find coin values " },
      { id: "H.2", title: "count coins and notes" },
    ],
  },
  {
    id: 2,
    headingtitle: "CLASS 2",
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
    id: 3,
    headingtitle: "CLASS 3",
    subtopics: [
      { id: "I.1", title: "Count coins and notes - up to 500-rupee note" },
      { id: "I.2", title: "Inequalities with money" },
      { id: "I.3", title: "Put money amounts in order" },
      { id: "I.4", title: "Add and subtract money amounts" },
      { id: "I.5", title: "Add money amounts - word problems" },
    ],
  },
  {
    id: 4,
    headingtitle: "CLASS 4",
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
    id: 5,
    headingtitle: "CLASS 5",
    subtopics: [
      { id: "L.1", title: "Add and subtract money amounts" },
      { id: "L.2", title: "Add and subtract money: word problems" },
      { id: "L.3", title: "Multiply money amounts: word problems" },
      { id: "L.4", title: "Divide money amounts: word problems" },
      { id: "L.5", title: "Price lists" },
    ],
  },

  {
    id: 6,
    headingtitle: "CLASS 6",
    subtopics: [
      {
        id: "O.1",
        title: " Add and subtract money amounts✅",
        linkTo: "/QuestionPlay/MoneyO1",
      },
      {
        id: "O.2",
        title: " Add and subtract money amounts: word problems✅",
        linkTo: "/QuestionPlay/MoneyO2",
      },
      {
        id: "O.3",
        title: " Multiply money: word problems✅",
        linkTo: "/QuestionPlay/MoneyO3",
      },
      {
        id: "O.4",
        title: " Divide money amounts✅",
        linkTo: "/QuestionPlay/MoneyO4",
      },
      {
        id: "O.5",
        title: " Divide money amounts: word problems✅",
        linkTo: "/QuestionPlay/MoneyO5",
      },
    ],
  },
];

const TopicList = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Money Topics</h1>
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
