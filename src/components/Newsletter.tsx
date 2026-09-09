import { useState } from "react";
import { Arrow, Line } from "./Reveal";
import { MOTION, gsap, useMotion } from "../lib/motion";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const root = useMotion<HTMLElement>((mm, scope) => {
    mm.add(MOTION, () => {
      gsap
        .timeline({ scrollTrigger: { trigger: scope, start: "top 80%", once: true } })
        .from(".news .eyebrow", { y: 16, autoAlpha: 0, duration: 0.7, ease: "power3.out" })
        .from(
          ".news h2 .line > span",
          { yPercent: 115, duration: 1, ease: "power3.out", stagger: 0.09 },
          0.1,
        )
        .from(".news__body > *", { y: 22, autoAlpha: 0, duration: 0.8, stagger: 0.08, clearProps: "transform,opacity,visibility" }, 0.35);
    });
  });

  return (
    <section className="section news" id="newsletter" ref={root}>
      <div className="shell news__grid">
        <div>
          <p className="eyebrow">Stay close</p>
          <h2 className="h2">
            <Line>A little more intention,</Line>
            <Line>
              straight to your <span className="serif">inbox.</span>
            </Line>
          </h2>
        </div>

        <div className="news__body">
          <p className="lede">
            Join the movement and receive 10% off your first order, plus updates on new releases,
            resources and community stories.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setDone(true);
            }}
          >
            <div className="news__field">
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
            </div>
            <button className="btn" type="submit">
              Join the Movement <Arrow />
            </button>
          </form>

          <p className="news__done" role="status">
            {done ? "You're in. Look out for a welcome note shortly." : ""}
          </p>
          <p className="note">No noise. Unsubscribe whenever you like.</p>
        </div>
      </div>
    </section>
  );
}
