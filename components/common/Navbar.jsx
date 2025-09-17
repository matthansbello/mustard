'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';

function Navbar() {
  function handleScroll() {
    const bodyScroll = window.scrollY;
    const navbar = document.querySelector('.navbar');

    if (bodyScroll > 300) navbar.classList.add('nav-scroll');
    else navbar.classList.remove('nav-scroll');
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  function handleDropdownMouseMove(event) {
    event.currentTarget.querySelector('.dropdown-menu').classList.add('show');
  }

  function handleDropdownMouseLeave(event) {
    event.currentTarget
      .querySelector('.dropdown-menu')
      .classList.remove('show');
  }
  function handleToggleNav() {
    if (
      document
        .querySelector('.navbar .navbar-collapse')
        .classList.contains('show')
    ) {
      document
        .querySelector('.navbar .navbar-collapse')
        .classList.remove('show');
    } else if (
      !document
        .querySelector('.navbar .navbar-collapse')
        .classList.contains('show')
    ) {
      document.querySelector('.navbar .navbar-collapse').classList.add('show');
    }
  }
  return (
    <nav className="navbar navbar-expand-lg bord blur">
      <div className="container o-hidden">
        <a className="logo icon-img-100" href="/">
          <img src="/assets/imgs/brands/mustardhq-main-logo.webp" alt="MustardHQ Logo" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleToggleNav}
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li
              onMouseLeave={handleDropdownMouseLeave}
              onMouseMove={handleDropdownMouseMove}
              className="nav-item dropdown"
            >
              <a
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="rolling-text">Products</span>
              </a>
              <div className="dropdown-menu mega-menu">
                <div className="container">
                  <div className="row">
                    <div className="col-lg">
                      <a className="item-img text-center" href="/">
                        <span className="img">
                          <img src="/assets/imgs/brands/mustardhq-for-home.webp" alt="" />
                        </span>
                        <span className="mt-15">Home</span>
                      </a>
                    </div>
                    <div className="col-lg">
                      <a
                        className="item-img text-center"
                        href="#"
                      >
                        <span className="img">
                          <img src="/assets/imgs/brands/mustardhq-for-comingsoon.webp" alt="" />
                        </span>
                        <span className="mt-15">LabarinTech</span>
                      </a>
                    </div>
                    <div className="col-lg">
                      <a
                        className="item-img text-center"
                        href="#"
                      >
                        <span className="img">
                          <img src="/assets/imgs/brands/mustardhq-for-comingsoon.webp" alt="" />
                        </span>
                        <span className="mt-15">Spiritual Gift</span>
                      </a>
                    </div>
                    <div className="col-lg">
                      <a
                        className="item-img text-center"
                        href="#"
                      >
                        <span className="img">
                          <img src="/assets/imgs/brands/mustardhq-for-comingsoon.webp" alt="" />
                        </span>
                        <span className="mt-15">Canine Connect</span>
                      </a>
                    </div>
                    <div className="col-lg">
                      <a className="item-img text-center" href="https://blog.hansbello.com" target="_blank">
                        <span className="img">
                          <img src="/assets/imgs/brands/productteardownclub|mustardhq.webp" alt="" />
                        </span>
                        <span className="mt-15">Product Teardown Club</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="/page-services">
                <span className="rolling-text">Services</span>
              </a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="/about">
                <span className="rolling-text">About</span>
              </a>
            </li>
            
            {/* Other Pages */}
            {/* <li
              onMouseLeave={handleDropdownMouseLeave}
              onMouseMove={handleDropdownMouseMove}
              className="nav-item dropdown"
            >
              <a
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="rolling-text">Pages</span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/about">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/page-services">
                    Services
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/page-services-details">
                    Services Details
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/page-team">
                    Our Team
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/page-team-details">
                    Team Details
                  </a>
                </li>
                
                <li>
                  <a className="dropdown-item" href="/page-FAQ">
                    FAQS
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/page-404">
                    Error 404
                  </a>
                </li>
              </ul>
            </li> */}

            <li className="nav-item">
              <a className="nav-link" href="/portfolio">
                <span className="rolling-text">Portfolio</span>
              </a>
            </li>


            {/* <li
              onMouseLeave={handleDropdownMouseLeave}
              onMouseMove={handleDropdownMouseMove}
              className="nav-item dropdown"
            >
              <a
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="rolling-text">Portfolio</span>
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="/portfolio">
                  Gallery
                </a>
                <a className="dropdown-item" href="/portfolio-creative">
                  Portfolio Creative
                </a>
                <a
                  className="dropdown-item"
                  href="/portfolio-creative-carousel"
                >
                  Creative Carousel
                </a>
                <a className="dropdown-item" href="/portfolio-grid">
                  Portfolio Grid
                </a>
                <a className="dropdown-item" href="/portfolio-masonry">
                  Portfolio Masonry
                </a>
                <a className="dropdown-item" href="/project-details">
                  Project Details
                </a>
              </div>
            </li> */}


            {/* <li
              onMouseLeave={handleDropdownMouseLeave}
              onMouseMove={handleDropdownMouseMove}
              className="nav-item dropdown"
            >
              <a
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="rolling-text">Blogs</span>
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="/blog-classic">
                  Blog Standerd
                </a>
                <a className="dropdown-item" href="/blog-grid-sidebar">
                  Grid With Sidebar
                </a>
                <a className="dropdown-item" href="/blog-grid-3column">
                  Grid Three Column
                </a>
                <a className="dropdown-item" href="/blog-details">
                  Blog Details
                </a>
              </div>
            </li> */}
            
            {/* <li className="nav-item">
              <a className="nav-link" href="/contact">
                <span className="rolling-text">Contact Us</span>
              </a>
            </li> */}
          </ul>
        </div>

        <div className="contact-button">
          <a
            href="/contact"
            className="butn butn-sm butn-bg main-colorbg radius-5"
          >
            <span className="text">Get Quote</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
