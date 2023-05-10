import React from "react";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import Seo from "../Components/SEO/Seo";
import Navbar from "../Components/Navbar/Navbar";
import { footerPose1, vdsImg } from "../Components";
import CpanelPricingCard from "../Components/PriceCard/CpanelPricingCard";
import Footer from "../Components/Footer/Footer";
import CpanelChoice from "../Components/cPanel/CpanelChoice";
import CpanelFaq from "../Components/cPanel/CpanelFaq";
import CpanelListing from "../Components/cPanel/CpanelListing";
import CpanelFeatures from "../Components/cPanel/CpanelFeatures";
function VirtualPrivateServer() {
  return (
    <div className="site-wrapper overflow-hidden wp_hostingBgImg cpanelBG">
      <Seo
        title="CPanel: The Best Web Hosting Control Panel"
        description="CPanel is the world's most popular web hosting control panel. It's easy to use and provides an intuitive interface for managing website domains, files, databases, and more. Get the power of CPanel today and start building a better web hosting experience"
        keywords="cpanel, cpanelhosting, cpanelhost, bestcpanelhost"
      />
      <Navbar />

      <div className="wp_img_overlayContent vdsImgOverlay cpanelOverlay">
        <p>cPanel</p>
        <h1>Choose flexible pricing plan for you and more...</h1>
        <span>Unlimited boards and workflows. no credit card needed</span>
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
      <div
        className="vds_pricingBox container px-0 cpanelBox"
        data-aos="zoom-in"
        data-aos-duration="2200"
      >
        <CpanelPricingCard />
      </div>

      <div className="wpChoiceSection">
        <CpanelChoice />
      </div>

      <div className="wp_features vdsFeatures">
        <CpanelFeatures />
      </div>
      <div className="wp_plansListing">
       <CpanelListing/>
      </div>
      
      <div className="wp_hostingFaqSection">
        <div className="pose_1 cpanelPose">
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
        <CpanelFaq />
      </div>
      <Footer />
    </div>
  );
}

export default VirtualPrivateServer;
