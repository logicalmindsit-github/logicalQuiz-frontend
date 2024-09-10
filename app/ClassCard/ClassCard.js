"use client";

import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Learning from "../LandingPage/Learning";

const cardData = [
  {
    id: 11,
    title: "LKG",
    description: "Description for LKG",
    image: "https://i.postimg.cc/zBHjzJzb/LKG.png",
    linkTo: "/classtopics/ClassLKGTopics", // Updated route for LKG card
  },
  {
    id: 12,
    title: "UKG",
    description: "Description for UKG",
    image: "https://i.postimg.cc/rwYxKvYS/UKG.png",
    linkTo: "/classtopics/UKGTopics", // Updated route for UKG card
  },
  {
    id: 13,
    title: "Class 1",
    description: "Description Class 1",
    image: "https://i.postimg.cc/R0FdY72T/1.png",
    linkTo: "/classtopics/Class1Topics",
  },
  {
    id: 14,
    title: "Class 2",
    description: "Description for Comparing ",
    image: "https://i.postimg.cc/sxVvncNj/2.png",
    linkTo: "/classtopics/Class2Topics",
  },
  {
    id: 15,
    title: "Class 3",
    description: "Description for Class 3 ",
    image: "https://i.postimg.cc/Z5q6YTjb/3.png",
    linkTo: "/classtopics/Class3Topics",
  },
  {
    id: 16,
    title: "Class 4",
    description: "Description for Class 4",
    image: "https://i.postimg.cc/QdVWGfxV/4.png",
    linkTo: "/classtopics/Class4Topics",
  },
  {
    id: 17,
    title: "Class 5",
    description: "Description for Class 5",
    image: "https://i.postimg.cc/FRXfSmbJ/5.png",
    linkTo: "/classtopics/Class5Topics",
  },
  {
    id: 18,
    title: "Class 6",
    description: "Description for class 6",
    image: "https://i.postimg.cc/gktnD3qp/6.png",
    linkTo: "/classtopics/Class6Topics",
  },
  // Add more objects for other cards here
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
      <div>
        <h1
          style={{
            color: "#fd8218",
            textAlign: "left",
            fontSize: "25px",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          {/* Classes */}
        </h1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {cardData.map((card) => (
            <div
              key={card.id}
              style={{ margin: "10px", cursor: "pointer" }}
              onClick={() => handleCardClick(card.id)}
            >
              {card.linkTo ? ( // Check if linkTo is defined
                <Link href={card.linkTo} passHref>
                  <Card sx={{ maxWidth: 200, minWidth: 100 }}>
                    <CardMedia
                      component="img"
                      height="120"
                      image={card.image}
                      alt={card.title}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        align="center"
                      >
                        {card.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        align="center"
                      >
                        {card.description}
                      </Typography>
                      {selectedCard === card.id && (
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          align="center"
                          style={{ marginTop: "5px" }}
                        >
                          {/* {card.title} selected */}
                        </Typography>
                      )}
                    </CardContent>
                  </Card>
                </Link>
              ) : (
                <Card sx={{ maxWidth: 200, minWidth: 200 }}>
                  <CardMedia
                    component="img"
                    height="120"
                    image={card.image}
                    alt={card.title}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      align="center"
                    >
                      {card.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      align="center"
                    >
                      {card.description}
                    </Typography>
                    {selectedCard === card.id && (
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        align="center"
                        style={{ marginTop: "5px" }}
                      >
                        {/* {card.title} selected */}
                      </Typography>
                    )}
                  </CardContent>
                </Card>
              )}
            </div>
          ))}
        </div>
      </div>
      <style>
        {`
         .container {
              display: flex;
              align-items: center;
              justify-content: center;
              background-size: cover;
              background-position: center;
              min-height: 100vh
            }
        .card {
          position: relative;
          width: 200px;
          height: 200px;
          border-radius: 14px;
          z-index: 1111;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
        }
        
        .bg {
          position: absolute;
          top: 5px;
          left: 5px;
          width: 100%;
          height: 240px;
          z-index: 2;
          background: rgba(255, 255, 255, .95);
          backdrop-filter: blur(24px);
          border-radius: 10px;
          overflow: hidden;
          outline: 2px solid white;
        }
        
        .blob {
          position: absolute;
          z-index: 1;
          top: 50%;
          left: 50%;
          width: 150px;
          height: 150px;
          border-radius: 50%;
          background-color: #ff0000;
          opacity: 1;
          filter: blur(12px);
          animation: blob-bounce 5s infinite ease;
        }
        
        @keyframes blob-bounce {
          0% {
            transform: translate(-100%, -100%) translate3d(0, 0, 0);
          }
          25% {
            transform: translate(-100%, -100%) translate3d(100%, 0, 0);
          }
          50% {
            transform: translate(-100%, -100%) translate3d(100%, 100%, 0);
          }
          75% {
            transform: translate(-100%, -100%) translate3d(0, 100%, 0);
          }
          100% {
            transform: translate(-100%, -100%) translate3d(0, 0, 0);
          }
        }
        `}
      </style>
    </div>
    </div>
  );
}
