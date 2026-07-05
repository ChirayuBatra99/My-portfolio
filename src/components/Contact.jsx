import { PROFILE } from "../data/content";

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="contact__inner">
        <span className="section__kicker reveal">Contact</span>
        <a
          href={`mailto:${PROFILE.email}`}
          className="contact__mega reveal"
          data-delay="1"
          data-hot
        >
          Let’s build
          <br />
          something <em>loud</em>.
        </a>

        <div className="contact__row reveal" data-delay="2">
          <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
          <a href={`tel:${PROFILE.phone.replace(/\s/g, "")}`}>
            {PROFILE.phone}
          </a>
        </div>

        <div className="contact__socials reveal" data-delay="3">
          <a href={PROFILE.links.github} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          <a href={PROFILE.links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
          <a href={PROFILE.links.leetcode} target="_blank" rel="noreferrer">
            LeetCode ↗
          </a>
        </div>
      </div>

      <footer className="footer">
        <span>© 2026 Chirayu Batra</span>
        <span className="footer__mark">Built with 🤘 &amp; too much coffee</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </section>
  );
}
