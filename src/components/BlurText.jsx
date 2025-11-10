import React, { useEffect, useState } from "react";

export default function BlurText({
  text,
  delay = 100,
  animateBy = "letters",
  direction = "top",
  className = "",
  onAnimationComplete,
}) {
  const [visibleIndexes, setVisibleIndexes] = useState([]);

  useEffect(() => {
    const parts = animateBy === "words" ? text.split(" ") : text.split("");
    parts.forEach((_, i) => {
      setTimeout(() => {
        setVisibleIndexes((prev) => [...prev, i]);
        if (i === parts.length - 1 && onAnimationComplete) {
          onAnimationComplete();
        }
      }, i * delay);
    });
  }, [text, delay, animateBy, onAnimationComplete]);

  const parts = animateBy === "words" ? text.split(" ") : text.split("");

  return (
    <h1 className={`overflow-hidden ${className}`}>
      {parts.map((part, i) => (
        <span
          key={i}
          className={`inline-block transition-all duration-700 ease-out ${
            visibleIndexes.includes(i)
              ? "opacity-100 blur-0 translate-y-0"
              : direction === "top"
              ? "opacity-0 blur-md -translate-y-5"
              : "opacity-0 blur-md translate-y-5"
          }`}
        >
          {part}
          {animateBy === "words" ? " " : ""}
        </span>
      ))}
    </h1>
  );
}
