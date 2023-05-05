import React, { useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import { footerPose1, vdsImg } from "../../Components";
import ThirdTabContent from "../../Components/Tabs/TabContentBox/ThirdTabContent";
import VdsFeatures from "../../Components/VirtualDedicatedServerPageComponent/VdsFeatures";
import VdsListing from "../../Components/VirtualDedicatedServerPageComponent/VdsListing";
import VdsFaq from "../../Components/VirtualDedicatedServerPageComponent/VdsFaq";
import Seo from "../../Components/SEO/Seo";
import VPS2CardPrice from "../../Components/Tabs/TabContentBox/VPS2CardPrice";
import VpsFeatures from "../../Components/VirtualPrivateServerPageComponent/VpsFeatures";
import VpsListing from "../../Components/VirtualPrivateServerPageComponent/VpsListing";
import VpsFaq from "../../Components/VirtualPrivateServerPageComponent/VpsFaq";
import VsBestChoice from "../../Components/VsPageComponent/VsBestChoice";
import VssCardPrice from "../../Components/Tabs/TabContentBox/VssCardPrice";
import VssBestChoice from "../../Components/VSSPageComponent/VssBestChoice";
import VssFeatures from "../../Components/VSSPageComponent/VssFeatures";
import VssPlanListing from "../../Components/VSSPageComponent/VssPlanListing";
import VssFaq from "../../Components/VSSPageComponent/VssFaq";
function VirtualServer() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <div className="site-wrapper overflow-hidden wp_hostingBgImg vdsBG">
      <Seo
        title="High Performance Virtual Dedicated Server Solutions"
        description="Our safe, dependable, and high-performance virtual dedicated server solutions will give your workloads the best performance possible. You can have the confidence that your business needs are being taken care of thanks to numerous pricing options and 24/7 support."
        keywords="virtual server, vds, virtual hosting, virtual dedicated server, virtualserver, virtual dedicated hosting"
      />
      <Navbar />

      <div className="wp_img_overlayContent vdsImgOverlay ">
        <p>Virtual Server</p>
        <h1>Optimize Your Business Operations with Cloud Server Technology</h1>
        <span>
          Cloud server technology can help you optimize your business operations
          by providing scalable, reliable, and cost-effective hosting solutions.
        </span>
      </div>
      <MouseParallaxContainer className={"wp_outerBox"}>
        <MouseParallaxChild
          factorX={0.04}
          factorY={0.04}
          className={"wp_innerBox vdsImg"}
        >
          <img src={vdsImg} alt="Virtual Dedicated Server" />
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
              Virtual Dedicated Server
            </label>

            <input
              type="radio"
              id="radio-2"
              name="tabs"
              checked={activeTab === 1}
              onChange={() => handleTabClick(1)}
            />
            <label className="tab" htmlFor="radio-2">
              Virtual Private Server
            </label>

            <input
              type="radio"
              id="radio-3"
              name="tabs"
              checked={activeTab === 2}
              onChange={() => handleTabClick(2)}
            />
            <label className="tab" htmlFor="radio-3">
              Virtual Storage Server
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
              <ThirdTabContent />
            </div>
            <div className="wpChoiceSection vsBestchoiceSection">
              <VsBestChoice />
            </div>
            <div className="wp_features vdsFeatures">
              <VdsFeatures />
            </div>
            <div className="wp_plansListing">
              <VdsListing />
            </div>

            <div className="wp_hostingFaqSection">
              <div className="pose_1 vdsPose">
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
              <VdsFaq />
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
              <VPS2CardPrice />
            </div>
            <div className="wpChoiceSection vsBestchoiceSection">
              <VsBestChoice />
            </div>
            <div className="wp_features vdsFeatures">
              <VpsFeatures />
            </div>
            <div className="wp_plansListing">
              <VpsListing />
            </div>
            <div className="wp_hostingFaqSection">
              <div className="pose_1 vdsPose">
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
              <VpsFaq />
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
              <VssCardPrice />
            </div>
            <div className="wpChoiceSection vsBestchoiceSection">
              <VssBestChoice />
            </div>
            <div className="wp_features vdsFeatures">
              <VssFeatures />
            </div>
            <div className="wp_plansListing">
              <VssPlanListing />
            </div>
            <div className="wp_hostingFaqSection">
              <div className="pose_1 vdsPose">
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
              <VssFaq />
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default VirtualServer;
