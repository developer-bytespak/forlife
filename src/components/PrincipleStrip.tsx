import { principles } from "../data/site";
import Reveal from "./Reveal";

export default function PrincipleStrip() {
  return (
    <section className="section principles dark-surface" aria-label="What we believe">
      <div className="shell principles__grid">
        {principles.map((p, i) => (
          <Reveal
            key={p.accent}
            as="article"
            delay={i * 90}
            className={`principle principle--${p.tone}`}
          >
            <span className="principle__num">{`0${i + 1}`}</span>
            <h2>
              {p.lead} <span className="serif">{p.accent}</span>.
            </h2>
            <p>{p.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
