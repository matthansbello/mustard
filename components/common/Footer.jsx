import React from 'react';
import Image from 'next/image';

function Footer() {
  return (
    <footer className="clean-footer crev">
      <div className="container pb-40 pt-40 ontop">
        <div className="row justify-content-between">
          <div className="col-lg-2">
            <div className="logo icon-img-100 md-mb80">
              <img src="/assets/imgs/mustardlogo.webp" alt="MustardHQ Logo" />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="column md-mb50">
              <h6 className="sub-title mb-30">Contact</h6>
              <h6 className="p-color fw-400">
                6 Swomen Close, Rayfield <br /> Jos, Nigeria
              </h6>
              <h6 className="mt-30 mb-15">
                <a href="mailto:contact@mustardhq.org">contact@mustardhq.org</a>
              </h6>
              <a href="tel:2348071771376" className="underline">
                <span className="fz-22 main-color">+234 (807) 177 1376</span>
              </a>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="column md-mb50">
              <h6 className="sub-title mb-30">Useful Links</h6>
              <ul className="rest fz-14 opacity-7">
                <li className="mb-15">
                  <a href="/about">About</a>
                </li>
                {/* <li className="mb-15">
                  <a href="/page-services">Services</a>
                </li> */}
                <li className="mb-15">
                  <a href="https://labarintech.com" target="_blank">Blog</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="column subscribe-minimal">
              {/* <h6 className="sub-title mb-30">Newsletter</h6> */}
              {/* <div className="form-group mb-40">
                <input type="text" name="subscrib" placeholder="Your Email" />
                <button>
                  <span className="ti-location-arrow"></span>
                </button>
              </div> */}
              <ul className="rest social-icon d-flex align-items-center">
                {/* <li className="hover-this cursor-pointer">
                  <a href="#0" className="hover-anim" target="_blank">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li> */}
                <li className="hover-this cursor-pointer ml-10">
                  <a href="https://x.com/mustardhq" className="hover-anim" target="_blank">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="hover-this cursor-pointer ml-10">
                  <a href="https://www.linkedin.com/company/mustardinnovations" className="hover-anim" target="_blank">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li className="hover-this cursor-pointer ml-10">
                  <a href="https://instagram.com/mustardhq" className="hover-anim" target="_blank">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-30 pb-30 mt-80 bord-thin-top">
          <div className="text-center">
            <p className="fz-14">
              © 2025 Mustard Innovations & Technologies Limited.
              </p>
          </div>
        </div>
      </div>
      <div className="circle-blur">
        <img src="/assets/imgs/patterns/blur1.png" alt="" />
      </div>
    </footer>
  );
}

export default Footer;
