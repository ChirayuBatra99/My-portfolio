import { MENTORS } from "../data/content";

export default function Mentors() {
  return (
    <section id="mentors" className="section mentors">
      <div className="mentors__head">
        <span className="section__kicker reveal">Gratitude</span>
        <h2 className="section__title reveal" data-delay="1">
          People who <em>shaped me</em>
        </h2>
        <p className="mentors__note reveal" data-delay="2">
          A small thank-you to the mentors whose guidance, standards and belief
          pushed me forward.
        </p>
      </div>

      <div className="mentors__grid">
        {MENTORS.map((m, i) => (
          <figure className="mentor reveal" data-delay={i % 3} key={m.name}>
            <div className="mentor__photo" data-hot>
              {m.img ? (
                <img src={m.img} alt={m.name} />
              ) : (
                <span className="mentor__placeholder">
                  {m.name
                    .split(" ")
                    .map((w) => w[0])
                    .join("")}
                </span>
              )}
              <span className="mentor__ph-tag">asset</span>
            </div>
            <figcaption>
              <span className="mentor__name">{m.name}</span>
              <span className="mentor__role">{m.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
