import { useEffect, useRef } from "react";
import { PROFILE } from "../data/content";

const RESUME_URL =
  "https://drive.google.com/file/d/12nvju437jO125ZrVcwGwiNui2kW2KW6u/view?usp=sharing";

export default function Hero() {
  const glowRef = useRef(null);

  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;
    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section id="top" className="hero">
      <div className="hero__glow" ref={glowRef} aria-hidden="true" />
      <div className="hero__scanlines" aria-hidden="true" />

      <div className="hero__top">
        <span>{PROFILE.role}</span>
        <span>{PROFILE.focus}</span>
        <span>© 2026</span>
      </div>

      <div className="hero__center">
        <p className="hero__eyebrow">I am Mr.</p>
        <h1 className="hero__name" data-hot>
          <span className="hero__word">Chirayu</span>
          <span className="hero__word hero__word--out">Batra</span>
        </h1>
        <p className="hero__sub">
          {PROFILE.tagline}
        </p>
        <a
          className="hero__resume-btn"
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Resume →
        </a>
      </div>

      <div className="hero__bottom">
        <a className="hero__scroll" href="#about">
          <span>Scroll</span>
          <span className="hero__scroll-line" />
        </a>
        <div className="hero__loc">
          <span>{PROFILE.location}</span>
          <span className="hero__pulse" />
          <span>Available for work</span>
        </div>
      </div>
    </section>
  );
}
