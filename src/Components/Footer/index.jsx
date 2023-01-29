import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer-area">
      <div className="main-footer-area">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6  col-lg-4 ">
              <div className="single-footer-widget">
                <div className="widget-title">
                  <h5>
                    <span>Our</span> Story
                  </h5>
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took
                </p>
                <ul className="social">
                  <li>
                    <a
                      href="https://www.facebook.com/genitsg"
                      className="facebook"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      data-original-title="Facebook"
                      target="_blank"
                    >
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/genitsg"
                      className="twitter"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      data-original-title="Twitter"
                      target="_blank"
                    >
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/genitsg/"
                      className="linkedin"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      data-original-title="Linkedin"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/genitsg/"
                      className="instagram"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      data-original-title="Instagram"
                      target="_blank"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/channel/UCVVtf7suCZpdTOTwJulMDKA"
                      className="youtube"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      data-original-title="Youtube"
                      target="_blank"
                    >
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="whatsapp"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      data-original-title="Whatsapp"
                    >
                      <i className="fa fa-whatsapp"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6  col-lg-4 ">
              <div className="single-footer-widget">
                <div className="widget-title">
                  <h5>
                    <span>Contact</span> Details
                  </h5>
                </div>
                <nav className="widget-nav">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-map-marker mr-2"></i> BLK 117 Bedok
                        North Road, Singapore 460117
                      </a>
                    </li>
                    <li>
                      <a href="tel:+6512345678">
                        <i className="fa fa-mobile mr-2"></i>+65 1234 5678
                      </a>
                    </li>
                    <li>
                      <a href="mailto:admin@genit.sg">
                        <i className="fa fa-envelope mr-2"></i>
                        admin@genit.sg
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-12 col-sm-6  col-lg-4 ">
              <div className="single-footer-widget">
                <div className="widget-title">
                  <h5>
                    <span>Quick</span> Links
                  </h5>
                </div>
                <nav className="widget-nav">
                  <ul>
                    <li>
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                      <NavLink to="/about-us">About us</NavLink>
                    </li>
                    <li>
                      <NavLink to="/services">Services</NavLink>
                    </li>
                    <li>
                      <NavLink to="/facilities">Facilities</NavLink>
                    </li>
                    <li>
                      <NavLink to="/contact-us">Contact us</NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="border-line"></div>
            </div>
            <div className="col-12 col-md-6">
              <div className="copywrite-text">
                <p>
                  Copyright &copy; {year} | Solution By
                  <a href="https://www.facebook.com/genitsg" target="_blank">
                    {" "}
                    Genit
                  </a>
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="footer-nav">
                <nav>
                  <ul>
                    <li>
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                      <NavLink to="/contact-us">Contact</NavLink>
                    </li>
                    <li>
                      <NavLink to="#">Sitemap</NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
