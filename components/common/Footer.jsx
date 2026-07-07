import React from 'react';
import { SITE } from '@/common/site-config';

const YEAR = new Date().getFullYear();

function Footer() {
  return (
    <footer className="futuro-footer">
      <span className="hero-grid" aria-hidden="true" />
      <div className="container">
        <div className="foot-cta">
          <div>
            <span className="hud-chip mb-30 d-inline-flex">
              <span className="dot" aria-hidden="true" />
              Let&apos;s build together
            </span>
            <h2>
              Ready to <span className="grad-text">evolve?</span>
            </h2>
          </div>
          <a
            href={SITE.calendar}
            className="butn butn-md butn-bg main-colorbg radius-30 magnetic"
            target="_blank"
            rel="noreferrer"
          >
            <span className="text">Start a Project</span>
          </a>
        </div>

        <div className="foot-grid">
          <div className="foot-col foot-brand">
            <div className="logo icon-img-100">
              <img
                src="/assets/imgs/brands/mustardhq-main-logo.webp"
                alt="MustardHQ Logo"
              />
            </div>
            <p>
              A digital product studio engineering future-ready web, product,
              and brand experiences from Jos, Nigeria to the world.
            </p>
            <div className="foot-social">
              <a
                href={SITE.social.twitter}
                target="_blank"
                rel="noreferrer"
                aria-label="MustardHQ on X"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href={SITE.social.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="MustardHQ on LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="MustardHQ on Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div className="foot-col foot-links">
            <h6 className="k">Navigate</h6>
            <ul className="rest">
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/portfolio">Portfolio</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href={SITE.products.blog} target="_blank" rel="noreferrer">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div className="foot-col foot-links">
            <h6 className="k">Products</h6>
            <ul className="rest">
              <li>
                <a
                  href={SITE.products.labarintech}
                  target="_blank"
                  rel="noreferrer"
                >
                  LabarinTech
                </a>
              </li>
              <li>
                <a
                  href={SITE.products.productTeardown}
                  target="_blank"
                  rel="noreferrer"
                >
                  Product Teardown
                </a>
              </li>
              <li>
                <a href={SITE.calendar} target="_blank" rel="noreferrer">
                  Get a Quote
                </a>
              </li>
            </ul>
          </div>

          <div className="foot-col foot-contact">
            <h6 className="k">Contact</h6>
            <p className="p-color mb-15">
              {SITE.addressLines.map((line) => (
                <React.Fragment key={line}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
            <p className="mb-10">
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </p>
            <p>
              <a href={SITE.phoneTel} className="main-color fz-22">
                {SITE.phone}
              </a>
            </p>
          </div>
        </div>

        <div className="foot-bottom">
          <span className="status">
            <span className="dot" aria-hidden="true" />
            All systems operational
          </span>
          <p>© {YEAR} Mustard Innovations &amp; Technologies Limited.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
