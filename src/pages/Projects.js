import React from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import Navbar from "../components/Navbar";
import Rating from "./Rating";
import "./Projects.css";
import { projects } from "../data/projects";

export default function Projects() {
  const comingSoon = ["Coming Soon..."];

  return (
    <div>
      <Navbar />
      <header>
        <div className="header-grid">
          <div>
            <h2 className="heading1">Expense Tracker App</h2>
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
              target="_blank"
              rel="noreferrer"
            >
              Launch Project
            </a>
          </div>
        </div>
      </header>

      <div className="project">
        <h1>Take a look at what I have been Working on!</h1>
        <div className="projects-grid">
          {projects.map((pro) => (
            <div className="card" key={pro.id}>
              <Link to={`/projects/${pro.id}`}>
                <img src={pro.img} alt={pro.title} className="img-fluid" />
              </Link>
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
          ))}
        </div>
      </div>
    </div>
  );
}
