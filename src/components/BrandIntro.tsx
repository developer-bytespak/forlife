import { values } from "../data/site";
import Reveal from "./Reveal";

export default function BrandIntro() {
  return (
    <section className="section" id="story">
      <div className="shell intro__grid">
        <Reveal className="intro__media">
          <img
            src="/assets/toolkit-spread.jpg"
            alt="The ForLife 30-Day Daily Reflection Journal open beside an affirmation bookmark and a phone wallpaper"
            width={1000}
            height={1000}
            loading="lazy"
            decoding="async"
          />
        </Reveal>

        <Reveal className="intro__copy" delay={90}>
          <p className="eyebrow">More than a product</p>
          <h2 className="h2">
            Build a life that feels
            <br />
            like <span className="serif">yours.</span>
          </h2>
          <p className="lede">
            ForLife combines thoughtfully designed personal-growth tools with a deeper philosophy
            of intentional living — helping people move from self-doubt to clarity, and from
            simply maintaining life to actively creating it.
          </p>

          <ul className="intro__values">
            {values.map((v) => (
              <li key={v.k}>
                <span className="k">{v.k}</span>
                <span className="v">{v.v}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
