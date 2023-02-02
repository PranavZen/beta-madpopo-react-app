import React from "react";
import { Link } from "react-router-dom";
import LinuxData from "../../Tabs/TabContentBox/HostingPlanData/LinuxHostingData";
function SecondTabContent() {
  return (
    <div className="main-homepage-item">
      <div className="row justify-content-center px-md-2 linuxHostingCardWrap">
        {LinuxData.map((lid) => {
          return (
            <div
              className="col-lg-4 col-md-4 col-sm-8 mb-9 px-8
            px-md-4 px-lg-4 linuxOuterPrice"
              key={lid.id}
            >
              <div
                className="ddos-attack-package pricing-plan-tree
                coodiv-hover-shadow-1 bg-white border
                rounded-10 text-center pt-6 pr-6 pl-6 pb-20
                position-relative"
              >
                <span className="linuxCardTitle">{lid.cardlinuxTitle}</span>
                <span className="fromText d-block mb-8 mt-2">{lid.cardlinuxSubTitle}</span>
                <h2
                  className="price-of-plan coodiv-text-3
                    font-weight-bold text-blackish-blue
                    line-spacing-none mb-2 mt-5"
                >
                  {lid.cardlinuxOgPrice}
                  <span
                    className="coodiv-text-11
                    coodiv-color-blackish-blue-opacity-7 pl-5"
                  >
                    / month
                  </span>
                </h2>
                <ul class="ddos-first-features border-top">
                  <li>
                    <span class="capTitle">Web Space</span>
                    <span class="capAmt">{lid.cardlinuxCapacity}</span>
                  </li>
                  <li>
                    <span class="capTitle">Unmetered Traffic</span>
                    <span class="capAmt">Unlimited</span>
                  </li>
                  <li>
                    <span class="capTitle">Anti DDOS protection</span>
                    <span class="capAmt">Unlimited</span>
                  </li>
                </ul>
                <ul class="ddos-second-features border-top">
                  <li>
                    <i class="feather icon-check-circle mr-3"></i>{" "}
                    {lid.cardlinuxOPt1}
                  </li>
                  <li>
                    <i class="feather icon-check-circle mr-3"></i>
                    {lid.cardlinuxOPT2} Account Domain
                  </li>
                  <li>
                    <i class="feather icon-check-circle mr-3"></i>
                    {lid.cardlinuxOPT3} Email Accounts
                  </li>
                  <li>
                    <i class="feather icon-check-circle mr-3"></i>
                    {lid.cardlinuxOPT4} Sub Domains
                  </li>
                  <li>
                    <i class="feather icon-check-circle mr-3"></i>{lid.cardlinuxOPT5} MySQL Database
                  </li>
                  <li>
                    <i class="feather icon-check-circle mr-3"></i> Free SSL
                  </li>
                  <li>
                    <i class="feather icon-check-circle mr-3"></i> {lid.cardlinuxOPT6}
                  </li>
                  <li>
                    <i class="feather icon-check-circle mr-3"></i> Managed WordPress Toolkit
                  </li>
                  <li>
                    <i class="feather icon-check-circle mr-3"></i> Out-of-the-box Caching
                  </li>
                  <li>
                    <i class="feather icon-check-circle mr-3"></i> Hosting CPanel
                  </li>
                  
                  <li>
                    <i class="feather icon-check-circle mr-3"></i> Free 1-click WordPress install
                  </li>
                  <li>
                    <i class="feather icon-check-circle mr-3"></i> 24/7 Support
                  </li>
                  <li>
                    <i class="feather icon-check-circle mr-3"></i> 99,90% Uptime Guarantee
                  </li>
                </ul>
                <Link href="#" className="btn-order color1">
                  <span>Order Now</span>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SecondTabContent;
