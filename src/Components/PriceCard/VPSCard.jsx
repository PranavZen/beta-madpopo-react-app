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
              <h3 className="mb-6"><a href={vpi.cardAnchorLink}>{vpi.cardVpsTitle}</a></h3>
              <p class="fromText vpiText">{vpi.cardVpsSubTitle}</p>
              <h2 className="text-blackish-blue">
                {vpi.cardVpsOgPrice}<span className="payment-type-m">monthly</span>
              </h2>
            </div>
          </div>
          <ul class="ddos-first-features">
            <li>
              <span class="capTitle">Processor</span>
              <span class="capAmt">{vpi.cardVpsWebSpace} vCPU Cores</span>
            </li>
            <li>
              <span class="capTitle">Memory</span>
              <span class="capAmt">{vpi.cardVpsCapacity} GB RAM</span>
            </li>
            <li>
              <span class="capTitle">Storage</span>
              <span class="capAmt">{vpi.cardVpsCapacity2}  NVMe or {vpi.cardVpsCapacity3}  SSD</span>
            </li>
            
          </ul>
          <ul class="ddos-second-features border-top">
          <li>
          <i class="feather icon-check-circle mr-3"></i> Snapshot {vpi.cardVpsSnap}
        </li>
            <li>
              <i class="feather icon-check-circle mr-3"></i> 32 TB Traffic*
            </li>
            <li>
              <i class="feather icon-check-circle mr-3"></i> Unlimited Incoming
            </li>
            <li>
              <i class="feather icon-check-circle mr-3"></i> 1 IPv4 Address
            </li>
            <li>
              <i class="feather icon-check-circle mr-3"></i> Multiple DC Location
            </li>
            <li>
              <i class="feather icon-check-circle mr-3"></i> Power Reboot
            </li>
            <li>
              <i class="feather icon-check-circle mr-3"></i> Unmanaged Server
            </li>
            <li>
              <i class="feather icon-check-circle mr-3"></i>Default Linux OS
            </li>
            <li>
              <i class="feather icon-check-circle mr-3"></i>Free Control Panel
            </li>
            <li>
              <i class="feather icon-check-circle mr-3"></i>99,90% Uptime Guarantee
            </li>
            <li>
              <i class="feather icon-check-circle mr-3"></i>Advanced 24/7 Expert Support
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
