import React from "react";
import { useParams, Link } from "react-router-dom";
import "./ProjectsDetails.css";

export default function ProjectDetail({ projects }) {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project)
    return (
      <h2 style={{ textAlign: "center", marginTop: "50px" }}>
        Project Not Found
      </h2>
    );

  return (
    <div className="project-detail-grid">
      <div className="project-detail-image">
        <img
          src={process.env.PUBLIC_URL + "/" + project.img}
          alt={project.title}
        />
      </div>
      <div className="project-detail-info">
        <h2>{project.title}</h2>
        <h4>{project.subTitle}</h4>
        <p>{project.description}</p>

        <br />
        <Link to="/projects">← Back to Projects</Link>
      </div>
    </div>
  );
}
