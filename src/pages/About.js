import React from "react";
import "./About.css";

export default function About() {
  const socialLinks = [
    { icon: "fa-regular fa-envelope", links: "mailto:fosoonryan601@gmail.com" },
    { icon: "fa-brands fa-github", links: "https://github.com/Mahdia-123" },
    {
      icon: "fa-brands fa-linkedin",
      links: "https://www.linkedin.com/in/mahdia-khamoosh-a2abb9364",
    },
  ];

  const skills = [
    "Languages: HTML, CSS, JavaScript",
    "Frameworks & Libraries: React, Bootstrap, Tailwind CSS",
    "Tools & Platforms: Git, GitHub, Netlify",
    "Other Skills: Responsive Web Design, UI/UX Design, Progressive Web Apps (PWA), TypeScript basics",
    "Soft Skills: Problem-solving, creativity, teamwork, time management",
  ];

  return (
    <div className="about-page">
      <section className="about-header grid-2-columns">
        <div className="header-left">
          <h1>Mahdia Khamoosh</h1>
          <p className="subtitle">Front-end developer based in Afghanistan</p>

          <div className="links">
            <a
              href="/pdf-file/Mahdia-Khamoosh-CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="resume-btn"
            >
              📄 Resume
            </a>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.links}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="header-right">
          <img
            src="/images/089DF15D-CF83-4C3E-9052-14B6C471CE59.JPG"
            alt="mahdia-khamoosh"
            className="profile-pic"
          />
        </div>
      </section>

      <section className="about-me">
        <h2 className="heading2">About Me</h2>
        <div className="line"></div>
        <p>
          I’m Mahdia Khamoosh, a passionate Front-End Web Developer based in
          Afghanistan. With a background in journalism and technology, I bring
          strong communication skills together with my technical expertise to
          create modern, user-friendly, and responsive web applications.
        </p>
        <p>
          I have hands-on experience with HTML, CSS, JavaScript, React,
          Bootstrap, and Tailwind CSS, along with tools like Git, GitHub, and
          Netlify. I enjoy transforming ideas into clean and functional
          interfaces that provide seamless user experiences.
        </p>
        <p>
          My journey into web development started with a deep curiosity about
          technology and the freedom it provides to build and innovate. Since
          then, I’ve completed several coding workshops, gained certificates,
          and worked on personal projects that reflect my dedication to growth
          and creativity.
        </p>
        <p>
          Beyond coding, I value teamwork, problem-solving, and continuous
          learning. My goal is to become a skilled developer who contributes to
          impactful projects, explores advanced technologies, and eventually
          supports other women in tech who face barriers to education and
          opportunities.
        </p>
      </section>

      <section className="my-skills grid">
        <div>
          <img src="/images/skills.png" alt="skills" className="img" />
        </div>
        <div className="skill-description">
          <h1 className="skills-h1">My Skills</h1>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
