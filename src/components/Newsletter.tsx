import { useState } from "react";
import Reveal, { Arrow } from "./Reveal";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section className="section news" id="newsletter">
      <div className="shell news__grid">
        <Reveal>
          <p className="eyebrow">Stay close</p>
          <h2 className="h2" style={{ marginTop: "1.1rem" }}>
            A little more intention,
            <br />
            straight to your <span className="serif">inbox.</span>
          </h2>
        </Reveal>

        <Reveal delay={90}>
          <p className="lede" style={{ marginBottom: "1.75rem" }}>
            Join the movement and receive 10% off your first order, plus updates on new releases,
            resources and community stories.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setDone(true);
            }}
            noValidate={false}
          >
            <label htmlFor="news-email">Email address</label>
            <input
              id="news-email"
              type="email"
              name="email"
              required
              autoComplete="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setDone(false);
              }}
            />
            <button className="btn" type="submit">
              Join the Movement <Arrow />
            </button>
          </form>

          <p className="news__done" role="status">
            {done ? "You're in. Look out for a welcome note shortly." : ""}
          </p>
          <p className="note">No noise. Unsubscribe whenever you like.</p>
        </Reveal>
      </div>
    </section>
  );
}
