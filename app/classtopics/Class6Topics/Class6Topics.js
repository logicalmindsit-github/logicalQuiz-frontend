"use client";

import React from "react";
import Link from "next/link";

const topics = [
  {
    id: 1,
    headingtitle: "ADDITION",
    subtopics: [
      { id: "A.1", title: " Add and subtract whole numbers", linkTo: "/Questions/Class6Questions/SelectType/AddA1" },
      {
        id: "A.2",
        title: " Add and subtract whole numbers: word problems",
        linkTo: "/Questions/Class6Questions/InputType/AddA2",
      },
      { id: "A.3", title: "Add and subtract decimal numbers", linkTo: "/Questions/Class6Questions/SelectType/AddA3" },
      {
        id: "A.4",
        title: " Add and subtract decimals: word problems ",
        linkTo: "/Questions/Class6Questions/InputType/AddA4",
      },
    ],
  },
  {
    id: 2,
    headingtitle: "ALGEBRA",
    subtopics: [
      {
        id: "B.1",
        title: " Write variable expressions",
        linkTo: "/Questions/Class6Questions/InputType/AlgebraB1",
      },
      {
        id: "B.2",
        title: " Find equivalent expressions using properties",
        linkTo: "/Questions/Class6Questions/SelectType/AlgebraB2",
      },
      {
        id: "B.3",
        title: " Solve for a variable using properties of multiplication",
        linkTo: "/Questions/Class6Questions/SelectType/AlgebraB3",
      },
      {
        id: "B.4",
        title: " Identify equivalent expressions",
        linkTo: "/Questions/Class6Questions/SelectType/AlgebraB4",
      },
      {
        id: "B.5",
        title: " Write variable equations: word problems",
        linkTo: "/Questions/Class6Questions/SelectType/AlgebraB5",
      },
      {
        id: "B.6",
        title: "Solve equations using properties",
        linkTo: "/Questions/Class6Questions/SelectType/AlgebraB6",
      },
    ],
  },
  {
    id: 3,
    headingtitle: "COMPARING",
    subtopics: [
      {
        id: "C.1",
        title: " Put decimal numbers in order",
        linkTo: "/Questions/Class6Questions/SelectType/ComparingC1",
      },
      {
        id: "C.2",
        title: "Inequalities with decimals",
        linkTo: "/Questions/Class6Questions/SelectType/ComparingC2",
      },
      {
        id: "C.3",
        title: " Compare fractions with like and unlike denominators",
        linkTo: "/Questions/Class6Questions/SelectType/ComparingC3",
      },
      {
        id: "C.4",
        title: " Compare fractions: word problems",
        linkTo: "/Questions/Class6Questions/SelectType/ComparingC4",
      },
      {
        id: "C.5",
        title: " Put a mix of decimals, fractions and mixed numbers in order",
        linkTo:"/Questions/Class6Questions/SelectType/ComparingC5",
      },
    ],
  },
  {
    id: 4,
    headingtitle: "COUNTING",
    subtopics: [
      {
        id: "D.1",
        title: " Roman numerals ",
        linkTo: "/Questions/Class6Questions/InputType/CountingD1",
      },
    ],
  },
  {
    id: 5,
    headingtitle: "DECIMAL",
    subtopics: [
      {
        id: "E.1",
        title: "What decimal number is illustrated?",
        linkTo:  "/Questions/Class6Questions/SelectType/DecimalE1",
      },
      {
        id: "E.2",
        title: " Decimal number lines",
        linkTo:  "/Questions/Class6Questions/SelectType/DecimalE2",
      },
      {
        id: "E.3",
        title: "Word names for decimal numbers ",
        linkTo: "/Questions/Class6Questions/InputType/DecimalE3",
      },
      {
        id: "E.4",
        title: "Convert decimals to mixed numbers",
        linkTo: "/Questions/Class6Questions/SelectType/DecimalE4",
      },
      {
        id: "E.5",
        title: "Put decimal numbers in order",
        linkTo:  "/Questions/Class6Questions/SelectType/DecimalE5",
      },
    ],
  },
  {
    id: 6,
    headingtitle: "DIVISION",
    subtopics: [
      {
        id: "F.1",
        title: " Rules of divisibility",
        linkTo: "/Questions/Class6Questions/SelectType/DivisionF1",
      },
      {
        id: "F.2",
        title: "Division patterns with zeroes ",
        linkTo: "/Questions/Class6Questions/InputType/DivisionF2",
      },
      {
        id: "F.3",
        title: " Divide numbers ending in zeroes: word problems",
        linkTo: "/Questions/Class6Questions/InputType/DivisionF3",
      },
      {
        id: "F.4",
        title: " Divide whole numbers - two-digit divisors ",
        linkTo: "/Questions/Class6Questions/InputType/DivisionF4",
      },
    ],
  },
  {
    id: 7,
    headingtitle: "DATA AND GRAPH",
    subtopics: [
      {
        id: "G.1",
        title: " Interpret pictograph",
        linkTo: "/Questions/Class6Questions/SelectType/DataGraphG1",
      },
      {
        id: "G.2",
        title: "Interpret bar graph",
        linkTo: "/Questions/Class6Questions/SelectType/DataGraphG2",
      },
      {
        id: "G.3",
        title: "Interpret histograms",
        linkTo:  "/Questions/Class6Questions/SelectType/DataGraphG3",
      },
      {
        id: "G.4",
        title: " Create histograms",
        linkTo:  "/Questions/Class6Questions/SelectType/DataGraphG4",
      },
    ],
  },
  {
    id: 8,
    headingtitle: "ESTIMATION",
    subtopics: [
      {
        id: "H.1",
        title: " Estimate products",
        linkTo: "/Questions/Class6Questions/InputType/EstimationH1",
      },
      {
        id: "H.2",
        title: " Estimate quotients",
        linkTo:"/Questions/Class6Questions/SelectType/EstimationH2",
      },
      {
        id: "H.3",
        title: " Round whole numbers and decimals: find the missing digit",
        linkTo: "/Questions/Class6Questions/SelectType/EstimationH3",
      },
      {
        id: "H.4",
        title: "Estimate sums and differences of decimals",
        linkTo: "/Questions/Class6Questions/InputType/EstimationH4",
      },
      {
        id: "H.5",
        title: " Estimate metric measurements",
        linkTo: "/Questions/Class6Questions/SelectType/EstimationH5",
      },
    ],
  },
  {
    id: 9,
    headingtitle: "FRACTION",
    subtopics: [
      {
        id: "I.1",
        title: " Convert decimals to mixed numbers",
        linkTo: "/Questions/Class6Questions/SelectType/FractionI1",
      },
      {
        id: "I.2",
        title: "Understanding fractions: word problems",
        linkTo: "/Questions/Class6Questions/InputType/FractionI2",
      },
      {
        id: "I.3",
        title: " Equivalent fractions ",
        linkTo: "/Questions/Class6Questions/SelectType/FractionI3",
      },
      {
        id: "I.4",
        title: "Write fractions in lowest terms",
        linkTo: "/Questions/Class6Questions/InputType/FractionI4",
      },
      {
        id: "I.5",
        title: "Fractions: word problems",
        linkTo: "/Questions/Class6Questions/InputType/FractionI5",
      },
    ],
  },
  {
    id: 10,
    headingtitle: "GEOMETRY",
    subtopics: [
      {
        id: "J.1",
        title: " Is it a polygon",
        linkTo: "/Questions/Class6Questions/SelectType/GeomentryJ1",
      },
      {
        id: "J.2",
        title: "Types of angles",
        linkTo: "/Questions/Class6Questions/SelectType/GeomentryJ2",
      },
      {
        id: "J.3",
        title: " Measure angles with a protractor",
        linkTo: "/Questions/Class6Questions/SelectType/GeomentryJ3",
      },
      {
        id: "J.4",
        title: " Number of sides in polygons",
        linkTo: "/Questions/Class6Questions/InputType/GeomentryJ4",
      },
      {
        id: "J.5",
        title: " Which figure is being described?",
        linkTo: "/Questions/Class6Questions/SelectType/GeomentryJ5",
      },
      {
        id: "J.6",
        title: " Perimeter",
        linkTo: "/Questions/Class6Questions/SelectType/GeomentryJ6",
      },
      {
        id: "J.7",
        title: " Area of squares and rectangles",
        linkTo: "/Questions/Class6Questions/SelectType/GeomentryJ7",
      },
      {
        id: "J.8",
        title: " Lines and rotational symmetry",
        linkTo: "/Questions/Class6Questions/SelectType/GeomentryJ8",
      },
    ],
  },
  {
    id: 11,
    headingtitle: "INTEGERS",
    subtopics: [
      {
        id: "K.1",
        title: "Understanding integers",
        linkTo: "/Questions/Class6Questions/SelectType/IntegersK1",
      },
      {
        id: "K.2",
        title: " Integers on number lines",
        linkTo: "/Questions/Class6Questions/SelectType/IntegersK2",
      },
      {
        id: "K.3",
        title: "Compare and order integers",
        linkTo: "/Questions/Class6Questions/SelectType/IntegersK3",
      },
      {
        id: "K.4",
        title: "Add integers using counters",
        linkTo: "/Questions/Class6Questions/SelectType/IntegersK4",
      },
      {
        id: "K.5",
        title: " Add and subtract integers",
        linkTo: "/Questions/Class6Questions/SelectType/IntegersK5",
      },
    ],
  },
  {
    id: 12,
    headingtitle: "MEASUREMENT",
    subtopics: [
      {
        id: "L.1",
        title: " Convert and compare metric units",
        linkTo: "/Questions/Class6Questions/SelectType/MeasurementL1",
      },
      {
        id: "L.2",
        title: "Mixed metric units",
        linkTo: "/Questions/Class6Questions/InputType/MeasurementL2",
      },
      {
        id: "L.3",
        title: "Convert square and cubic units of length",
        linkTo: "/Questions/Class6Questions/InputType/MeasurementL3",
      },
      {
        id: "L.4",
        title: " Convert between cubic metres and litres",
        linkTo: "/Questions/Class6Questions/InputType/MeasurementL4",
      },
      {
        id: "L.5",
        title: " Compare temperatures above and below zero",
        linkTo: "/Questions/Class6Questions/SelectType/MeasurementL5",
      },
    ],
  },
  {
    id: 13,
    headingtitle: "MIXED OPERATION",
    subtopics: [
      {
        id: "M.1",
        title: " Add and subtract fractions with like denominators",
        linkTo: "/Questions/Class6Questions/InputType/MixedM1",
      },
      {
        id: "M.2",
        title:
          " Add and subtract fractions with like denominators: word problems",
        linkTo: "/Questions/Class6Questions/SelectType/MixedM2",
      },
      {
        id: "M.3",
        title:
          " Add and subtract fractions with unlike denominators: word problems",
        linkTo: "/Questions/Class6Questions/InputType/MixedM3",
      },
      {
        id: "M.4",
        title: " Add and subtract mixed numbers",
        linkTo: "/Questions/Class6Questions/InputType/MixedM4",
      },
      {
        id: "M.5",
        title: ". Add and subtract mixed numbers: word problems",
        linkTo: "/Questions/Class6Questions/InputType/MixedM5",
      },
    ],
  },
  {
    id: 14,
    headingtitle: "MULTIPLICATION",
    subtopics: [
      {
        id: "N.1",
        title: " Multiply whole numbers ",
        linkTo: "/Questions/Class6Questions/InputType/MultiplyN1",
      },
      {
        id: "N.2",
        title: " Multiply whole numbers: word problems ",
        linkTo: "/Questions/Class6Questions/InputType/MultiplyN2",
      },
      {
        id: "N.3",
        title: " Multiply numbers ending in zeroes ",
        linkTo: "/Questions/Class6Questions/InputType/MultiplyN3",
      },
      {
        id: "N.4",
        title: " Multiply numbers ending in zeroes: word problems ",
        linkTo: "/Questions/Class6Questions/InputType/MultiplyN4",
      },
      {
        id: "N.5",
        title: "Multiply three or more numbers ",
        linkTo: "/Questions/Class6Questions/InputType/MultiplyN5",
      },
      {
        id: "N.6",
        title: " Properties of multiplication",
        linkTo: "/Questions/Class6Questions/SelectType/MultiplyN6",
      },
    ],
  },
  {
    id: 15,
    headingtitle: "MONEY",
    subtopics: [
      {
        id: "O.1",
        title: " Add and subtract money amounts",
        linkTo: "/Questions/Class6Questions/InputType/MoneyO1",
      },
      {
        id: "O.2",
        title: " Add and subtract money amounts: word problems",
        linkTo: "/Questions/Class6Questions/InputType/MoneyO2",
      },
      {
        id: "O.3",
        title: " Multiply money: word problems",
        linkTo: "/Questions/Class6Questions/InputType/MoneyO3",
      },
      {
        id: "O.4",
        title: " Divide money amounts",
        linkTo: "/Questions/Class6Questions/InputType/MoneyO4",
      },
      {
        id: "O.5",
        title: " Divide money amounts: word problems",
        linkTo: "/Questions/Class6Questions/InputType/MoneyO5",
      },
    ],
  },
  {
    id: 16,
    headingtitle: "NUMBER THEORY",
    subtopics: [
      {
        id: "P.1",
        title: " Prime or composite",
        linkTo: "/Questions/Class6Questions/SelectType/NumTheoryP1",
      },
      {
        id: "P.2",
        title: " Identify factors",
        linkTo: "/Questions/Class6Questions/SelectType/NumTheoryP2",
      },
      {
        id: "P.3",
        title: " Prime factorisation",
        linkTo: "/Questions/Class6Questions/SelectType/NumTheoryP3",
      },
      {
        id: "P.4",
        title: " Highest common factor",
        linkTo: "/Questions/Class6Questions/InputType/NumTheoryP4",
      },
      {
        id: "P.5",
        title: " Lowest common multiple",
        linkTo: "/Questions/Class6Questions/InputType/NumTheoryP5",
      },
      {
        id: "P.6",
        title: " HCF and LCM: word problems",
        linkTo: "/Questions/Class6Questions/InputType/NumTheoryP6",
      },
    ],
  },
  {
    id: 17,
    headingtitle: "PLACE VALUE",
    subtopics: [
      {
        id: "Q.1",
        title: " Place values in whole numbers",
        linkTo: "/Questions/Class6Questions/SelectType/PlacevalueQ1",
      },
      {
        id: "Q.2",
        title: " Word names for numbers",
        linkTo: "/Questions/Class6Questions/SelectType/PlacevalueQ2",
      },

      {
        id: "Q.3",
        title: " Decimal place values",
        linkTo: "/Questions/Class6Questions/SelectType/PlacevalueQ3",
      },
    ],
  },
  {
    id: 18,
    headingtitle: "RATIO AND PROPORTION",
    subtopics: [
      {
        id: "R.1",
        title: " Write a ratio",
        linkTo: "/Questions/Class6Questions/SelectType/RatioR1",
      },
      {
        id: "R.2",
        title: " Write a ratio: word problems",
        linkTo: "/Questions/Class6Questions/SelectType/RatioR2",
      },
      {
        id: "R.3",
        title: " Identify equivalent ratios",
        linkTo: "/Questions/Class6Questions/SelectType/RatioR3",
      },
      {
        id: "R.4",
        title: " Compare ratios: word problems",
        linkTo: "/Questions/Class6Questions/SelectType/RatioR4",
      },
      {
        id: "R.5",
        title: " Find the ratios form a proportion",
        linkTo: "/Questions/Class6Questions/SelectType/RatioR5",
      },
      {
        id: "R.6",
        title: " Solve proportion",
        linkTo: "/Questions/Class6Questions/InputType/RatioR6",
      },
      {
        id: "R.7",
        title: " Scale drawings: word problems",
        linkTo: "/Questions/Class6Questions/InputType/RatioR7",
      },
    ],
  },
  {
    id: 19,
    headingtitle: "TIME",
    subtopics: [
      {
        id: "S.1",
        title: " Elapsed time",
        linkTo: "/Questions/Class6Questions/SelectType/TimeS1",
      },
      {
        id: "S.2",
        title: " Find Time units",
        linkTo: "/Questions/Class6Questions/SelectType/TimeS2",
      },
      {
        id: "S.3",
        title: " Convert between 12-hour and 24-hour time",
        linkTo: "/Questions/Class6Questions/InputType/TimeS3",
      },
      {
        id: "S.4",
        title: " To find stating and ending times",
        linkTo: "/Questions/Class6Questions/SelectType/TimeS4",
      },
      {
        id: "S.5",
        title: "Transportation schedules",
        linkTo: "/Questions/Class6Questions/SelectType/TimeS5",
      }
    ],
  },
];

const TopicList = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Class 6 Maths Topics</h1>
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