import { steps } from "../data/site";
import Reveal from "./Reveal";

export default function HowItWorks() {
  return (
    <section className="section how" id="how-it-works">
      <div className="shell">
        <Reveal className="how__head">
          <p className="eyebrow">How it works</p>
          <h2 className="h2" style={{ marginTop: "1.1rem" }}>
            Your next chapter doesn't need a complicated plan.
          </h2>
        </Reveal>

        <ol className="how__grid">
          {steps.map((s, i) => (
            <Reveal key={s.num} as="li" delay={i * 90} className="step">
              <span className="step__num">{s.num}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
