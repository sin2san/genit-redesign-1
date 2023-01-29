import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header-area">
      <div className="top-header-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="top-header-content d-flex align-items-center justify-content-between">
                <div className="top-header-meta">
                  <a
                    href="mailto:admin@genit.sg"
                    data-toggle="tooltip"
                    data-placement="bottom"
                  >
                    <i className="fa fa-envelope-o" aria-hidden="true"></i>
                    <span>Email : admin@genit.sg </span>
                  </a>
                  <a
                    href="tel:+6512345678"
                    data-toggle="tooltip"
                    data-placement="bottom"
                  >
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <span>Call us : +65 1234 5678 </span>
                  </a>
                </div>
                <div className="top-header-meta d-flex">
                  <ul className="social">
                    <li>
                      <a
                        href="https://facebook.com/genitsg"
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
                        href="https://linkedin.com/genitsg"
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
                        href="https://instagram.com/genitsg"
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
                        href="https://youtube.com/genitsg"
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
                        target="_blank"
                      >
                        <i className="fa fa-whatsapp"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="genit-main-menu">
        <div className="classy-nav-container breakpoint-off">
          <div className="container">
            <nav
              className="classy-navbar justify-content-between"
              id="genitNav"
            >
              <a className="logo nav-brand" href="/">
                <img src="/img/logo.png" alt="logo" />
              </a>
              <div className="classy-navbar-toggler">
                <span className="navbarToggler">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div className="classy-menu">
                <div className="classycloseIcon">
                  <div className="cross-wrap">
                    <span className="top"></span>
                    <span className="bottom"></span>
                  </div>
                </div>
                <div className="classynav">
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
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
