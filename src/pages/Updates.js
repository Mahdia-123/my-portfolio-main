import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Updates.css";

export default function Updates() {
  // Wrap messages in useMemo to make them stable
  const updateMessages = useMemo(
    () => [
      "🚀 New feature deployed!",
      "🐛 Bug fix in authentication module.",
      "⚡ Server performance improved.",
      "🎨 Updated UI styles.",
      "🔒 Security patch applied.",
    ],
    []
  );

  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomMessage =
        updateMessages[Math.floor(Math.random() * updateMessages.length)];
      setUpdates((prev) => [{ id: Date.now(), text: randomMessage }, ...prev]);
    }, 15000);

    return () => clearInterval(interval);
  }, [updateMessages]); // include dependency — ESLint is happy

  return (
    <div className="updates-panel">
      <h2 className="title">📢 Project Updates</h2>
      <div className="updates-list">
        <AnimatePresence>
          {updates.map((update) => (
            <motion.div
              key={update.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className="update-item"
            >
              {update.text}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
