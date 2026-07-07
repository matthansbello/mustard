import React from 'react';
import { SITE } from '@/common/site-config';

function Intro() {
  return (
    <section className="about-manifesto section-padding">
      <div className="container">
        <div className="row lg-marg align-items-center">
          <div className="col-lg-6 md-mb80">
            <span className="hud-chip mb-30 d-inline-flex reveal">
              <span className="dot" aria-hidden="true" />
              Who We Are
            </span>
            <h2 className="am-lead reveal">
              A full-service <span className="grad-text">tech &amp; media</span>{' '}
              studio building digital products as a means of worship.
            </h2>
            <p className="am-body mt-30 reveal">
              We integrate innovative thinking with meticulous execution, so
              every solution we deliver embodies excellence and produces tangible
              outcomes. From first sketch to final ship, we build things that
              last and that you fully own.
            </p>
            <a
              href={SITE.calendar}
              className="butn butn-md butn-bg main-colorbg radius-30 mt-40 magnetic reveal"
              target="_blank"
              rel="noreferrer"
            >
              <span className="text">Work With Us</span>
            </a>
          </div>

          <div className="col-lg-6">
            <div className="row md-marg align-items-center">
              <div className="col-8">
                <div className="am-figure hud-frame reveal reveal-scale">
                  <img
                    src="/assets/imgs/Mustard-Intro.webp"
                    alt="MustardHQ team at work"
                  />
                  <span className="am-badge hud-chip">Est. Jos, NG</span>
                </div>
              </div>
              <div className="col-4">
                <div className="am-side">
                  <div className="am-fact glass-panel reveal">
                    <span className="v grad-text">10+</span>
                    <span className="k">Years Combined</span>
                  </div>
                  <div className="am-fact glass-panel reveal">
                    <span className="v grad-text">4</span>
                    <span className="k">Core Services</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
