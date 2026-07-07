import React from 'react';
import { SITE } from '@/common/site-config';

const CHANNELS = [
  {
    tag: 'Primary',
    label: 'Book a Meeting',
    value: 'Reserve a slot on our calendar',
    href: SITE.calendar,
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="5" width="18" height="16" rx="2" strokeWidth="1.8" />
        <path d="M3 9h18M8 3v4M16 3v4" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    tag: 'Chat',
    label: 'WhatsApp',
    value: SITE.whatsappDisplay,
    href: SITE.whatsapp,
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4 20l1.4-4A8 8 0 1112 20a8 8 0 01-4-1L4 20z"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path d="M9 10c0 3 2 5 5 5" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    tag: 'Call',
    label: 'Phone',
    value: SITE.phone,
    href: SITE.phoneTel,
    external: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M5 4h4l2 5-3 2a11 11 0 005 5l2-3 5 2v4a1 1 0 01-1 1A16 16 0 014 5a1 1 0 011-1z"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    tag: 'Mail',
    label: 'Email',
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    external: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" strokeWidth="1.8" />
        <path d="M4 7l8 6 8-6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

function Contact() {
  return (
    <section className="contact-futuro section-padding">
      <div className="container">
        <div className="row lg-marg">
          <div className="col-lg-5">
            <div className="cf-intro reveal reveal-left">
              <span className="hud-chip mb-30 d-inline-flex">
                <span className="dot" aria-hidden="true" />
                Start a conversation
              </span>
              <h2 className="split-heading">
                Let&apos;s build something worth remembering.
              </h2>
              <p className="mt-30">
                Tell us about your product, brand, or idea. We reply within 24
                hours and love ambitious problems.
              </p>

              <div className="cf-address glass-panel hud-frame mt-50">
                <span className="k">Studio</span>
                <p>{SITE.address}</p>
                <div className="cf-social">
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
            </div>
          </div>

          <div className="col-lg-7">
            <div className="cf-channels reveal reveal-right">
              {CHANNELS.map((c, i) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="cf-card glass-panel"
                  target={c.external ? '_blank' : undefined}
                  rel={c.external ? 'noreferrer' : undefined}
                >
                  <span className="cf-num" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="cf-icon" aria-hidden="true">
                    {c.icon}
                  </span>
                  <span className="cf-tag">{c.tag}</span>
                  <span className="cf-label">{c.label}</span>
                  <span className="cf-value">{c.value}</span>
                  <span className="cf-arrow" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path
                        d="M7 17L17 7M17 7H9M17 7v8"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
