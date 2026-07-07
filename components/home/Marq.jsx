import React from 'react';

function Marq() {
  const marquee = [
    'UI/UX Design',
    'Web Development',
    'App Development',
    'Brand Management',
    'Product Management',
  ];

  const renderItems = (keyPrefix) =>
    marquee.map((item, i) => (
      <div key={`${keyPrefix}-${i}`} className="item">
        <h4 className="d-flex align-items-center">
          <span>{item}</span>
          <span className="icon-img-50 ml-40">
            <img src="/assets/imgs/star.png" alt="" role="presentation" />
          </span>
        </h4>
      </div>
    ));

  return (
    <section className="opacity-7 reveal">
      <div className="main-marq xlrg o-hidden">
        <div className="slide-har st1 strok">
          <div className="box">{renderItems('a')}</div>
          <div className="box">{renderItems('b')}</div>
        </div>
      </div>
      <div className="main-marq xlrg o-hidden">
        <div className="slide-har st2 non-strok">
          <div className="box">{renderItems('c')}</div>
          <div className="box">{renderItems('d')}</div>
        </div>
      </div>
    </section>
  );
}

export default Marq;
