import React from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import { dsImg, footerPose1 } from "../../Components";
import TrustedClientsSlide from "../../Components/WordpressHostingPageComponent/TrustedClients/TrustedClientsSlide";
import DediecatedServerComponent from "../../Components/Tabs/TabContentBox/DediecatedServerComponent";
import Seo from "../../Components/SEO/Seo";
import DedecatedServerFaq from "../../Components/DedecatedServerPageComponent/DedecatedServerFaq";
import DedicatedPlansListing from "../../Components/DedecatedServerPageComponent/DedicatedPlansListing";
import DedicatedServerFeatures from "../../Components/DedecatedServerPageComponent/DedicatedServerFeatures";
function DedicatedServer() {
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
        <h1>Choose flexible pricing plan for you and more...</h1>
        <span>Unlimited boards and workflows. no credit card needed</span>
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
      <div
        className="ds_pricingBox container px-0"
        data-aos="zoom-in"
        data-aos-duration="2200"
      >
        <DediecatedServerComponent />
      </div>

      {
        //   <div className="wpChoiceSection">
        //   <WpBestChoice />
        // </div>
      }

      <div className="wp_features dedecatedFeatures">
        <DedicatedServerFeatures />
      </div>
      <div className="wp_plansListing">
        <DedicatedPlansListing />
      </div>
      {
        // <div
        //   className="trusedPlanSection"
        //   data-aos="fade-right"
        //   data-aos-duration="1200"
        // >
        //   <TrustedClientsSlide />
        // </div>
      }
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
      <Footer />
    </div>
  );
}

export default DedicatedServer;
