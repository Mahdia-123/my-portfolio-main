import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import Navbar from "../components/Navbar";
import Rating from "./Rating";
import "./Projects.css";

export default function Projects() {
  const comingSoon = ["Coming Soon..."];
  const projects = [
    {
      img: "images/clock.png",
      link: "https://worldbest-clock.netlify.app/",
      title: "Clock App",
      subTitle: "Built with HTML, CSS, and JavaScript",
    },
    {
      img: "images/dictionary-app.png",
      link: "https://vanilla-dictionary-app.netlify.app/",
      title: "Dictionary App",
      subTitle: "Built with React",
    },
    {
      img: "images/landaing-website.png",
      link: "https://kabul-landing-page.netlify.app/",
      title: "Kabul Landing Page",
      subTitle: "Built with HTML, CSS, JavaScript",
    },
    {
      img: "images/AI-poem-generator.png",
      link: "https://afghan-ai-peom-generator.netlify.app/",
      title: "AI Poem Generator",
      subTitle: "Built with HTML, CSS, JavaScript and AI",
    },
    {
      img: "images/vanilla-weather-app.png",
      link: "https://vanillasweatherapp.netlify.app/",
      title: "Vanilla Weather App",
      subTitle: "Built with HTML, CSS, JavaScript and API",
    },
    {
      img: "images/react-weather-app.png",
      link: "https://vanilla-magical-weather-app.netlify.app/",
      title: "React Weather App",
      subTitle: "Built with React ",
    },
    {
      img: "images/Screen Shot 2025-08-07 at 5.05.39 PM.png",
      link: "https://freelance-invoice-manager-app.netlify.app/",
      title: "Invoice Manager App",
      subTitle: "Built with HTML, CSS and Javascript",
    },
    {
      img: "images/Screen Shot 2025-08-02 at 5.08.58 PM.png",
      link: "https://nine-photo-gallery-app.netlify.app/",
      title: "React Gallery App",
      subTitle: "Built with React ",
    },
    {
      img: "images/book tracker app.png",
      link: "https://book-tracker-app-for-all.netlify.app/",
      title: "Book Tracker App",
      subTitle: "Built with HTML, CSS and JavaScript",
    },
    {
      img: "images/school landing page.png",
      link: "https://noor-high-school.netlify.app/",
      title: "Noor High School",
      subTitle: "Built with HTML, CSS and JavaScript",
    },
    {
      img: "images/Screen Shot 2025-08-15 at 6.23.47 PM.png",
      link: "https://my-smart-to-do-list.netlify.app/",
      title: "Smart To-Do List",
      subTitle: "Built with HTML, CSS and JavaScript",
    },
    {
      img: "images/Screen Shot 2025-08-17 at 11.21.54 AM.png",
      link: "https://my-friendly-to-do-list.netlify.app/",
      title: "Simple To-Do List",
      subTitle: "Built with React",
    },
  ];

  return (
    <div>
      <header>
        <div className="header-grid">
          <div>
            <h2 className="heading2">Expense Tracker App</h2>

            <p className="mt-5">
              The Expense Tracker App is a simple and user-friendly tool
              designed to help individuals manage their daily spending. Users
              can add expenses with a description, amount, and category, and the
              app automatically organizes them into a list. It also provides a
              clear summary of total expenses, making it easier to track
              financial habits.
            </p>

            <h3 className="coming-soon">
              <Typewriter
                options={{
                  strings: comingSoon,
                  autoStart: true,
                  delay: 100,
                  pauseFor: 4000,
                  loop: true,
                  cursor: "",
                }}
              />
            </h3>
          </div>
          <div className="header-card">
            <a
              href="images/Screen Shot 2025-08-21 at 9.47.36 AM.png"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="images/Screen Shot 2025-08-21 at 9.47.36 AM.png"
                alt="Expense Tracker"
                className="card-img img-fluid"
              />
            </a>
            <h2 className="comming-title">Expense Tracker App</h2>
            <p className="comming-subtitle">Build with React</p>
            <a
              href="https://modern-expense-tracker-app.netlify.app/"
              className="comming-project-link"
            >
              {" "}
              Lunch Project
            </a>
          </div>
        </div>
      </header>
      <div className="project">
        <h1>Take a look at what I have been Working on!</h1>
        <div className="projects-grid">
          {projects.map(function (pro, index) {
            return (
              <div className="card" key={index}>
                <a href={pro.link} target="_blank" rel="noreferrer">
                  <img
                    src={pro.img}
                    alt={`Project ${index}`}
                    className="img-fluid"
                  />
                </a>
                <h2 className="heading mb-3">{pro.title}</h2>
                <p className="mb-2 subtitle">{pro.subTitle}</p>
                <a
                  href={pro.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  Launch Project
                </a>
                <Rating />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
