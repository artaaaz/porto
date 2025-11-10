import React from "react";
import BlurText from "./BlurText";

export default function HeroSection() {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <BlurText
        text="Isn't this so cool?!"
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-4xl font-bold mb-8"
      />
    </div>
  );
}
