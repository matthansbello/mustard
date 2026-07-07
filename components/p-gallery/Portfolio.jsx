'use client';
import React, { useMemo, useState } from 'react';
import { PROJECTS, PROJECT_FILTERS as FILTERS, initials } from '@/common/content';

function Portfolio() {
  const [filter, setFilter] = useState('All');

  const counts = useMemo(() => {
    const c = { All: PROJECTS.length };
    FILTERS.slice(1).forEach((f) => {
      c[f] = PROJECTS.filter((p) => p.tags.includes(f)).length;
    });
    return c;
  }, []);

  const visible = useMemo(
    () =>
      filter === 'All'
        ? PROJECTS
        : PROJECTS.filter((p) => p.tags.includes(filter)),
    [filter]
  );

  return (
    <section className="pf-work section-padding pt-60">
      <div className="container">
        <div className="pf-stats reveal">
          <div>
            <span className="v">{PROJECTS.length}</span>
            <span className="k">Selected Projects</span>
          </div>
          <div>
            <span className="v">{FILTERS.length - 1}</span>
            <span className="k">Disciplines</span>
          </div>
          <div>
            <span className="v">100%</span>
            <span className="k">Client Owned</span>
          </div>
        </div>

        <div className="pf-filter reveal" role="tablist" aria-label="Filter projects">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={filter === f}
              className={filter === f ? 'active' : ''}
              onClick={() => setFilter(f)}
            >
              {f}
              <span className="count">{counts[f] ?? 0}</span>
            </button>
          ))}
        </div>

        <div className="pf-grid">
          {visible.map((project, i) => (
            <a
              key={project.url}
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className={`pf-card${i === 0 && filter === 'All' ? ' wide' : ''}`}
              style={{ animationDelay: `${Math.min(i, 8) * 0.05}s` }}
              aria-label={`${project.name} — ${project.cat} (opens in new tab)`}
            >
              <div className={`pf-media${project.img ? '' : ' placeholder'}`}>
                {project.img ? (
                  <img src={project.img} alt={`${project.name} — ${project.cat}`} />
                ) : (
                  <span className="mono" aria-hidden="true">
                    {initials(project.name)}
                  </span>
                )}
                <span className="pf-visit" aria-hidden="true">
                  <span>
                    Visit Site
                    <svg viewBox="0 0 24 24" fill="none" width="14" height="14">
                      <path
                        d="M7 17L17 7M17 7H9M17 7v8"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </span>
              </div>
              <div className="pf-body">
                <div>
                  <span className="pf-cat">{project.cat}</span>
                  <h3>{project.name}</h3>
                </div>
                <span className="pf-arrow" aria-hidden="true">
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
