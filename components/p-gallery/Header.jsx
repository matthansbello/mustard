'use client';
import React, { useEffect, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import loadBackgroudImages from '@/common/loadBackgroudImages';

function Header() {
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo('.header', { y: 200 }, { y: 0, duration: 1.1, ease: 'power4.out' }, '+=2.5');
    tl.fromTo(
      '.header .ph-top, .header h1, .header .ph-meta',
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.12, ease: 'power4.out' },
      '-=0.5'
    );

    return () => tl.kill();
  }, []);

  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <div
      className="header page-header futuro bg-img section-padding valign"
      data-background="/assets/imgs/background/bg4.jpg"
      data-overlay-dark="9"
    >
      <span className="hero-grid" aria-hidden="true" />
      <div className="container pt-80">
        <div className="ph-top">
          <span className="hud-chip">
            <span className="dot" aria-hidden="true" />
            Selected Work
          </span>
          <span className="ph-crumb">
            Home <span className="sep">/</span> Portfolio
          </span>
        </div>
        <h1 className="text-u">
          Work <span className="grad-text">Done</span>
        </h1>
        <div className="ph-meta">
          <div>
            <span className="k">Focus</span>
            <span className="v">Web · Product · Brand</span>
          </div>
          <div>
            <span className="k">Shipped</span>
            <span className="v">137+ Projects</span>
          </div>
          <div>
            <span className="k">Clients</span>
            <span className="v">Global Partners</span>
          </div>
        </div>
        <a
          href="/company-profile"
          className="butn butn-md butn-bord radius-30 magnetic mt-40 d-inline-flex align-items-center"
        >
          <span>
            Download Portfolio (PDF) <i className="ti-download ml-10"></i>
          </span>
        </a>
      </div>
    </div>
  );
}

export default Header;
