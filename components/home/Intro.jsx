import React from 'react';
import Image from 'next/image';

function Intro() {
  return (
    <section className="intro section-padding">
      <div className="container">
        <div className="row lg-marg">
          <div className="col-lg-8 md-mb80">
            <div className="row lg-marg align-items-center">
              <div className="col-md-6">
                <div className="img1 sm-mb50">
                  <img src="/assets/imgs/Mustard-Intro.webp" alt="Mustard Innovations and Technologies Limited Intro" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="text">
                  <h3 className="mb-30">
                    We believe in the power of{' '}
                    <span className="fw-300"></span>{' '}
                    <span className="fw-300">excellence.</span>
                  </h3>
                  <p>
                    We are believers and we focus on more than just excellence for institutional growth and more about covering every aspect of a business and a brand. 
                  </p>

                  <a href="/about" className="underline main-color mt-40">
                    <span className="text">
                      More About Us <i className="ti-arrow-top-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="numbers mt-80">
              <div className="row lg-marg">
                <div className="col-md-6">
                  <div className="item bord-thin-top pt-30 d-flex align-items-end mt-20">
                    <div>
                      <h3 className="fw-300 mb-10">97%</h3>
                      <h6 className="p-color sub-title">
                        Clients Satisfaction
                      </h6>
                    </div>
                    <div className="ml-auto">
                      <div className="icon-img-40">
                        <img src="/assets/imgs/arw0.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="item bord-thin-top pt-30 d-flex align-items-end mt-20">
                    <div>
                      <h3 className="fw-300 mb-10">132</h3>
                      <h6 className="p-color sub-title">Projects Completed</h6>
                    </div>
                    <div className="ml-auto">
                      <div className="icon-img-40">
                        <img src="/assets/imgs/arw0.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="img-full fit-img">
              <img src="/assets/imgs/intro/Mustard-Intro2.webp" alt="Mustard Innovations and Technologies Limited Intro" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
