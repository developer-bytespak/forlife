import { footerCols, links } from "../data/site";

export default function Footer() {
  return (
    <footer className="footer dark-surface">
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
              For dreamers.
              <br />
              For doers.
              <br />
              For believers.
              <br />
              For achievers.
              <span className="serif">ForLife.</span>
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
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="footer__bottom">
          <p>© 2026 ForLife / IVL</p>
          <nav aria-label="Legal">
            <a href={links.about} target="_blank" rel="noreferrer">
              Privacy
            </a>
            <a href={links.about} target="_blank" rel="noreferrer">
              Terms
            </a>
            <a href={links.about} target="_blank" rel="noreferrer">
              Contact Information
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
