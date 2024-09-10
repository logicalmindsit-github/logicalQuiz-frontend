"use client";
import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Learning from "../LandingPage/Learning";

const cardData = [
  {
    id: 1,
    title: 'Addition',
    description: "Addition is a math operation where numbers are combined using the plus symbol (+)",
    image: 'https://i.postimg.cc/HnymhqQg/Addition.png',
    linkTo: '/AllTopics/Addition', 
  },
   {
       id: 2,
       title: 'Algebra',
       description: 
       "Algebra introduces using variables to represent unknown quantities and solving equations.",
       image: 'https://i.postimg.cc/nLhCPLMf/Algebra.png',
       linkTo: '/AllTopics/Algebra', 
     },
    {
      id: 3,
      title: 'Comparing',
      description: 
      "Comparing involves analyzing similarities and differences between objects, numbers, or concepts.",
      image: 'https://i.postimg.cc/fymL9tqm/comparing.png',
      linkTo: '/AllTopics/Comparing', 
    },
    {
      id: 4,
      title: 'Counting',
      description: 
      "Counting is the process of determining the quantity of objects or events by assigning numbers in a sequential order.",
      image: 'https://i.postimg.cc/1Rq4T2RX/counting.png',
      linkTo: '/AllTopics/Counting', 
    },
    
    {
      id: 5,
      title: 'Data and Graph',
      description:"Data and graphing involve organizing information and representing it visually through graphs or charts.",
      image: 'https://i.postimg.cc/yYhx6RZz/Data-and-graph.png',
      linkTo: '/AllTopics/DataGraph', 
    },
    {
      id: 6,
      title: 'Division',
      description:"Division is the mathematical operation of splitting a quantity into equal parts or groups.",
      image: 'https://i.postimg.cc/05MJvrn8/Division.png',
      linkTo: '/AllTopics/Division', 
    },
    {
      id: 7,
      title: 'Estimation',
      description:"Estimation is the process of making an educated guess or approximation of a value based on available information.",
      image:' https://i.postimg.cc/DwKvtwjY/Estimationn.png',
      linkTo: '/AllTopics/Estimation', 
    },
    {
      id: 8,
      title: 'Fractions',
      description:"Fractions represent parts of a whole, expressed as a ratio of two numbers: the numerator indicates the part, and the denominator indicates the whole.",
      image: 'https://i.postimg.cc/nzsMnwvd/Fraction.png',
      linkTo: '/AllTopics/Fraction', 
    },
  
    {
      id: 9,
      title: 'Geomentry',
      description:"Geometry deals with shapes, sizes, and properties of figures in space.",
      image: 'https://i.postimg.cc/k5YB3dt6/Geomentry.png',
      linkTo: '/AllTopics/Geomentry', 
    },
    {
      id: 10,
      title: 'Integers',
      description: "Integers are whole numbers, including positive, negative, and zero, without any fractional or decimal parts.",
      image: 'https://i.postimg.cc/kG2ShvMS/Integers.png',
      linkTo: '/AllTopics/Integer', 
    },
    {
      id: 11,
      title: 'Measurement',
      description:"Measurement involves determining the size, quantity, or extent of an object or event using standard units.",
      image: 'https://i.postimg.cc/cLZKfhSH/Measurement.png',
      linkTo: '/AllTopics/Measurement', 
    },
  
    {
      id: 12,
      title: 'Mixed Operations',
      description:"Mixed operations entail combining various arithmetic functions within a single mathematical expression.",
      image: 'https://i.postimg.cc/J7fHzmYj/Mixed-Operations.png',
      linkTo: '/AllTopics/Mixedoperation', 
    },
    {
      id: 13,
      title: 'Money',
      description:"Money in mathematics involves the application of numerical concepts to financial transactions, budgeting, and economic analysis.",
      image: 'https://i.postimg.cc/FR2zzgph/Money.png',
      linkTo: '/AllTopics/Money', 
    },
    
    {
      id: 14,
      title: 'Multiplications',
      description:"Multiplication is the arithmetic operation of repeated addition or combining equal groups to find the total.",
      image: 'https://i.postimg.cc/t7GbQB5V/Multiplication.png',
      linkTo: '/AllTopics/Multiplication', 
    },
    {
      id: 15,
      title: 'Number theory',
      description:"Number theory explores the properties and relationships of integers, including factors, primes, and divisibility.",
      image: 'https://i.postimg.cc/nhYFZfNV/Number-Theory.png',
      linkTo: '/AllTopics/Numbertheory', 
    },
    {
      id: 16,
      title: 'Patterns',
      description:"Patterns involve identifying recurring sequences or arrangements in numbers, shapes, or events.",
      image: 'https://i.postimg.cc/RZRWdtST/Pattern.png',
      linkTo: '/AllTopics/Patterns', 
    },
    {
      id: 17,
      title: 'Place values',
      description:"Place values represent the positional significance of digits in a number, determining their contribution to its overall value.",
      image: 'https://i.postimg.cc/5tsfYqxZ/Place-and-values.png',
      linkTo: '/AllTopics/PlaceValues', 
    },
    {
      id: 18,
      title: 'Ratio and Propotions',
      description:"Ratio: Comparison of two quantities by division; Proportion: Equation stating two ratios are equal.",
      image: 'https://i.postimg.cc/jdfqg7X7/Ratio.png',
      linkTo: '/AllTopics/Ratiopropotion', 
    },
    {
      id: 19,
      title: 'Subtraction',
      description:"Subtraction is the arithmetic operation of finding the difference between two numbers or quantities.",
      image: 'https://i.postimg.cc/JngmKrHx/Subtraction.png',
      linkTo: '/AllTopics/Subtraction', 
    },
    {
      id: 20,
      title: 'Timer',
      description:"A timer is a device or tool used to measure or track the passage of time.",
      image: 'https://i.postimg.cc/L6SQwqKW/Timer.png',
      linkTo: '/AllTopics/Timer', 
    },

  ];

