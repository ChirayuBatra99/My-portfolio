import { PROJECTS } from "../data/content";

export default function Projects() {
  return (
    <section id="work" className="section work">
      <div className="work__head">
        <span className="section__kicker reveal">Selected Work</span>
        <h2 className="section__title reveal" data-delay="1">
          Products I <em>shipped</em>
        </h2>
      </div>

      <div className="work__list">
        {PROJECTS.map((p) => (
          <article
            className="project reveal"
            key={p.title}
            style={{ "--accent": p.accent }}
          >
            <div className="project__index">{p.index}</div>

            <div className="project__body">
              <div className="project__titleRow">
                <h3 className="project__title" data-hot>
                  {p.title}
                </h3>
                <span className="project__year">{p.year}</span>
              </div>
              <p className="project__subtitle">{p.subtitle}</p>
              <p className="project__blurb">{p.blurb}</p>

              <ul className="project__highlights">
                {p.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>

              <div className="project__foot">
                <div className="project__stack">
                  {p.stack.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="project__visual" aria-hidden="true">
              <div className="project__glow" />
              <span className="project__monogram">
                {p.title.charAt(0)}
              </span>
              <span className="project__phone" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
