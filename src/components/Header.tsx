import { useEffect, useState } from "react";
import { links, nav } from "../data/site";
import { Arrow } from "./Reveal";
import { EASE, MOTION, gsap, useMotion } from "../lib/motion";

export default function Header() {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);

  const root = useMotion<HTMLElement>((mm) => {
    mm.add(MOTION, () => {
      gsap
        .timeline({ defaults: { ease: EASE } })
        .from(".header__inner", { y: -26, autoAlpha: 0, duration: 0.85 })
        .from(
          ".header__nav a, .header__right > *",
          { y: -12, autoAlpha: 0, duration: 0.6, stagger: 0.05 },
          0.15,
        );
    });
  });

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className={`header${stuck ? " is-stuck" : ""}`} ref={root}>
      <div className="shell header__inner">
        <a className="header__logo" href="#top" aria-label="ForLife — home">
          <picture>
            <source srcSet="/assets/forlife-logo.avif" type="image/avif" />
            <img
              src="/assets/forlife-logo.png"
              alt="ForLife — Dreamers. Doers. Believers. Achievers."
              width={190}
              height={44}
            />
          </picture>
        </a>

        <nav className="header__nav" aria-label="Primary">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="header__right">
          <a className="btn btn--sm" href={links.shopAll} target="_blank" rel="noreferrer">
            Get Started <Arrow />
          </a>
          <button
            type="button"
            className="header__toggle"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
          </button>
        </div>
      </div>

      {open && (
        <div className="mobilenav" id="mobile-nav">
          <div className="shell mobilenav__inner">
            {nav.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <a
              className="btn"
              href={links.shopAll}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
            >
              Get Started <Arrow />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
