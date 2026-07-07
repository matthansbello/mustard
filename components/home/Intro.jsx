import React from 'react';
import { COMPANY } from '@/common/content';

function Intro() {
  return (
    <section className="home-intro section-padding" id="intro">
      <div className="container">
        <div className="hi-top reveal">
          <span className="hud-chip">
            <span className="dot" aria-hidden="true" />
            Who We Are
          </span>
          <span className="hi-index">/ 01 — Studio</span>
        </div>
        <div className="row lg-marg">
          <div className="col-lg-8">
            <h2 className="hi-lead split-heading">
              A tech and media studio building digital products as a means of
              worship.
            </h2>
          </div>
          <div className="col-lg-4 valign">
            <div className="hi-body reveal reveal-right">
              <p>{COMPANY.intro}</p>
              <a href="/about" className="underline main-color mt-30 magnetic">
                <span className="text">
                  Our Story <i className="ti-arrow-top-right"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
