import React from 'react';

function Map() {
  return (
    <div className="google-map">
      <iframe
        id="gmap_canvas"
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d395.80756097397625!2d8.886879904639557!3d9.840991025356615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwNTAnMjcuNyJOIDjCsDUzJzEzLjEiRQ!5e1!3m2!1sen!2sng!4v1740353271561!5m2!1sen!2sng"
      ></iframe>
    </div>
  );
}

export default Map;
