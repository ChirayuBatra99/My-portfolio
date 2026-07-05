import { EXPERIENCE, ACHIEVEMENTS } from "../data/content";

export default function Experience() {
  return (
    <section id="path" className="section path">
      <div className="path__head">
        <span className="section__kicker reveal">The Path</span>
        <h2 className="section__title reveal" data-delay="1">
          Experience &amp; <em>wins</em>
        </h2>
      </div>

      <div className="path__grid">
        <div className="timeline">
          {EXPERIENCE.map((job, i) => (
            <div className="tl reveal" data-delay={i} key={job.role + i}>
              <div className="tl__meta">
                <span className="tl__period">{job.period}</span>
                <h3 className="tl__role">{job.role}</h3>
                <span className="tl__company">{job.company}</span>
              </div>
              <ul className="tl__points">
                {job.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <aside className="wins reveal" data-delay="2">
          <h4>Achievements</h4>
          <ul>
            {ACHIEVEMENTS.map((a) => (
              <li key={a}>
                <span className="wins__mark">▹</span>
                {a}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
