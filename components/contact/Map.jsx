import React from 'react';

function Map() {
  return (
    <section className="map-futuro section-padding pt-0">
      <div className="container">
        <div className="map-wrap hud-frame reveal">
          <div className="map-bar">
            <span className="status">
              <span className="dot" aria-hidden="true" />
              Live location
            </span>
            <span className="coords">09°50&apos;27.7&quot;N 08°53&apos;13.1&quot;E</span>
          </div>
          <div className="google-map">
            <iframe
              id="gmap_canvas"
              title="MustardHQ office location on Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d395.80756097397625!2d8.886879904639557!3d9.840991025356615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwNTAnMjcuNyJOIDjCsDUzJzEzLjEiRQ!5e1!3m2!1sen!2sng!4v1740353271561!5m2!1sen!2sng"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Map;
