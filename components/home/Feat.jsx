'use client';
import loadBackgroudImages from '@/common/loadBackgroudImages';
import React, { useEffect } from 'react';
import { CAPABILITIES } from '@/common/content';

const IMAGES = [
  '/assets/imgs/serv-img/productdevelopment|mustardhq.webp',
  '/assets/imgs/serv-img/services|mustardhq.webp',
  '/assets/imgs/serv-img/branding|mustardhq.webp',
];

function Feat() {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <section className="home-why section-padding">
      <div className="container ontop">
        <div className="hw2-grid">
          <div className="hw2-cont reveal reveal-left">
            <span className="hud-chip mb-30 d-inline-flex">
              <span className="dot" aria-hidden="true" />
              Why MustardHQ
            </span>
            <h3 className="split-heading">
              We don&apos;t just build; we cultivate.
            </h3>
            <p className="mt-30">
              We architect ecosystems and strategy that give you operational
              mastery and digital stewardship — long-term, robust solutions you
              fully own and control.
            </p>
            <a
              href="/about"
              className="butn-crev d-flex align-items-center mt-40 magnetic"
            >
              <span className="hover-this">
                <span className="circle hover-anim">
                  <i className="ti-arrow-top-right"></i>
                </span>
              </span>
              <span className="text">How we work</span>
            </a>
          </div>

          <div className="hw2-cards">
            {CAPABILITIES.map((cap, i) => (
              <div key={cap.title} className="hw2-card glass-panel reveal">
                <div
                  className="hw2-thumb bg-img"
                  data-background={IMAGES[i]}
                  role="img"
                  aria-label={cap.title}
                ></div>
                <div className="hw2-text">
                  <span className="hw2-num" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h5>{cap.title}</h5>
                  <p>{cap.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="circle-blur">
        <img src="/assets/imgs/patterns/blur1.png" alt="" role="presentation" />
      </div>
    </section>
  );
}

export default Feat;
