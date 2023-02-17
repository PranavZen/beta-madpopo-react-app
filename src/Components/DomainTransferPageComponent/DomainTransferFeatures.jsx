import React from "react";
import {
  DomainImg3,
  wpFeatureImg1,
  wpFeatureImg2,
  wpFeatureImg3,
} from "../index";

function DomainTransferFeatures() {
  return (
    <div className="wp_featuersWrapper">
      <div className="wpSectionTitle">
        <h2>Domain Transfer Features</h2>
        <p className="linuxpara">
          Designed to Support Growth and Deliver High Performance. 
        </p>
      </div>
      <div className="container">
        <div className="wp_FeatureRow">
          <div className="col-md-12">
            <div
              className="wp_featuresInnerBox"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className=" wp_fetureImageWrap text-left">
                <img src={wpFeatureImg1} alt="Free Email Account" />
              </div>
              <div className="domTextLeft">
                <h4>Free Email Account</h4>
                <p>
                  Receive 2 personalized Email Addresses such as
                  mail@yourdomain.com with free fraud, spam and virus
                  protection.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div
              className="wp_featuresInnerBox "
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="wp_fetureImageWrap text-left">
                <img
                  src={wpFeatureImg2}
                  alt="DNS Management"
                  className="width100"
                />
              </div>
              <div className="domTextLeft">
                <h4>DNS Management</h4>
                <p>
                  Free lifetime DNS service which allows you to manage your DNS
                  records on our globally distributed and highly redundant DNS
                  infrastructure.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div
              className="wp_featuresInnerBox"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="wp_fetureImageWrap text-left">
                <img src={DomainImg3} alt="Free Mail Forwards" />
              </div>
              <div className="domTextLeft">
                <h4>Free Mail Forwards</h4>
                <p>
                  Create free email forwards and automatically redirect your
                  email to existing email accounts.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div
              className="wp_featuresInnerBox"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="wp_fetureImageWrap text-left">
                <img src={wpFeatureImg3} alt="Bulk Tools" />
              </div>
              <div className="domTextLeft">
                <h4>Bulk Tools</h4>
                <p>
                  Easy-to-use bulk tools to help you Register, Renew, Transfer
                  and make other changes to several Domain Names in a single
                  step.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-12">
            <div
              className="wp_featuresInnerBox"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="wp_fetureImageWrap text-left">
                <img src={wpFeatureImg3} alt="Domain Forwarding" />
              </div>
              <div className="domTextLeft">
                <h4>Domain Forwarding</h4>
                <p>
                Point your domain name to another website for free! Redirect users when they type your domain name into a browser (with/without domain masking & SEO)
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div
              className="wp_featuresInnerBox"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="wp_fetureImageWrap text-left">
                <img src={wpFeatureImg3} alt="Domain Theft Protection" />
              </div>
              <div className="domTextLeft">
                <h4>Domain Theft Protection</h4>
                <p>
                Protect your Domain from being transferred out accidentally or without your permission with our free Domain Theft Protection.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-12">
          <div
            className="wp_featuresInnerBox"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <div className="wp_fetureImageWrap text-left">
              <img src={wpFeatureImg3} alt="Easy to use Control Panel" />
            </div>
            <div className="domTextLeft">
              <h4>Easy to use Control Panel</h4>
              <p>
              Use our intuitive Control Panel to manage your domain name, configure email accounts, renew your domain name and buy more services.
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default DomainTransferFeatures;
