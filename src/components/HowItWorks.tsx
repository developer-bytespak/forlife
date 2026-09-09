import { useState } from "react";
import { steps } from "../data/site";
import { Line } from "./Reveal";
import { MOTION, ScrollTrigger, gsap, useMotion } from "../lib/motion";

export default function HowItWorks() {
  const [active, setActive] = useState(0);

  const root = useMotion<HTMLElement>((mm, scope) => {
    mm.add(MOTION, () => {
      gsap
        .timeline({ scrollTrigger: { trigger: scope, start: "top 74%", once: true } })
        .from(".how__head .eyebrow", { y: 16, autoAlpha: 0, duration: 0.7, ease: "power3.out" })
        .from(
          ".how__head h2 .line > span",
          { yPercent: 115, duration: 1, ease: "power3.out", stagger: 0.09 },
          0.1,
        );

      gsap.from(".step", {
        y: 34,
        autoAlpha: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.13,
        scrollTrigger: { trigger: ".how__grid", start: "top 84%", once: true },
      });

      // the connecting path fills as the section is read
      gsap.to(".how__path-fill", {
        scaleX: 1,
        transformOrigin: "left center",
        ease: "none",
        scrollTrigger: {
          trigger: ".how__grid",
          start: "top 78%",
          end: "bottom 55%",
          scrub: 0.7,
        },
      });

      gsap.utils.toArray<HTMLElement>(".step").forEach((step, i) => {
        const mark = () => setActive(i);
        ScrollTrigger.create({
          trigger: step,
          start: "top 72%",
          end: "bottom 30%",
          onEnter: mark,
          onEnterBack: mark,
        });
      });
    });
  });

  return (
    <section className="section how" id="how-it-works" ref={root}>
      <div className="shell">
        <div className="how__head">
          <p className="eyebrow">How it works</p>
          <h2 className="h2">
            <Line>Your next chapter doesn't</Line>
            <Line>need a complicated plan.</Line>
          </h2>
        </div>

        <div className="how__path" aria-hidden="true">
          <span className="how__path-fill" />
        </div>

        <ol className="how__grid">
          {steps.map((s, i) => (
            <li key={s.num} className={`step${i <= active ? " is-active" : ""}`}>
              <span className="step__dot" aria-hidden="true" />
              <span className="step__num">{s.num}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
