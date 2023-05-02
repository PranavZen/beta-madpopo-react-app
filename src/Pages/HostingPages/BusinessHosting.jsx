import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import { bus_rightImg, footerPose1} from '../../Components';
import WordpressHostingFeatures from '../../Components/WordpressHostingPageComponent/WordpressHostingFeatures';
import TrustedClientsSlide from '../../Components/WordpressHostingPageComponent/TrustedClients/TrustedClientsSlide';
import WordpressHostingFAQ from '../../Components/WordpressHostingPageComponent/WordpressHostingFAQ';
import BusinessEmailComponent from '../../Components/Tabs/TabContentBox/HostingPlanData/BusinessEmailComponent';
import Seo from '../../Components/SEO/Seo';
import BuisnessEmailPalnsListing from '../../Components/BuisnessEmailPageComponent/BuisnessEmailPalnsListing';
function BusinessHosting() {
  return (
    <div className="site-wrapper overflow-hidden wp_hostingBgImg businessBG">
    <Seo
    title="Find the Best Email Hosting Provider & Enjoy Seamless Email Experience"
    description="Get the best email hosting experience with our top-rated providers. Enjoy secure, reliable, and fast communication with features like advanced security protocols, 24/7 customer support, and unlimited storage. Get started today for a seamless email experience."
    keywords="email hosting, best email provider, emailhosting, businessemail, create business email, professional business email, small business email, email host providers, custom email domain, best email for business, webmail email hosting"
    
  />
      <Navbar />

      <div className="wp_img_overlayContent businessImgOverlay">
        <p>Business Email Hosting</p>
        <h1>Business-Class Email Hosting for Enhanced Communication        </h1>
        <span>We offer a variety of options to fit your specific needs, including GSuite, Office 365, and our own email solution</span>
      </div>
      <MouseParallaxContainer className={"wp_outerBox"}>
        <MouseParallaxChild
          factorX={0.04}
          factorY={0.04}
          className={"wp_innerBox buis_innerBox"}
        >
          <img src={bus_rightImg} alt="Business Email Hosting" />
        </MouseParallaxChild>
      </MouseParallaxContainer>
      <div
        className="cloudHost_pricingBox container px-0"
        data-aos="zoom-in"
        data-aos-duration="2200"
      >
      <BusinessEmailComponent />
      </div>

      {
      //   <div className="wpChoiceSection">
      //   <WpBestChoice />
      // </div>
      }

      <div className="wp_features businessFeatures">
        <WordpressHostingFeatures />
      </div>
      <div className="wp_plansListing">
        <BuisnessEmailPalnsListing />
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
  )
}

export default BusinessHosting