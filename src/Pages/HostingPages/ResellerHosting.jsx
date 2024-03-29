import React from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
// import {
//   MouseParallaxChild,
//   MouseParallaxContainer,
// } from "react-parallax-mouse";
import { footerPose1 } from "../../Components";
import ResellerHostingComponent from "../../Components/Tabs/TabContentBox/HostingPlanData/ResellerHostingComponent";
import ResellerHosingPlansListing from "../../Components/ResellerHostingPageComponent/ResellerHosingPlansListing";
import Seo from "../../Components/SEO/Seo";
import ResellerBestChoices from "../../Components/ResellerHostingPageComponent/ResellerBestChoices";
import ResellerHostingFaq from "../../Components/ResellerHostingPageComponent/ResellerHostingFaq";
import ResellerHostingFeatures from "../../Components/ResellerHostingPageComponent/ResellerHostingFeatures";
function ResellerHosting() {
  return (
    <div className="site-wrapper overflow-hidden wp_hostingBgImg resellerBG">
      <Seo
        title="Affordable Reseller Hosting Plans for Maximum Profitability"
        description="Our reseller hosting plans are designed to maximize your profitability. Get reliable, secure hosting services with 24/7 customer support and a 99.9% uptime guarantee. Choose the plan that’s right for you."
        keywords="hosting for resellers, reseller hosting, domain reseller, best reseller hosting, reseller web hosting, reseller website, reseller web."
      />
      <Navbar />

      <div className="wp_img_overlayContent resellerOverlay">
        <p>Reseller Hosting</p>
        <h1>The Ideal Solution for Web Designers and Developers </h1>
        <span>
          An ideal solution for web designers and developers who want to expand
          their offerings and provide hosting services to their clients
        </span>
      </div>
      {
        // <MouseParallaxContainer className={"wp_outerBox"}>
        //   <MouseParallaxChild
        //     factorX={0.04}
        //     factorY={0.04}
        //     className={"wp_innerBox"}
        //   >
        //     <img src={wp_logo} alt="Reseller Hosting" />
        //   </MouseParallaxChild>
        // </MouseParallaxContainer>
      }
      <div
        className="resellerHosting_pricingBox container px-0"
        data-aos="zoom-in"
        data-aos-duration="2200"
      >
        <ResellerHostingComponent />
      </div>

      <div className="wpChoiceSection resellerBeChoice">
        <ResellerBestChoices />
      </div>

      <div className="wp_features">
        <ResellerHostingFeatures />
      </div>
      <div className="wp_plansListing">
        <ResellerHosingPlansListing />
      </div>

      <div className="wp_hostingFaqSection">
        <div className="pose_1 resellPose">
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
        <ResellerHostingFaq />
      </div>
      <Footer />
    </div>
  );
}

export default ResellerHosting;
