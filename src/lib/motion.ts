import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/** Shared motion language — one set of eases and durations for the whole site. */
export const EASE = "power3.out";
export const EASE_SOFT = "power2.out";
export const EASE_IO = "power2.inOut";
export const DUR = 0.9;

/** Media queries used by every section's matchMedia block. */
export const MOTION = "(prefers-reduced-motion: no-preference)";
export const DESKTOP = "(min-width: 901px) and (prefers-reduced-motion: no-preference)";
export const MOBILE = "(max-width: 900px) and (prefers-reduced-motion: no-preference)";

type Setup = (mm: gsap.MatchMedia, scope: HTMLElement) => void;

/**
 * Scopes GSAP work to a section, with automatic cleanup on unmount and a
 * matchMedia instance so every animation can opt out of reduced motion.
 */
export function useMotion<T extends HTMLElement = HTMLElement>(setup: Setup) {
  const ref = useRef<T>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      setup(mm, el);
    }, el);

    // Sections above the fold settle before later triggers measure themselves.
    const raf = requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      cancelAnimationFrame(raf);
      ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ref;
}

/** Masked line reveal: each `.line > span` slides up from behind its clip. */
export function revealLines(
  target: gsap.DOMTarget,
  vars: { trigger?: gsap.DOMTarget; delay?: number; stagger?: number; y?: string } = {},
) {
  const { trigger, delay = 0, stagger = 0.09, y = "112%" } = vars;
  return gsap.from(target, {
    yPercent: parseFloat(y),
    duration: 1.05,
    ease: EASE,
    stagger,
    delay,
    ...(trigger ? { scrollTrigger: { trigger, start: "top 82%", once: true } } : {}),
  });
}

/** Clip-path curtain for imagery, paired with a slow settle of the picture itself. */
export function maskIn(
  wrapper: gsap.DOMTarget,
  image: gsap.DOMTarget | null,
  vars: { trigger?: gsap.DOMTarget; delay?: number } = {},
) {
  const tl = gsap.timeline({
    delay: vars.delay ?? 0,
    ...(vars.trigger
      ? { scrollTrigger: { trigger: vars.trigger, start: "top 78%", once: true } }
      : {}),
  });

  tl.from(wrapper, {
    clipPath: "inset(0% 0% 100% 0%)",
    duration: 1.25,
    ease: "power3.inOut",
  });

  if (image) {
    // clearProps hands the element back to CSS so hover transitions still apply
    tl.from(
      image,
      { scale: 1.14, duration: 1.6, ease: "power3.out", clearProps: "transform" },
      0,
    );
  }

  return tl;
}

/** Hairlines that draw in from the left as a section arrives. */
export function drawRules(target: gsap.DOMTarget, trigger?: gsap.DOMTarget) {
  return gsap.from(target, {
    scaleX: 0,
    transformOrigin: "left center",
    duration: 1.1,
    ease: "power3.inOut",
    stagger: 0.08,
    ...(trigger ? { scrollTrigger: { trigger, start: "top 80%", once: true } } : {}),
  });
}

/** Soft copy entrance used for paragraphs, pills and small print. */
export function fadeUp(
  target: gsap.DOMTarget,
  vars: { trigger?: gsap.DOMTarget; delay?: number; stagger?: number; y?: number } = {},
) {
  const { trigger, delay = 0, stagger = 0.07, y = 18 } = vars;
  return gsap.from(target, {
    y,
    autoAlpha: 0,
    duration: 0.85,
    ease: EASE_SOFT,
    stagger,
    delay,
    ...(trigger ? { scrollTrigger: { trigger, start: "top 84%", once: true } } : {}),
  });
}

export { gsap, ScrollTrigger };
