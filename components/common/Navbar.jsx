'use client';
import React, { useEffect, useState } from 'react';
import { SITE } from '@/common/site-config';

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const navbar = document.querySelector('.navbar');
      if (!navbar) return;

      if (window.scrollY > 300) navbar.classList.add('nav-scroll');
      else navbar.classList.remove('nav-scroll');
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bord blur">
      <div className="container o-hidden">
        <a className="logo icon-img-100" href="/">
          <img
            src="/assets/imgs/brands/mustardhq-main-logo.webp"
            alt="MustardHQ Logo"
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarSupportedContent"
          aria-expanded={navOpen}
          aria-label="Toggle navigation"
          onClick={() => setNavOpen((open) => !open)}
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div
          className={`collapse navbar-collapse justify-content-center${
            navOpen ? ' show' : ''
          }`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li
              className="nav-item dropdown"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                type="button"
                className="nav-link dropdown-toggle border-0 bg-transparent"
                aria-haspopup="true"
                aria-expanded={productsOpen}
              >
                <span className="rolling-text">Products</span>
              </button>
              <div
                className={`dropdown-menu mega-menu${
                  productsOpen ? ' show' : ''
                }`}
              >
                <div className="container">
                  <div className="row">
                    <div className="col-lg">
                      <a
                        className="item-img text-center"
                        href={SITE.products.labarintech}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="img">
                          <img
                            src="/assets/imgs/brands/labarintech-mustardhq.webp"
                            alt="LabarinTech"
                          />
                        </span>
                        <span className="mt-15">LabarinTech</span>
                      </a>
                    </div>
                    <div className="col-lg">
                      <span className="item-img text-center d-block">
                        <span className="img">
                          <img
                            src="/assets/imgs/brands/mustardhq-for-comingsoon.webp"
                            alt="Canine Connect coming soon"
                          />
                        </span>
                        <span className="mt-15">Canine Connect</span>
                      </span>
                    </div>
                    <div className="col-lg">
                      <a
                        className="item-img text-center"
                        href={SITE.products.productTeardown}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="img">
                          <img
                            src="/assets/imgs/brands/productteardownclub|mustardhq.webp"
                            alt="Product Teardown Club"
                          />
                        </span>
                        <span className="mt-15">Product Teardown Club</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                <span className="rolling-text">About</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/portfolio">
                <span className="rolling-text">Portfolio</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                <span className="rolling-text">Contact</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="contact-button">
          <a
            href={SITE.calendar}
            className="butn butn-sm butn-bg main-colorbg radius-5 magnetic"
            target="_blank"
            rel="noreferrer"
          >
            <span className="text">Get Quote</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
