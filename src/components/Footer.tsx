import { footerCols, links } from "../data/site";
import { Line } from "./Reveal";
import { MOTION, drawRules, gsap, useMotion } from "../lib/motion";

export default function Footer() {
  const root = useMotion<HTMLElement>((mm, scope) => {
    mm.add(MOTION, () => {
      gsap
        .timeline({ scrollTrigger: { trigger: scope, start: "top 88%", once: true } })
        .from(".footer__logo", { y: 18, autoAlpha: 0, duration: 0.7, ease: "power3.out" })
        .from(
          ".footer__statement .line > span",
          { yPercent: 112, duration: 1, ease: "power3.out", stagger: 0.085 },
          0.1,
        )
        .from(
          ".footer__cols h3, .footer__cols li",
          { y: 16, autoAlpha: 0, duration: 0.6, ease: "power3.out", stagger: 0.03 },
          0.3,
        )
        .from(".footer__bottom > *", { y: 14, autoAlpha: 0, duration: 0.6, stagger: 0.08 }, 0.6);

      drawRules(".footer__divider", scope);
    });
  });

  return (
    <footer className="footer dark-surface" ref={root}>
      <div className="shell">
        <div className="footer__top">
          <div>
            <a className="footer__logo" href="#top" aria-label="ForLife — back to top">
              <picture>
                <source srcSet="/assets/forlife-logo.avif" type="image/avif" />
                <img
                  src="/assets/forlife-logo.png"
                  alt="ForLife — Dreamers. Doers. Believers. Achievers."
                  width={190}
                  height={44}
                  loading="lazy"
                />
              </picture>
            </a>

            <p className="footer__statement">
              <Line>For dreamers.</Line>
              <Line>For doers.</Line>
              <Line>For believers.</Line>
              <Line>For achievers.</Line>
              <Line>
                <span className="serif">ForLife.</span>
              </Line>
            </p>
          </div>

          <div className="footer__cols">
            {footerCols.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h3>{col.title}</h3>
                <ul>
                  {col.items.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        {...(item.href.startsWith("#")
                          ? {}
                          : { target: "_blank", rel: "noreferrer" })}
                      >
                        <span>{item.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <i className="footer__divider" aria-hidden="true" />

        <div className="footer__bottom">
          <p>© 2026 ForLife / IVL</p>
          <nav aria-label="Legal">
            <a href={links.about} target="_blank" rel="noreferrer">
              <span>Privacy</span>
            </a>
            <a href={links.about} target="_blank" rel="noreferrer">
              <span>Terms</span>
            </a>
            <a href={links.about} target="_blank" rel="noreferrer">
              <span>Contact Information</span>
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
