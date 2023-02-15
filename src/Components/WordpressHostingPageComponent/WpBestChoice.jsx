import React from "react";
import { wpHostLefttImg, wpHostRightImg } from "../index";

function WpBestChoice() {
  return (
    <div className="wpBestChoiceWrap">
      <div className="container">
        <div className="wpChoiceSecTitle">
            <h2>Why Our WordPress Hosting Is the Best Choice</h2>
        </div>
        <div className="wpBest_choiceRow padBtm_50" data-aos="fade-left" data-aos-duration='1200'>
          <div className="col-md-5">
            <div className="wp_choice_leftBox">
              <div className="wp_choice_ContentBox">
                <h6>Extremely Fast Performance</h6>
                <p>
                  Faster load times lead to better user experience, greater
                  conversion rates, and improved search engine optimization. At
                  MadPopo, we utilize LiteSpeed servers and include the LSCWP
                  plugin to provide fast WordPress hosting solutions.
                </p>
              </div>
              <div className="wp_choice_ContentBox">
                <h6>Managed WordPress Hosting</h6>
                <p>
                  Our managed WordPress hosting plans offer web hosting services
                  tailored for WordPress users. With ready-to-use features such
                  as user-friendly hPanel, a 1-click installer, and
                  pre-installed performance plugins, you can build a fast
                  website and boost your online presence today.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="wp_choice_rightBox">
              <div className="wp_choiceImgWrap">
                <img src={wpHostRightImg} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="wpBest_choiceRow" data-aos="fade-right" data-aos-duration='1200'>
          <div className="col-md-6">
            <div className="wp_choice_rightBox">
              <div className="wp_choiceImgWrap">
                <img src={wpHostLefttImg} alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="wp_choice_leftBox">
              <div className="wp_choice_ContentBox">
                <h6>24/7 Support</h6>
                <p>
                  Our Customer Success team is available at all times through
                  live chat. We’ve also got WordPress tutorials and an extensive
                  knowledge base maintained by our in-house WordPress experts to
                  help you succeed online.
                </p>
              </div>
              <div className="wp_choice_ContentBox">
                <h6>Top-Notch Security Measures</h6>
                <p>
                  Make use of our web application firewall developed in-house,
                  free SSL certificate, and anti-DDoS protection to keep your
                  website safe from all kinds of cyber attacks. Our plans also
                  include automated daily backups, so you don’t need to worry
                  about losing your data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WpBestChoice;
