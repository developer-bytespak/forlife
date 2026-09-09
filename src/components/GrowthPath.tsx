import { useState } from "react";
import { links, products } from "../data/site";
import { Arrow, Line } from "./Reveal";
import { DESKTOP, MOTION, ScrollTrigger, gsap, maskIn, useMotion } from "../lib/motion";

export default function GrowthPath() {
  const [active, setActive] = useState(0);

  const root = useMotion<HTMLElement>((mm, scope) => {
    mm.add(MOTION, () => {
      gsap
        .timeline({ scrollTrigger: { trigger: scope, start: "top 74%", once: true } })
        .from(".growth__head .eyebrow", { y: 16, autoAlpha: 0, duration: 0.7, ease: "power3.out" })
        .from(
          ".growth__head h2 .line > span",
          { yPercent: 115, duration: 1, ease: "power3.out", stagger: 0.09 },
          0.1,
        )
        .from(".growth__head .lede", { y: 20, autoAlpha: 0, duration: 0.8 }, 0.4);

      products.forEach((p) => {
        const story = `#story-${p.id}`;
        maskIn(`${story} .product__media`, `${story} .product__media img`, { trigger: story });
        gsap.from(`${story} .product__body > *`, {
          y: 26,
          autoAlpha: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.08,
          clearProps: "transform,opacity,visibility",
          scrollTrigger: { trigger: story, start: "top 68%", once: true },
        });
      });

      gsap.from(".growth__bundle", {
        y: 34,
        autoAlpha: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: ".growth__bundle", start: "top 88%", once: true },
      });
    });

    // Desktop: the left rail tracks which product story is in focus.
    mm.add(DESKTOP, () => {
      products.forEach((p, i) => {
        const mark = () => setActive(i);
        ScrollTrigger.create({
          trigger: `#story-${p.id}`,
          start: "top 58%",
          end: "bottom 42%",
          onEnter: mark,
          onEnterBack: mark,
        });
      });

      gsap.to(".growth__rail-fill", {
        scaleY: 1,
        transformOrigin: "top center",
        ease: "none",
        scrollTrigger: {
          trigger: ".growth__stories",
          start: "top center",
          end: "bottom center",
          scrub: 0.6,
        },
      });

      gsap.utils.toArray<HTMLElement>(".product__media-inner").forEach((inner) => {
        gsap.fromTo(
          inner,
          { yPercent: -2.5, scale: 1.06 },
          {
            yPercent: 2.5,
            scale: 1.06,
            ease: "none",
            scrollTrigger: {
              trigger: inner.closest(".product") as HTMLElement,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          },
        );
      });
    });
  });

  return (
    <section className="section growth" id="products" ref={root}>
      <div className="shell">
        <div className="growth__head">
          <div>
            <p className="eyebrow">Your next step</p>
            <h2 className="h2">
              <Line>Start where you are.</Line>
              <Line>
                Grow from <span className="serif">there.</span>
              </Line>
            </h2>
          </div>
          <p className="lede">
            Two growth experiences, built to be taken in order or on their own. Your next step
            doesn't have to be your whole plan.
          </p>
        </div>

        <div className="growth__layout">
          <aside className="growth__rail" aria-hidden="true">
            <div className="growth__rail-track">
              <span className="growth__rail-fill" />
            </div>
            <ol className="growth__rail-list">
              {products.map((p, i) => (
                <li key={p.id} className={i === active ? "is-active" : ""}>
                  <span className="n">{`0${i + 1}`}</span>
                  <span className="t">{p.name}</span>
                </li>
              ))}
            </ol>
            <p className="growth__rail-note">
              The path: begin, then <span className="serif">expand.</span>
            </p>
          </aside>

          <div className="growth__stories">
            {products.map((p, i) => (
              <article
                key={p.id}
                id={`story-${p.id}`}
                className={`product product--${p.variant}`}
              >
                <div className="product__media">
                  <div className="product__media-inner">
                    <img
                      src={p.image}
                      alt={p.alt}
                      width={1000}
                      height={1000}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <span className="product__view" aria-hidden="true">
                    View
                  </span>
                </div>

                <div className="product__body">
                  <p className="product__label">
                    <span>{p.label}</span>
                    <span className="idx">{`0${i + 1}`}</span>
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
              </article>
            ))}
          </div>
        </div>

        <div className="growth__bundle">
          <p>Or experience the complete journey.</p>
          <a className="btn" href={links.bundle} target="_blank" rel="noreferrer">
            Explore the Complete Bundle <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}
