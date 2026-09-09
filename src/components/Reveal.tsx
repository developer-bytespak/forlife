import { useEffect, useRef, type ElementType, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
};

/** Lightweight IntersectionObserver-based scroll reveal. */
export default function Reveal({
  children,
  as,
  delay = 0,
  className = "",
  style,
}: Props) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      typeof window === "undefined" ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      el.classList.add("is-in");
      return;
    }

    // Already on screen at mount (or in a very tall viewport): show immediately.
    if (el.getBoundingClientRect().top < window.innerHeight * 0.94) {
      el.classList.add("is-in");
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.06 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`.trim()}
      style={
        { ...(delay ? { "--d": `${delay}ms` } : null), ...style } as React.CSSProperties
      }
    >
      {children}
    </Tag>
  );
}

export const Arrow = () => (
  <span className="arrow" aria-hidden="true">
    →
  </span>
);
