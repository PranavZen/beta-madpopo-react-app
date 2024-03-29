import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import {footerPose1,} from "../Components";
import Footer from "../Components/Footer/Footer";
import Seo from "../Components/SEO/Seo";
import PrivacyDataList from "../Components/PrivacyPolicyPageComponent/PrivacyDataList";

function PrivacyPolicy() {
  
  return (
    <div className="site-wrapper overflow-hidden wp_hostingBgImg privacyBg">
      <Seo
        title="MadPopo Best Hosting Solution which is Secure, Scalable, Reliable and Affordable for your Online Business"
        description="Our WordPress hosting services provide top-notch performance, security, high availability, load balancing, uto-scaling and reliability for your website. With optimized servers and expert support, your website online presence will be in good hands."
        keywords="WordPress hosting, web hosting, performance, security, reliability, Windows hosting, scalability, .NET framework, MS SQL Hosting, ASP support, Linux hosting, affordability, reliability, Apache, PHP, MySQL, Cloud server hosting, high availability, load balancing, auto-scaling"
      />
      <Navbar />

      <div className="gb_infraWrap">
        <div className="container">
          <div className="gb_top_para">
            <div className="gb_pageTitle">
              <h1>Privacy Policy</h1>
            </div>
          </div>
        </div>
      </div>

      <section className="privacySection" id="privacySection">
            <PrivacyDataList/>
      </section>

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

export default PrivacyPolicy;