export default function RowCard() {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (cardId) => {
    setSelectedCard(cardId === selectedCard ? null : cardId);
  };

  return (
    <div>
        <Learning />
    <div className="container">
      <div className="row">
        {cardData.map((card) => (
          <div key={card.id} className="col">
            <div className="card-container">
              {card.linkTo ? (
                <Link href={card.linkTo} passHref>
                  <div
                    className={`card ${selectedCard === card.id ? "selected" : ""}`}
                    onClick={() => handleCardClick(card.id)}
                  >
                    <img src={card.image} alt={card.title} />
                    <CardContent className="card__content">
                      <Typography variant="h4" component="h2" className="card__title">
                        {card.title}
                      </Typography>
                      <Typography variant="body1" className="card__description">
                        {card.description}
                      </Typography>
                    </CardContent>
                  </div>
                </Link>
              ) : (
                <div
                  className={`card ${selectedCard === card.id ? "selected" : ""}`}
                  onClick={() => handleCardClick(card.id)}
                >
                  <img src={card.image} alt={card.title} />
                  <CardContent className="card__content">
                    <Typography variant="h4" component="h2" className="card__title">
                      {card.title}
                    </Typography>
                    <Typography variant="body1" className="card__description">
                      {card.description}
                    </Typography>
                  </CardContent>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          
          background-size: cover;
          background-position: center;
          min-height: 100vh;
          padding: 20px;
        }
        .row {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
        }
        .col {
          flex: 1 0 200px;
          margin: 10px;
        }
        .card-container {
          width: 200px;
          height: 220px;
          position: relative;
          perspective: 1000px;
          transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);

        }
        .card {
          position: relative;
          width: 230px;
          height: 200px;
          background-color: lightblue;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .card:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 16px #000000;
          background-color: #F8F8FF;
          color: #808080;
        }
        .card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          top: 0;
          left: 0;
          transition: opacity 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .card:hover img {
          opacity: 0;
        }
        .card__content {
          color: red;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          padding: 20px;
          box-sizing: border-box;
          background-color: #f2f2f2;
          transform: rotateX(-90deg);
          transform-origin: bottom;
          transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .card:hover .card__content {
          transform: rotateX(0deg);
        }
        .card__title {
          margin: 0;
          padding-left: 5px;
          font-size: 24px;
          color: #000000;
          font-weight: 700;
        }
        .card__description {
          margin: 10px 0 0;
          font-size: 12px;
          color: #000000;
          line-height: 1.4;
        }
        @media only screen and (max-width: 768px) {
          .container {
            padding: 10px;
          }
          .row {
            justify-content: center;
          }
          .col {
            flex: 1 0 100%;
            margin: 10px 0;
          }
        }

        @media only screen and (max-width: 480px) {
          .card-container {
            width: 100%;
            height: auto;
          }
          .card {
            width: 100%;
            height: auto;
            margin: 5px 0;
          }
        }
      `}</style>
      </div>
      </div>
  );
}