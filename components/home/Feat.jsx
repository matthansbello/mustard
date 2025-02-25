'use client';
import loadBackgroudImages from '@/common/loadBackgroudImages';
import React, { useEffect } from 'react';

function Feat() {
  useEffect(() => {
    loadBackgroudImages();
  }, []);
  return (
    <section className="feat section-padding">
      <div className="container ontop">
        <div className="row">
          <div className="col-lg-5">
            <div className="cont md-mb50">
              <h6 className="sub-title main-color mb-15">Trusted Services</h6>
              <h3 className="mb-30">
              We don&apos;t just build; we cultivate. 
              </h3>
              <p>
              Our portfolio showcases our expertise in ecosystem development and strategic architecture, designed to provide our clients with operational mastery and digital stewardship. We focus on continuity engineering and solution integration, empowering you with long-term, robust digital solutions that you fully own and control.
              </p>
              <a
                href="/about"
                className="butn-crev d-flex align-items-center mt-40"
              >
                <span className="hover-this">
                  <span className="circle hover-anim">
                    <i className="ti-arrow-top-right"></i>
                  </span>
                </span>
                <span className="text">Learn more</span>
              </a>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1">
            <div className="item mb-30">
              <div className="row">
                <div
                  className="col-md-4 bg-img"
                  data-background="/assets/imgs/serv-img/productdevelopment|mustardhq.webp"
                ></div>
                <div className="col-md-8">
                  <div className="info">
                    <h5 className="mb-15">Ecosystem Development</h5>
                    <p>
                    We specialize in ecosystem development, creating interconnected digital environments that grow with your business and provide a unified, seamless experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="item mb-30">
              <div className="row">
                <div
                  className="col-md-4 bg-img"
                  data-background="/assets/imgs/serv-img/services|mustardhq.webp"
                ></div>
                <div className="col-md-8">
                  <div className="info">
                    <h5 className="mb-15">Operational Mastery</h5>
                    <p>
                    We provide operational mastery, ensuring your digital infrastructure is optimized for performance, security, and scalability, giving you complete confidence and control.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="row">
                <div
                  className="col-md-4 bg-img"
                  data-background="/assets/imgs/serv-img/branding|mustardhq.webp"
                ></div>
                <div className="col-md-8">
                  <div className="info">
                    <h5 className="mb-15">Branding</h5>
                    <p>
                    Our team designs strategic architectures that define your digital presence, ensuring consistency and a lasting impact across all touchpoints
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="circle-blur">
        <img src="/assets/imgs/patterns/blur1.png" alt="" />
      </div>
    </section>
  );
}

export default Feat;
