import React from "react";
import {
    
  vdsImgFive,
  vdsImgFour,
  vdsImgOne,
  vdsImgSeven,
  vdsImgSix,
  vdsImgThree,
  vdsImgTwo,
} from "../../Components/index";

function VdsFeatures() {
  return (
    <div className="wp_featuersWrapper">
      <div className="wpSectionTitle">
        <h2>Get a Your Cloud Server Running in Seconds
        </h2>
        <p className="linuxpara vdsPara">Deploy any distributions virtual server in seconds from the Version Next Cloud. Choose your resources, distributions, and node location right from the Manager.We provide all of our users with high-performance SSD Hard Drives, a flexible API, and the ability to select the nearest data center location.</p>
      </div>
      <div className="container">
        <div className="wp_FeatureRow">
          <div className="col-md-4">
            <div className="wp_featuresInnerBox" data-aos="fade-up" data-aos-duration='1200'>
              <div className="wp_fetureImageWrap">
                <img src={vdsImgTwo} alt="Quickly Provisioning" />
              </div>
              <h4>Quickly Provisioning</h4>
              <p>
              All of our cloud servers are provisioned in as Quickly Provisioning. - your machine is online and pinging fast.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="wp_featuresInnerBox" data-aos="fade-up" data-aos-duration='1200'>
              <div className="wp_fetureImageWrap">
                <img src={vdsImgThree} alt="High availability" />
              </div>
              <h4>High availability</h4>
              <p>
              High availability offers you protection against hardware failure and operating system malfunction. Your VM is available again within minutes and without any human intervention whatsoever.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="wp_featuresInnerBox" data-aos="fade-up" data-aos-duration='1200'>
              <div className="wp_fetureImageWrap">
                <img src={vdsImgFour} alt="Global Availability                " />
              </div>
              <h4>Global Availability
              </h4>
              <p> Regardless of whether your services and apps are in the staging or production phase, our six worldwide regions offer dependable service with low latency and availability backed by a Service Level Agreement.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="wp_featuresInnerBox" data-aos="fade-up" data-aos-duration='1200'>
              <div className="wp_fetureImageWrap">
                <img src={vdsImgFive} alt="1-Click WordPress Installer" />
              </div>
              <h4>Best Price at Best Performance              </h4>
              <p>Our goal is to always offer low prices and discounts to our customers. We are able to provide top-notch servers at an affordable cost to our clients.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="wp_featuresInnerBox" data-aos="fade-up" data-aos-duration='1200'>
              <div className="wp_fetureImageWrap">
                <img src={vdsImgSix} alt="Support Round The Clock 
                " />
              </div>
              <h4>Support Round The Clock 
              </h4>
              <p> Renowned industry publications and satisfied customers have lauded the team for their prompt problem-solving abilities. However, the support team never becomes complacent and continuously endeavors to improve their skills.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="wp_featuresInnerBox" data-aos="fade-up" data-aos-duration='1200'>
              <div className="wp_fetureImageWrap">
                <img src={vdsImgSeven} alt="WordPress Pro Features" />
              </div>
              <h4>Storage I/O load balancing</h4>
              <p>Define different rules and preferences for managing the quality of your virtual machine I/O. You are thus guaranteed access hierarchy on a shared storage system.
              </p>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}

export default VdsFeatures;
