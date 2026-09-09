import { useRef } from "react";
import { links } from "../data/site";
import { Arrow, Line } from "./Reveal";
import { DESKTOP, EASE, MOTION, gsap, useMotion } from "../lib/motion";

export default function Hero() {
  const mediaRef = useRef<HTMLDivElement>(null);

  const root = useMotion<HTMLElement>((mm, scope) => {
    const q = gsap.utils.selector(scope);

    mm.add(MOTION, () => {
      // ---- opening sequence (runs immediately, ~1.4s end to end) ----
      const tl = gsap.timeline({ defaults: { ease: EASE } });

      tl.from(".hero__eyebrow", { yPercent: 120, duration: 0.8 }, 0.05)
        .from(
          ".hero__copy h1 .line > span:not(.hero__serif)",
          { yPercent: 115, duration: 1.05, stagger: 0.085 },
          0.12,
        )
        .from(
          ".hero__serif",
          { yPercent: 115, xPercent: -8, autoAlpha: 0, duration: 1.1 },
          0.34,
        )
        .from(".hero__lede", { y: 22, autoAlpha: 0, duration: 0.8 }, 0.55)
        .from(
          ".hero__actions > *",
          { y: 20, autoAlpha: 0, duration: 0.7, stagger: 0.08, clearProps: "transform,opacity,visibility" },
          0.68,
        )
        .from(
          ".hero__pills li",
          { y: 14, autoAlpha: 0, duration: 0.6, stagger: 0.06, clearProps: "transform,opacity,visibility" },
          0.82,
        )
        // right-hand media: masked curtain reveal + slow settle
        .from(
          ".hero__panel",
          { clipPath: "inset(0% 0% 100% 0%)", duration: 1.25, ease: "power3.inOut" },
          0.25,
        )
        .from(".hero__panel img", { scale: 1.16, duration: 1.8 }, 0.25)
        .from(".hero__dot", { scale: 0.4, autoAlpha: 0, duration: 1 }, 0.5)
        .from(".hero__ring", { scale: 0.7, autoAlpha: 0, duration: 1.1 }, 0.6)
        .from(
          ".hero__float",
          { y: 26, autoAlpha: 0, duration: 0.8, stagger: 0.12 },
          0.95,
        )
        .from(".hero__scroll", { autoAlpha: 0, y: 12, duration: 0.7 }, 1.05);

      // ---- scroll choreography: layers drift at different rates ----
      const st = { trigger: scope, start: "top top", end: "bottom top", scrub: 0.8 };

      gsap.to(".hero__panel img", { scale: 1.045, yPercent: 3, ease: "none", scrollTrigger: st });
      gsap.to(".hero__panel", { yPercent: -4, ease: "none", scrollTrigger: st });
      gsap.to(".hero__dot", { yPercent: 26, ease: "none", scrollTrigger: st });
      gsap.to(".hero__ring", { yPercent: -18, ease: "none", scrollTrigger: st });
      gsap.to(".hero__float--a", { y: -22, ease: "none", scrollTrigger: st });
      gsap.to(".hero__float--b", { y: 16, ease: "none", scrollTrigger: st });
      gsap.to(".hero__scroll", {
        autoAlpha: 0,
        ease: "none",
        scrollTrigger: { trigger: scope, start: "top top", end: "+=220", scrub: true },
      });

      // gentle breathing on the scroll-indicator rule
      gsap.fromTo(
        ".hero__scroll-line span",
        { scaleY: 0.25 },
        {
          scaleY: 1,
          transformOrigin: "top center",
          duration: 1.6,
          ease: "power1.inOut",
          repeat: -1,
          yoyo: true,
        },
      );
    });

    // ---- desktop-only pointer depth, a few pixels at most ----
    mm.add(DESKTOP, () => {
      const media = mediaRef.current;
      if (!media) return;

      const panel = q(".hero__panel")[0];
      const dot = q(".hero__dot")[0];
      const ring = q(".hero__ring")[0];

      const xPanel = gsap.quickTo(panel, "x", { duration: 0.7, ease: "power3.out" });
      const yPanel = gsap.quickTo(panel, "y", { duration: 0.7, ease: "power3.out" });
      const xShape = gsap.quickTo([dot, ring], "x", { duration: 0.9, ease: "power3.out" });
      const yShape = gsap.quickTo([dot, ring], "y", { duration: 0.9, ease: "power3.out" });

      const onMove = (e: PointerEvent) => {
        const r = media.getBoundingClientRect();
        const nx = (e.clientX - r.left) / r.width - 0.5;
        const ny = (e.clientY - r.top) / r.height - 0.5;
        xPanel(nx * 10);
        yPanel(ny * 8);
        xShape(nx * -18);
        yShape(ny * -14);
      };

      const onLeave = () => {
        xPanel(0);
        yPanel(0);
        xShape(0);
        yShape(0);
      };

      media.addEventListener("pointermove", onMove);
      media.addEventListener("pointerleave", onLeave);
      return () => {
        media.removeEventListener("pointermove", onMove);
        media.removeEventListener("pointerleave", onLeave);
      };
    });
  });

  return (
    <section className="hero" id="top" ref={root}>
      <div className="shell hero__grid">
        <div className="hero__copy">
          <p className="eyebrow line">
            <span className="hero__eyebrow">Plan / Grow / Build</span>
          </p>

          <h1>
            <Line>You have</Line>
            <Line>the idea.</Line>
            <span className="line">
              <span className="hero__serif serif">This</span>
              <span> is the</span>
            </span>
            <Line>next step.</Line>
          </h1>

          <p className="lede hero__lede">
            ForLife is a purpose-driven personal transformation movement for dreamers, doers,
            believers and achievers. You don't have to figure out your next step alone.
          </p>

          <div className="hero__actions">
            <a className="btn" href={links.dareToDream} target="_blank" rel="noreferrer">
              Start with Dare to Dream <Arrow />
            </a>
            <a className="btn btn--ghost" href="#community">
              <span>Join the community</span>
            </a>
          </div>

          <ul className="pill-row hero__pills" aria-label="What ForLife builds">
            <li className="pill">Growth</li>
            <li className="pill">Focus</li>
            <li className="pill">Balance</li>
          </ul>
        </div>

        <div className="hero__visual" ref={mediaRef}>
          <span className="hero__dot" aria-hidden="true" />
          <span className="hero__ring" aria-hidden="true" />

          <div className="hero__panel">
            <img
              src="/assets/journal-hero.jpg"
              alt="A woman holding the ForLife Thriving Season 30-Day Daily Reflection Journal in front of a sunlit colonnade"
              width={1000}
              height={1000}
              fetchPriority="high"
              decoding="async"
            />
          </div>

          <div className="hero__float hero__float--a">
            <strong>30-Day Daily Reflection</strong>
            <span>Morning &amp; night prompts, made for real life.</span>
          </div>

          <div className="hero__float hero__float--b" aria-hidden="true">
            <span className="k">Growth</span>
            <span className="k">Clarity</span>
            <span className="k">Intention</span>
          </div>
        </div>
      </div>

      <a className="hero__scroll" href="#story">
        <span className="hero__scroll-label">Scroll to explore</span>
        <span className="hero__scroll-line" aria-hidden="true">
          <span />
        </span>
      </a>
    </section>
  );
}
