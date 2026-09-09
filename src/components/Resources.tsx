import { articles, links } from "../data/site";
import { Arrow, Line } from "./Reveal";
import { DESKTOP, MOTION, gsap, useMotion } from "../lib/motion";

export default function Resources() {
  const root = useMotion<HTMLElement>((mm, scope) => {
    mm.add(MOTION, () => {
      gsap
        .timeline({ scrollTrigger: { trigger: scope, start: "top 76%", once: true } })
        .from(".res__head .eyebrow", { y: 16, autoAlpha: 0, duration: 0.7, ease: "power3.out" })
        .from(
          ".res__head h2 .line > span",
          { yPercent: 115, duration: 1, ease: "power3.out", stagger: 0.09 },
          0.1,
        )
        .from(".res__head .textlink", { autoAlpha: 0, x: -14, duration: 0.7 }, 0.4);

      gsap.utils.toArray<HTMLElement>(".article").forEach((card, i) => {
        gsap
          .timeline({ scrollTrigger: { trigger: card, start: "top 86%", once: true } })
          .from(card.querySelector(".article__media"), {
            clipPath: "inset(0% 0% 100% 0%)",
            duration: 1.15,
            ease: "power3.inOut",
            delay: i * 0.09,
          })
          .from(
            card.querySelector("img"),
            { scale: 1.14, duration: 1.5, ease: "power3.out", clearProps: "transform" },
            0,
          )
          .from(
            [card.querySelector(".article__meta"), card.querySelector("h3"), card.querySelector(".article__more")],
            {
              y: 22,
              autoAlpha: 0,
              duration: 0.75,
              ease: "power3.out",
              stagger: 0.07,
              clearProps: "transform,opacity,visibility",
            },
            0.35,
          );
      });
    });

    mm.add(DESKTOP, () => {
      gsap.utils.toArray<HTMLElement>(".article").forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: i === 1 ? 26 : 0 },
          {
            y: i === 1 ? -26 : i === 2 ? -12 : 0,
            ease: "none",
            scrollTrigger: { trigger: scope, start: "top bottom", end: "bottom top", scrub: 1.1 },
          },
        );
      });
    });
  });

  return (
    <section className="section resources" id="resources" ref={root}>
      <div className="shell">
        <div className="res__head">
          <div>
            <p className="eyebrow">Keep growing</p>
            <h2 className="h2">
              <Line>Ideas for the life</Line>
              <Line>
                you're <span className="serif">building.</span>
              </Line>
            </h2>
          </div>
          <a className="textlink" href={links.about} target="_blank" rel="noreferrer">
            <span>View all resources</span> <Arrow />
          </a>
        </div>

        <div className="res__grid">
          {articles.map((a) => (
            <a
              key={a.title}
              className="article"
              href={links.about}
              target="_blank"
              rel="noreferrer"
            >
              <div className="article__media">
                <img
                  src={a.image}
                  alt={a.alt}
                  width={900}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  style={{ objectPosition: a.pos }}
                />
                <span className="article__veil" aria-hidden="true" />
              </div>
              <p className="article__meta">
                <span>{a.category}</span>
                <span>{a.read}</span>
              </p>
              <h3>
                <span>{a.title}</span>
              </h3>
              <span className="article__more">
                Read <Arrow />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
