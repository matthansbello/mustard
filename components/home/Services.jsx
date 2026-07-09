'use client';
import React from 'react';
import data from '@/data/services';
import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const AUTOPLAY_DELAY = 5500;
const SLIDE_SPEED = 1400;

const SERVICE_ICONS = {
  'Product Management': (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        d="M8 14h32M8 24h22M8 34h14"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <circle cx="36" cy="34" r="6" strokeWidth="2.2" />
      <path d="M33 34l2 2 4-4" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  'Web Developments': (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="6" y="10" width="36" height="26" rx="3" strokeWidth="2.2" />
      <path d="M6 18h36" strokeWidth="2.2" />
      <path d="M14 30l-4 4M14 30l4 4M34 30l-4 4M34 30l4 4" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  ),
  Branding: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        d="M10 38l14-28 14 28H10z"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path d="M18 26h12" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  ),
  'Mobile App Development': (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="14" y="6" width="20" height="36" rx="4" strokeWidth="2.2" />
      <path d="M22 38h4" strokeWidth="2.2" strokeLinecap="round" />
      <rect x="18" y="12" width="12" height="18" rx="2" strokeWidth="2.2" />
    </svg>
  ),
  'Information Technology (IT)': (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="8" y="10" width="32" height="22" rx="3" strokeWidth="2.2" />
      <path d="M16 38h16M24 32v6" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M14 18h20M14 24h12" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  ),
  'Cybersecurity Services': (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M24 6l14 6v10c0 9-6 15-14 20C16 37 10 31 10 22V12l14-6z" strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M18 23l4 4 8-8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

function Services() {
  const swiperOptions = {
    modules: [Navigation, Autoplay],
    loop: true,
    spaceBetween: 28,
    speed: SLIDE_SPEED,
    slidesPerView: 3,
    autoplay: {
      delay: AUTOPLAY_DELAY,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
    navigation: {
      nextEl: '.services .swiper-button-next',
      prevEl: '.services .swiper-button-prev',
    },
  };

  return (
    <section className="services section-padding">
      <div className="container">
        <div className="sec-head mb-80 reveal">
          <div className="d-flex align-items-center flex-wrap">
            <div>
              <span className="sub-title main-color mb-5">Our Specialization</span>
              <h3 className="fw-600 fz-50 text-u split-heading">
                Here are our Strength.
              </h3>
            </div>
            <div className="ml-auto">
              <div className="swiper-arrow-control">
                <div className="swiper-button-prev magnetic">
                  <span className="ti-arrow-left"></span>
                </div>
                <div className="swiper-button-next magnetic">
                  <span className="ti-arrow-right"></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="serv-swiper reveal"
          data-carousel="swiper"
          data-loop="true"
          data-space="28"
        >
          <Swiper
            {...swiperOptions}
            id="content-carousel-container-unq-serv"
            className="swiper-container"
            data-swiper="container"
          >
            {data.map((item, i) => (
              <SwiperSlide key={item.title}>
                <div className="item-box tilt">
                  <span className="glow" aria-hidden="true" />
                  <span className="serv-num" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="serv-icon" aria-hidden="true">
                    {SERVICE_ICONS[item.title] || SERVICE_ICONS.Branding}
                  </div>
                  <h5 className="mb-15">{item.title}</h5>
                  <p>{item.desc}</p>
                  <a href={item.link} className="rmore">
                    <span className="sub-title">Read More</span>
                    <span className="arw" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none">
                        <path
                          d="M7 17L17 7M17 7H9M17 7v8"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Services;
