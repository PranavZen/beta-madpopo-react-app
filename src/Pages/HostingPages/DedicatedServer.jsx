import React, { useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import { dsImg, europe, footerPose1, india, usa } from "../../Components";
import Seo from "../../Components/SEO/Seo";
import DedecatedServerFaq from "../../Components/DedecatedServerPageComponent/DedecatedServerFaq";
import DedicatedPlansListing from "../../Components/DedecatedServerPageComponent/DedicatedPlansListing";
import DedicatedServerFeatures from "../../Components/DedecatedServerPageComponent/DedicatedServerFeatures";
import DedicatedBestChoice from "../../Components/DedecatedServerPageComponent/DedicatedBestChoice";
import DedicatedServerCard1 from "../../Components/Tabs/TabContentBox/DedicatedServerCard1";
import DedicatedServerCard2 from "../../Components/Tabs/TabContentBox/DedicatedServerCard2";
import DedicatedServerCard3 from "../../Components/Tabs/TabContentBox/DedicatedServerCard3";
function DedicatedServer() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <div className="site-wrapper overflow-hidden wp_hostingBgImg dedicatedServerBG">
      <Seo
        title="Reliable Dedicated Server Hosting Solutions for Your Business"
        description="Get the best dedicated server hosting solutions for your business. Enjoy fast and reliable hosting on enterprise-grade equipment with 24/7 support. Our dedicated server hosting solutions are designed to keep your business running smoothly and securely, so you can focus on what matters"
        keywords="dedicated server, dedicated server hosting, hosted server, server hosting dedicated, server hosting, dedicated hosting, best dedicated server hosting."
      />
      <Navbar />

      <div className="wp_img_overlayContent dedicatedIgOverlay">
        <p>Dedicated Server</p>
        <h1>High-Performance Dedicated Server Hosting for Your Business</h1>
        <span>
          Powerful and reliable dedicated servers, you can achieve
          lightning-fast website load times, high availability, and
          optimal performance
        </span>
      </div>
      <MouseParallaxContainer className={"wp_outerBox"}>
        <MouseParallaxChild
          factorX={0.04}
          factorY={0.04}
          className={"wp_innerBox dsImg"}
        >
          <img src={dsImg} alt="Dedicated Server" />
        </MouseParallaxChild>
      </MouseParallaxContainer>
      <div className="vsTabBtnWrap">
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
              <span className="flgImg">
                <img src={india} alt="India" />
              </span>{" "}
              ASIA
            </label>

            <input
              type="radio"
              id="radio-2"
              name="tabs"
              checked={activeTab === 1}
              onChange={() => handleTabClick(1)}
            />
            <label className="tab" htmlFor="radio-2">
              <span className="flgImg">
                <img src={usa} alt="USA" />
              </span>{" "}
              USA
            </label>

            <input
              type="radio"
              id="radio-3"
              name="tabs"
              checked={activeTab === 2}
              onChange={() => handleTabClick(2)}
            />
            <label className="tab" htmlFor="radio-3">
              <span className="flgImg">
                <img src={europe} alt="EUROPE" />
              </span>{" "}
              EUROPE
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
              className="vds_pricingBox container px-0"
              data-aos="zoom-in"
              data-aos-duration="2200"
            >
              <DedicatedServerCard1 />
            </div>
          </div>
        )}
        {activeTab === 1 && (
          <div className="tab-content">
            <div
              className="vds_pricingBox container px-0"
              data-aos="zoom-in"
              data-aos-duration="2200"
            >
              <DedicatedServerCard2 />
            </div>
          </div>
        )}
        {activeTab === 2 && (
          <div className="tab-content">
            <div
              className="vds_pricingBox container px-0"
              data-aos="zoom-in"
              data-aos-duration="2200"
            >
              <DedicatedServerCard3 />
            </div>
          </div>
        )}

        {/* <div
          className="ds_pricingBox container px-0"
          data-aos="zoom-in"
          data-aos-duration="2200"
        >
          <DediecatedServerComponent />
        </div> */}

        <div className="wpChoiceSection dedicatedBestChoice">
          <DedicatedBestChoice />
        </div>

        <div className="wp_features dedecatedFeatures">
          <DedicatedServerFeatures />
        </div>
        <div className="wp_plansListing">
          <DedicatedPlansListing />
        </div>

        <div className="wp_hostingFaqSection">
          <div className="pose_1 dsPose">
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
          <DedecatedServerFaq />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DedicatedServer;
