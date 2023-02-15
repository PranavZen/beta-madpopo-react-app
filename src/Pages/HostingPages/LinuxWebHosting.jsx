import React from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import { footerPose1, linusRightImg, wp_logo } from "../../Components";
import WpBestChoice from "../../Components/WordpressHostingPageComponent/WpBestChoice";
import WordpressPlansListing from "../../Components/WordpressHostingPageComponent/WordpressPlansListing";
import TrustedClientsSlide from "../../Components/WordpressHostingPageComponent/TrustedClients/TrustedClientsSlide";
import WordpressHostingFAQ from "../../Components/WordpressHostingPageComponent/WordpressHostingFAQ";
import SecondTabContent from "../../Components/Tabs/TabContentBox/SecondTabContent";
import LinuxHostingFeatures from "../../Components/LinuxHostingPageComponent/LinuxHostingFeatures";
import Seo from "../../Components/SEO/Seo";
function LinuxWebHosting() {
  return (
    <div className="site-wrapper overflow-hidden wp_hostingBgImg linuxBG">
    <Seo
    title="MadPopo Best Hosting Solution which is Secure, Scalable, Reliable and Affordable for your Online Business        "
    description="Our WordPress hosting services provide top-notch performance, security, high availability, load balancing, uto-scaling and reliability for your website. With optimized servers and expert support, your website online presence will be in good hands.        "
    keywords="WordPress hosting, web hosting, performance, security, reliability, Windows hosting, scalability, .NET framework, MS SQL Hosting, ASP support, Linux hosting, affordability, reliability, Apache, PHP, MySQL, Cloud server hosting, high availability, load balancing, auto-scaling"
    
  />
      <Navbar />

      <div className="wp_img_overlayContent linux_img_overlay">
        <p>Linux Web Hosting</p>
        <h1>Utilize the Online Space to Enhance Your Physical Business</h1>
        <span>Unlimited boards and workflows. no credit card needed</span>
      </div>
      <MouseParallaxContainer className={"wp_outerBox"}>
        <MouseParallaxChild 
          factorX={0.04}
          factorY={0.04}
          className={"wp_innerBox linuxrightimgBox"}
        >
          <img src={linusRightImg} alt="Linux Web Hosting" />
        </MouseParallaxChild> 
      </MouseParallaxContainer>
      <div
        className="linux_pricingBox container"
        data-aos="zoom-in"
        data-aos-duration="2200"
      >
      <SecondTabContent />
      </div>
      
      {
      // <div className="wpChoiceSection">
      //   <WpBestChoice />
      // </div>
    }

      <div className="wp_features linuxFeature">
        <LinuxHostingFeatures/>
      </div>

      <div className="wp_plansListing">
        <WordpressPlansListing />
      </div>
      <div
        className="trusedPlanSection"
        data-aos="fade-right"
        data-aos-duration="1200"
      >
        <TrustedClientsSlide />
      </div>
      <div className="wp_hostingFaqSection">
        <div className="pose_1">
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
        <WordpressHostingFAQ />
      </div>
      <Footer />
    </div>
  );
}

export default LinuxWebHosting;
