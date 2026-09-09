import { useRef } from "react";
import { pillars } from "../data/site";
import { Line } from "./Reveal";
import { DESKTOP, MOTION, drawRules, gsap, useMotion } from "../lib/motion";

export default function ImpactSection() {
  const numRef = useRef<HTMLSpanElement>(null);

  const root = useMotion<HTMLElement>((mm, scope) => {
    mm.add(MOTION, () => {
      gsap
        .timeline({ scrollTrigger: { trigger: scope, start: "top 74%", once: true } })
        .from(".impact__copy .eyebrow", { y: 16, autoAlpha: 0, duration: 0.7, ease: "power3.out" })
        .from(
          ".impact__copy h2 .line > span",
          { yPercent: 115, duration: 1, ease: "power3.out", stagger: 0.09 },
          0.1,
        )
        .from(".impact__copy .lede", { y: 20, autoAlpha: 0, duration: 0.8 }, 0.42);

      drawRules(".pillars .rule", ".pillars");
      gsap.from(".pillars li > span", {
        y: 20,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.07,
        scrollTrigger: { trigger: ".pillars", start: "top 82%", once: true },
      });

      // 4% moment: count 0 → 4, then the % lands.
      const counter = { v: 0 };
      gsap
        .timeline({ scrollTrigger: { trigger: ".impact__figure", start: "top 78%", once: true } })
        .from(".impact__figure .rule-top", {
          scaleX: 0,
          transformOrigin: "left center",
          duration: 1,
          ease: "power3.inOut",
        })
        .from(".impact__big", { autoAlpha: 0, y: 40, duration: 0.7, ease: "power3.out" }, 0.1)
        .to(
          counter,
          {
            v: 4,
            duration: 0.85,
            ease: "power2.out",
            onUpdate: () => {
              if (numRef.current) numRef.current.textContent = String(Math.round(counter.v));
            },
          },
          0.2,
        )
        .from(
          ".impact__pct",
          { autoAlpha: 0, xPercent: -30, scale: 0.7, duration: 0.7, ease: "back.out(1.6)" },
          0.95,
        )
        .from(".impact__figure p", { y: 22, autoAlpha: 0, duration: 0.8 }, 1.02);
    });

    mm.add(DESKTOP, () => {
      const st = { trigger: scope, start: "top bottom", end: "bottom top", scrub: 1 };
      gsap.fromTo(".impact__big", { yPercent: 6 }, { yPercent: -6, ease: "none", scrollTrigger: st });
      gsap.fromTo(".impact__ghost", { xPercent: -3 }, { xPercent: 3, ease: "none", scrollTrigger: st });
    });
  });

  return (
    <section className="section impact" id="what-we-stand-for" ref={root}>
      <span className="impact__ghost" aria-hidden="true">
        #IVLGives
      </span>

      <div className="shell impact__grid">
        <div className="impact__copy">
          <p className="eyebrow eyebrow--charcoal">#IVLGives</p>
          <h2 className="h2">
            <Line>Personal growth should</Line>
            <Line>
              create impact <span className="serif">beyond us.</span>
            </Line>
          </h2>
          <p className="lede">
            ForLife is built around Trust, Experience, Community and Impact.
          </p>
        </div>

        <div>
          <ul className="pillars">
            {pillars.map((p) => (
              <li key={p.k}>
                <span className="k">{p.k}</span>
                <span className="v">{p.v}</span>
                <i className="rule" aria-hidden="true" />
              </li>
            ))}
          </ul>
        </div>

        <div className="impact__figure">
          <i className="rule-top" aria-hidden="true" />
          <span className="big impact__big">
            <span ref={numRef}>4</span>
            <span className="impact__pct">%</span>
          </span>
          <p>
            At least 4% of revenue is committed to philanthropic and social-impact initiatives.
          </p>
        </div>
      </div>
    </section>
  );
}
