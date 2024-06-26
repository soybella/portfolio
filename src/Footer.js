import React, { useEffect } from "react";
import useIntersectionObserver from "./useIntersectionObserver";
import "./Footer.css";

export default function Footer() {
  const [ref, isIntersecting] = useIntersectionObserver({
    rootMargin: "0px",
  });

  useEffect(() => {
    const currentRef = ref.current;

    if (currentRef) {
      if (isIntersecting) {
        currentRef.classList.add("visible");
      } else {
        currentRef.classList.remove("visible");
      }
    }
  }, [isIntersecting, ref]);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <footer className="Footer fade-in-section" id="#footer" ref={ref}>
      <p className="container text-center mt-3">
        Coded with ♥ by{" "}
        <a
          href="https://github.com/soybella/isabella-lizarde-portfolio"
          target="_blank"
          rel="noreferrer"
          className="footer-link"
          title="Isabella's GitHub"
        >
          Isabella Lizarde
        </a>{" "}
        2024
      </p>
      <button
        onClick={() => scrollToSection("homepage")}
        className="container text-center to-top"
        alt="Go back to Isabella's homepage"
      >
        {" "}
        Back to top
      </button>
    </footer>
  );
}
