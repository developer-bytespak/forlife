import { links } from "../data/site";
import Reveal, { Arrow } from "./Reveal";

const words = ["Dream", "Do", "Believe", "Achieve"];

export default function CommunityCTA() {
  return (
    <section className="section cta dark-surface">
      <div className="cta__bg" aria-hidden="true">
        {words.map((w) => (
          <span key={w}>{w}</span>
        ))}
      </div>

      <div className="shell">
        <Reveal className="cta__inner">
          <h2 className="h2">
            You don't have to figure out your next step{" "}
            <span className="serif">alone.</span>
          </h2>
          <p>Join a community built around purpose, progress and becoming.</p>
          <div className="cta__actions">
            <a className="btn btn--light" href={links.shopAll} target="_blank" rel="noreferrer">
              Join the Movement <Arrow />
            </a>
            <a
              className="btn btn--outline-light"
              href={links.about}
              target="_blank"
              rel="noreferrer"
            >
              Explore Our Story
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
