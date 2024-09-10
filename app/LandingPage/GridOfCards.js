"use client";

import React, { useState } from "react";
import { Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

const GridOfCards = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const cardsData = [
    {
      image: "https://i.postimg.cc/wBd6B5Qy/1.png",
      title: "LKG",
      description: "",
      linkTo: "/classtopics/ClassLKGTopics",
      hoverImage:
        "https://i.postimg.cc/MKpZzKhX/Toady-We-Class-Measurment-Shapes-Video.gif",
    },
    {
      image: "https://i.postimg.cc/SssHQj3Y/2.png",
      title: "UKG",
      description: "",
      linkTo: "/classtopics/UKGTopics",
      hoverImage:
        "https://i.postimg.cc/NF7xDxgG/comparison-of-measurements.gif",
    },
    {
      image: "https://i.postimg.cc/bw1ZLw6n/3.png",
      title: "CLASS - 1",
      description: "",
      linkTo: "/classtopics/Class1Topics",
      hoverImage: "https://i.postimg.cc/Zq2L4GG9/Who-Many-Tress-Are-There.gif",
    },
    {
      image: "https://i.postimg.cc/MHyG5s5S/4.png",
      title: "CLASS - 2",
      description: "",
      linkTo: "/classtopics/Class2Topics",
      hoverImage: "https://i.postimg.cc/dDPhxMVG/compose.gif",
    },
    {
      image: "https://i.postimg.cc/0NTx4Yb2/5.png",
      title: "CLASS - 3",
      description: "",
      linkTo: "/classtopics/Class3Topics",
      hoverImage:
        "https://i.postimg.cc/FzmRyyWx/Cook-with-me-and-subscribe.gif",
    },
    {
      image: "https://i.postimg.cc/Ghm0q7qx/6.png",
      title: "CLASS - 4",
      description: "",
      linkTo: "/classtopics/Class4Topics",
      hoverImage: "https://i.postimg.cc/pLQF3d8r/Your-paragraph-text.gif",
    },
    {
      image: "https://i.postimg.cc/hjcZhvY1/7.png",
      title: "CLASS - 5",
      description: "",
      linkTo: "/classtopics/Class5Topics",
      hoverImage:
        "https://i.postimg.cc/3RzjYcwx/Cute-Welcome-Back-to-School-Animated-Video.gif",
    },
    {
      image: "https://i.postimg.cc/MGxmm4YW/8.png",
      title: "CLASS - 6",
      description: "",
      linkTo: "/classtopics/Class6Topics",
      hoverImage: "https://i.postimg.cc/d1ZdHj9P/profit-and-loss.gif",
    },
  ];

  return (
    <div
      style={{
        display: "grid",
        gap: "20px",
        padding: "20px",
        width: "90%",
        margin: "auto",
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        {cardsData.map((data, index) => (
          <Grid key={index} item xs={12} sm={6} md={3}>
            <Link href={data.linkTo} passHref>
              <CardLink>
                <Card
                  sx={{
                    maxWidth: 250,
                    cursor: "pointer",
                    position: "relative",
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <CardMedia
                    component="img"
                    style={{ height: "150px"}}
                    image={data.image}
                    alt={data.title}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      style={{ textAlign: "center", fontWeight: "bold"  }}
                    >
                      {data.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {data.description}
                    </Typography>
                    <div
                      style={{
                        display: hoveredIndex === index ? "block" : "none",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: "rgba(0, 0, 0, 0.7)",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "#fff",
                      }}
                    >
                      <Image
                        src={data.hoverImage}
                        alt={`${data.title} Hover`}
                        width={250} // Specify the width
                        height={150} // Specify the height
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                  </CardContent>
                </Card>
              </CardLink>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

const CardLink = ({ children }) => {
  return (
    <div style={{ cursor: "pointer", textDecoration: "none" }}>{children}</div>
  );
};

export default GridOfCards;
