import { links, products } from "../data/site";
import Reveal, { Arrow } from "./Reveal";

export default function GrowthPath() {
  return (
    <section className="section" id="products">
      <div className="shell">
        <Reveal className="growth__head">
          <div>
            <p className="eyebrow">Your next step</p>
            <h2 className="h2" style={{ marginTop: "1.1rem" }}>
              Start where you are.
              <br />
              Grow from <span className="serif">there.</span>
            </h2>
          </div>
          <p className="lede">
            Two growth experiences, built to be taken in order or on their own. Your next step
            doesn't have to be your whole plan.
          </p>
        </Reveal>

        <div className="growth__list">
          {products.map((p, i) => (
            <div key={p.id}>
              {i > 0 && (
                <p className="growth__link" aria-hidden="true">
                  Then
                </p>
              )}
              <Reveal as="article" className={`product product--${p.variant}`}>
                <div className="product__media">
                  <img
                    src={p.image}
                    alt={p.alt}
                    width={1000}
                    height={1000}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="product__body">
                  <p className="product__label">
                    <span>{p.label}</span>
                    <span className="idx">{p.idx}</span>
                  </p>
                  <h3>{p.name}</h3>
                  <ul className="product__themes">
                    {p.themes.map((t) => (
                      <li key={t}>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                  <p>{p.body}</p>
                  <a className="btn" href={p.href} target="_blank" rel="noreferrer">
                    {p.cta} <Arrow />
                  </a>
                </div>
              </Reveal>
            </div>
          ))}
        </div>

        <Reveal className="growth__bundle">
          <p>Or experience the complete journey.</p>
          <a className="btn" href={links.bundle} target="_blank" rel="noreferrer">
            Explore the Complete Bundle <Arrow />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
