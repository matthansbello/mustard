import React from 'react';
import { APPROACH as STEPS } from '@/common/content';

function Approach() {
  return (
    <section className="about-approach section-padding pt-0">
      <div className="container">
        <div className="sec-head mb-60 reveal">
          <span className="sub-title main-color mb-5">How We Work</span>
          <h3 className="fw-600 fz-50 text-u split-heading">The approach.</h3>
        </div>
        <div className="ap-list">
          {STEPS.map((step, i) => (
            <div key={step.title} className="ap-step reveal">
              <span className="ap-num" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Approach;
