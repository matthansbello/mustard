import React from 'react';

function Intro() {
  return (
    <section className="page-intro section-padding pb-0">
      <div className="container">
        <div className="row md-marg">
          <div className="col-lg-6">
            <div className="img md-mb80">
              <div className="row">
                <div className="col-6">
                  <img src="/assets/imgs/intro/female-dev|mustardhq.webp" alt="" />
                  <div className="img-icon">
                    <img src="/assets/imgs/arw0.png" alt="" />
                  </div>
                </div>
                <div className="col-6 mt-40">
                  <img src="/assets/imgs/intro/male-dev|mustardhq.webp" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="cont">
              <h3 className="mb-30">
                Mustard is a full-service{' '}
                <span className="fw-200">tech and media</span> agency
               <span className="fw-200">creating digital experiences</span> &
                products <span className="fw-200">as a means of </span> worship.
              </h3>
              <p>
              Our commitment is to the seamless integration of innovative thinking and meticulous execution, ensuring every solution we deliver embodies both excellence and delivers tangible outcomes.
              </p>
              <a href="/contact" className="underline main-color mt-40">
                <span className="text">
                  Explore More <i className="ti-arrow-top-right"></i>
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
