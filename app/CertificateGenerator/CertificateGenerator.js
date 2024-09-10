"use client";
import React, { useRef } from "react";

import Report from "../LandingPage/Report";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
const CertificateGenerator = () => {
  const canvasRef = useRef(null);
  const nameRef = useRef(null);

  const drawImage = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const name = nameRef.current.value;

    const image = new Image();
    image.crossOrigin = "anonymous";
    image.src = "Has sucessfully completed.jpg";

    image.onload = function () {
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

      ctx.font = "30px monotype corsiva";
      ctx.fillStyle = "#29e";
      ctx.textAlign = "center";
      // Calculate text width
      const textWidth = ctx.measureText(name).width;

      // Calculate position to center text horizontally
      const x = canvas.width / 2;

      // Calculate position to center text vertically
      const y = canvas.height / 2 + 30;

      // Draw text at centered position
      ctx.fillText(name, x, y);
    };
  };

  const handleNameChange = () => {
    drawImage();
  };

  const handleDownload = () => {
    const canvas = canvasRef.current;
    const downloadLink = document.createElement("a");
    downloadLink.href = canvas.toDataURL("image/jpeg");
    downloadLink.download = "Certificate - " + nameRef.current.value;
    downloadLink.click();
  };

  return (
    <div>
      <Report />
      <div className="container">
        <h1
          style={{ marginTop: "20px", fontSize: "30px", marginBottom: "30px" }}
        >
          Certificate Generator
        </h1>
        <label style={{ marginLeft: "20px", fontSize: "20px" }}>
          Name:
          <input
            ref={nameRef}
            type="text"
            onChange={handleNameChange}
            style={{ border: "2px solid grey", marginLeft: "20px" }}
          />
        </label>
      </div>
      <button
        onClick={handleDownload}
        style={{
          marginTop: "20px",
          fontSize: "20px",
          marginLeft: "140px",
          border: "2px solid white",
          backgroundColor: "blue",
          color: "white",
          padding: "10px",
        }}
      >
        Download
        <DownloadForOfflineIcon />
      </button>
      <canvas ref={canvasRef} height="350px" width="500px"></canvas>
    </div>
  );
};

export default CertificateGenerator;
