import React from 'react';
import { PROJECTS } from '@/common/content';

const FEATURED = PROJECTS.filter((p) => p.img).slice(0, 5);

function Portfolio() {
  return (
    <section className="home-work section-padding sub-bg bord-top-grd bord-bottom-grd">
      <div className="container">
        <div className="hw-head reveal">
          <div>
            <span className="sub-title main-color mb-5">Selected Work</span>
            <h3 className="fw-600 fz-50 text-u split-heading">Recent builds.</h3>
          </div>
          <a href="/portfolio" className="butn butn-sm butn-bord radius-30 magnetic">
            <span>All Projects</span>
          </a>
        </div>

        <div className="hw-bento">
          {FEATURED.map((project, i) => (
            <a
              key={project.url}
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className={`hw-card reveal cell-${i + 1}`}
              aria-label={`${project.name} — ${project.cat} (opens in new tab)`}
            >
              <div className="hw-media">
                <img src={project.img} alt={`${project.name} — ${project.cat}`} />
              </div>
              <div className="hw-info">
                <div>
                  <span className="hw-cat">{project.cat}</span>
                  <h4>{project.name}</h4>
                </div>
                <span className="hw-arrow" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 17L17 7M17 7H9M17 7v8"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
