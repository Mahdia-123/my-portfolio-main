import React, { useState, useEffect } from "react";
import "./Rating.css";

export default function Rating() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [allRatings, setAllRatings] = useState([]);

  useEffect(() => {
    const storedRatings = JSON.parse(localStorage.getItem("ratings")) || [];
    setAllRatings(storedRatings);
  }, []);

  const handleRate = (value) => {
    setRating(value);

    let userId = localStorage.getItem("userId");
    if (!userId) {
      userId = Date.now().toString();
      localStorage.setItem("userId", userId);
    }

    const updatedRatings = allRatings.filter((r) => r.userId !== userId);
    updatedRatings.push({ userId, rating: value });

    setAllRatings(updatedRatings);
    localStorage.setItem("ratings", JSON.stringify(updatedRatings));
  };

  const averageRating = allRatings.length
    ? (
        allRatings.reduce((sum, r) => sum + r.rating, 0) / allRatings.length
      ).toFixed(1)
    : 0;

  return (
    <div className="rating-container">
      <h3>Rate my project</h3>
      <div className="stars">
        {[...Array(5)].map((star, index) => {
          const currentRating = index + 1;
          return (
            <button
              key={index}
              type="button"
              onClick={() => handleRate(currentRating)}
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(0)}
              style={{
                color: currentRating <= (hover || rating) ? "#f76b8a" : "gray",
                fontSize: "16px",
                cursor: "pointer",
                background: "none",
                border: "none",
                transition: "transform 0.9s ease",
              }}
            >
              ★
            </button>
          );
        })}
      </div>

      <button
        className="btn"
        onClick={() => alert(`You rated ${rating} stars`)}
      >
        Rate
      </button>
      <div className="border-bottom"></div>
      <div style={{ marginTop: "10px", color: "gray" }}>
        <p>Average Rating: {averageRating} ⭐</p>
        <p>Total Ratings: {allRatings.length}</p>
      </div>
    </div>
  );
}
