import React from "react";
import { footerPose1, wp_logo } from "../../Components";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import TrustedClientsSlide from "../../Components/WordpressHostingPageComponent/TrustedClients/TrustedClientsSlide";
import WordpressHostingFAQ from "../../Components/WordpressHostingPageComponent/WordpressHostingFAQ";
import WordpressHostingFeatures from "../../Components/WordpressHostingPageComponent/WordpressHostingFeatures";
import WordpressHostingPriceCard from "../../Components/WordpressHostingPageComponent/WordpressHostingPriceCard";
import WordpressPlansListing from "../../Components/WordpressHostingPageComponent/WordpressPlansListing";
import WpBestChoice from "../../Components/WordpressHostingPageComponent/WpBestChoice";

import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import Seo from "../../Components/SEO/Seo";
function WordpressHosting() {
  return (
    <div className="site-wrapper overflow-hidden wp_hostingBgImg">
    
    <Seo
    title="The Best WordPress Hosting for Your Website"
    description="Get the best WordPress hosting for your website. We've reviewed top WordPress hosts to offer you reliable, secure, and fast hosting services. Our picks are loaded with features and excellent customer support to make sure you get the most out of your investment."
    keywords="wordpress hosting, best wordpress hosting, wordpress domain, wordpress plans wp hosting, managed wordpress hosting, fastest wordpress hosting, managed wordpress, wordpress website hosting, best web hosting for wordpress, wordpress server, wordpress web hosting, wordpress hosting plans"
    />

      <Navbar />

      <div className="wp_img_overlayContent">
        <p>Wordpress Hosting</p>
        <h1>Efficient and Reliable WordPress Hosting Solutions for Your Website
        </h1>
        <span>Our team of experts will handle all the technical details, so you can focus on growing your business. Trust us to provide the best possible WordPress hosting solutions for your website</span>
      </div>
      <MouseParallaxContainer className={"wp_outerBox"}>
        <MouseParallaxChild
          factorX={0.04}
          factorY={0.04}
          className={"wp_innerBox"}
        >
          <img src={wp_logo} alt="Wordpress Logo" />
        </MouseParallaxChild>
      </MouseParallaxContainer>
      <div
        className="wp_pricingBox"
        data-aos="zoom-in"
        data-aos-duration="2200"
      >
        <WordpressHostingPriceCard />
      </div>
      <div className="wpChoiceSection">
        <WpBestChoice />
      </div>
      <div className="wp_features">
        <WordpressHostingFeatures />
      </div>
      <div className="wp_plansListing">
        <WordpressPlansListing />
      </div>
      
      <div className="wp_hostingFaqSection">
        <div className="pose_1">
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
        <WordpressHostingFAQ />
      </div>
      <Footer />
    </div>
  );
}

export default WordpressHosting;
