import { PROFILE, STATS } from "../data/content";

export default function About() {
  return (
    <section id="about" className="section about">
      <span className="section__kicker reveal">About</span>

      <div className="about__grid">
        <h2 className="about__lead reveal" data-delay="1">
          I’m a software engineer who turns ideas into{" "}
          <em>shipped products</em> from AI agents in production to full
          mobile apps with real users on the Play Store.
        </h2>

        <div className="about__col reveal" data-delay="2">
          <p>
            Currently building production-grade GenAI systems at{" "}
            <strong>Tricon Infotech</strong> — LangGraph agents, RAG pipelines,
            and reusable AI services with FastAPI &amp; Python. I care about the
            whole lifecycle: architecture, cost, DX and the last mile of getting
            software into people’s hands.
          </p>
          <p>
            Off the clock, I design, develop and maintain my own apps solo —
            owning ideation, UI/UX, backend, DevOps and release management.
          </p>
          <ul className="about__facts">
            <li>
              <span>Education</span>
              B.Tech CSE, Vellore Institute of Technology
            </li>
            <li>
              <span>Based in</span>
              {PROFILE.location}
            </li>
            <li>
              <span>Focus</span>
              {PROFILE.focus}
            </li>
          </ul>
        </div>
      </div>

      <div className="about__stats">
        {STATS.map((s, i) => (
          <div className="stat reveal" data-delay={i + 1} key={s.label}>
            <div className="stat__value">{s.value}</div>
            <div className="stat__label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
