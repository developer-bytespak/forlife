import { links } from "../data/site";
import { Arrow } from "./Reveal";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="shell hero__grid">
        <div className="hero__copy">
          <p className="eyebrow rise" style={{ "--d": "60ms" } as React.CSSProperties}>
            Plan / Grow / Build
          </p>

          <h1 className="rise" style={{ "--d": "140ms" } as React.CSSProperties}>
            You have the idea.
            <br />
            <span className="serif">This</span> is the next step.
          </h1>

          <p className="lede rise" style={{ "--d": "230ms" } as React.CSSProperties}>
            ForLife is a purpose-driven personal transformation movement for dreamers, doers,
            believers and achievers. You don't have to figure out your next step alone.
          </p>

          <div
            className="hero__actions rise"
            style={{ "--d": "310ms" } as React.CSSProperties}
          >
            <a className="btn" href={links.dareToDream} target="_blank" rel="noreferrer">
              Start with Dare to Dream <Arrow />
            </a>
            <a className="btn btn--ghost" href="#community">
              Join the community
            </a>
          </div>

          <ul
            className="pill-row rise"
            style={{ "--d": "390ms" } as React.CSSProperties}
            aria-label="What ForLife builds"
          >
            <li className="pill">Growth</li>
            <li className="pill">Focus</li>
            <li className="pill">Balance</li>
          </ul>
        </div>

        <div className="hero__visual rise" style={{ "--d": "220ms" } as React.CSSProperties}>
          <span className="hero__dot" aria-hidden="true" />
          <div className="hero__panel">
            <img
              src="/assets/journal-hero.jpg"
              alt="A woman holding the ForLife Thriving Season 30-Day Daily Reflection Journal in front of a sunlit colonnade"
              width={1000}
              height={1000}
              fetchPriority="high"
              decoding="async"
            />
          </div>
          <div className="hero__tag">
            <strong>30-Day Daily Reflection</strong>
            <span>Morning &amp; night prompts, made for real life.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
