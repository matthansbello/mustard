import React from 'react';

function Contact() {
  return (
    <section className="contact section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 valign">
            <div className="sec-head info-box full-width md-mb80">
              <h6 className="mb-15"></h6>
              <div className="phone fz-30 fw-600 underline">
              
                
                <a href="https://calendar.app.google/TUJ311uihLjpkZnF9" target='_blank'>CLICK TO BOOK A MEETING</a>
              </div>
              

              
            </div>
          </div>
          
        </div>
        
        <div className="row">
          <div className="col-lg-12 valign">
            <div className="sec-head info-box full-width md-mb80">
              <h6 className="mb-15">Number | WhatsApp</h6>
              <div className="phone fz-30 fw-600 underline main-color">
              
                
                <a href="tel:2348129913595" target='_blank'>+234 812 991 3595</a>, <a href="https://wa.me/message/IDWHG6YPE42MC1" target='_blank'>+234 807 177 1376</a>
              </div>
              <div className="morinfo mt-50 pb-30 bord-thin-bottom">
                <h6 className="mb-15">Address</h6>
                <p>8 Swomen Close, Rayfield, Jos, Nigeria</p>
              </div>
              <div className="morinfo mt-30 pb-30 bord-thin-bottom">
                <h6 className="mb-15">Email</h6>
                <p><a href='mailto:contact@mustardhq.org'>contact@mustardhq.org</a></p>
              </div>

              <div className="social-icon mt-50">
                {/* <a href="#0">
                  <i className="fab fa-facebook-f"></i>
                </a> */}
                <a href="https://twitter.com/mustardhq" target="_blank">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://linkedin.com/company/mustardinnovations" target="_blank">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://instagram.com/mustard.hq" target="_blank">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default Contact;
