import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import {  footerPose1, windowsImg } from '../../Components';
import WindowsTabContent from '../../Components/Tabs/TabContentBox/WindowsTabContent';
import WpBestChoice from '../../Components/WordpressHostingPageComponent/WpBestChoice';
import WordpressPlansListing from '../../Components/WordpressHostingPageComponent/WordpressPlansListing';
import TrustedClientsSlide from '../../Components/WordpressHostingPageComponent/TrustedClients/TrustedClientsSlide';
import WindowsHostingFeatures from '../../Components/WindowsHostingPageComponent/WindowsHostingFeatures';
import WindowsHostingFaq from '../../Components/WindowsHostingPageComponent/WindowsHostingFaq';
function WindowsWebHosting() {
  return (
    <div className="site-wrapper overflow-hidden wp_hostingBgImg windowsBG">
      <Navbar />

      <div className="wp_img_overlayContent">
        <p>Windows Web Hosting</p>
        <h1>Choose flexible pricing plan for you and more...</h1>
        <span>Unlimited boards and workflows. no credit card needed</span>
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
        <WpBestChoice />
      </div>
      <div className="wp_features">
        <WindowsHostingFeatures />
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
  )
}

export default WindowsWebHosting