import React from "react";
import { ico1, ico2, ico3, ico4, ico5, ico6, ico7, ico8 } from "../index";

function AffiliateFeaturesSection() {
  return (
    <div className="wp_featuersWrapper pt-20">
      <div className="wpSectionTitle">
        <h2>Superior Benefits in Higher Plans ?</h2>
      </div>
      <div className="container">
        <div className="wp_FeatureRow">
          <div className="col-md-4 col-lg-3">
            <div
              className="wp_featuresInnerBox"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="wp_fetureImageWrap">
                <img src={ico1} alt="Domains" />
              </div>
              <h4>Domains</h4>
              <p>
                With our team, you can rest assured that you'll have access to
                support from your web host whenever you need it.
              </p>
            </div>
          </div>
          <div className="col-md-4 col-lg-3">
            <div
              className="wp_featuresInnerBox"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="wp_fetureImageWrap">
                <img src={ico2} alt="Websites" className="width100" />
              </div>
              <h4>Websites</h4>
              <p>
                Your success is important to us, which is why we offer free
                website transfer and domain name registration services.
              </p>
            </div>
          </div>
          <div className="col-md-4 col-lg-3">
            <div
              className="wp_featuresInnerBox"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="wp_fetureImageWrap">
                <img src={ico3} alt="SSL Security" />
              </div>
              <h4>SSL Security</h4>
              <p>
                Launch your website quickly with a comprehensive solution that
                includes your site builder - either WordPress or Weebly.
              </p>
            </div>
          </div>
          <div className="col-md-4 col-lg-3">
            <div
              className="wp_featuresInnerBox"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="wp_fetureImageWrap">
                <img src={ico4} alt="Web Hosting" className="width100" />
              </div>
              <h4>Web Hosting</h4>
              <p>
                Begin your online store with a complimentary installation of the
                shopping cart of your choice.
              </p>
            </div>
          </div>
          <div className="col-md-4 col-lg-3">
            <div
              className="wp_featuresInnerBox"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="wp_fetureImageWrap">
                <img src={ico5} alt="Automated Backups" />
              </div>
              <h4>Security is Always a Priority for Us </h4>
              <p>
                Protect your website from cyber threats with our Premium and
                Business shared hosting plans that come enhanced security.
              </p>
            </div>
          </div>
          <div className="col-md-4 col-lg-3">
            <div
              className="wp_featuresInnerBox"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="wp_fetureImageWrap">
                <img src={ico6} alt="WordPress Pro Features" />
              </div>
              <h4>Easy Site Administration </h4>
              <p>
                Easily manage your website using our user-friendly Client Area
                and Site Tools, packed with a range of features.
              </p>
            </div>
          </div>
          <div className="col-md-4 col-lg-3">
            <div
              className="wp_featuresInnerBox"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="wp_fetureImageWrap">
                <img src={ico7} alt="WordPress Pro Features" />
              </div>
              <h4>Easy Site Administration </h4>
              <p>
                Easily manage your website using our user-friendly Client Area
                and Site Tools, packed with a range of features.
              </p>
            </div>
          </div>
          <div className="col-md-4 col-lg-3">
            <div
              className="wp_featuresInnerBox"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="wp_fetureImageWrap">
                <img src={ico8} alt="WordPress Pro Features" />
              </div>
              <h4>Easy Site Administration </h4>
              <p>
                Easily manage your website using our user-friendly Client Area
                and Site Tools, packed with a range of features.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AffiliateFeaturesSection;
