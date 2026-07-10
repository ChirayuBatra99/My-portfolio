import { useState } from "react";
import "./App.css";
import useReveal from "./hooks/useReveal";
import CustomCursor from "./components/CustomCursor";
import Preloader from "./components/Preloader";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
// import Mentors from "./components/Mentors";
import Contact from "./components/Contact";

function App() {
  const [ready, setReady] = useState(false);
  useReveal();

  return (
    <>
      <CustomCursor />
      <div className="grain" aria-hidden="true" />
      <div className="vignette" aria-hidden="true" />

      <Preloader onDone={() => setReady(true)} />

      <div className={`app ${ready ? "app--ready" : ""}`}>
        <Nav />
        <main>
          <Hero />
          <Marquee />
          <About />
          <Skills />
          <Projects />
          <Experience />
          {/* <Mentors /> */}
          <Contact />
        </main>
      </div>
    </>
  );
}

export default App;
