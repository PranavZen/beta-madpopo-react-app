import React from "react";
import {
  wpFeatureImg1,
  wpFeatureImg2,
  wpFeatureImg3,
  wpFeatureImg4,
  wpFeatureImg5,
  wpFeatureImg6,
} from "../index";

function DomainRegistrationFeatures() {
  return (
    <div className="wp_featuersWrapper">
      <div className="wpSectionTitle">
        <h2>Domain Registration Features</h2>
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
                <img src={wpFeatureImg1} alt="FREE Domain Name Privacy" />
              </div>
              <div className="domTextLeft">
                <h4>FREE Domain Name Privacy</h4>
                <p>
                  We offer FREE domain WHOIS privacy on supported domains.
                  Protect your domain names and keep your domain registration
                  details private with our FREE domain WHOIS privacy. This
                  removes your domain name details from the public domain WHOIS
                  records. This ensures your privacy and stops you being a
                  target from spammers.
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
                  alt="FREE Website Forwarding"
                  className="width100"
                />
              </div>
              <div className="domTextLeft">
                <h4>FREE Website Forwarding</h4>
                <p>
                  Domain forwarding allows you to forward the visitors from your
                  new domain names to an existing domain name you already own,
                  while your new domain name still remains visible your web
                  browsers address bar.
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
                <img src={wpFeatureImg3} alt="FREE E-mail Forwarding" />
              </div>
              <div className="domTextLeft">
                <h4>FREE E-mail Forwarding</h4>
                <p>
                  E-mail forwarding gives you the ability to carry on using your
                  existing e-mail account while receiving mail from your new
                  Version Next domain names. This is extremely useful if you
                  already have an email account setup and want to receive all
                  your emails from your new domain name in the same mailbox.
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
                <img
                  src={wpFeatureImg4}
                  alt="1-Click WordPress Installer"
                  className="width100"
                />
              </div>
              <div className="domTextLeft">
                <h4>FREE Domain Name Privacy</h4>
                <p>
                  We offer FREE domain WHOIS privacy on supported domains.
                  Protect your domain names and keep your domain registration
                  details private with our FREE domain WHOIS privacy. This
                  removes your domain name details from the public domain WHOIS
                  records. This ensures your privacy and stops you being a
                  target from spammers.
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
                <img src={wpFeatureImg5} alt="Automated Backups" />
              </div>
              <div className="domTextLeft">
              <h4>FREE Website Forwarding</h4>
              <p>
                Domain forwarding allows you to forward the visitors from your
                new domain names to an existing domain name you already own,
                while your new domain name still remains visible your web
                browsers address bar.
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
                <img src={wpFeatureImg6} alt="WordPress Pro Features" />
              </div>
              <div className="domTextLeft">
              <h4>FREE E-mail Forwarding</h4>
              <p>
                E-mail forwarding gives you the ability to carry on using your
                existing e-mail account while receiving mail from your new
                Version Next domain names. This is extremely useful if you
                already have an email account setup and want to receive all your
                emails from your new domain name in the same mailbox.
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DomainRegistrationFeatures;
