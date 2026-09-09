import { values } from "../data/site";
import { Line } from "./Reveal";
import { DESKTOP, MOTION, drawRules, fadeUp, gsap, maskIn, useMotion } from "../lib/motion";

export default function BrandIntro() {
  const root = useMotion<HTMLElement>((mm, scope) => {
    mm.add(MOTION, () => {
      const trigger = { trigger: scope, start: "top 74%", once: true };

      gsap
        .timeline({ scrollTrigger: trigger })
        .from(".intro__copy .eyebrow", { y: 16, autoAlpha: 0, duration: 0.7, ease: "power3.out" })
        .from(
          ".intro__copy h2 .line > span",
          { yPercent: 115, duration: 1, ease: "power3.out", stagger: 0.09 },
          0.12,
        )
        .from(".intro__copy .lede", { y: 20, autoAlpha: 0, duration: 0.8 }, 0.42);

      maskIn(".intro__media", ".intro__media img", { trigger: scope });

      drawRules(".intro__values .rule", scope);
      fadeUp(".intro__values .k, .intro__values .v", { trigger: scope, delay: 0.15, stagger: 0.05 });
    });

    mm.add(DESKTOP, () => {
      const st = { trigger: scope, start: "top bottom", end: "bottom top", scrub: 1 };
      gsap.fromTo(".intro__ghost", { xPercent: 6 }, { xPercent: -8, ease: "none", scrollTrigger: st });
      gsap.fromTo(".intro__media", { yPercent: 3 }, { yPercent: -3, ease: "none", scrollTrigger: st });
    });
  });

  return (
    <section className="section intro" id="story" ref={root}>
      <span className="intro__ghost" aria-hidden="true">
        Becoming
      </span>

      <div className="shell intro__grid">
        <div className="intro__media">
          <img
            src="/assets/toolkit-spread.jpg"
            alt="The ForLife 30-Day Daily Reflection Journal open beside an affirmation bookmark and a phone wallpaper"
            width={1000}
            height={1000}
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="intro__copy">
          <p className="eyebrow">More than a product</p>
          <h2 className="h2">
            <Line>Build a life that feels</Line>
            <Line>
              like <span className="serif">yours.</span>
            </Line>
          </h2>
          <p className="lede">
            ForLife combines thoughtfully designed personal-growth tools with a deeper philosophy
            of intentional living — helping people move from self-doubt to clarity, and from
            simply maintaining life to actively creating it.
          </p>

          <ul className="intro__values">
            {values.map((v) => (
              <li key={v.k}>
                <span className="k">{v.k}</span>
                <span className="v">{v.v}</span>
                <i className="rule" aria-hidden="true" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
