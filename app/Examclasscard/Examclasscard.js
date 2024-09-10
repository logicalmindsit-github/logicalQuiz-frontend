"use client";

import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Learning from "../LandingPage/Learning";
import Head from "next/head";
const cardData = [
  {
    id: 13,
    title: "Class 1",
    description: "QuestionPapers for Class 1",
    image: "https://i.postimg.cc/fbNwPDwv/47.png",
    linkTo: "/Examcard/Examclass1",
  },
  {
    id: 14,
    title: "Class 2",
    description: "QuestionPapers for Class 2 ",
    image: "https://i.postimg.cc/ZnMbsNR9/41.png",
    linkTo: "/Examcard/Examclass2",
  },
  {
    id: 15,
    title: "Class 3",
    description: "QuestionPapers for Class 3 ",
    image: "https://i.postimg.cc/3RLYWG2L/42.png",
    linkTo: "/Examcard/Examclass3",
  },
  {
    id: 16,
    title: "Class 4",
    description: "QuestionPapers for Class 4",
    image: "https://i.postimg.cc/fTVTt82Y/48.png",
    linkTo: "/Examcard/Examclass4",
  },
  {
    id: 17,
    title: "Class 5",
    description: "QuestionPapers for Class 5",
    image: "https://i.postimg.cc/g0HYFQjb/44.png",
    linkTo: "/Examcard/Examclass5",
  },
  {
    id: 18,
    title: "Class 6",
    description: "QuestionPapers for class 6",
    image: "https://i.postimg.cc/XYFjxp0J/45.png",
    linkTo: "/Examcard/Examclass6",
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
    <Head>  <style>
        {`
         .container {
          display: flex;
          align-items: center;
          justify-content: center;
          background-image: url("https://i.postimg.cc/sgH4Kx4b/Background.png");
          background-size: cover;
          background-position: center;
          min-height: 100vh;
        }

        .card {
          position: relative;
          width: 150px;
          height: 100px;
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
          width: 190px;
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
      </style></Head>
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
    
    </div>
   </div>
  );
}