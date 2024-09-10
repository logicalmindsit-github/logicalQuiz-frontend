"use client";

import React from "react";
import Link from "next/link";

  const topics = [
    {
      id: 1,
      headingtitle: "ADDITION",
      subtopics: [
        { id: "A.1", title: "Basic Addition" },
        { id: "A.2", title: "Form a number using addition" },
        { id: "A.3", title: "Complete the addition sentence" },
        { id: "A.4", title: "Word Problems" },
        { id: "A.5", title: "Adding Zero" },
      ],
    },
    {
      id: 2,
      headingtitle: "COMPARING",
      subtopics: [
        { id: "B.1", title: "Comparing - review" },
        { id: "B.2", title: "Comparing numbers up to 10" },
        { id: "B.3", title: "Comparing numbers up to 100" },
        { id: "B.4", title: "Comparison word problems" },
        { id: "B.5", title: "Count shapes in a Venn diagram" },
      ],
    },
    {
      id: 3,
      headingtitle: "COUNTING",
      subtopics: [
        { id: "C.1", title: "Counting review" },
        { id: "C.2", title: "Count to fill a ten frame" },
        { id: "C.3", title: "Counting tens and ones" },
        { id: "C.4", title: "Number lines - up to 100" },
        { id: "C.5", title: "Hundred chart" },
        { id: "C.6", title: "Sequences - count up and down by 100" },
      ],
    },
    {
      id: 4,
      headingtitle: "ESTIMATION",
      subtopics: [{ id: "D.1", title: "Estimate to the nearest ten" }],
    },
    {
      id: 5,
      headingtitle: "GEOMENTRY",
      subtopics: [
        { id: "E.1", title: "Classify two-dimensional shapes" },
        { id: "E.2", title: "Classify three-dimensional shapes" },
        { id: "E.3", title: "Count sides and vertices" },
        { id: "E.4", title: "Compare sides and vertices" },
        { id: "E.5", title: "Open and closed shapes" },
        { id: "E.6", title: "Spatial sense" },
      ],
    },
    {
      id: 6,
      headingtitle: "MEASUREMENT",
      subtopics: [
        { id: "F.1", title: "Compare long and short" },
        { id: "F.2", title: "Tall and short" },
        { id: "F.3", title: "Light and heavy" },
        { id: "F.4", title: "Compare size and weight" },
      ],
    },
    {
      id: 7,
      headingtitle: "MIXED OPERATIONS",
      subtopics: [
        { id: "G.1", title: "Make a number with addition and subtraction" },
        { id: "G.2", title: "Addition and Subtraction facts" },
        { id: "G.3", title: "Addition and subtraction word problem" },
      ],
    },
    {
      id: 8,
      headingtitle: "MONEY",
      subtopics: [
        { id: "H.1", title: "Find coin values" },
        { id: "H.2", title: "Count coins and notes" },
      ],
    },
    {
      id: 9,
      headingtitle: "NUMBER THEORY",
      subtopics: [
        { id: "I.1", title: "Identify numbers as even or odd" },
        { id: "I.2", title: "Which even or odd number comes before or after?" },
        { id: "I.3", title: "Number Bonds" },
        { id: "I.4", title: "Identifying and Writing Numbers" },
      ],
    },
    {
      id: 10,
      headingtitle: "PATTERNS",
      subtopics: [
        { id: "J.1", title: "Introduction to patterns" },
        { id: "J.2", title: "Skip-counting patterns - with tables" },
        {
          id: "J.3",
          title: "Sequences - count up and down by 1, 2, 3, 5 and 10",
        },
        { id: "J.4", title: "Find the next shape in a pattern" },
        { id: "J.5", title: "Make and complete a pattern" },
      ],
    },
    {
      id: 11,
      headingtitle: "PLACE VALUES",
      subtopics: [
        { id: "K.1", title: "Find place value models - up to hundreds" },
        { id: "K.2", title: "Write tens and ones - up to 100" },
      ],
    },
    {
      id: 12,
      headingtitle: "SUBSTRACTION",
      subtopics: [
        { id: "L.1", title: "Subtraction facts - numbers up to 18" },
        { id: "L.2", title: "Subtraction sentences - numbers up to 10" },
        {
          id: "L.3",
          title: "Subtraction sentences using number lines - numbers up to 18",
        },
        { id: "L.4", title: "Subtract zero and all" },
        {
          id: "L.5",
          title: "Ways to subtract from a number - subtraction sentences",
        },
        {
          id: "L.6",
          title:
            "Subtract a one-digit number from a two-digit number - with and without regrouping",
        },
      ],
    },
    {
      id: 13,
      headingtitle: "TIME",
      subtopics: [
        { id: "M.1", title: "Find A.M. or P.M." },
        { id: "M.2", title: "Days of the week" },
        { id: "M.3", title: "Seasons of the year" },
        { id: "M.4", title: "Read a calendar" },
        { id: "M.5", title: "Months of the year" },
      ],
    },
  ];

  const TopicList = () => {
    return (
      <div className="page-container">
        <h1 className="page-title">Class 1 Maths Topics</h1>
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