import React from "react";
import { Link } from "react-router-dom";

import { fooLogo } from "../../Components/index";

function Footer() {
  return (
    <div className="dark-mode-texts footer-gradient-default overflow-hidden position-relative madPopoEl">
      <svg
        className="bg-wave-box-end"
        
        viewBox="0 0 1440 320"
      >
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,64L80,101.3C160,139,320,213,480,213.3C640,213,800,139,960,117.3C1120,96,1280,128,1360,144L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <div className="container">
        <div className="footer-section dark-mode-texts">
          <div className="container">
            <div className="footer-top pb-lg-19">
              <div className="row">
                <div className="col-12 col-lg-3">
                  <div className="footer-block mb-13 mb-lg-9">
                    <div className="brand-logo mb-7">
                      <Link to="#">
                        <img src={fooLogo} alt="" className="dark-version-logo" />
                      </Link>
                    </div>
                    <ul className="footer-contact-list list-unstyled">
                      <li>
                        <span className="badge coodiv-badge badge-warning rounded-pill coodiv-text-12 position-relative">
                          <i className="fa fa-envelope"></i>  mail@madpopo.com
                        </span>
                      </li>
                      <li>
                        <span className="badge coodiv-badge badge badge-info rounded-pill coodiv-text-12 position-relative">
                          <i className="fa fa-phone"></i> +91 70 42 40 7676
                        </span>
                      </li>
                    </ul>
                    <p className="coodiv-text-11 pr-lg-10">
                    MadPopo offers superior, reliable and affordable WordPress Managed Hosting to individuals and small businesses.
                    </p>
                  </div> 
                </div>

                <div className="col-4 col-lg-2"> 
                  <div className="footer-block mb-13 mb-lg-4">
                    <h4 className="block-title coodiv-text-9 mb-4 position-relative">
                      Our services
                    </h4>
                    <ul className="footer-list list-unstyled">
                      <li className="py-1">
                        <Link className="footer-list-link" to="web-hosting.html">
                          Web Hosting
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link className="footer-list-link" to="vps-hosting.html">
                          VPS servers
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          className="footer-list-link"
                          to="google-workspace.html"
                        >
                          Google Workspace
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="footer-block mb-13 mb-lg-9">
                    <h4 className="block-title coodiv-text-9 mb-4 position-relative">
                      Resources
                    </h4>
                    <ul className="footer-list list-unstyled">
                      <li className="py-1">
                        <Link className="footer-list-link" to="minecraft.html">
                          minecraft hosting
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link className="footer-list-link" to="website-builder.html">
                          Website builder
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link className="footer-list-link" to="cpanel-reseller.html">
                          Cpanel reseller
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          className="footer-list-link"
                          to="wordpress-hosting.html"
                        >
                          WordPress hosting
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-4 col-lg-2">
                  <div className="footer-block mb-13 mb-lg-4">
                    <h4 className="block-title coodiv-text-9 mb-4 position-relative">
                      Domains
                    </h4>
                    <ul className="footer-list list-unstyled">
                      <li className="py-1">
                        <Link
                          className="footer-list-link"
                          to="domains-registration.html"
                        >
                          Domain Checker
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          className="footer-list-link"
                          to="domains-registration.html"
                        >
                          Free Domain
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link className="footer-list-link" to="shared-hosting.html">
                          SSL Certificate
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link className="footer-list-link" to="help-center.html">
                          WHOIS checker
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="footer-block mb-13 mb-lg-4">
                    <h4 className="block-title coodiv-text-9 mb-4 position-relative">
                      Solutions
                    </h4>
                    <ul className="footer-list list-unstyled">
                      <li className="py-1">
                        <Link className="footer-list-link" to="index-vpn.html">
                          Website Acceleration
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link className="footer-list-link" to="index-cdn.html">
                          Video Delivery
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link className="footer-list-link" to="index-4.html">
                          Software Distribution
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link className="footer-list-link" to="index-3.html">
                          Image Processing
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-4 col-lg-2">
                  <div className="footer-block mb-13 mb-lg-4">
                    <h4 className="block-title coodiv-text-9 mb-4 position-relative">
                      Company
                    </h4>
                    <ul className="footer-list list-unstyled">
                      <li className="py-1">
                        <Link className="footer-list-link" to="about.html">
                          About Us
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link className="footer-list-link" to="contact.html">
                          Contact Us
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link className="footer-list-link" to="blog.html">
                          Blog
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link className="footer-list-link" to="blog-single.html">
                          SLA
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link className="footer-list-link" to="all-topics.html">
                          Careers
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="footer-block mb-13 mb-lg-4">
                    <h4 className="block-title coodiv-text-9 mb-4 position-relative">
                      Developers
                    </h4>
                    <ul className="footer-list list-unstyled">
                      <li className="py-1">
                        <Link className="footer-list-link" to="incident-post.html">
                          Developer Hub
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link className="footer-list-link" to="all-topics.html">
                          API Reference
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-12 col-lg-3 pl-lg-8">
                  <div className="footer-block mb-13 mb-lg-4 d-none d-lg-block">
                    <h4 className="block-title coodiv-text-9 mb-4 position-relative">
                      Do you need support?
                    </h4>
                    <ul className="footer-list list-unstyled">
                      <li className="py-1">
                        <Link className="footer-list-link" to="about.html">
                          About Us
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link className="footer-list-link" to="status-page.html">
                          Our Technology
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link className="footer-list-link" to="privacy-policy.html">
                          Privacy Policy
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link className="footer-list-link" to="privacy-policy.html">
                          Terms &amp; Conditions
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link className="footer-list-link" to="contact.html">
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="footer-block mb-13 mb-lg-4 text-center text-lg-left">
                    <h4 className="block-title coodiv-text-9 mb-4 position-relative">
                      Big traffic? Talk to Sales
                    </h4>
                    <p className="coodiv-text-11">
                      Working on a big project? Let our experts help you out.
                    </p>
                    <Link
                      to="contact.html"
                      className="btn btn-red with-icon coodiv-text-11 white-text-btn rounded-25 py-3 coodiv-hover-y"
                    >
                      Talk to an expert{" "}
                      <i className="feather icon-arrow-right font-weight-bold"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="bottom-footer-area border-top pt-9 pb-8">
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <p className="copyright-text coodiv-text-11 mb-6 mb-lg-0 coodiv-text-color-opacity text-center text-lg-left">
                  Copyright © 2023 MadPopo. All Rights Reserved.
                  </p>
                </div>
                <div className="col-lg-4 text-center text-lg-right">
                  <ul className="payment-getway list-unstyled mb-0">
                    <li className="ml-1">
                      <img
                        src="https://emyui.pdthemes.de/wp-content/uploads/2022/02/visa.webp"
                        alt=""
                      />
                    </li>
                    <li className="ml-1">
                      <img
                        src="https://emyui.pdthemes.de/wp-content/uploads/2022/02/mastercard.webp"
                        alt=""
                      />
                    </li>
                    <li className="ml-1">
                      <img
                        src="https://emyui.pdthemes.de/wp-content/uploads/2022/02/discover.webp"
                        alt=""
                      />
                    </li>
                    <li className="ml-1">
                      <img
                        src="https://emyui.pdthemes.de/wp-content/uploads/2022/02/amex.webp"
                        alt=""
                      />
                    </li>
                    <li className="ml-1">
                      <img
                        src="https://emyui.pdthemes.de/wp-content/uploads/2022/02/jcb.webp"
                        alt=""
                      />
                    </li>
                    <li className="ml-1">
                      <img
                        src="https://emyui.pdthemes.de/wp-content/uploads/2022/02/maestro.webp"
                        alt=""
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
