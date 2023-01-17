import React from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import WordpressHostingFeatures from "../../Components/WordpressHostingPageComponent/WordpressHostingFeatures";
import WordpressHostingPriceCard from "../../Components/WordpressHostingPageComponent/WordpressHostingPriceCard";
import WordpressPlansListing from "../../Components/WordpressHostingPageComponent/WordpressPlansListing";
import WpBestChoice from "../../Components/WordpressHostingPageComponent/WpBestChoice";

function WordpressHosting() {
  return (
    <div className="site-wrapper overflow-hidden wp_hostingBgImg">
      <Navbar />
      <div className="wp_img_overlayContent">
        <p>WOrdpress Hosting</p>
        <h1>Choose flexible pricing plan for you and more...</h1>
        <span>Unlimited boards and workflows. no credit card needed</span>
      </div>
      <div className="wp_pricingBox">
        <WordpressHostingPriceCard />
      </div>
      <WpBestChoice />
      <div className="wp_features">
        <WordpressHostingFeatures />
      </div>
      <div className="wp_plansListing">
        <WordpressPlansListing />
      </div>
      <Footer />
    </div>
  );
}

export default WordpressHosting;
