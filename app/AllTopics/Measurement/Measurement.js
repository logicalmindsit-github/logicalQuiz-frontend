"use client";

import React from "react";
import Link from "next/link";

const topics = [
  {
    id: 1,
    headingtitle: "CLASS 1",
    subtopics: [
      { id: "F.1", title: "Compare long and short" },
      { id: "F.2", title: "Tall and short" },
      { id: "F.3", title: "Light and heavy" },
      { id: "F.4", title: "Compare size and weight" },
    ],
  },
  {
    id: 2,
    headingtitle: "CLASS 2",
    subtopics: [
      { id: "F.1", title: "Holds more or less" },
      { id: "F.2", title: "Compare size, weight and capacity" },
      { id: "F.3", title: "Choose the appropriate measuring tool" },
      { id: "F.4", title: "Measure using objects" },
    ],
  },
  {
    id: 3,
    headingtitle: "CLASS 3",
    subtopics: [
      { id: "G.1", title: "Which metric unit of length is appropriate?" },
      { id: "G.2", title: "Compare and convert metric units of length" },
      { id: "G.3", title: "Metric mixed units" },
      { id: "G.4", title: "Light and heavy " },
    ],
  },
  {
    id: 4,
    headingtitle: "CLASS 4",
    subtopics: [
      { id: "I.1", title: "Choose the appropriate metric unit of measure" },
      { id: "I.2", title: "Compare and convert metric units of length" },
      { id: "I.3", title: "Compare and convert metric units of mass" },
      { id: "I.4", title: "Compare and convert metric units of volume" },
      { id: "I.5", title: "Metric mixed units" },
    ],
  },
  {
    id: 5,
    headingtitle: "CLASS 5",
    subtopics: [
      { id: "J.1", title: "Compare and convert metric units of length" },
      { id: "J.2", title: "Compare and convert metric units of mass" },
      { id: "J.3", title: "Compare and convert metric units of volume" },
      { id: "J.4", title: "Choose the more reasonable temperature" },
      { id: "J.5", title: "Metric mixed units" },
      { id: "J.6", title: "Choose the appropriate metric unit if measure" },
    ],
  },
  {
    id: 6,
    headingtitle: "CLASS 6",
    subtopics: [
      {
        id: "L.1",
        title: " Convert and compare metric units❎",
        linkTo: "/QuestionsPlay/MeasurementL1",
      },
      {
        id: "L.2",
        title: "Mixed metric units✅",
        linkTo: "/QuestionPlay/MeasurementL2",
      },
      {
        id: "L.3",
        title: "Convert square and cubic units of length✅",
        linkTo: "/QuestionPlay/MeasurementL3",
      },
      {
        id: "L.4",
        title: " Convert between cubic metres and litres✅",
        linkTo: "/QuestionPlay/MeasurementL4",
      },
      {
        id: "L.5",
        title: " Compare temperatures above and below zero❎",
        linkTo: "/QuestionsPlay/MeasurementL5",
      },
    ],
  },
];

const TopicList = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Measurement Topics</h1>
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
