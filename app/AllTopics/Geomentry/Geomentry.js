"use client";

import React from "react";
import Link from "next/link";

const topics = [
  {
    id: 1,
    headingtitle: "UPPER KINDERGARTEN",
    subtopics: [
      { id: "D.1", title: "Classify Two-dimensional " },
      { id: "D.2", title: "Count sides and corners" },
      { id: "D.3", title: "Compare sides and corners" },
    ],
  },
  {
    id: 2,
    headingtitle: "CLASS 1",
    subtopics: [
      { id: "E.1", title: "Classify two-dimensional shapes" },
      { id: "E.2", title: "Classify Three-dimensional shapes" },
      { id: "E.3", title: "Count sides and vertices  " },
      { id: "E.4", title: "Compare sides and vertices" },
      { id: "E.5", title: "Open and closed shapes" },
      { id: "E.6", title: "Spatial sense" },
    ],
  },
  {
    id: 3,
    headingtitle: "CLASS 2",
    subtopics: [
      {
        id: "E.1",
        title: "Name the two-dimensional shape and  three-dimensional shape ",
      },
      { id: "E.2", title: "Identify two and three-dimensional shapes" },
      { id: "E.3", title: "Count vertices, edges and faces" },
      { id: "E.4", title: "Count sides and vertices" },
      { id: "E.5", title: "Compare vertices, edges and faces" },
      { id: "E.6", title: "Compare sides and vertices " },
    ],
  },
  {
    id: 4,
    headingtitle: "CLASS 3",
    subtopics: [
      { id: "F.1", title: "Identify two-dimensional shapes" },
      { id: "F.2", title: "Count and compare sides and vertices" },
      { id: "F.3", title: "Identify three-dimensional shapes" },
      { id: "F.4", title: "Count vertices, edges and faces" },
      { id: "F.5", title: "Is it a polygon?" },
    ],
  },
  {
    id: 5,
    headingtitle: "CLASS 4",
    subtopics: [
      { id: "G.1", title: "Which two-dimensional figure is being described?" },
      { id: "G.2", title: "Identify three-dimensional figures" },
      { id: "G.3", title: "Count vertices, edges and faces  " },
      {
        id: "G.4",
        title: "Which three-dimensional figure is being described?",
      },
      { id: "G.5", title: "Rotational symmetry" },
    ],
  },
  {
    id: 6,
    headingtitle: "CLASS 5",
    subtopics: [
      { id: "I.1", title: "Which figure is being described?" },
      { id: "I.2", title: "Number of sides in polygons" },
      { id: "I.3", title: "Regular and irregular polygons" },
      { id: "I.4", title: "Types of angles" },
      { id: "I.5", title: "Measure angles with a protractor" },
      { id: "I.6", title: "Lines and rotational symmetry" },
    ],
  },
  {
    id: 7,
    headingtitle: "CLASS 6",
    subtopics: [
      {
        id: "J.1",
        title: " Is it a polygon",
        linkTo: "",
      },
      {
        id: "J.2",
        title: "Types of angles",
        linkTo: "",
      },
      {
        id: "J.3",
        title: " Measure angles with a protractor",
        linkTo: "",
      },
      {
        id: "J.4",
        title: " Number of sides in polygons✅",
        linkTo: "/QuestionPlay/GeomentryJ4",
      },
      {
        id: "J.5",
        title: " Which figure is being described?",
        linkTo: "",
      },
      {
        id: "J.6",
        title: " Perimeter",
        linkTo: "",
      },
      {
        id: "J.7",
        title: " Area of squares and rectangles",
        linkTo: "",
      },
      {
        id: "J.8",
        title: " Lines and rotational symmetry",
        linkTo: "",
      },
    ],
  },
];

const TopicList = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Geomentry Topics</h1>
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
