import React from "react";
import { Link, useNavigate } from "react-router-dom";
export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div
      className="notFound"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <h1>404 Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist. 🙁</p>
      <Link onClick={() => navigate(-1)}> ⬅️ Go Back</Link>
    </div>
  );
}
