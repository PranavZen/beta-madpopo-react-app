import React from "react";
import Footer from "../Components/Footer/Footer";
import {
  domainimg1,
  domainimg10,
  domainimg3,
  domainimg4,
  domainimg5,
  domainimg6,
  domainimg7,
  domainimg8,
  footerPose1,
} from "../Components/index";
import Navbar from "../Components/Navbar/Navbar";
import { Link, animateScroll as scroll } from "react-scroll";
import DomainTableList from "../Components/DomainTableList/DomainTableList";
import DomainRegistrationFeatures from "../Components/DomainRegistrationPageComponent/DomainRegistrationFeatures";
import domainFeatData from "../Components/DomainTableList/DomainFeatData";
import Seo from "../Components/SEO/Seo";
function DomainRegistration() {
  const [show, setShow] = React.useState(false);
  return (
    <div className="site-wrapper overflow-hidden wp_hostingBgImg domBG">
    <Seo
    title="MadPopo Best Hosting Solution which is Secure, Scalable, Reliable and Affordable for your Online Business        "
    description="Our WordPress hosting services provide top-notch performance, security, high availability, load balancing, uto-scaling and reliability for your website. With optimized servers and expert support, your website online presence will be in good hands.        "
    keywords="WordPress hosting, web hosting, performance, security, reliability, Windows hosting, scalability, .NET framework, MS SQL Hosting, ASP support, Linux hosting, affordability, reliability, Apache, PHP, MySQL, Cloud server hosting, high availability, load balancing, auto-scaling"
    
  />
      <Navbar />
      <div className="container">
        <div className="doms_top_para">
          <div className="doms_pageTitle">
            <h1>Domain Registration</h1>
          </div>
        </div>
      </div>
      <section className="more-services-group-container px-lg-15 px-4 position-relative dom_pt">
        <div className="container-fluid">
          <div className="row justify-content-lg-start justify-content-center px-lg-0 px-10">
            <div className="col-lg-8 col-11 text-lg-left text-center">
              <h2 className="coodiv-text-7 font-weight-bold mb-4">
                All what you need is a featured domain name to start.
              </h2>
              <p className="coodiv-text-10 font-weight-light mb-13">
                The perfect domain lets people know at a glance why you're
                online{" "}
                <b className="font-weight-bold">and why you're awesome</b>. Find
                the right domain extension now to grab more attention and
                visitors.
              </p>
            </div>
          </div>
          <div className="row justify-content-center aws-domains-ltds-prices row-1 imgAnch">
            <div className="col-md-3 aws-domains-ltds-prices-item white-bg ">
              <Link
                to="domSearch"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <img src={domainimg3} alt="domain tld" />
              </Link>
              <p className="coodiv-text-11 font-weight-light">
                Exhibit and sell your <b className="font-weight-bold">.com</b>{" "}
                online
              </p>
              <span className="aws-domains-ltds-price-item mb-8">
                $12.99<small>per year</small>
              </span>
              <Link
                to="domSearch"
                className="btn btn-outline-black coodiv-text-11 px-10 font-weight-bold rounded-0 d-block w-100 d-flex align-items-center justify-content-center btn-with-hide-icon"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Check Availability
                <i className="feather icon-arrow-right font-weight-bold"></i>
              </Link>
            </div>
            <div className="col-md-3 aws-domains-ltds-prices-item white-bg">
              <Link
                to="domSearch"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <img src={domainimg4} alt="domain tld" />
              </Link>
              <p className="coodiv-text-11 font-weight-light">
                Exhibit and sell your <b className="font-weight-bold">.in</b>{" "}
                online
              </p>
              <span className="aws-domains-ltds-price-item mb-8">
                $9.99<small>per year</small>
              </span>
              <Link
                to="domSearch"
                className="btn btn-outline-black coodiv-text-11 px-10 font-weight-bold rounded-0 d-block w-100 d-flex align-items-center justify-content-center btn-with-hide-icon"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Check Availability
                <i className="feather icon-arrow-right font-weight-bold"></i>
              </Link>
            </div>
            <div className="col-md-3 aws-domains-ltds-prices-item white-bg">
              <Link
                to="domSearch"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <img src={domainimg10} alt="domain tld" />
              </Link>
              <p className="coodiv-text-11 font-weight-light">
                Exhibit and sell your <b className="font-weight-bold">.shop</b>{" "}
                online
              </p>
              <span className="aws-domains-ltds-price-item mb-8">
                $0.99<small>per year</small>
              </span>
              <Link
                to="domSearch"
                className="btn btn-outline-black coodiv-text-11 px-10 font-weight-bold rounded-0 d-block w-100 d-flex align-items-center justify-content-center btn-with-hide-icon"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Check Availability
                <i className="feather icon-arrow-right font-weight-bold"></i>
              </Link>
            </div>
            <div className="col-md-3 aws-domains-ltds-prices-item white-bg">
              <Link
                to="domSearch"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <img src={domainimg7} alt="domain tld" />
              </Link>
              <p className="coodiv-text-11 font-weight-light">
                Exhibit and sell your <b className="font-weight-bold">.net</b>{" "}
                online
              </p>
              <span className="aws-domains-ltds-price-item mb-8">
                $3.99<small>per year</small>
              </span>
              <Link
                to="domSearch"
                className="btn btn-outline-black coodiv-text-11 px-10 font-weight-bold rounded-0 d-block w-100 d-flex align-items-center justify-content-center btn-with-hide-icon"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Check Availability
                <i className="feather icon-arrow-right font-weight-bold"></i>
              </Link>
            </div>
          </div>
          <div className="row justify-content-center aws-domains-ltds-prices row-1 imgAnch">
            <div className="col-md-3 aws-domains-ltds-prices-item white-bg">
              <Link
                to="domSearch"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <img src={domainimg8} alt="domain tld" />
              </Link>

              <p className="coodiv-text-11 font-weight-light">
                Exhibit and sell your{" "}
                <b className="font-weight-bold">.online</b> online
              </p>
              <span className="aws-domains-ltds-price-item mb-8">
                $12.99<small>per year</small>
              </span>
              <Link
                to="domSearch"
                className="btn btn-outline-black coodiv-text-11 px-10 font-weight-bold rounded-0 d-block w-100 d-flex align-items-center justify-content-center btn-with-hide-icon"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Check Availability
                <i className="feather icon-arrow-right font-weight-bold"></i>
              </Link>
            </div>
            <div className="col-md-3 aws-domains-ltds-prices-item white-bg">
              <Link
                to="domSearch"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <img src={domainimg5} alt="domain tld" />
              </Link>
              <p className="coodiv-text-11 font-weight-light">
                Exhibit and sell your <b className="font-weight-bold">.info</b>{" "}
                online
              </p>
              <span className="aws-domains-ltds-price-item mb-8">
                $9.99<small>per year</small>
              </span>
              <Link
                to="domSearch"
                className="btn btn-outline-black coodiv-text-11 px-10 font-weight-bold rounded-0 d-block w-100 d-flex align-items-center justify-content-center btn-with-hide-icon"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Check Availability
                <i className="feather icon-arrow-right font-weight-bold"></i>
              </Link>
            </div>
            <div className="col-md-3 aws-domains-ltds-prices-item white-bg">
              <Link
                to="domSearch"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <img src={domainimg1} alt="domain tld" />
              </Link>
              <p className="coodiv-text-11 font-weight-light">
                Exhibit and sell your <b className="font-weight-bold">.tech</b>{" "}
                online
              </p>
              <span className="aws-domains-ltds-price-item mb-8">
                $0.99<small>per year</small>
              </span>
              <Link
                to="domSearch"
                className="btn btn-outline-black coodiv-text-11 px-10 font-weight-bold rounded-0 d-block w-100 d-flex align-items-center justify-content-center btn-with-hide-icon"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Check Availability
                <i className="feather icon-arrow-right font-weight-bold"></i>
              </Link>
            </div>
            <div className="col-md-3 aws-domains-ltds-prices-item white-bg">
              <Link
                to="domSearch"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <img src={domainimg6} alt="domain tld" />
              </Link>
              <p className="coodiv-text-11 font-weight-light">
                Exhibit and sell your <b className="font-weight-bold">.name</b>{" "}
                online
              </p>
              <span className="aws-domains-ltds-price-item mb-8">
                $3.99<small>per year</small>
              </span>
              <Link
                to="domSearch"
                className="btn btn-outline-black coodiv-text-11 px-10 font-weight-bold rounded-0 d-block w-100 d-flex align-items-center justify-content-center btn-with-hide-icon"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Check Availability
                <i className="feather icon-arrow-right font-weight-bold"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section
        className="domain-checker-emyui-aws-homepage dark-mode-texts py-12"
        id="domSearch"
      >
        <div className="container-fluid">
          <div className="row justify-content-start align-items-center">
            <div className="col-md-7 col-12">
              <form
                className="domain-checker-emyui-aws-homepage position-relative"
                method="post"
                action="#"
              >
                <div className="input-group">
                  <span className="input-group-input w-100">
                    <input
                      name="domain"
                      autoComplete="off"
                      autoCorrect="off"
                      autoCapitalize="off"
                      spellCheck="false"
                      className="searchInput form-control rounded-0"
                      aria-label="eg. example.com"
                      type="text"
                      placeholder="eg. example.com"
                    />
                  </span>
                  <span className="input-group-btn">
                    <button
                      className="btn btn-search"
                      type="Submit"
                      id="btnDomainSearch"
                      aria-label="Search Domain"
                      fdprocessedid="4xnnn"
                    >
                      <i className="fa fa-angle-right"></i>
                      <span className="searchText">Register</span>
                    </button>
                  </span>
                </div>
              </form>
            </div>
            <div className="col-md-5 col-12">
              <div className="domain-checker-emyui-aws-homepage-ltds h-100 row align-items-center justify-content-start">
                <div className="aws-homepage-ltds-box col-md-3 col-6 border-lg-bottom-0 border-bottom border-right">
                  <h6 className="tld-domain">.ACADEMY</h6>
                  <span className="tld-subtitle">Special offer</span>
                  <span className="tld-price">$0.95/yr</span>
                </div>
                <div className="aws-homepage-ltds-box col-md-3 col-6 border-lg-bottom-0 border-bottom border-lg-right">
                  <h6 className="tld-domain">.ARMY</h6>
                  <span className="tld-subtitle">Special offer</span>
                  <span className="tld-price">FREE</span>
                </div>
                <div className="aws-homepage-ltds-box col-md-3 col-6 border-right">
                  <h6 className="tld-domain">.BIO</h6>
                  <span className="tld-subtitle">Special offer</span>
                  <span className="tld-price">$5.12/yr</span>
                </div>
                <div className="aws-homepage-ltds-box col-md-3 col-6">
                  <h6 className="tld-domain">.BHARAT</h6>
                  <span className="tld-subtitle">Special offer</span>
                  <span className="tld-price">$11.95/yr</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="dom_viewAllSection">
        <div className="container">
          <div className="dom_viewAllBtnWrap text-center">
            <button
              className="btn btn-primary coodiv-hover-y w-25 mt-9 coodiv-text-9"
              onClick={() => setShow(!show)}
            >
              {show ? " Close All Domains" : " View All Domains"}
            </button>
          </div>
          <div className="dom_viewAllWrapper">
            <div className="col-md-12">
              <div className="dom_listTableWrap">
                {show && <DomainTableList />}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="wp_features dom_reg_features">
        <div className="container">
          <div className="dom_reg_featWrapper d-flex">
          <div className=" col-md-4 dom_reg_featTable">
              <table className="table mt-12">
                <tbody>
                  {domainFeatData.map((domItem) => {
                    return (
                      <tr key={domItem.id}>
                        <td>{domItem.domFeat}</td>
                        <td>
                          <i className={domItem.domCheckIcon}></i>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="col-md-8">
            <DomainRegistrationFeatures />
            </div>
            
          </div>
        </div>
      </section>

      <div className="wp_hostingFaqSection">
        <div className="pose_1 domReg">
          <img src={footerPose1} alt="Footer Imgage" />
        </div>
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

export default DomainRegistration;
