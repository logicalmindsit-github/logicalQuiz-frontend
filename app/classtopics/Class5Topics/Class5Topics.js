"use client";
import React from "react";
import Link from "next/link";

const topics = [
  {
    id: 1,
    headingtitle: "Addition",
    subtopics: [
      { id: "A.1", title: "Add whole numbers"                ,linkTo: "/Questions/Class5Questions/InputType/AddA1"},
      { id: "A.2", title: "Add whole numbers: word problems" ,linkTo:"/Questions/Class5Questions/SelectType/AddA2" },
      { id: "A.3", title: "Complete addition sentences"      ,linkTo: "/Questions/Class5Questions/InputType/AddA3"},
      { id: "A.4", title: "Fill in the missing digits"       ,linkTo:"/Questions/Class5Questions/SelectType/AddA4" },
      { id: "A.5", title: "Properties of addition"           ,linkTo: "/Questions/Class5Questions/InputType/AddA5"},
    ],
  },
  {
    id: 2,
    headingtitle: "Comparing",
    subtopics: [
      { id: "B.1", title: "Compare numbers"                   ,linkTo: "/Questions/Class5Questions/SelectType/CompB1"},
      { id: "B.2", title: "Compare decimals on number lines"  ,linkTo: "/Questions/Class5Questions/InputType/CompB2"},
      { id: "B.3", title: "Compare decimal numbers"           ,linkTo: "/Questions/Class5Questions/SelectType/CompB3"},
      { id: "B.4", title: "Put decimal numbers in order"      ,linkTo: "/Questions/Class5Questions/InputType/CompB4"},
      { id: "B.5", title: "Compare fractions"                 ,linkTo: "/Questions/Class5Questions/SelectType/CompB5"},
    ],
  },
  {
    id: 3,
    headingtitle: "Counting",
    subtopics: [{ id: "C.1", title: "Word names for numbers"  ,linkTo: "/Questions/Class5Questions/InputType/CountingC1"}],
  },
  {
    id: 4,
    headingtitle: "Data and graphs",
    subtopics: [
      { id: "D.1", title: "Interpret bar graphs"  ,linkTo: "/Questions/Class5Questions/SelectType/DataD1"},
      { id: "D.2", title: "Interpret Pictographs" ,linkTo: "/Questions/Class5Questions/InputType/DataD2"},
      { id: "D.3", title: "Interpret histograms"  ,linkTo: "/Questions/Class5Questions/SelectType/DataD3"},
    ],
  },
  {
    id: 5,
    headingtitle: "Decimals",
    subtopics: [
      { id: "E.1", title: "What decimal number is illustrated?"        ,linkTo: "/Questions/Class5Questions/InputType/DecimalE1"},
      { id: "E.2", title: "Model decimals and fractions"               ,linkTo: "/Questions/Class5Questions/SelectType/DecimalE2"},
      { id: "E.3", title: "Understanding decimals expressed in words"  ,linkTo: "/Questions/Class5Questions/InputType/DecimalE3"},
      { id: "E.4", title: "Equivalent decimals"                        ,linkTo: "/Questions/Class5Questions/SelectType/DecimalE4"},
      { id: "E.5", title: "Put decimal numbers in order"               ,linkTo: "/Questions/Class5Questions/InputType/DecimalE5"},
      { id: "E.6", title: "Convert fractions to decimals"              ,linkTo: "/Questions/Class5Questions/SelectType/DecimalE6"},
      { id: "E.7", title: "Convert decimals to fractions"              ,linkTo: "/Questions/Class5Questions/InputType/DecimalE7"},
    ],
  },
  {
    id: 6,
    headingtitle: "Division",
    subtopics: [
      { id: "F.1", title: "Division facts to 12"                  ,linkTo: "/Questions/Class5Questions/SelectType/DivisionF1"},
      { id: "F.2", title: "Division facts to 12: word problems"   ,linkTo: "/Questions/Class5Questions/InputType/DivisionF2"},
      { id: "F.3", title: "Divisibility rules"                    ,linkTo: "/Questions/Class5Questions/SelectType/DivisionF3"},
      { id: "F.4", title: "Divisibility rules: word problems"     ,linkTo: "/Questions/Class5Questions/InputType/DivisionF4"},
      { id: "F.5", title: "Divide by one-digit numbers"           ,linkTo: "/Questions/Class5Questions/SelectType/DivisionF5"},
      { id: "F.6", title: "Divide by two-digit numbers"           ,linkTo: "/Questions/Class5Questions/InputType/DivisionF6"},
    ],
  },
  {
    id: 7,
    headingtitle: "Estimation",
    subtopics: [
      { id: "G.1", title: "Rounding"                                        ,linkTo: "/Questions/Class5Questions/SelectType/EstimationG1"},
      { id: "G.2", title: "Estimate sums and differences of whole numbers"  ,linkTo: "/Questions/Class5Questions/InputType/EstimationG2"},
      { id: "G.3", title: "Estimate products"                               ,linkTo: "/Questions/Class5Questions/SelectType/EstimationG3"},
      { id: "G.4", title: "Estimate products: word problems"                ,linkTo: "/Questions/Class5Questions/InputType/EstimationG4"},
      { id: "G.5", title: "Estimate quotients: word problems"               ,linkTo: "/Questions/Class5Questions/SelectType/EstimationG5"},
      { id: "G.6", title: "Round decimals"                                  ,linkTo: "/Questions/Class5Questions/InputType/EstimationG6"},
    ],
  },
  {
    id: 8,
    headingtitle: "Fraction",
    subtopics: [
      { id: "H.1", title: "Examine fractions"                   ,linkTo: "/Questions/Class5Questions/SelectType/FractionH1"},
      { id: "H.2", title: "Unit fractions: word problems"       ,linkTo: "/Questions/Class5Questions/InputType/FractionH2"},
      { id: "H.3", title: "Write fractions in lowest terms"     ,linkTo: "/Questions/Class5Questions/SelectType/FractionH3"},
      { id: "H.4", title: "Fractions of a group: word problems" ,linkTo: "/Questions/Class5Questions/InputType/FractionH4"},
      { id: "H.5", title: "Equivalent fractions"                ,linkTo: "/Questions/Class5Questions/SelectType/FractionH5"},
      { id: "H.6", title: "Put fractions in order"              ,linkTo: "/Questions/Class5Questions/InputType/FractionH6"},
      { id: "H.7", title: "Fractions of a number"               ,linkTo: "/Questions/Class5Questions/SelectType/FractionH7"},
      { id: "H.8", title: "Mixed numbers"                       ,linkTo: "/Questions/Class5Questions/InputType/FractionH8"},
    ],
  },
  {
    id: 9,
    headingtitle: "Geometry",
    subtopics: [
      { id: "I.1", title: "Which figure is being described?" ,linkTo: "/Questions/Class5Questions/SelectType/GeomentryI1"},
      { id: "I.2", title: "Number of sides in polygons"      ,linkTo: "/Questions/Class5Questions/InputType/GeomentryI2"},
      { id: "I.3", title: "Regular and irregular polygons"   ,linkTo: "/Questions/Class5Questions/SelectType/GeomentryI3"},
      { id: "I.4", title: "Types of angles"                  ,linkTo: "/Questions/Class5Questions/InputType/GeomentryI4"},
      { id: "I.5", title: "Measure angles with a protractor" ,linkTo: "/Questions/Class5Questions/SelectType/GeomentryI5"},
      { id: "I.6", title: "Lines and rotational symmetry"    ,linkTo: "/Questions/Class5Questions/InputType/GeomentryI6"},
    ],
  },
  {
    id: 10,
    headingtitle: "Measurement",
    subtopics: [
      { id: "J.1", title: "Compare and convert metric units of length"     ,linkTo: "/Questions/Class5Questions/SelectType/MeasureJ1"},
      { id: "J.2", title: "Compare and convert metric units of mass"       ,linkTo: "/Questions/Class5Questions/InputType/MeasureJ2"},
      { id: "J.3", title: "Compare and convert metric units of volume"     ,linkTo: "/Questions/Class5Questions/SelectType/MeasureJ3"},
      { id: "J.4", title: "Choose the more reasonable temperature"         ,linkTo: "/Questions/Class5Questions/InputType/MeasureJ4"},
      { id: "J.5", title: "Metric mixed units"                             ,linkTo: "/Questions/Class5Questions/SelectType/MeasureJ5"},
      { id: "J.6", title: " Choose the appropriate metric unit of measure" ,linkTo: "/Questions/Class5Questions/SelectType/MeasureJ6"},
    ],
  },
  {
    id: 11,
    headingtitle: "Mixed operations",
    subtopics: [
      { id: "K.1", title: "Add, subtract, multiply and divide whole numbers"                ,linkTo: "/Questions/Class5Questions/SelectType/MixedK1"},
      { id: "K.2", title:"Add, subtract, multiply and divide whole numbers: word problems"  ,linkTo: "/Questions/Class5Questions/InputType/MixedK2"},
      { id: "K.3", title: "Complete addition and subtraction sentences"                     ,linkTo: "/Questions/Class5Questions/SelectType/MixedK3"},
    ],
  },
  {
    id: 12,
    headingtitle: "Money",
    subtopics: [
      { id: "L.1", title: "Add and subtract money amounts"        ,linkTo: "/Questions/Class5Questions/InputType/MoneyL1"},
      { id: "L.2", title: "Add and subtract money: word problems" ,linkTo: "/Questions/Class5Questions/SelectType/MoneyL2"},
      { id: "L.3", title: "Multiply money amounts: word problems" ,linkTo: "/Questions/Class5Questions/InputType/MoneyL3"},
      { id: "L.4", title: "Divide money amounts: word problems"   ,linkTo: "/Questions/Class5Questions/SelectType/MoneyL4"},
      { id: "L.5", title: "Price lists"                           ,linkTo: "/Questions/Class5Questions/InputType/MoneyL5"},
    ],
  },
  {
    id: 13,
    headingtitle: "Multiplication",
    subtopics: [
      { id: "M.1", title: "Multiply by one-digit numbers"                    ,linkTo: "/Questions/Class5Questions/InputType/MultiM1"},
      { id: "M.2", title: "Multiply by one-digit numbers: word problems"     ,linkTo: "/Questions/Class5Questions/SelectType/MultiM2"},
      { id: "M.3", title: "Multiply numbers ending in zeroes"                ,linkTo: "/Questions/Class5Questions/InputType/MultiM3"},
      { id: "M.4", title: "Multiply numbers ending in zeroes: word problems" ,linkTo: "/Questions/Class5Questions/SelectType/MultiM4"},
      { id: "M.5", title: "Multiply 2-digit numbers by 3-digit numbers"      ,linkTo: "/Questions/Class5Questions/InputType/MultiM5"},
      { id: "M.6", title: "Multiply three or four numbers"                   ,linkTo: "/Questions/Class5Questions/SelectType/MultiM6"},
      { id: "M.7", title: "Properties of multiplication"                     ,linkTo: "/Questions/Class5Questions/InputType/MultiM7"},
    ],
  },
  {
    id: 14,
    headingtitle: "Number theory",
    subtopics: [{ id: "N.1", title: "Even or odd: arithmetic rules" ,linkTo: "/Questions/Class5Questions/SelectType/NumberN1"}],
  },
  {
    id: 15,
    headingtitle: "Patterns",
    subtopics: [
      { id: "O.1",title: "Patterns of equivalent fractions"         ,linkTo: "/Questions/Class5Questions/InputType/PatternO1"},
      { id: "O.2", title: "Complete an increasing number sequence"  ,linkTo: "/Questions/Class5Questions/SelectType/PatternO2"},
      { id: "O.3", title: "Complete a geometric number sequence"    ,linkTo: "/Questions/Class5Questions/InputType/PatternO3"},
      { id: "O.4", title: "Number sequences: mixed review"          ,linkTo: "/Questions/Class5Questions/SelectType/PatternO4"},
      { id: "O.5", title: "Time patterns"                           ,linkTo: "/Questions/Class5Questions/InputType/PatternO5"},
    ],
  },
  {
    id: 16,
    headingtitle: "Place values",
    subtopics: [
      { id: "P.1", title: "Place values"                    ,linkTo: "/Questions/Class5Questions/SelectType/PlaceP1"},
      { id: "P.2", title: "Convert between place values"    ,linkTo: "/Questions/Class5Questions/InputType/PlaceP2"},
      { id: "P.3", title: "Place values in decimal numbers" ,linkTo: "/Questions/Class5Questions/SelectType/PlaceP3"},
    ],
  },

  {
    id: 17,
    headingtitle: "Subtraction",
    subtopics: [
      { id: "Q.1", title: "Subtract whole numbers"                ,linkTo: "/Questions/Class5Questions/InputType/SubQ1"},
      { id: "Q.2", title: "Subtract whole numbers: word problems" ,linkTo: "/Questions/Class5Questions/SelectType/SubQ2"},
      { id: "Q.3", title: "Complete subtraction sentences"        ,linkTo: "/Questions/Class5Questions/InputType/SubQ3"},
      { id: "Q.4", title: "Fill in the missing digits"            ,linkTo: "/Questions/Class5Questions/SelectType/SubQ4"},
    ],
  },

  {
    id: 18,
    headingtitle: "Time",
    subtopics: [
      { id: "R.1", title: "Convert time units"                       ,linkTo: "/Questions/Class5Questions/InputType/TimeR1"},
      { id: "R.2", title: "Add and subtract mixed time units"        ,linkTo: "/Questions/Class5Questions/SelectType/TimeR2"},
      { id: "R.3", title: "Elapsed time"                             ,linkTo: "/Questions/Class5Questions/InputType/TimeR3"},
      { id: "R.4", title: "Find start and end times: word problems"  ,linkTo: "/Questions/Class5Questions/SelectType/TimeR4"},
      { id: "R.5", title: "Convert between 12-hour and 24-hour time" ,linkTo: "/Questions/Class5Questions/SelectType/TimeR5"},
    ],
  },
];

const TopicList = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Class 5 Maths Topics</h1>
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