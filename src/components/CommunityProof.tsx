import { Line } from "./Reveal";
import { DESKTOP, MOTION, gsap, maskIn, useMotion } from "../lib/motion";

const words = ["Dreamer", "Doer", "Believer", "Achiever"];

export default function CommunityProof() {
  const root = useMotion<HTMLElement>((mm, scope) => {
    mm.add(MOTION, () => {
      gsap
        .timeline({ scrollTrigger: { trigger: scope, start: "top 74%", once: true } })
        .from(".proof__head .eyebrow", { y: 16, autoAlpha: 0, duration: 0.7, ease: "power3.out" })
        .from(
          ".proof__head h2 .line > span",
          { yPercent: 115, duration: 1, ease: "power3.out", stagger: 0.09 },
          0.1,
        );

      maskIn(".proof__media", ".proof__media img", { trigger: ".proof__feature" });

      gsap.from(".proof__quote > *", {
        y: 26,
        autoAlpha: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: { trigger: ".proof__feature", start: "top 62%", once: true },
      });

      gsap.from(".proof__card", {
        y: 40,
        autoAlpha: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.14,
        clearProps: "transform,opacity,visibility",
        scrollTrigger: { trigger: ".proof__side", start: "top 82%", once: true },
      });

      // slow word strip: continuous drift, paused for reduced motion
      const strip = gsap.to(".proof__strip-track", {
        xPercent: -50,
        duration: 46,
        ease: "none",
        repeat: -1,
      });

      const stripEl = scope.querySelector(".proof__strip");
      const slow = () => gsap.to(strip, { timeScale: 0.25, duration: 0.6 });
      const normal = () => gsap.to(strip, { timeScale: 1, duration: 0.6 });
      stripEl?.addEventListener("pointerenter", slow);
      stripEl?.addEventListener("pointerleave", normal);

      return () => {
        stripEl?.removeEventListener("pointerenter", slow);
        stripEl?.removeEventListener("pointerleave", normal);
      };
    });

    // background layer trails the foreground copy
    mm.add(DESKTOP, () => {
      gsap.fromTo(
        ".proof__strip",
        { yPercent: 12 },
        {
          yPercent: -12,
          ease: "none",
          scrollTrigger: { trigger: scope, start: "top bottom", end: "bottom top", scrub: 1.2 },
        },
      );
      gsap.fromTo(
        ".proof__media img",
        { yPercent: -4, scale: 1.1 },
        {
          yPercent: 4,
          scale: 1.1,
          ease: "none",
          scrollTrigger: {
            trigger: ".proof__feature",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        },
      );
    });
  });

  return (
    <section className="section proof" id="community" ref={root}>
      <div className="proof__strip" aria-hidden="true">
        <div className="proof__strip-track">
          {[...words, ...words, ...words, ...words].map((w, i) => (
            <span key={`${w}-${i}`}>
              {w}
              <i>—</i>
            </span>
          ))}
        </div>
      </div>

      <div className="shell">
        <div className="proof__head">
          <p className="eyebrow">The movement in motion</p>
          <h2 className="h2">
            <Line>Growth feels different</Line>
            <Line>when you're not doing it</Line>
            <Line>
              <span className="serif">alone.</span>
            </Line>
          </h2>
        </div>

        <div className="proof__grid">
          <div className="proof__feature dark-surface">
            <div className="proof__media">
              <img
                src="/assets/hp-banner.png"
                alt=""
                width={2000}
                height={1125}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="proof__quote">
              <blockquote>
                ForLife exists for the people who are still deciding, still building and still
                believing. We move <span className="serif">together</span>.
              </blockquote>
              <cite>Dreamers. Doers. Believers. Achievers.</cite>
            </div>
          </div>

          <div className="proof__side">
            <article className="proof__card proof__card--sand">
              <span className="k">Built with people</span>
              <h3>A community, not an audience</h3>
              <p>
                Referral and ambassador programs put the movement in the hands of the people
                living it — so growth spreads the way it actually spreads: person to person.
              </p>
            </article>

            <article className="proof__card proof__card--powder">
              <span className="k">Made to be returned to</span>
              <h3>Lifetime access, always yours</h3>
              <p>
                Every experience stays in your members portal. Come back at the start of a new
                season, or on the day you need the reminder most.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
