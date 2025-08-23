import React, { useState } from "react";
import Navbar from "../components/Navbar";

import "../components/Footer.css";
import "./Achievements.css";

export default function Achievements() {
  const [changeTheme, setChangeTheme] = useState("white");
  function handleTheme() {
    setChangeTheme((prev) => (prev === "white" ? "black" : "white"));
  }

  const certificates = [
    {
      img: "achivements/187437.png",
      link: "https://www.shecodes.io/certificates/aa7a79f80dfe22ceb22cc9a215f8bbf2",
    },
    {
      img: "achivements/205971.png",
      link: "https://www.shecodes.io/certificates/b2818f24a9f8afefb0ca0c9eac0a1203",
    },
    {
      img: "achivements/195918.png",
      link: "https://www.shecodes.io/certificates/fe6e8954ff6c710fbeb4353023aaa279",
    },
    {
      img: "achivements/206198.png",
      link: "https://www.shecodes.io/certificates/1d8cd6f95fba22e797f7566f2ac96b87",
    },
    {
      img: "achivements/233907.png",
      link: "https://www.shecodes.io/certificates/13f6b8673fb5e961eaaff2f24a7e55f3",
    },
    {
      img: "achivements/233908.png",
      link: "https://www.shecodes.io/certificates/b8fc681d5ffe44f10e64a7e586d1526d",
    },
    {
      img: "achivements/239689.png",
      link: "https://www.shecodes.io/certificates/d9752f1c3e81660bdb662af011f84ae8",
    },
    {
      img: "achivements/240299.png",
      link: "https://www.shecodes.io/certificates/84efca548b15c4e3ebcb74ecb36aa5d0",
    },
    {
      img: "achivements/243963.png",
      link: "https://www.shecodes.io/certificates/84efca548b15c4e3ebcb74ecb36aa5d0",
    },
  ];

  return (
    <div className={`achievement-container ${changeTheme}`}>
      <section id="certificates">
        <h2 className="mt-5 mb-5">Certificates & Achievements</h2>

        <div className="certificates grid grid-3-columns">
          {certificates.map((cert, index) => (
            <div key={index}>
              <a href={cert.img} target="_blank" rel="noreferrer">
                <img
                  src={cert.img}
                  alt={`certificate-${index}`}
                  className="img-fluid"
                />
              </a>
              <a
                href={cert.link}
                className="certify-link"
                target="_blank"
                rel="noreferrer"
              >
                Certificate ID
              </a>
            </div>
          ))}
        </div>

        <div className="grid grid-1-columns">
          <div>
            <a
              href="achivements/front-end-developer-certificate.png"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="achivements/front-end-developer-certificate.png"
                alt="Front End Developer Certificate"
                className="img-fluid small-image"
              />
            </a>
            <a
              href="https://www.shecodes.io/diplomas/ed7355d239aa2fd0eb00fd0411a51318"
              className="certify-link"
              target="_blank"
              rel="noreferrer"
            >
              Certificate ID
            </a>
          </div>
        </div>
      </section>
      <div className="footer">
        <button className="toggle-theme" onClick={handleTheme}>
          Change Theme
        </button>
        <div className="socialLinks">
          <div class="d-flex justify-content-center text-center contactLinks">
            <div>
              <a
                href="https://github.com/Mahdia-123"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa-brands fa-github"></i>
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/mahdia-khamoosh-a2abb9364"
                rel="noreferrer"
                target="_blank"
              >
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </div>
            <div>
              <a
                href="mailto:fosoonryan601@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa-regular fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
