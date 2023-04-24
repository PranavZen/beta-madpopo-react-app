import React from "react";
import { footerPose1, wcasia } from "../Components";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import WcForm from "../Components/WcForm/WcForm";
import Seo from "../Components/SEO/Seo";

function WcAsia() {
  return (
    <div className="site-wrapper overflow-hidden wp_hostingBgImg termsConditionBg">
    <Seo
    title="MadPopo Best Hosting Solution which is Secure, Scalable, Reliable and Affordable for your Online Business"
    description="Our WordPress hosting services provide top-notch performance, security, high availability, load balancing, uto-scaling and reliability for your website. With optimized servers and expert support, your website online presence will be in good hands."
    keywords="WordPress hosting, web hosting, performance, security, reliability, Windows hosting, scalability, .NET framework, MS SQL Hosting, ASP support, Linux hosting, affordability, reliability, Apache, PHP, MySQL, Cloud server hosting, high availability, load balancing, auto-scaling"
    />
      <Navbar />
      <div className="contact-form form_section gb_infraWrap wcasiaPT">
        <div className="container">
          <div className="gb_top_para">
            <div className="gb_pageTitle">
              <h1>WCAsia</h1>
            </div>
          </div>
        </div>
        <div className="container">
           <h2 className="text-left mb-6">Popo is happy to see you at WCAsia 2023!!</h2>
           <p className="text-left smallWcasiaPara mb-15">Get Your Popo Swag On: Claim Your Free T-Shirt Today by Filling Out This Form</p>
          <div className="row justify-content-start pb-10 position-relative coodiv-z-index-2 wcasia_formWrap">
            <div className="col-md-12 col-lg-6">
              <div className="contact-form-container bg-white border-opacity px-8 pt-8 pb-9 px-sm-11 py-sm-11 shadow-2 rounded-20 position-relative overflow-hidden">
                <WcForm />
              </div>
            </div>
            <div className="col-md-12 col-lg-3 px-lg-0 mt-lg-0 mt-10">
              <div className="position-relative">
                <img src={wcasia} alt="WCASIA"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wp_hostingFaqSection">
      <div className="pose_1 gb_fooPose">
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

export default WcAsia;
