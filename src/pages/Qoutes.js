import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import "./Qoutes.css";

export default function Qoutes() {
  const allQuotes = [
    "Believe you can and you're halfway there.",
    "The secret of getting ahead is getting started.",
    "Don’t watch the clock; do what it does. Keep going.",
    "Your limitation—it’s only your imagination.",
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    "Success doesn’t just find you. You have to go out and get it.",
  ];

  const [quote] = useState(
    allQuotes[Math.floor(Math.random() * allQuotes.length)]
  );

  return (
    <div className="Quotes">
      {allQuotes.map(function (qoute, index) {
        if (index === 0) {
          return (
            <div key={index}>
              <Typewriter
                options={{
                  strings: [`"${quote}"`],
                  autoStart: true,
                  delay: 60, // typing speed
                  pauseFor: 4000,
                  loop: true,
                  cursor: "",
                }}
              />
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}
