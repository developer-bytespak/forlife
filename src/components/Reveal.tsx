import type { ElementType, ReactNode } from "react";

type Props = {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
};

/**
 * Layout wrapper kept from the first build so section markup stays stable.
 * Motion is now choreographed per-section with GSAP (src/lib/motion.ts), so this
 * renders plain markup — content is never hidden by CSS alone.
 */
export default function Reveal({ children, as, className = "", style }: Props) {
  const Tag = (as ?? "div") as ElementType;
  return (
    <Tag className={className} style={style}>
      {children}
    </Tag>
  );
}

/** One clipped headline line. The inner span is what GSAP slides upward. */
export const Line = ({ children }: { children: ReactNode }) => (
  <span className="line">
    <span>{children}</span>
  </span>
);

export const Arrow = () => (
  <span className="arrow" aria-hidden="true">
    →
  </span>
);
