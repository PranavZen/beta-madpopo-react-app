import React from "react";
import { Link } from "react-router-dom";

import {
  amex,
  discover,
  fooLogo,
  jcb,
  maestro,
  mastercard,
  visa,
} from "../../Components/index";

function Footer() {
  return (
    <div className="dark-mode-texts footer-gradient-default overflow-hidden position-relative madPopoEl">
      <svg className="bg-wave-box-end" viewBox="0 0 1440 320">
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
                      <Link to={process.env.PUBLIC_URL + "/"}>
                        <img
                          src={fooLogo}
                          alt=""
                          className="dark-version-logo"
                        />
                      </Link>
                    </div>
                    <ul className="footer-contact-list list-unstyled">
                      <li>
                        <span className="badge coodiv-badge badge-warning rounded-pill coodiv-text-12 position-relative">
                          <i className="fa fa-envelope"></i> mail@madpopo.com
                        </span>
                      </li>
                      <li>
                        <span className="badge coodiv-badge badge badge-info rounded-pill coodiv-text-12 position-relative">
                          <i className="fa fa-phone"></i> +91 99300 19195
                        </span>
                      </li>
                    </ul>
                    <p className="coodiv-text-11 pr-lg-10">
                      MadPopo offers superior, reliable and affordable WordPress
                      Managed Hosting to individuals and small businesses.
                    </p>
                  </div>
                </div>

                <div className="col-4 col-lg-2">
                  <div className="footer-block mb-13 mb-lg-4">
                    <h4 className="block-title coodiv-text-9 mb-4 position-relative">
                      Our Hosting
                    </h4>
                    <ul className="footer-list list-unstyled">
                      <li className="py-1">
                        <Link
                          className="footer-list-link"
                          to="/wordpress-hosting"
                        >
                          WordPress Hosting
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          className="footer-list-link"
                          to="/windows-hosting"
                        >
                          Windows Hosting
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          className="footer-list-link"
                          to="/woocommerce-hosting"
                        >
                          E-Commerce Hosting
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="footer-block mb-13 mb-lg-9">
                    <h4 className="block-title coodiv-text-9 mb-4 position-relative">
                      Server Services
                    </h4>
                    <ul className="footer-list list-unstyled">
                      
                      <li className="py-1">
                        <Link
                          className="footer-list-link"
                          to="/virtual-server"
                        >
                          Virtual Server
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          className="footer-list-link"
                          to="/dedicated-server"
                        >
                          Dedicated Server
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          className="footer-list-link"
                          to="/wordpress-hosting"
                        >
                          Co-Location Server
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
                        <Link className="footer-list-link" to="/domain-registration">
                          Check Free Domain
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link className="footer-list-link" to="/ssl-certificate">
                          SSL Certificate
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link className="footer-list-link" to="">
                          WHOIS Checker
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
                        <Link className="footer-list-link" to="/cPanel">
                          cPanel
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link className="footer-list-link" to="/plesk">
                          Plesk
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link className="footer-list-link" to="">
                          DDoS Protection
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
                        <Link
                          className="footer-list-link"
                          onClick={() =>
                            window.open(
                              "https://my.madpopo.com/affiliates.php",
                              "_blank"
                            )
                          }
                        >
                          Affiliate Program
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          className="footer-list-link"
                          onClick={() =>
                            window.open("https://blog.madpopo.com/", "_blank")
                          }
                        >
                          Blog
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link className="footer-list-link" to="/career">
                          Careers
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link className="footer-list-link" to="/contact-us">
                          Contact Us
                        </Link>
                      </li>

                      <li className="py-1">
                        <Link
                          className="footer-list-link"
                          to="/global-infrastructure"
                        >
                          Servers Locations
                        </Link>
                      </li>
                      <li className="py-1">
                      <Link className="footer-list-link" to="">
                        SLA
                      </Link>
                    </li>
                      <li className="py-1">
                        <Link
                          className="footer-list-link"
                          to="/terms-conditions"
                        >
                          Terms & Conditions
                        </Link>
                      </li>
                     
                      <li className="py-1">
                        <Link className="footer-list-link" to="/privacy-policy">
                          Privacy
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {
                    // <div className="footer-block mb-13 mb-lg-4">
                    //   <h4 className="block-title coodiv-text-9 mb-4 position-relative">
                    //     Developers
                    //   </h4>
                    //   <ul className="footer-list list-unstyled">
                    //     <li className="py-1">
                    //       <Link className="footer-list-link" to="">
                    //         Developer Hub
                    //       </Link>
                    //     </li>
                    //     <li className="py-1">
                    //       <Link className="footer-list-link" to="">
                    //         API Reference
                    //       </Link>
                    //     </li>
                    //   </ul>
                    // </div>
                  }
                </div>

                <div className="col-12 col-lg-3 pl-lg-8">
                  <div className="footer-block mb-13 mb-lg-4 d-none d-lg-block">
                    <h4 className="block-title coodiv-text-9 mb-4 position-relative">
                      Do you need support?
                    </h4>
                    <p className="coodiv-text-11">
                      This can be handy to get the necessary
                      information right away.
                    </p>
                    {
                      // <ul className="footer-list list-unstyled">
                      //   <li className="py-1">
                      //     <Link className="footer-list-link" to="">
                      //       About Us
                      //     </Link>
                      //   </li>
                      // </ul>
                    }
                  </div>
                  <div className="footer-block mb-13 mb-lg-4 text-center text-lg-left">
                    <h4 className="block-title coodiv-text-9 mb-4 position-relative">
                      Big traffic? Talk to Sales
                    </h4>
                    <p className="coodiv-text-11">
                      Working on a big project? Let our experts help you out.
                    </p>
                    <Link
                      to="/contact-us"
                      className="btn btn-red with-icon coodiv-text-11 white-text-btn rounded-25 py-3 coodiv-hover-y"
                    >
                      Talk to an expert{" "}
                      <i className="feather icon-arrow-right font-weight-bold"></i>
                    </Link>
                  </div>
                  <div className="footer-block mb-13 mb-lg-4 text-center text-lg-left">
                    <div className="socialMediaWrap">
                      <ul className="socialListIcons">
                        <li>
                          <a href="https://www.facebook.com/madpopowp/">
                            <i className="fa fa-facebook-square"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/madpopowp/">
                            <i className="fa fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.linkedin.com/company/madpopowp/">
                            <i className="fa fa-linkedin"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://twitter.com/madpopowp">
                            {" "}
                            <i className="fa fa-twitter-square"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
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
                      <img src={visa} alt="visa" />
                    </li>
                    <li className="ml-1">
                      <img src={amex} alt="amex" />
                    </li>
                    <li className="ml-1">
                      <img src={discover} alt="discover" />
                    </li>
                    <li className="ml-1">
                      <img src={jcb} alt="jcb" />
                    </li>
                    <li className="ml-1">
                      <img src={maestro} alt="maestro" />
                    </li>
                    <li className="ml-1">
                      <img src={mastercard} alt="mastercard" />
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
