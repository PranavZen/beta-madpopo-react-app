import React from "react";
import Seo from "../Components/SEO/Seo";
import Navbar from "../Components/Navbar/Navbar";
import { affiliatesImg, footerPose1 } from "../Components";
import Footer from "../Components/Footer/Footer";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import AffiliateSecondSection from "../Components/AffiliatePageComponents/AffiliateSecondSection";
import AffiliateThirdSection from "../Components/AffiliatePageComponents/AffiliateThirdSection";
import AffiliateFeaturesSection from "../Components/AffiliatePageComponents/AffiliateFeaturesSection";
import AffiliateFaq from "../Components/AffiliatePageComponents/AffiliateFaq";

function AffliatePage() {
  return (
    <div className="site-wrapper overflow-hidden wp_hostingBgImg affiliateBG">
      <Seo
        title="Fast & Reliable Linux Web Hosting Solutions"
        description="Get fast and reliable Linux web hosting solutions powered by the latest hardware and software technology. Our servers are optimized for any kind of website, providing you with a worry-free experience. Enjoy peace of mind with our secure, reliable hosting solutions. "
        keywords="linux hosting, linux web hosting, hosting a website on linux, linux hosting server, linux shared hosting, best linux hosting"
      />
      <Navbar />

      <div className="wp_img_overlayContent linux_img_overlay AffiliatesImgOverlay">
        <p>MadPopo Affiliate Program</p>
        <h1>Earn 20% of your every sale. Promote a trusted service loved by millions.</h1>
        <div className="affiliateBtnWrap">
          <a
            href="https://my.madpopo.com/login"
            className="btn btn-orange coodiv-hover-y w-25 mt-9 coodiv-text-9 "
            target="_blank"
            rel="noreferrer"
          >
            Sign In
          </a>
          <a
            href="https://my.madpopo.com/register.php"
            className="btn btn-transperant coodiv-hover-y w-25 mt-9 coodiv-text-9 "
            target="_blank"
            rel="noreferrer"
          >
            Sign Up
          </a>
        </div>
        <p className="color-blackish-blue-opacity coodiv-text-10 d-lg-flex align-items-center justify-content-center">Join an affiliate program that values your partnership.</p>
        <div className="reviews-overview text-center mt-9 mb-0  topRating">
          <p className="rataingWrapes color-blackish-blue-opacity coodiv-text-10 d-lg-flex align-items-center justify-content-center mb-0">
            MadPopo<strong>is rated</strong> Excellent
            <span className="reviews-stars mx-3 mt-0">
              <i className="feather icon-star-on"></i>
              <i className="feather icon-star-on"></i>
              <i className="feather icon-star-on"></i>
              <i className="feather icon-star-on"></i>
              <i className="feather icon-star-on"></i>
            </span>
            4.89 out of<strong>5</strong>
          </p>
        </div>
      </div>
      <MouseParallaxContainer className={"wp_outerBox affilOuterBox"}>
        <MouseParallaxChild
          factorX={0.04}
          factorY={0.04}
          className={"wp_innerBox linuxrightimgBox"}
        >
          <img src={affiliatesImg} alt="Affiliates Program" />
        </MouseParallaxChild>
      </MouseParallaxContainer>

      <section className="secondAffiliateSection">
        <AffiliateSecondSection />
      </section>

      <div className="wpChoiceSection">
        <AffiliateThirdSection />
      </div>

      <div className="wp_features linuxFeature affilFeature">
        <AffiliateFeaturesSection />
      </div>

      <div className="wp_hostingFaqSection affilFaq">
        <div className="pose_1 linuxPose">
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
        <AffiliateFaq />
      </div>
      <Footer />
    </div>
  );
}

export default AffliatePage;
