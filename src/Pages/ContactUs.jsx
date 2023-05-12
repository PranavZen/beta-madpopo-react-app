import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import Seo from "../Components/SEO/Seo";
import { conImg1, conImg2 } from "../Components";
function ContactUs() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY >= 1580);
    });
  }, []);
  return (
    <div className="site-wrapper overflow-hidden wp_hostingBgImg contactBgImg">
      <Seo
        title="Please contact us at Madpopo.com for any assistance or guidance you may need"
        description="Need help with a project? Madpopo provides reliable and affordable support and advice. Get in touch with us today and get tailored solutions to your problems. Our experts are here to answer your questions and provide you with the best guidance."
        keywords="WordPress hosting, woo commerce, windows web hosting, web hosting, virtual server, dedicated server, business email hosting, reseller hosting, SSL certificate, whois checker, whois domain lookup, e-commerce hosting, co-location server, Cpanel, Plesk, performance, security, reliability, Windows hosting, scalability, .NET Framework, MS SQL Hosting, ASP support, Linux web hosting, affordability, reliability, Apache, PHP, MySQL, Cloud server hosting, high availability, load balancing, auto-scaling, contact, contact us"
      />
      <Navbar />
      {
        //   <div className="hero-area-coodiv header-google-map-height position-relative white-bg light-mode-texts">
        //   <div className="header-hero-backgrounds">
        //     <svg
        //       className="bg-wave-box-end-z1 coodiv-z-index-1"
        //       viewBox="0 0 1440 320"
        //     >
        //       <path
        //         fill="#fff"
        //         fillOpacity="1"
        //         d="M0,0L34.3,16C68.6,32,137,64,206,80C274.3,96,343,96,411,96C480,96,549,96,617,117.3C685.7,139,754,181,823,186.7C891.4,192,960,160,1029,170.7C1097.1,181,1166,235,1234,234.7C1302.9,235,1371,181,1406,154.7L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        //       ></path>
        //     </svg>
        //   </div>
        //   <div
        //     className="google-map header-google-map fluid-map-height"
        //     id="googleMap"
        //   >
        //     <MapContainer />
        //   </div>
        //   <div className="map-height-lose-header"></div>
        // </div>
      }

      <div className="contact-form-container contatc_mt">
        <div className="container">
          <div className="tc_TitleOverlay">
            <h1>Contact Us</h1>
          </div>
          <div className="row justify-content-center pb-10 position-relative coodiv-z-index-2">
            <div className="col-md-12 col-lg-8">
              <div className="contact-form-container bg-white border-opacity px-8 pt-8 pb-9 px-sm-11 py-sm-11 shadow-2 rounded-20 position-relative overflow-hidden">
                <form className="contact-form" method="post" action="#">
                  <div className="output_message">
                    <span className="output_message_text coodiv-text-6 font-weight-bold color-blackish-blue"></span>
                    <Link className="btn btn-danger">cancel</Link>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group mb-7">
                        <label
                          htmlFor="name"
                          className="coodiv-text-11 font-weight-bold text-blackish-blue"
                        >
                          Your name
                        </label>
                        <input
                          className="form-control coodiv-text-11 border"
                          type="text"
                          id="name"
                          placeholder="i.e. John Doe"
                          fdprocessedid="u5fe9"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group mb-7">
                        <label
                          htmlFor="email"
                          className="coodiv-text-11 font-weight-bold text-blackish-blue"
                        >
                          Email
                        </label>
                        <input
                          className="form-control coodiv-text-11 border"
                          type="text"
                          id="email"
                          placeholder="i.e. john@mail.com"
                          fdprocessedid="12vuy"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group mb-7">
                        <label
                          htmlFor="subject"
                          className="coodiv-text-11 font-weight-bold text-blackish-blue"
                        >
                          Subject
                        </label>
                        <input
                          className="form-control coodiv-text-11 border"
                          type="text"
                          id="subject"
                          placeholder="i.e. I need a help"
                          fdprocessedid="qy51j5"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group mb-7">
                        <label
                          htmlFor="message"
                          className="coodiv-text-11 font-weight-bold text-blackish-blue"
                        >
                          Message
                        </label>
                        <textarea
                          name="textblock"
                          id="message"
                          className="form-control coodiv-text-11 border-gray-3 coodiv-textarea-height"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group button-block mt-3">
                        <button
                          className="form-btn btn btn-warning d-block w-100"
                          fdprocessedid="fvvd0o"
                        >
                          Send
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-12 col-lg-4 px-lg-0 mt-lg-0 mt-10">
              <div className="features-box-3 px-5 py-5 border-opacity position-relative white-bg rounded-20 bg-white shadow-2 coodiv-z-index-2">
                <div className="col-md-12 text-left px-8 pb-8 pt-5 d-flex justify-content-start align-items-center border-bottom-separate">
                  <div className="widget-icon circle-sm-2 bg-white coodiv-text-6 text-primary mr-7">
                    <i className="feather icon-phone-call"></i>
                  </div>
                  <div>
                    <h5 className="coodiv-text-8 mb-0">Sales</h5>
                    <p className="coodiv-text-11 mb-0">+91 99300 19195</p>
                  </div>
                </div>
                <div className="col-md-12 text-left px-8 pb-8 pt-5 d-flex justify-content-start align-items-center border-bottom-separate">
                  <div className="widget-icon circle-sm-2 bg-white coodiv-text-6 text-primary mr-7">
                    <i className="feather icon-mail"></i>
                  </div>
                  <div>
                    <h5 className="coodiv-text-8 mb-0">Email us</h5>
                    <p className="coodiv-text-11 mb-0">
                      sales@madpopo.com <br />
                      support@madpopo.com
                    </p>
                  </div>
                </div>
                <div className="col-md-12 text-left px-8 pb-8 pt-5 d-flex justify-content-start align-items-center border-bottom-separate">
                  <div className="widget-icon circle-sm-2 bg-white coodiv-text-6 text-primary mr-7">
                    <i className="feather icon-mail"></i>
                  </div>
                  <div>
                    <h5 className="coodiv-text-8 mb-0">Office timing</h5>
                    <p className="coodiv-text-11 mb-0">
                      Monday to Saturday
                      <br />
                      10.00 AM - 07.00 PM
                    </p>
                  </div>
                </div>
                <div className="col-md-12 text-left px-8 pb-8 pt-5 d-flex justify-content-start align-items-center border-bottom-separate">
                  <div className="widget-icon circle-sm-2 bg-white coodiv-text-6 text-primary mr-7">
                    <i className="feather icon-map"></i>
                  </div>
                  <div>
                    <h5 className="coodiv-text-8 mb-0">Visit our office</h5>
                    <p className="coodiv-text-11 mb-0">
                      607/608, Pranik Chamber, Saki Vihar Road, Sakinaka Metro,
                      Andheri East, Mumbai 400072, India
                    </p>
                  </div>
                </div>

                <div className="col-md-12 text-left px-8 pb-8 pt-7 d-flex justify-content-start align-items-center">
                  <div className="widget-icon circle-sm-2 bg-white coodiv-text-6 text-primary mr-7">
                    <i className="feather icon-share-2"></i>
                  </div>
                  <div>
                    <h5 className="coodiv-text-8 mb-0">
                      Follow us in Social Media
                    </h5>
                    <div className="social-numbers contact-page d-flex mt-3">
                      {
                        //   <Link className="mr-1 fb" to="#">
                        //   <i className="fa fa-facebook-f"></i>
                        // </Link>
                      }
                      <a
                        className="mr-1 tw"
                        href="https://www.facebook.com/madpopowp?mibextid=ZbWKwL"
                      >
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a
                        className="mr-1 tw"
                        href="https://twitter.com/madpopowp"
                      >
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a
                        className="mr-1 tw"
                        href="https://www.linkedin.com/company/madpopowp"
                      >
                        <i className="fa fa-linkedin"></i>
                      </a>
                      <a
                        className="mr-1 tw"
                        href="https://www.instagram.com/madpopowp/?igshid=MDM4ZDc5MmU="
                      >
                        <i className="fa fa-instagram"></i>
                      </a>
                      {
                        // <Link className="insta" to="#">
                        //   <i className="fa fa-instagram"></i>
                        // </Link>
                        // <Link className="mr-1 you" to="#">
                        //   <i className="fa fa-youtube"></i>
                        // </Link>
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="onlineChatBotWrapper">
        <div className="container">
        <div className="sectionTitle">
          <h4>Reach out to Madpopo</h4>
          <p>Whenever you need us, please do not hesitate to contact us</p>
        </div>
          <div className="onlineChatRow">
            <div className="col-md-4">
              <div className="chatBoxOuter">
                <div className="boxCenterIconWrap">
                  <span>
                    <img src={conImg1} alt="Chat online" />
                  </span>
                </div>
                <div className="ChatBoxInner">
                  <div className="boxTitle">
                    <h6>Chat online</h6>
                    <p>
                    Get Madpopo to help with your questions
                    </p>
                  </div>
                  <div className="responsiveTimeBox">
                    <span>response time</span>
                    <p>less than a minute</p>
                  </div>
                  <div className="btnWrap">
                    <button className="btn">Let's talk</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="chatBoxOuter">
                <div className="boxCenterIconWrap">
                  <span>
                    <img src={conImg2} alt="Send an email" />
                  </span>
                </div>
                <div className="ChatBoxInner">
                  <div className="boxTitle">
                    <h6>Send an email</h6>
                    <p>We will respond as soon as possible to your email</p>
                  </div>
                  <div className="responsiveTimeBox">
                    <span>response time</span>
                    <p>8-9 hours</p>
                  </div>
                  <div className="btnWrap">
                    <button onClick={() => window.location.href = "mailto:support@madpopo.com"} className="btn">Email us</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wp_hostingFaqSection contPT">
        <svg className="bg-wave-box-end-z1" viewBox="0 0 1440 320">
          <defs>
            <linearGradient id="footer-gradient">
              <stop offset="0%" stopColor="#212433" />
              <stop offset="39%" stopColor="#242837" />
              <stop offset="100%" stopColor="#0e1019" />
            </linearGradient>
          </defs>
          <path
            fill="rgb(36,40,55)"
            d="M0,128L80,138.7C160,149,320,171,480,192C640,213,800,235,960,234.7C1120,235,1280,213,1360,202.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;
