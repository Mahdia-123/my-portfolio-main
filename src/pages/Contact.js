import React, { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import Navbar from "../components/Navbar";
import "./Contact.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      if (email && !email.includes("@")) {
        setError("Email must include @");
      } else {
        setError("");
      }
    }, 400);

    return () => clearTimeout(handler);
  }, [email]);

  function handleSubmit(event) {
    event.preventDefault();

    if (error) return;

    setLoading(true);

    setTimeout(() => {
      setMsg(`Thank you ${name}, your message was sent!`);
      setSubmitted(true);
      setLoading(false);
      setName("");
      setEmail("");
    }, 2000);
  }

  return (
    <div>
      <Navbar />
      <section className="contact-section wrapper">
        <h2>Contact Me</h2>

        {loading && (
          <div className="spinner">
            <ThreeDots
              height="50"
              width="50"
              radius="9"
              color="#66bfbf"
              ariaLabel="three-dots-loading"
            />
          </div>
        )}

        {!submitted && !loading && (
          <form
            onSubmit={handleSubmit}
            action="https://formspree.io/f/mrblkobl"
            method="POST"
            className="contact-form"
          >
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="email">
              Email<span>*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && (
              <p style={{ color: "red", fontSize: "12px", marginTop: "0" }}>
                {error}
              </p>
            )}{" "}
            <label htmlFor="message">
              Message<span>*</span>
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message here..."
              required
            ></textarea>
            <button type="submit" disabled={!!error}>
              Send Message
            </button>
          </form>
        )}

        {submitted && msg && <p className="success-message">{msg}</p>}
      </section>
    </div>
  );
}
