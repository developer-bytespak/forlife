import Reveal from "./Reveal";

export default function CommunityProof() {
  return (
    <section className="section" id="community">
      <div className="shell">
        <Reveal className="proof__head">
          <p className="eyebrow">The movement in motion</p>
          <h2 className="h2" style={{ marginTop: "1.1rem" }}>
            Growth feels different when you're not doing it{" "}
            <span className="serif">alone.</span>
          </h2>
        </Reveal>

        <div className="proof__grid">
          <Reveal className="proof__feature dark-surface">
            <div className="proof__media">
              <img
                src="/assets/hp-banner.png"
                alt=""
                width={2000}
                height={1125}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="proof__quote">
              <blockquote>
                ForLife exists for the people who are still deciding, still building and still
                believing. We move <span className="serif">together</span>.
              </blockquote>
              <cite>Dreamers. Doers. Believers. Achievers.</cite>
            </div>
          </Reveal>

          <div className="proof__side">
            <Reveal className="proof__card proof__card--sand" delay={80}>
              <span className="k">Built with people</span>
              <h3>A community, not an audience</h3>
              <p>
                Referral and ambassador programs put the movement in the hands of the people
                living it — so growth spreads the way it actually spreads: person to person.
              </p>
            </Reveal>

            <Reveal className="proof__card proof__card--powder" delay={160}>
              <span className="k">Made to be returned to</span>
              <h3>Lifetime access, always yours</h3>
              <p>
                Every experience stays in your members portal. Come back at the start of a new
                season, or on the day you need the reminder most.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
