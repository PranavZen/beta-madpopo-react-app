import React from "react";
import { wpHostLefttImg, wpHostRightImg } from "../index";

function CpanelChoice() {
  return (
    <div className="wpBestChoiceWrap pt-15 cpanelChoice">
      <div className="container">
        <div className="wpChoiceSecTitle">
          <h2 className="mb-12">Main cPanel Features</h2>
          {
            //     <p className="woopara">
            // You have the ability to sell a variety of goods and services online,
            // from tangible items to digital downloads, subscriptions, and more,
            // thanks to our Managed WordPress Ecommerce platform with WooCommerce.
            // To further improve your online business, your subscription also
            // includes free, exclusive WooCommerce Storefront extensions.
            // </p>
          }
        </div>
        <div
          className="wpBest_choiceRow padBtm_50"
          data-aos="fade-left"
          data-aos-duration="1200"
        >
          <div className="col-md-5">
            <div className="wp_choice_leftBox">
              <div className="wp_choice_ContentBox">
                <h2>Security</h2>
                <p>
                  cPanel enhanced security and many new utilities which provide
                  you fine grained security policies for your hosting
                  environment.
                </p>
              </div>
              <div className="wp_choice_ContentBox">
                <h2>Domains Manager</h2>
                <p>
                  Domain Manager tools like: manage subdomains, add-on domains,
                  parked domains, and redirects to point visitors in the right
                  direction. and great DNS Zone Editor.
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
        <div
          className="wpBest_choiceRow"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
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
                <h2>Mail Server</h2>
                <p>
                  Manage domain email accounts, by Creating Email accounts,
                  manage forwarders, and autoresponders. Fighting spam with
                  Apache SpamAssassin, and Email authentication.
                </p>
              </div>
              <div className="wp_choice_ContentBox">
                <h2>Keep It Simple</h2>
                <p>
                  cPanel is most popular and user friendly control panel.with
                  web based file manager, backup wizard and database wizard and
                  one click script installations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CpanelChoice;
