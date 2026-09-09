import { links } from "../data/site";
import { Arrow, Line } from "./Reveal";
import { DESKTOP, MOTION, gsap, useMotion } from "../lib/motion";

const words = ["Dream", "Do", "Believe", "Achieve"];

export default function CommunityCTA() {
  const root = useMotion<HTMLElement>((mm, scope) => {
    mm.add(MOTION, () => {
      gsap
        .timeline({ scrollTrigger: { trigger: scope, start: "top 76%", once: true } })
        .from(".cta h2 .line > span", {
          yPercent: 115,
          duration: 1.05,
          ease: "power3.out",
          stagger: 0.09,
        })
        .from(".cta__inner p", { y: 22, autoAlpha: 0, duration: 0.8 }, 0.35)
        .from(
          ".cta__actions > *",
          { y: 20, autoAlpha: 0, duration: 0.7, stagger: 0.08, clearProps: "transform,opacity,visibility" },
          0.45,
        )
        .from(
          ".cta__crop",
          { clipPath: "inset(0% 0% 0% 100%)", duration: 1.3, ease: "power3.inOut" },
          0.2,
        );
    });

    // background words drift at four different, very slow rates
    mm.add(DESKTOP, () => {
      const st = { trigger: scope, start: "top bottom", end: "bottom top", scrub: 1.3 };
      const drift = [-14, -6, -11, -4];
      gsap.utils.toArray<HTMLElement>(".cta__bg span").forEach((el, i) => {
        gsap.fromTo(
          el,
          { xPercent: -drift[i] / 2 },
          { xPercent: drift[i], ease: "none", scrollTrigger: st },
        );
      });
      gsap.fromTo(
        ".cta__crop img",
        { yPercent: -5, scale: 1.12 },
        { yPercent: 5, scale: 1.12, ease: "none", scrollTrigger: st },
      );
    });
  });

  return (
    <section className="section cta dark-surface" ref={root}>
      <div className="cta__bg" aria-hidden="true">
        {words.map((w) => (
          <span key={w}>{w}</span>
        ))}
      </div>

      <div className="cta__crop" aria-hidden="true">
        <img
          src="/assets/wallpaper-grid.jpg"
          alt=""
          width={800}
          height={800}
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="shell">
        <div className="cta__inner">
          <h2 className="h2">
            <Line>You don't have to figure</Line>
            <Line>
              out your next step <span className="serif">alone.</span>
            </Line>
          </h2>
          <p>Join a community built around purpose, progress and becoming.</p>
          <div className="cta__actions">
            <a className="btn btn--light" href={links.shopAll} target="_blank" rel="noreferrer">
              Join the Movement <Arrow />
            </a>
            <a
              className="btn btn--outline-light"
              href={links.about}
              target="_blank"
              rel="noreferrer"
            >
              <span>Explore Our Story</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
