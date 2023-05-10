import React from "react";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import Seo from "../Components/SEO/Seo";
import Navbar from "../Components/Navbar/Navbar";
import { footerPose1, windowsImg } from "../Components";
import Footer from "../Components/Footer/Footer";
import SslPricingCard from "../Components/Tabs/TabContentBox/SslPricingCard";
import SslBestChoice from "../Components/SslCertificatePageContent/SslBestChoice";
import SslPlanlisting from "../Components/SslCertificatePageContent/SslPlanlisting";
import SslFaq from "../Components/SslCertificatePageContent/SslFaq";
function SslCertificate() {
  return (
    <div className="site-wrapper overflow-hidden wp_hostingBgImg windowsBG">
      <Seo
        title="Get Secure with the Best SSL Certificate for Your Website"
        description="Get secure with the best SSL certificate for your website. Protect your customers, enhance your reputation, and increase conversions with reliable encryption. Our certificates are easy to install and provide high-grade security for websites of any size."
        keywords="sslcertificate, sslcertificatecost, typesofsslcertificates, sslcertificateprice, buysslcertificate, sslcertificateforwebsite, getsslcertificate, purchasesslcertificate"
      />
      <Navbar />

      <div className="wp_img_overlayContent sslOverlay">
        <p>SSL Certificate</p>
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
        className="windows_pricingBox container px-0 pleskCard sslCard"
        data-aos="zoom-in"
        data-aos-duration="2200"
      >
        <SslPricingCard />
      </div>
      <div className="wpChoiceSection ">
        <SslBestChoice />
      </div>
      {
      //   <div className="wp_features">
      //   <PleskFeatures />
      // </div>
    }
      <div className="wp_plansListing">
        <SslPlanlisting />
      </div>
      <div className="wp_hostingFaqSection">
        <div className="pose_1 sslPose">
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
        <SslFaq />
      </div>
      <Footer />
    </div>
  );
}

export default SslCertificate;
