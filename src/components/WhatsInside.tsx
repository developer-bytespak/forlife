import { features, insideTrust } from "../data/site";
import Reveal from "./Reveal";

export default function WhatsInside() {
  return (
    <section className="section inside" id="whats-inside">
      <div className="shell inside__grid">
        <Reveal className="inside__media">
          <img
            src="/assets/all-products.jpg"
            alt="The complete ForLife toolkit: desktop and phone wallpapers, printed reflection journals and affirmation bookmarks"
            width={1000}
            height={1000}
            loading="lazy"
            decoding="async"
          />
          <div className="inside__media-row">
            <img
              src="/assets/wallpaper-iphone.jpg"
              alt="A ForLife affirmation wallpaper on a phone resting on dark stone"
              width={600}
              height={600}
              loading="lazy"
              decoding="async"
            />
            <img
              src="/assets/reflection-journal.jpg"
              alt="The 30-Day Daily Reflection Journal open on a table, showing weekly prompts"
              width={600}
              height={600}
              loading="lazy"
              decoding="async"
            />
          </div>
        </Reveal>

        <Reveal className="inside__copy" delay={90}>
          <p className="eyebrow">What's inside</p>
          <h2 className="h2">
            Growth tools made for
            <br />
            <span className="serif">real life.</span>
          </h2>
          <p className="lede">
            Everything is digital, everything is yours to keep, and everything is designed to be
            used on an ordinary Tuesday — not just on the days you feel motivated.
          </p>

          <ol className="features">
            {features.map((f, i) => (
              <li key={f}>
                <span className="num">{`0${i + 1}`}</span>
                <span className="txt">{f}</span>
              </li>
            ))}
          </ol>

          <ul className="pill-row inside__pills">
            {insideTrust.map((t) => (
              <li className="pill" key={t}>
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
