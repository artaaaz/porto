import { gsap } from "gsap";

export const heroAnimation = () => {
  gsap.from("h1", {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "power3.out",
  });
  gsap.from("p", {
    duration: 1,
    delay: 0.3,
    opacity: 0,
    y: 30,
    ease: "power2.out",
  });
};
