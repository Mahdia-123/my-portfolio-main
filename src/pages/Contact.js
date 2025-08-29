import React, { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import Navbar from "../components/Navbar";
import "./Contact.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const [loading, setLoading] = useState(false);

  // error states
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  // touched states
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  });

  // email validation
  useEffect(() => {
    if (!touched.email) return; // skip until user touches
    if (email && !email.includes("@")) {
      setEmailError("Email must include @");
    } else {
      setEmailError("");
    }
  }, [email, touched.email]);

  // name validation
  useEffect(() => {
    if (!touched.name) return;
    if (name.trim() === "") {
      setNameError("Name is required");
    } else if (name.length < 2) {
      setNameError("Name must be at least 2 characters");
    } else {
      setNameError("");
    }
  }, [name, touched.name]);

  // message validation
  useEffect(() => {
    if (!touched.message) return;
    if (message.trim() === "") {
      setMessageError("Message is required");
    } else if (message.length < 10) {
      setMessageError("Message must be at least 10 characters");
    } else {
      setMessageError("");
    }
  }, [message, touched.message]);

  function handleSubmit(event) {
    event.preventDefault();

    // force show errors if fields are empty
    setTouched({ name: true, email: true, message: true });

    if (nameError || emailError || messageError) return;

    setLoading(true);

    setTimeout(() => {
      setSubmittedName(name);
      setSubmitted(true);
      setLoading(false);

      // clear inputs
      setName("");
      setEmail("");
      setMessage("");
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
            {/* Name */}
            <label htmlFor="name">
              Name<span>*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={() => setTouched((prev) => ({ ...prev, name: true }))}
            />
            {touched.name && nameError && (
              <p style={{ color: "red", fontSize: "12px", marginTop: "0" }}>
                {nameError}
              </p>
            )}

            {/* Email */}
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
              onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
            />
            {touched.email && emailError && (
              <p style={{ color: "red", fontSize: "12px", marginTop: "0" }}>
                {emailError}
              </p>
            )}

            {/* Message */}
            <label htmlFor="message">
              Message<span>*</span>
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message here..."
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onBlur={() => setTouched((prev) => ({ ...prev, message: true }))}
            />
            {touched.message && messageError && (
              <p style={{ color: "red", fontSize: "12px", marginTop: "0" }}>
                {messageError}
              </p>
            )}

            <button
              type="submit"
              disabled={!!(nameError || emailError || messageError)}
            >
              Send Message
            </button>
          </form>
        )}

        {submitted && (
          <p className="success-message">
            ✅ Thank you {submittedName}, your message was sent!
          </p>
        )}
      </section>
    </div>
  );
}
