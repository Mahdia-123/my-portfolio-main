import React from "react";
import "./Footer.css";
import Updates from "../pages/Updates";
import NewDate from "./NewDate";
export default function Footer() {
  return (
    <div>
      {" "}
      <footer>
        <div className="grid">
          <div>
            <div class="email text-center mb-5">
              <a href="mailto:fosoonryan601@gmail.com" rel="noreferrer">
                fosoonryan601@gmail.com
              </a>
            </div>
            <div class="d-flex justify-content-center text-center contact-links">
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
            <p class="mt-5">
              This website was coded by Mahdia Khamoosh and is
              <span>
                <a
                  href="https://github.com/Mahdia-123/mahdia-khamoosh-portfolio"
                  rel="noreferrer"
                >
                  {" "}
                  open-sourced
                </a>
              </span>
            </p>
            <NewDate date={new Date()} />
          </div>
          <div>
            <Updates />
          </div>
        </div>
      </footer>
    </div>
  );
}
