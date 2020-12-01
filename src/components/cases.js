import React from "react";
import { Row } from "reactstrap";

const Cases = () => {
  return (
    <section class="cases">
    <div class="containerr">
      <div class="hero-inner">
          <div class="hero-inner-col left"></div>
          <div class="hero-inner-col right">
            <div class="hero-inner-links">
            <div className='roww'>
              <div className="case-m">
                <Row className="d-flex justify-content-center">
                  <div data-video-src="websites" class="hero-inner-link-item">
                    <a href="#about"> <span>About</span></a>
                  </div>
                </Row>
                <Row className="d-flex justify-content-center">
                <div data-video-src="apps" class="hero-inner-link-item">
                <a href="#work"> <span>Work</span></a>
                  </div>
                </Row>
                <Row className="d-flex justify-content-center">
                <div class="hero-inner-link-item" data-video-src="branding">       
                <a href="#contact"> <span>Contact</span></a>
                  </div>
                </Row>
              </div>
              <div className="case">
              <div data-video-src="websites" class="hero-inner-link-item">
                
                <a href="#about"> <span>About</span></a>
                </div>
              </div>
              <div className="case">
              <div data-video-src="apps" class="hero-inner-link-item">
                <a href="#work"> <span>Work</span></a>
              </div></div>
              <div className="case">
              <div class="hero-inner-link-item" data-video-src="branding">
                
                <a href="#contact"> <span>Contact</span></a>
              </div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </section>
  );
};

export default Cases;
