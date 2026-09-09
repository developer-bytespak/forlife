import { articles, links } from "../data/site";
import Reveal, { Arrow } from "./Reveal";

export default function Resources() {
  return (
    <section className="section" id="resources">
      <div className="shell">
        <Reveal className="res__head">
          <div>
            <p className="eyebrow">Keep growing</p>
            <h2 className="h2" style={{ marginTop: "1.1rem" }}>
              Ideas for the life
              <br />
              you're <span className="serif">building.</span>
            </h2>
          </div>
          <a className="textlink" href={links.about} target="_blank" rel="noreferrer">
            View all resources <Arrow />
          </a>
        </Reveal>

        <div className="res__grid">
          {articles.map((a, i) => (
            <Reveal key={a.title} delay={i * 90}>
              <a
                className="article"
                href={links.about}
                target="_blank"
                rel="noreferrer"
                style={{ height: "100%" }}
              >
                <div className="article__media">
                  <img
                    src={a.image}
                    alt={a.alt}
                    width={800}
                    height={600}
                    loading="lazy"
                    decoding="async"
                    style={{ objectPosition: a.pos }}
                  />
                </div>
                <p className="article__meta">
                  <span>{a.category}</span>
                  <span>{a.read}</span>
                </p>
                <h3>{a.title}</h3>
                <span className="article__more">
                  Read <Arrow />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
