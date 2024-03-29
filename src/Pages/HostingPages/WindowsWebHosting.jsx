import React from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import { footerPose1, windowsImg } from "../../Components";
import WindowsTabContent from "../../Components/Tabs/TabContentBox/WindowsTabContent";
import WindowsHostingFeatures from "../../Components/WindowsHostingPageComponent/WindowsHostingFeatures";
import WindowsHostingFaq from "../../Components/WindowsHostingPageComponent/WindowsHostingFaq";
import WindowsPlansHosting from "../../Components/WindowsHostingPageComponent/WindowsPlansHosting";
import Seo from "../../Components/SEO/Seo";
import WindowsBestChoice from "../../Components/WindowsHostingPageComponent/WindowsBestChoice";
function WindowsWebHosting() {
  return (
    <div className="site-wrapper overflow-hidden wp_hostingBgImg windowsBG">
      <Seo
        title="Top Reasons to Choose Windows Website Hosting for Your Online Store"
        description="Are you looking for the best Windows webhosting to power your online store? MadPopo offers top-of-the-line Windows website hosting services, with a range of features and advantages that make it the perfect choice for any business."
        keywords="web servers host, windows hosting server, windows hosting, windows server hosting,win host, windows server website hosting, windows shared server, windows website hosting,web hosting windows, hosting windows, windows shared hosting, best windows hosting, windows website hosting."
      />
      <Navbar />

      <div className="wp_img_overlayContent winOverlay">
        <p>Windows Web Hosting</p>
        <h1>Robust and High-Performance Windows Server Hosting</h1>
        <span>
          Our servers are optimized to deliver high performance, making them
          perfect for running .NET applications and utilizing SQL
          Server databases
        </span>
      </div>
      <MouseParallaxContainer className={"wp_outerBox"}>
        <MouseParallaxChild
          factorX={0.04}
          factorY={0.04}
          className={"wp_innerBox windowsImg"}
        >
          <img src={windowsImg} alt="Windows Web Hosting" />
        </MouseParallaxChild>
      </MouseParallaxContainer>
      <div
        className="windows_pricingBox container px-0"
        data-aos="zoom-in"
        data-aos-duration="2200"
      >
        <WindowsTabContent />
      </div>

      <div className="wpChoiceSection">
        <WindowsBestChoice />
      </div>

      <div className="wp_features">
        <WindowsHostingFeatures />
      </div>
      <div className="wp_plansListing">
        <WindowsPlansHosting />
      </div>

      <div className="wp_hostingFaqSection">
        <div className="pose_1 winPose">
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
        <WindowsHostingFaq />
      </div>
      <Footer />
    </div>
  );
}

export default WindowsWebHosting;
