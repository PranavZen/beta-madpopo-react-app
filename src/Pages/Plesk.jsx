import React from "react";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import Seo from "../Components/SEO/Seo";
import Navbar from "../Components/Navbar/Navbar";
import { footerPose1, windowsImg } from "../Components";
import Footer from "../Components/Footer/Footer";
import { useState } from "react";
import PleskVDSCard from "../Components/PriceCard/PleskVDSCard";
import PleskVPSCard from "../Components/PriceCard/PleskVPSCard";
import PleskFeatures from "../Components/PleskPageComponent/PleskFeatures";
import PleskPlansListing from "../Components/PleskPageComponent/PleskPlansListing";
import PleskFaq from "../Components/PleskPageComponent/PleskFaq";
import PleskChoice from "../Components/PleskPageComponent/PleskChoice";
function Plesk() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <div className="site-wrapper overflow-hidden wp_hostingBgImg windowsBG">
      <Seo
        title="Easily Manage Your Websites with Plesk Hosting Solutions"
        description="Plesk is the leading web hosting control panel, offering a simple and secure way to manage all of your websites. Enjoy easy setup, powerful features, reliable performance, and advanced security solutions - all in one place. Get started with Plesk today!"
        keywords="plesk, pleskpanel, pleskpricing, installingplesk, pleskhosting"
      />
      <Navbar />

      <div className="wp_img_overlayContent">
        <p>Plesk</p>
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
      <div className="vsTabBtnWrap pleskTab">
        <div className="tabBtnRow">
          <div className="tabs">
            <input
              type="radio"
              id="radio-1"
              name="tabs"
              checked={activeTab === 0}
              onChange={() => handleTabClick(0)}
            />
            <label className="tab" htmlFor="radio-1">
              Dedicated Server
            </label>

            <input
              type="radio"
              id="radio-2"
              name="tabs"
              checked={activeTab === 1}
              onChange={() => handleTabClick(1)}
            />
            <label className="tab" htmlFor="radio-2">
              Virtual Server
            </label>

            <span
              className="glider"
              style={{ transform: `translateX(${activeTab * 100}%)` }}
            ></span>
          </div>
        </div>
      </div>
      <div className="virtualServerTabPanel">
        {activeTab === 0 && (
          <div className="tab-content">
            <div
              className="windows_pricingBox container px-0 pleskCard"
              data-aos="zoom-in"
              data-aos-duration="2200"
            >
              <PleskVDSCard />
            </div>
          </div>
        )}
        {activeTab === 1 && (
          <div className="tab-content">
            <div
              className="windows_pricingBox container px-0 pleskCard"
              data-aos="zoom-in"
              data-aos-duration="2200"
            >
              <PleskVPSCard />
            </div>
          </div>
        )}
      </div>
      <div className="wpChoiceSection">
        <PleskChoice />
      </div>
      <div className="wp_features">
        <PleskFeatures />
      </div>
      <div className="wp_plansListing">
        <PleskPlansListing />
      </div>
      <div className="wp_hostingFaqSection">
        <div className="pose_1 pleskPose">
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
        <PleskFaq />
      </div>
      <Footer />
    </div>
  );
}

export default Plesk;
