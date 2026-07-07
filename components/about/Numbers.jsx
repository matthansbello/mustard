import React from 'react';
import { STATS } from '@/common/content';

function Numbers() {
  return (
    <section className="about-numbers section-padding pt-0">
      <div className="container">
        <div className="an-grid reveal">
          {STATS.map((stat) => (
            <div key={stat.k} className="an-item">
              <span className="v">{stat.v}</span>
              <span className="k">{stat.k}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Numbers;
