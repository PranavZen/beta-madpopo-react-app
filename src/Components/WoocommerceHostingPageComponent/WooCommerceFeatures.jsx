import React from "react";
import {
  wpFeatureImg1,
  wpFeatureImg10,
  wpFeatureImg2,
  wpFeatureImg3,
  wpFeatureImg4,
  wpFeatureImg5,
  wpFeatureImg6,
  wpFeatureImg7,
  wpFeatureImg8,
  wpFeatureImg9,
} from "../index";

function WooCommerceFeatures() {
  return ( 
    <div className="wp_featuersWrapper">
      <div className="wpSectionTitle">
        <h2>We Provide the Best Hosting for WooCommerce</h2>
      </div>
      <div className="container">
        <div className="wp_FeatureRow">
          <div className="col-md-4">
            <div className="wp_featuresInnerBox" data-aos="fade-up" data-aos-duration='1200'>
              <div className="wp_fetureImageWrap">
                <img src={wpFeatureImg7} alt="Fast Solid State Storage" />
              </div>
              <h4>Fast Solid State Storage</h4>
              <p>
                Our web hosting is powered by LiteSpeed - the fastest web server
                in the industry. Combined with the LiteSpeed Cache plugin, your
                WooCommerce websites will perform up to 4x faster than regular
                hosting.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="wp_featuresInnerBox" data-aos="fade-up" data-aos-duration='1200'>
              <div className="wp_fetureImageWrap">
                <img src={wpFeatureImg2} alt="WooCommerce Pre-Configured" />
              </div>
              <h4>WooCommerce Pre-Configured</h4>
              <p>
                If you wish to test new features on your website, try out
                MadPopo’s user-friendly staging tool. Generate a duplicate
                version of your site in just a click and make all the desired
                alterations – the live site won’t be affected.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="wp_featuresInnerBox" data-aos="fade-up" data-aos-duration='1200'>
              <div className="wp_fetureImageWrap">
                <img src={wpFeatureImg8} alt="FREE SSL Security" />
              </div>
              <h4>FREE SSL Security</h4>
              <p>
                Your software needs to be up-to-date to keep cyber threats at
                bay. That’s why we offer automatic core and security patches in
                our woocomeerce web hosting plans whenever woocomeerce releases
                updates.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="wp_featuresInnerBox" data-aos="fade-up" data-aos-duration='1200'>
              <div className="wp_fetureImageWrap">
                <img src={wpFeatureImg3} alt="Automatic Updates" />
              </div>
              <h4>Automatic Updates</h4>
              <p>
                Once you’ve purchased a hosting plan, you can install this CMS
                with a single click and proceed to develop your website
                straightaway.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="wp_featuresInnerBox" data-aos="fade-up" data-aos-duration='1200'>
              <div className="wp_fetureImageWrap">
                <img src={wpFeatureImg9} alt="Server-Level Caching" />
              </div>
              <h4>Server-Level Caching</h4>
              <p>
                Automated daily or weekly backups come with all of our hosting
                solutions, preventing data loss. With just a few clicks, you
                will be able to reinstate an earlier version of your website.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="wp_featuresInnerBox" data-aos="fade-up" data-aos-duration='1200'>
              <div className="wp_fetureImageWrap">
                <img src={wpFeatureImg10} alt="100% Uptime Guaranteed" />
              </div>
              <h4>100% Uptime Guaranteed</h4>
              <p>
                Boost productivity and enjoy increased freedom on your site
                using tools such as PHP version control, WP-CLI, Git
                integration, SSH access, MySQL database manager and more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WooCommerceFeatures;
