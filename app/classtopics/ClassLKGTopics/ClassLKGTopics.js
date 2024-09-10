"use client";

import React from "react";
import Link from "next/link";

  const topics = [
    {
      id: 1,
      headingtitle: "COMPARING",
      subtopics: [
        { id: "A.1", title: "Compare in a mixed group" },
        { id: "A.2", title: "Same and different" },
        { id: "A.3", title: "Classify shapes" },
        { id: "A.4", title: "Classify shapes by colour" },
        { id: "A.5", title: "Classify and sort by colour" },
        { id: "A.6", title: "Classify and sort by shape" },
      ],
    },
    {
      id: 2,
      headingtitle: "COUNTING",
      subtopics: [
        { id: "B.1", title: "Learn to count" },
        { id: "B.2", title: "Count objects" },
        { id: "B.3", title: "Count dots" },
        { id: "B.4", title: "Count shapes" },
        { id: "B.5", title: "Count on ten frames" },
      ],
    },
    {
      id: 3,
      headingtitle: "PATTERNS",
      subtopics: [
        { id: "C.1", title: "Colour patterns" },
        { id: "C.2", title: "Size patterns" },
        { id: "C.3", title: "Shape patterns" },
        { id: "C.4", title: "What comes next?" },
      ],
    },
  ];

 
  const TopicList = () => {
    return (
      <div className="page-container">
        <h1 className="page-title">Class LKG Maths Topics</h1>
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
  