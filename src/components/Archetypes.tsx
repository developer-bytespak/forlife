import { useCallback } from "react";
import { archetypes } from "../data/site";
import { Line } from "./Reveal";
import { DESKTOP, MOTION, gsap, useMotion } from "../lib/motion";

export default function Archetypes() {
  const root = useMotion<HTMLElement>((mm, scope) => {
    mm.add(MOTION, () => {
      gsap
        .timeline({ scrollTrigger: { trigger: scope, start: "top 74%", once: true } })
        .from(".arche__head .eyebrow", { y: 16, autoAlpha: 0, duration: 0.7, ease: "power3.out" })
        .from(
          ".arche__head h2 .line > span",
          { yPercent: 115, duration: 1, ease: "power3.out", stagger: 0.09 },
          0.1,
        )
        .from(".arche__head .lede", { y: 20, autoAlpha: 0, duration: 0.8 }, 0.4);

      gsap.from(".arche", {
        y: 46,
        autoAlpha: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.11,
        clearProps: "transform,opacity,visibility",
        scrollTrigger: { trigger: ".arche__grid", start: "top 82%", once: true },
      });

      gsap.from(".arche__num", {
        yPercent: 40,
        autoAlpha: 0,
        duration: 1.1,
        ease: "power3.out",
        stagger: 0.11,
        scrollTrigger: { trigger: ".arche__grid", start: "top 80%", once: true },
      });
    });

    // Desktop: accent layers drift, giving the grid depth as it passes.
    mm.add(DESKTOP, () => {
      gsap.utils.toArray<HTMLElement>(".arche__accent").forEach((el, i) => {
        gsap.fromTo(
          el,
          { yPercent: i % 2 ? -8 : 8 },
          {
            yPercent: i % 2 ? 8 : -8,
            ease: "none",
            scrollTrigger: {
              trigger: scope,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.1,
            },
          },
        );
      });
    });
  });

  /** Pointer tilt, capped at 2deg — desktop pointers only. */
  const onTilt = useCallback((e: React.PointerEvent<HTMLElement>) => {
    if (e.pointerType !== "mouse" || window.matchMedia("(max-width: 900px)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const nx = (e.clientX - r.left) / r.width - 0.5;
    const ny = (e.clientY - r.top) / r.height - 0.5;
    gsap.to(el, {
      rotateX: -ny * 2,
      rotateY: nx * 2,
      duration: 0.5,
      ease: "power3.out",
      transformPerspective: 900,
    });
  }, []);

  const onRest = useCallback((e: React.PointerEvent<HTMLElement>) => {
    gsap.to(e.currentTarget, { rotateX: 0, rotateY: 0, duration: 0.6, ease: "power3.out" });
  }, []);

  return (
    <section className="section arche-section" id="archetypes" ref={root}>
      <div className="shell">
        <div className="arche__head">
          <div>
            <p className="eyebrow">Who are you becoming?</p>
            <h2 className="h2">
              <Line>Four ways we</Line>
              <Line>
                <span className="serif">move forward.</span>
              </Line>
            </h2>
          </div>
          <p className="lede">
            Dreamers. Doers. Believers. Achievers. Most of us are a blend — and the one you lean
            on changes with the season you're in.
          </p>
        </div>

        <div className="arche__grid">
          {archetypes.map((a, i) => (
            <article
              key={a.num}
              className={`arche arche--${i + 1}`}
              style={{ "--tint": a.tint, "--tint-hover": a.tintHover } as React.CSSProperties}
              onPointerMove={onTilt}
              onPointerLeave={onRest}
            >
              <span className="arche__accent" aria-hidden="true" />
              <span className="arche__num" aria-hidden="true">
                {a.num}
              </span>
              <span className="arche__arrow" aria-hidden="true">
                →
              </span>
              <div className="arche__text">
                <h3>
                  {a.name}
                  <span className="sub">{a.sub}</span>
                </h3>
                <p className="arche__traits">{a.traits}</p>
                <p>{a.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
