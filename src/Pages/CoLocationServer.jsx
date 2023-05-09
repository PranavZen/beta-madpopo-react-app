import React from "react";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import Seo from "../Components/SEO/Seo";
import Navbar from "../Components/Navbar/Navbar";
import { dsImg, footerPose1 } from "../Components";
import Footer from "../Components/Footer/Footer";
import CoLocationCardPricing from "../Components/CoLocationPageComponent/CoLocationCardPricing";
import CoLocationBestChoice from "../Components/CoLocationPageComponent/CoLocationBestChoice";
import CoLocationFeatures from "../Components/CoLocationPageComponent/CoLocationFeatures";
import CoLocationPlanListing from "../Components/CoLocationPageComponent/CoLocationPlanListing";
import CoLocationFaq from "../Components/CoLocationPageComponent/CoLocationFaq";
function CoLocationServer() {
  return (
    <div className="site-wrapper overflow-hidden wp_hostingBgImg dedicatedServerBG">
      <Seo
        title="The best solutions for your business when it comes to colocation server hosting"
        description="Get the best performance and reliability for your business with colocation server hosting from Madpopo. With top-notch security, fast connections, and 24/7 support, you can rest assured that your data is secure and running at peak efficiency."
        keywords="colocation, colocationserver, colocationservices, colocationhosting"
      />
      <Navbar />

      <div className="wp_img_overlayContent dedicatedIgOverlay">
        <p>Co-Location Server</p>
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
      <div
        className="ds_pricingBox container px-0"
        data-aos="zoom-in"
        data-aos-duration="2200"
      >
        <CoLocationCardPricing />
      </div>

      <div className="wpChoiceSection dedicatedBestChoice">
        <CoLocationBestChoice />
      </div>

      <div className="wp_features dedecatedFeatures">
        <CoLocationFeatures />
      </div>
      <div className="wp_plansListing">
        <CoLocationPlanListing />
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
        <div className="pose_1 colocPose">
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
        <CoLocationFaq />
      </div>
      <Footer />
    </div>
  );
}

export default CoLocationServer;
