import React from "react";

import "./Home.css";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Qoutes from "./Qoutes";

export default function Home() {
  return (
    <div>
      <section className="Hero">
        <h2>Hi, I am</h2>
        <h1 className="mt-3">Mahdia Khamoosh</h1>
        <h3 className="mt-3">Front-end web developer based in Afghanistan</h3>
        <div className="about-me mt-5">
          <Link to="/about">About me</Link>
        </div>
        <Qoutes />
      </section>
      <section className="first-section-fluid">
        <h1 className="mb-5">Some of my featured projects</h1>
        <div class="row g-5">
          <div class="col-md-6">
            <img
              src="/images/vanilla-weather-app.png"
              alt="weather-app"
              class="img-fluid"
            />
          </div>
          <div class="col-md-6">
            <h2>Vanilla Weather App</h2>
            <p class="mt-3 mb-5">
              I built a Vanilla JavaScript weather app in SheCodes Plus, an
              advanced 8-week JavaScript coding workshop. Building upon my
              previously-gained knowledge, I also became skilled in Bootstrap,
              API’s, real-life development workflow, hosting, and advanced
              JavaScript. I combined all of these skills to create a
              fully-functioning weather app.
            </p>
            <Link to="/Projects">Learn More</Link>
          </div>
          <div class="col-md-6">
            <h2>Clock App</h2>
            <p class="mt-3 mb-5">
              This Clock Application is built using HTML, CSS, JavaScript, and
              styled with Bootstrap. It displays the current time dynamically
              and updates every second in real-time. The interface is responsive
              and clean, making it easy to use on both desktop and mobile
              devices. It was a fun way to practice DOM manipulation, time
              functions, and Bootstrap layout utilities.
            </p>
            <Link to="/Projects">Learn More</Link>
          </div>
          <div class="col-md-6">
            <img src="images/clock-app.png" class="img-fluid" alt="clock-app" />
          </div>
          <div class="col-md-6">
            <img
              src="images/AI-poem-generator.png"
              alt="ai-poem-generator"
              class="img-fluid"
            />
          </div>
          <div class="col-md-6">
            <h2>AI Poem Generator App</h2>
            <p class="mt-3 mb-5">
              The AI Poem Generator is a creative web application that uses
              artificial intelligence to craft unique poems on demand. Built
              with HTML and CSS for a clean and responsive design, it leverages
              Bootstrap to ensure a sleek, mobile-friendly interface. JavaScript
              powers the interactive features, communicating with an AI model to
              generate poetic verses based on user input or random prompts.
            </p>
            <Link to="/Projects">Learn More</Link>
          </div>
          <div class="col-md-6">
            <h2>React Weather App</h2>
            <p class="mt-3 mb-5">
              I created a responsive Weather App using React and React-Bootstrap
              to deliver real-time weather updates in a clean, user-friendly
              interface. The app fetches weather data from an external API and
              displays it with intuitive components such as cards, buttons, and
              grids styled using React-Bootstrap. It features search
              functionality for any city, dynamic weather icons, and temperature
              details, all wrapped in a modern, mobile-responsive layout. This
              project helped me strengthen my skills in React, API integration,
              and component-based UI design.
            </p>
            <Link to="/Projects">Learn More</Link>
          </div>
          <div class="col-md-6">
            <img
              src="images/react-weather-app.png"
              alt="react-weather-app"
              class="img-fluid"
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
