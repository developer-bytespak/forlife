import { principles } from "../data/site";
import { DESKTOP, MOTION, gsap, useMotion } from "../lib/motion";

export default function PrincipleStrip() {
  const root = useMotion<HTMLElement>((mm, scope) => {
    mm.add(MOTION, () => {
      const trigger = { trigger: scope, start: "top 76%", once: true };

      gsap
        .timeline({ scrollTrigger: trigger })
        .from(".principle__rule", {
          scaleX: 0,
          transformOrigin: "left center",
          duration: 0.95,
          ease: "power3.inOut",
          stagger: 0.14,
        })
        .from(
          ".principle__num",
          { autoAlpha: 0, y: 14, duration: 0.7, stagger: 0.14 },
          0.1,
        )
        .from(
          ".principle h2 .line > span",
          { yPercent: 115, duration: 1, ease: "power3.out", stagger: 0.14 },
          0.15,
        )
        .from(
          ".principle p",
          { y: 18, autoAlpha: 0, duration: 0.8, stagger: 0.14 },
          0.42,
        );
    });

    // very slow drift on the oversized background word
    mm.add(DESKTOP, () => {
      gsap.fromTo(
        ".principles__ghost",
        { xPercent: -4 },
        {
          xPercent: 4,
          ease: "none",
          scrollTrigger: { trigger: scope, start: "top bottom", end: "bottom top", scrub: 1.2 },
        },
      );
    });
  });

  return (
    <section className="section principles dark-surface" aria-label="What we believe" ref={root}>
      <span className="principles__ghost" aria-hidden="true">
        Intention
      </span>

      <div className="shell principles__grid">
        {principles.map((p, i) => (
          <article key={p.accent} className={`principle principle--${p.tone}`}>
            <i className="principle__rule" aria-hidden="true" />
            <span className="principle__num">{`0${i + 1}`}</span>
            <h2>
              <span className="line">
                <span>
                  {p.lead} <span className="serif">{p.accent}</span>.
                </span>
              </span>
            </h2>
            <p>{p.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
