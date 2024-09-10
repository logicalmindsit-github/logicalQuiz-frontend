"use client";
import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  const footerStyle = {
    fontFamily: "Verdana, sans-serif",
    fontSize: "13px",
    lineHeight: "1.4em",
  };
  return (
    <>
      <div>
        <div
          className="bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-5"
          style={footerStyle}
        >
          <div className="p-5 ">
            <ul>
              <p className="text-gray-800 font-bold text-3xl pb-3 hover:text-blue-900 cursor-pointer">
                Logical Minds
              </p>
              <p className="text-gray-700 font-bold text-1xl pb-6 hover:text-orange-600 cursor-pointer">
                GATHERED AT ONCE
              </p>
              <div className="flex gap-6 pb-5">
                <a
                  href="http://www.linkedin.com/in/logical-mindsit-it/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
                </a>
                <a
                  href="https://www.facebook.com/LogicalMindsIT/"
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
            </ul>
            <div>
              <Link href={"/"}>
                <Image src="/logo4.png" alt="Logo" width={200} height={50} />
              </Link>
            </div>
          </div>
          <div className="p-5">
            <ul>
              <p className="text-gray-800 font-bold text-2xl pb-4">
                What we offer
              </p>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Membership
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Learning
              </li>
              {/* <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Awards
            </li> */}
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Report
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Curriuculam
              </li>
            </ul>
          </div>
          <div className="p-5">
            <ul>
              <p className="text-gray-800 font-bold text-2xl pb-4">Resources</p>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                <Link href="/" legacyBehavior>
                  <a>Helpdesk </a>
                </Link>
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                <Link href="/" legacyBehavior>
                  <a>Userguide</a>
                </Link>
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                <Link href="/Testimonials" legacyBehavior>
                  <a>Testimonials</a>
                </Link>
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                <Link href="/" legacyBehavior>
                  <a> Contact us </a>
                </Link>
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                <Link href="/" legacyBehavior>
                  <a> Feedback </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="p-5">
            <ul>
              <p className="text-gray-800 font-bold text-2xl pb-4">About</p>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Company
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Terms of services
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                <Link href="/" legacyBehavior>
                  <a>Privacy policy </a>
                </Link>
              </li>
              <div
                className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50"
                style={{ marginTop: "10px" }}
              ></div>
            </ul>
          </div>
        </div>
        <h1 className="bg-gray-50 text-gray-800 font-semibold text-center">
          © 2024-2025 All rights reserved.
        </h1>
      </div>
    </>
  );
}

export default Footer;
