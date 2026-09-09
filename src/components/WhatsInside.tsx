import { useState } from "react";
import { featureMedia, features, insideTrust } from "../data/site";
import { Line } from "./Reveal";
import { DESKTOP, MOTION, ScrollTrigger, drawRules, fadeUp, gsap, maskIn, useMotion } from "../lib/motion";

export default function WhatsInside() {
  const [active, setActive] = useState(0);

  const root = useMotion<HTMLElement>((mm, scope) => {
    mm.add(MOTION, () => {
      gsap
        .timeline({ scrollTrigger: { trigger: scope, start: "top 72%", once: true } })
        .from(".inside__copy .eyebrow", { y: 16, autoAlpha: 0, duration: 0.7, ease: "power3.out" })
        .from(
          ".inside__copy h2 .line > span",
          { yPercent: 115, duration: 1, ease: "power3.out", stagger: 0.09 },
          0.1,
        )
        .from(".inside__copy .lede", { y: 20, autoAlpha: 0, duration: 0.8 }, 0.4);

      maskIn(".inside__stack", ".inside__stack img", { trigger: scope });
      drawRules(".features .rule", ".features");
      fadeUp(".features .txt, .features .num", {
        trigger: ".features",
        stagger: 0.05,
        delay: 0.1,
      });
      fadeUp(".inside__pills li", { trigger: ".inside__pills", stagger: 0.06 });
    });

    // Desktop: the sticky visual follows whichever feature is in the reading band.
    mm.add(DESKTOP, () => {
      gsap.utils.toArray<HTMLElement>(".features li").forEach((li, i) => {
        const mark = () => setActive(i);
        ScrollTrigger.create({
          trigger: li,
          start: "top 62%",
          end: "bottom 45%",
          onEnter: mark,
          onEnterBack: mark,
        });
      });
    });
  });

  return (
    <section className="section inside" id="whats-inside" ref={root}>
      <div className="shell inside__grid">
        <div className="inside__media">
          <div className="inside__stack">
            {featureMedia.map((m, i) => (
              <img
                key={m.src}
                src={m.src}
                alt={i === 0 ? m.alt : ""}
                width={1000}
                height={1000}
                loading="lazy"
                decoding="async"
                className={i === active % featureMedia.length ? "is-active" : ""}
                aria-hidden={i === active % featureMedia.length ? undefined : true}
              />
            ))}
            <span className="inside__stack-tag" aria-hidden="true">
              {`0${(active % features.length) + 1}`} / {`0${features.length}`}
            </span>
          </div>
        </div>

        <div className="inside__copy">
          <p className="eyebrow">What's inside</p>
          <h2 className="h2">
            <Line>Growth tools made for</Line>
            <Line>
              <span className="serif">real life.</span>
            </Line>
          </h2>
          <p className="lede">
            Everything is digital, everything is yours to keep, and everything is designed to be
            used on an ordinary Tuesday — not just on the days you feel motivated.
          </p>

          <ol className="features">
            {features.map((f, i) => (
              <li key={f} className={i === active ? "is-active" : ""}>
                <span className="num">{`0${i + 1}`}</span>
                <span className="txt">{f}</span>
                <i className="rule" aria-hidden="true" />
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
        </div>
      </div>
    </section>
  );
}
