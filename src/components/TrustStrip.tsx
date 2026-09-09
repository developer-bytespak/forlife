import { trustItems } from "../data/site";
import { MOTION, gsap, useMotion } from "../lib/motion";

export default function TrustStrip() {
  const root = useMotion<HTMLElement>((mm, scope) => {
    mm.add(MOTION, () => {
      // Two identical tracks scroll as one; -50% lands exactly on the seam.
      const marquee = gsap.to(".trust__track", {
        xPercent: -50,
        duration: 58,
        ease: "none",
        repeat: -1,
      });

      const pause = () => gsap.to(marquee, { timeScale: 0, duration: 0.5 });
      const play = () => gsap.to(marquee, { timeScale: 1, duration: 0.5 });

      scope.addEventListener("pointerenter", pause);
      scope.addEventListener("pointerleave", play);
      scope.addEventListener("focusin", pause);
      scope.addEventListener("focusout", play);

      return () => {
        scope.removeEventListener("pointerenter", pause);
        scope.removeEventListener("pointerleave", play);
        scope.removeEventListener("focusin", pause);
        scope.removeEventListener("focusout", play);
      };
    });
  });

  const track = (
    <ul className="trust__track" aria-hidden="true">
      {[...trustItems, ...trustItems].map((t, i) => (
        <li key={`${t}-${i}`}>
          <span>{t}</span>
          <i aria-hidden="true" />
        </li>
      ))}
    </ul>
  );

  return (
    <section
      className="trust dark-surface"
      aria-label="What every purchase includes"
      ref={root}
    >
      <div className="trust__viewport">{track}</div>

      {/* Static, readable copy of the same claims for assistive tech. */}
      <ul className="trust__sr">
        {trustItems.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </section>
  );
}
