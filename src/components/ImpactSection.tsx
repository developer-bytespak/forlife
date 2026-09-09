import { pillars } from "../data/site";
import Reveal from "./Reveal";

export default function ImpactSection() {
  return (
    <section className="section impact" id="what-we-stand-for">
      <div className="shell impact__grid">
        <Reveal className="impact__copy">
          <p className="eyebrow eyebrow--charcoal">#IVLGives</p>
          <h2 className="h2">
            Personal growth should create impact{" "}
            <span className="serif">beyond us.</span>
          </h2>
          <p className="lede">
            ForLife is built around Trust, Experience, Community and Impact.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <ul className="pillars">
            {pillars.map((p) => (
              <li key={p.k}>
                <span className="k">{p.k}</span>
                <span className="v">{p.v}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="impact__figure" delay={60}>
          <span className="big">4%</span>
          <p>
            At least 4% of revenue is committed to philanthropic and social-impact
            initiatives.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
