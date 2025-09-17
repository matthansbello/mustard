import React from 'react';
import Image from 'next/image';

function Portfolio() {
  return (
    <section className="work-grid pt-60 pb-60">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="item mb-80 mt-40">
              <div className="img">
                <img src="/assets/imgs/works/mustardworks/kiiwii-by-mustardhq.webp" alt="" />
              </div>
              <div className="cont d-flex align-items-end mt-30">
                <div>
                  <span className="p-color mb-5 sub-title">Web App</span>
                  <h6>Kiiwii Utility</h6>
                </div>
                <div className="ml-auto">
                  <a href="http://kiiwii.co" target="_blank">
                    <span className="ti-arrow-top-right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="item mb-80 mt-40">
              <div className="img">
                <img src="/assets/imgs/works/mustardworks/canine-by-mustardhq.webp" alt="Canine Connect" />
              </div>
              <div className="cont d-flex align-items-end mt-30">
                <div>
                  <span className="p-color mb-5 sub-title">Product</span>
                  <h6>Canine Connect</h6>
                </div>
                <div className="ml-auto">
                  <a href="https://canineconnect.com" target="_blank">
                    <span className="ti-arrow-top-right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-2">
            <div className="item mb-80 mt-40">
              <div className="img">
                <img src="/assets/imgs/works/mustardworks/ymi|mustardhq.webp" alt="Youth Making Impact" />
              </div>
              <div className="cont d-flex align-items-end mt-30">
                <div>
                  <span className="p-color mb-5 sub-title">Web Design</span>
                  <h6>Youth Making Impact</h6>
                </div>
                <div className="ml-auto">
                  <a href="https://youthmakingimpact.org" target="_blank">
                    <span className="ti-arrow-top-right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 d-flex align-items-end">
            <div className="item mb-80 mt-40">
              <div className="img">
                <img src="/assets/imgs/works/mustardworks/hansbello|mustardhq.webp" alt="Matthew Hans-Bello Brand" />
              </div>
              <div className="cont d-flex align-items-end mt-30">
                <div>
                  <span className="p-color mb-5 sub-title">Web Design & Branding</span>
                  <h6>Matthew Hans-Bello Brand</h6>
                </div>
                <div className="ml-auto">
                  <a href="https://www.hansbello.com" target="_blank">
                    <span className="ti-arrow-top-right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-2">
            <div className="item mb-80 mt-40">
              <div className="img">
                <img src="/assets/imgs/works/mustardworks/tasckwebsite|mustardhq.webp" alt="TASCK Website" />
              </div>
              <div className="cont d-flex align-items-end mt-30">
                <div>
                  <span className="p-color mb-5 sub-title">Product Management & Development</span>
                  <h6>TASCK Website </h6>
                </div>
                <div className="ml-auto">
                  <a href="https://tasck.org" target="_blank">
                    <span className="ti-arrow-top-right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-8 offset-lg-2">
            <div className="item mt-40">
              <div className="img">
                <img src="/assets/imgs/works/grid/6.jpg" alt="" />
              </div>
              <div className="cont d-flex align-items-end mt-30">
                <div>
                  <span className="p-color mb-5 sub-title">Web Design</span>
                  <h6>Figma Digital Agency</h6>
                </div>
                <div className="ml-auto">
                  <a href="/project-details">
                    <span className="ti-arrow-top-right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
