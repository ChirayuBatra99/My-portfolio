import { useEffect, useState } from "react";
import { PROFILE } from "../data/content";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Path", href: "#path" },
  // { label: "Mentors", href: "#mentors" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--solid" : ""}`}>
      <a href="#top" className="nav__brand">
        CB<span>®</span>
      </a>

      <nav className={`nav__links ${open ? "nav__links--open" : ""}`}>
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
      </nav>

      <a
        className="nav__cta"
        href={`mailto:${PROFILE.email}`}
      >
        Let’s talk
      </a>

      <button
        className={`nav__burger ${open ? "is-open" : ""}`}
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
      </button>
    </header>
  );
}
