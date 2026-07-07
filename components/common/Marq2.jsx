import React from 'react';
import { SITE } from '@/common/site-config';

function Marq2() {
  const marquess = ['Ready to Evolve? Connect With Us'];
  const allMarquess = Array(6).fill(marquess).flat();
  const contact = ['Get Started Today.'];
  const allContact = Array(6).fill(contact).flat();

  return (
    <section className="call-marq section-padding o-hidden">
      <div className="main-marq lrg sub-bg pt-20 pb-20">
        <div className="slide-har st1">
          <div className="box">
            {allMarquess.map((item, i) => (
              <div key={i} className="item">
                <h4 className="d-flex align-items-center">
                  <span>{item}</span>
                  <span className="icon-img-50 ml-40">
                    <img src="/assets/imgs/star.png" alt="" role="presentation" />
                  </span>
                </h4>
              </div>
            ))}
            {allMarquess.map((item, i) => (
              <div key={`dup-${i}`} className="item">
                <h4 className="d-flex align-items-center">
                  <span>{item}</span>
                  <span className="icon-img-50 ml-40">
                    <img src="/assets/imgs/star.png" alt="" role="presentation" />
                  </span>
                </h4>
              </div>
            ))}
          </div>

          <a
            href={SITE.calendar}
            className="overlay-link"
            target="_blank"
            rel="noreferrer"
            aria-label="Book a meeting with MustardHQ"
          ></a>
        </div>
      </div>
      <div className="main-marq bord-item">
        <div className="slide-har st2">
          <div className="box">
            {allContact.map((item, i) => (
              <div key={i} className="item">
                <h4 className="d-flex align-items-center">
                  <span>{item}</span>
                </h4>
              </div>
            ))}
          </div>
          <div className="box">
            {allContact.map((item, i) => (
              <div key={`dup-${i}`} className="item">
                <h4 className="d-flex align-items-center">
                  <span>{item}</span>
                </h4>
              </div>
            ))}
          </div>

          <a href="/contact" className="overlay-link" aria-label="Contact MustardHQ"></a>
        </div>
      </div>
    </section>
  );
}

export default Marq2;
