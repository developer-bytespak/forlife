import { archetypes } from "../data/site";
import Reveal from "./Reveal";

export default function Archetypes() {
  return (
    <section className="section" id="archetypes">
      <div className="shell">
        <Reveal className="arche__head">
          <div>
            <p className="eyebrow">Who are you becoming?</p>
            <h2 className="h2" style={{ marginTop: "1.1rem" }}>
              Four ways we
              <br />
              <span className="serif">move forward.</span>
            </h2>
          </div>
          <p className="lede">
            Dreamers. Doers. Believers. Achievers. Most of us are a blend — and the one you lean
            on changes with the season you're in.
          </p>
        </Reveal>

        <div className="arche__grid">
          {archetypes.map((a, i) => (
            <Reveal
              key={a.num}
              as="article"
              delay={(i % 2) * 80}
              className="arche"
              style={{ "--tint": a.tint, "--tint-hover": a.tintHover } as React.CSSProperties}
            >
              <span className="arche__num" aria-hidden="true">
                {a.num}
              </span>
              <span className="arche__arrow" aria-hidden="true">
                →
              </span>
              <h3>
                {a.name}
                <span className="sub">{a.sub}</span>
              </h3>
              <p className="arche__traits">{a.traits}</p>
              <p>{a.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
