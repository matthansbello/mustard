import React from 'react';
import { VALUES } from '@/common/content';

const ICONS = [
  (
    <svg key="value-1" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        d="M24 6l5.3 10.7L41 18.4l-8.5 8.3L34.6 38 24 32.4 13.4 38l2.1-11.3L7 18.4l11.7-1.7L24 6z"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
    </svg>
  ),
  (
    <svg key="value-2" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M24 6l14 6v9c0 9-6 15-14 21C16 36 10 30 10 21v-9l14-6z" strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M18 24l4 4 8-8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  (
    <svg key="value-3" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="6" strokeWidth="2.2" />
      <circle cx="24" cy="8" r="3.4" strokeWidth="2.2" />
      <circle cx="10" cy="34" r="3.4" strokeWidth="2.2" />
      <circle cx="38" cy="34" r="3.4" strokeWidth="2.2" />
      <path d="M24 14v4M20 27l-7 5M28 27l7 5" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  ),
  (
    <svg key="value-4" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="17" cy="18" r="6" strokeWidth="2.2" />
      <circle cx="32" cy="20" r="5" strokeWidth="2.2" />
      <path d="M6 40c0-6 5-10 11-10s11 4 11 10M28 32c1-4 5-6 9-6s8 3 8 8" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  ),
];

function Values() {
  return (
    <section className="about-values section-padding">
      <div className="container">
        <div className="sec-head mb-80 reveal">
          <span className="sub-title main-color mb-5">What Drives Us</span>
          <h3 className="fw-600 fz-50 text-u split-heading">
            Principles we build on.
          </h3>
        </div>
        <div className="av-grid">
          {VALUES.map((value, i) => (
            <div key={value.title} className="av-card glass-panel reveal tilt">
              <div className="av-icon" aria-hidden="true">
                {ICONS[i]}
              </div>
              <h5>{value.title}</h5>
              <p>{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Values;
