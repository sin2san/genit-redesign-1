import React from "react";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div className="main-wrap">
      <div className="content-wrapper">
        <div className="content">
          <section className="hero-area">
            <div className="hero-post-slides owl-carousel">
              <div className="single-hero-post">
                <div className="slide-img bg-home-img bg-overlay">
                  <div className="container h-100">
                    <div className="row h-100 align-items-center">
                      <div className="col-12">
                        <div className="hero-slides-content">
                          <h4>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                          </h4>
                          <h2>Lorem Ipsum is simply dummy text.</h2>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                          </p>
                          <div className="welcome-btn-group">
                            <NavLink
                              to="/about-us"
                              className="btn genit-btn mr-30 active"
                            >
                              About us
                            </NavLink>
                            <NavLink
                              to="/contact-us"
                              className="btn genit-btn active"
                            >
                              Contact us
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Hero;
