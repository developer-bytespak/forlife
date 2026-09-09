import { trustItems } from "../data/site";

export default function TrustStrip() {
  return (
    <section className="trust dark-surface" aria-label="What every purchase includes">
      <ul className="shell trust__row">
        {trustItems.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </section>
  );
}
