'use client';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import loadBackgroudImages from '@/common/loadBackgroudImages';
import { STATS } from '@/common/content';

const ROTATORS = ['great products.', 'bold brands.', 'real impact.', 'digital worship.'];

function Header() {
  const [word, setWord] = useState(0);

  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo('.hero', { y: 160 }, { y: 0, duration: 1.1, ease: 'power4.out' }, '+=2.5');
    tl.fromTo(
      '.hero .h-chip',
      { y: 24, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: 'power3.out' },
      '-=0.6'
    );
    tl.fromTo(
      '.hero .h-title .line',
      { yPercent: 120, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 1, stagger: 0.12, ease: 'power4.out' },
      '-=0.4'
    );
    tl.fromTo(
      '.hero .h-aside > *',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out' },
      '-=0.6'
    );
    tl.fromTo(
      '.hero .h-foot',
      { y: 24, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' },
      '-=0.5'
    );
    return () => tl.kill();
  }, []);

  useEffect(() => {
    loadBackgroudImages();
  }, []);

  useEffect(() => {
    const id = setInterval(() => setWord((w) => (w + 1) % ROTATORS.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <header className="hero home-hero valign">
      <span className="hero-grid" aria-hidden="true" />
      <span className="hero-orb" aria-hidden="true" />
      <div className="container ontop">
        <div className="h-chips">
          <span className="h-chip hud-chip">
            <span className="dot" aria-hidden="true" />
            Digital Product Studio
          </span>
          <span className="h-chip hud-chip">Jos, Nigeria — Worldwide</span>
        </div>

        <div className="row align-items-end">
          <div className="col-lg-8">
            <h1 className="h-title">
              <span className="line">We build</span>
              <span className="line">
                <span className="rotator" aria-live="polite">
                  {ROTATORS.map((w, i) => (
                    <span
                      key={w}
                      className={`grad-text rot-word${i === word ? ' is-active' : ''}`}
                      aria-hidden={i !== word}
                    >
                      {w}
                    </span>
                  ))}
                </span>
              </span>
            </h1>
          </div>
          <div className="col-lg-4">
            <div className="h-aside">
              <p>
                MustardHQ merges innovation with excellence — designing,
                engineering, branding, and securing products and systems that endure.
              </p>
              <div className="h-actions">
                <a
                  href="/portfolio"
                  className="butn butn-md butn-bg main-colorbg radius-30 magnetic"
                >
                  <span className="text">View Work</span>
                </a>
                <a href="/contact" className="butn butn-md butn-bord radius-30 magnetic">
                  <span>Start a Project</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="h-foot">
          {STATS.map((s) => (
            <div key={s.k} className="h-stat">
              <span className="v">{s.v}</span>
              <span className="k">{s.k}</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
