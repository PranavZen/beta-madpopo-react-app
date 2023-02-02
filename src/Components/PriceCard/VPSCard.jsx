import React from "react";
import { Link } from "react-router-dom";
import VpsData from "../Tabs/TabContentBox/HostingPlanData/VPSData";
function VPSCard() {
  return VpsData.map((vpi) => {
    return (
      <div className="col-lg-4 col-md-6 col-sm-8 mb-9" key={vpi.id}>
        <div
          className="ddos-attack-package games-plan plan-1 box-shadow-1
                      bg-white rounded-20 text-center pb-20 pt-9
                      pr-6 pl-6 position-relative
                      overflow-hidden"
        >
          <div className="d-flex mb-lg-7 plan-header">
            <div className="game-logo">
              <img src={vpi.cardVpsImg} alt={vpi.cardVpsAltName} />
            </div>
            <div className="game-title">
              <h3 className="mb-6">{vpi.cardVpsTitle}</h3>
              <p class="fromText">{vpi.cardVpsSubTitle}</p>
              <h2 className="text-blackish-blue">
                $12<span className="payment-type-m">monthly</span>
              </h2>
            </div>
          </div>
          <ul class="ddos-first-features">
            <li>
              <span class="capTitle">Web Space</span>
              <span class="capAmt">5GB</span>
            </li>
            <li>
              <span class="capTitle">Unmetered Traffic </span>
              <span class="capAmt">Unlimited</span>
            </li>
            <li>
              <span class="capTitle">Account Domain</span>
              <span class="capAmt">1</span>
            </li>
          </ul>
          <ul class="ddos-second-features border-top">
            <li>
              <i class="feather icon-check-circle mr-3"></i> Free Domain 1st
              Year*
            </li>
            <li>
              <i class="feather icon-check-circle mr-3"></i> 10 Email Accounts
            </li>
            <li>
              <i class="feather icon-check-circle mr-3"></i> Free WP
              Installation
            </li>
            <li>
              <i class="feather icon-check-circle mr-3"></i> Free Speed
              Enhancing CDN
            </li>
            <li>
              <i class="feather icon-check-circle mr-3"></i> WordPress
              Autoupdates
            </li>
            <li>
              <i class="feather icon-check-circle mr-3"></i> Free SSL
            </li>
            <li>
              <i class="feather icon-check-circle mr-3"></i>cdcdcd
            </li>
            <li>
              <i class="feather icon-check-circle mr-3"></i>Ecommerce Enabled
            </li>
            <li>
              <i class="feather icon-check-circle mr-3"></i>Managed WordPress
            </li>
            <li>
              <i class="feather icon-check-circle mr-3"></i>Out-of-the-box
              Caching
            </li>
            <li>
              <i class="feather icon-check-circle mr-3"></i>100% renewable
              energy match
            </li>
          </ul>
          <Link to="#" className="btn-order">
            <span>Order Now</span>
          </Link>
        </div>
      </div>
    );
  });
}

export default VPSCard;
