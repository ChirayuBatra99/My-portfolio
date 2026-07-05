import { SKILLS } from "../data/content";

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="skills__head">
        <span className="section__kicker reveal">Toolkit</span>
        <h2 className="section__title reveal" data-delay="1">
          Things I build <em>with</em>
        </h2>
      </div>

      <div className="skills__list">
        {SKILLS.map((group, gi) => (
          <div className="skillrow reveal" data-delay={gi} key={group.group}>
            <div className="skillrow__label">
              <span className="skillrow__num">
                {String(gi + 1).padStart(2, "0")}
              </span>
              {group.group}
            </div>
            <div className="skillrow__tags">
              {group.items.map((it) => (
                <span className="tag" key={it} data-hot>
                  {it}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
