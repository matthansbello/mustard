import React from 'react';
import { SITE } from '@/common/site-config';
import {
  COMPANY,
  STATS,
  SERVICES,
  CAPABILITIES,
  APPROACH,
  VALUES,
  PROJECTS,
  TESTIMONIALS,
  initials,
  displayUrl,
} from '@/common/content';

const YEAR = new Date().getFullYear();
const featured = PROJECTS.filter((p) => p.img);

function Profile() {
  return (
    <article className="profile-doc">
      {/* COVER */}
      <section className="pdoc-page pdoc-cover">
        <span className="hero-grid" aria-hidden="true" />
        <div className="pdoc-cover-top">
          <div className="pdoc-logo">
            <img
              src="/assets/imgs/brands/mustardhq-main-logo.webp"
              alt="MustardHQ"
            />
          </div>
          <span className="pdoc-chip">Company Profile — {YEAR}</span>
        </div>
        <div className="pdoc-cover-main">
          <span className="pdoc-eyebrow">{SITE.tagline}</span>
          <h1>
            Building <span className="grad-text">great products</span> with
            excellence.
          </h1>
          <p>{COMPANY.mission}</p>
        </div>
        <div className="pdoc-cover-foot">
          <div>
            <span className="k">Web</span>
            <span className="v">{displayUrl(SITE.url)}</span>
          </div>
          <div>
            <span className="k">Email</span>
            <span className="v">{SITE.email}</span>
          </div>
          <div>
            <span className="k">Phone</span>
            <span className="v">{SITE.phone}</span>
          </div>
          <div>
            <span className="k">Studio</span>
            <span className="v">Jos, Nigeria</span>
          </div>
        </div>
      </section>

      {/* OVERVIEW + STATS */}
      <section className="pdoc-page">
        <div className="pdoc-sec-head">
          <span className="pdoc-num">01</span>
          <h2>Overview</h2>
        </div>
        <p className="pdoc-lead">{COMPANY.intro}</p>
        <div className="pdoc-stats">
          {STATS.map((s) => (
            <div key={s.k} className="pdoc-stat">
              <span className="v grad-text">{s.v}</span>
              <span className="k">{s.k}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="pdoc-page">
        <div className="pdoc-sec-head">
          <span className="pdoc-num">02</span>
          <h2>Services</h2>
        </div>
        <div className="pdoc-grid-2">
          {SERVICES.map((s, i) => (
            <div key={s.title} className="pdoc-card">
              <span className="pdoc-idx">{String(i + 1).padStart(2, '0')}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="pdoc-page">
        <div className="pdoc-sec-head">
          <span className="pdoc-num">03</span>
          <h2>Capabilities</h2>
        </div>
        <div className="pdoc-grid-3">
          {CAPABILITIES.map((c) => (
            <div key={c.title} className="pdoc-card">
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* APPROACH */}
      <section className="pdoc-page">
        <div className="pdoc-sec-head">
          <span className="pdoc-num">04</span>
          <h2>Our Approach</h2>
        </div>
        <div className="pdoc-steps">
          {APPROACH.map((step, i) => (
            <div key={step.title} className="pdoc-step">
              <span className="s-num">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="pdoc-page">
        <div className="pdoc-sec-head">
          <span className="pdoc-num">05</span>
          <h2>Principles</h2>
        </div>
        <div className="pdoc-grid-2">
          {VALUES.map((v) => (
            <div key={v.title} className="pdoc-card">
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="pdoc-page pdoc-break">
        <div className="pdoc-sec-head">
          <span className="pdoc-num">06</span>
          <h2>Selected Work</h2>
        </div>
        <div className="pdoc-work">
          {featured.map((p) => (
            <div key={p.url} className="pdoc-work-item">
              <div className="pdoc-work-media">
                <img src={p.img} alt={`${p.name} — ${p.cat}`} />
              </div>
              <span className="pdoc-work-cat">{p.cat}</span>
              <h4>{p.name}</h4>
              <span className="pdoc-work-url">{displayUrl(p.url)}</span>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECT INDEX */}
      <section className="pdoc-page">
        <div className="pdoc-sec-head">
          <span className="pdoc-num">07</span>
          <h2>Project Index</h2>
        </div>
        <div className="pdoc-index">
          {PROJECTS.map((p, i) => (
            <div key={p.url} className="pdoc-index-row">
              <span className="pi-n">{String(i + 1).padStart(2, '0')}</span>
              <span className="pi-mono" aria-hidden="true">
                {initials(p.name)}
              </span>
              <span className="pi-name">{p.name}</span>
              <span className="pi-cat">{p.cat}</span>
              <span className="pi-url">{displayUrl(p.url)}</span>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="pdoc-page">
        <div className="pdoc-sec-head">
          <span className="pdoc-num">08</span>
          <h2>What Clients Say</h2>
        </div>
        <div className="pdoc-grid-2">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="pdoc-quote">
              <p>&ldquo;{t.desc}&rdquo;</p>
              <div className="pdoc-quote-by">
                <strong>{t.name}</strong>
                <span>{t.subName}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="pdoc-page pdoc-contact">
        <span className="hero-grid" aria-hidden="true" />
        <div className="pdoc-contact-inner">
          <span className="pdoc-eyebrow">Let&apos;s build together</span>
          <h2>
            Ready to <span className="grad-text">evolve?</span>
          </h2>
          <div className="pdoc-contact-grid">
            <div>
              <span className="k">Email</span>
              <span className="v">{SITE.email}</span>
            </div>
            <div>
              <span className="k">Phone</span>
              <span className="v">{SITE.phone}</span>
            </div>
            <div>
              <span className="k">WhatsApp</span>
              <span className="v">{SITE.whatsappDisplay}</span>
            </div>
            <div>
              <span className="k">Website</span>
              <span className="v">{displayUrl(SITE.url)}</span>
            </div>
            <div>
              <span className="k">Address</span>
              <span className="v">{SITE.address}</span>
            </div>
            <div>
              <span className="k">Social</span>
              <span className="v">@mustardhq</span>
            </div>
          </div>
          <p className="pdoc-legal">
            © {YEAR} {SITE.legalName}. All rights reserved.
          </p>
        </div>
      </section>
    </article>
  );
}

export default Profile;
