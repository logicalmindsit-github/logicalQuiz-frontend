import React from "react";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import Image from "next/image";

const Footer2 = () => {
  return (
    <div style={styles.footer3}>
  
      <div style={{ marginTop: "50px" }}>
        <p>
          Company | Blog | Help centre | User guides | Tell us what you think |
          Testimonials | Contact us | Terms of service | Privacy policy
        </p>

        <div className="flex justify-center">
          <p className="text-gray-900 font-bold text-1xl pb-3 hover:text-blue-900 cursor-pointer">
            Logical Minds IT
          </p>
        </div>
      </div>

      <div className="flex justify-center gap-6 pb-5">
        <a
          href="http://www.linkedin.com/in/logical-mindsit-it/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
        </a>
        <a
          href="http://www.facebook.com/profile.php?id=61551543163067"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="text-2xl cursor-pointer hover:text-blue-600" />
        </a>
        <a
          href="https://www.instagram.com/logical_minds_it/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="text-2xl cursor-pointer hover:text-pink-600" />
        </a>
        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
        </a>
      </div>
     <Link href={"/"}>
     <Image src="/logo4.png"alt="Your Image"  width={200} height={50}  /></Link>
      <h1 className="text-gray-800 font-semibold hover:text-red-600 cursor-pointer pl-2">
        © 2024-2025 All rights reserved. Fowllow us
      </h1>
    </div>
  );
};

export default Footer2;

let styles = {
  footer3: {
    color: "black",
    padding: "20px",
    textAlign: "center",
    marginTop: "20px",
    maxWidth: "100%",
    bottom: 0,
    left: 0,
  },
};
