import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ResellerHostingData from "../Tabs/TabContentBox/HostingPlanData/ResellerHostingData";
function ResellerHostingCard(props) {
  // const wordpressData = products.wordpressData;
  // console.log(products.linuxData);
  // console.log(props.linuxCard);
  const [selectedCountry, setSelectedCountry] = useState("INR");
  const [selectedFrequency, setSelectedFrequency] = useState(
    "priceThreeYearlyIn"
  );

  useEffect(() => {
    const storedCountry = localStorage.getItem("selectedCountry");
    if (storedCountry) {
      setSelectedCountry(storedCountry);
    }
  }, []);

  // const handleCountryChange = (e) => {
  //   setSelectedCountry(e.target.value);
  //   localStorage.setItem("selectedCountry", e.target.value);
  // };

  const handleFrequencyChange = (e) => {
    setSelectedFrequency(e.target.value);
  };
  return ResellerHostingData.map((vpi) => {
    // console.log(vpi);
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
              <h3 className="mb-6">
                <a href={vpi.cardAnchorLink}>{vpi.cardVpsTitle}</a>
              </h3>
              <p className="fromText vpiText">{vpi.cardVpsSubTitle}</p>
              <h2 className="text-blackish-blue">
                {selectedCountry}
                {vpi[`${selectedFrequency}${selectedCountry}`]}
                <span className="payment-type-m">monthly</span>
              </h2>
            </div>
          </div>
          <ul className="ddos-first-features">
            <li>
              <span className="capTitle">Processor</span>
              <span className="capAmt">{vpi.cardVpsWebSpace} vCPU Cores</span>
            </li>
            <li>
              <span className="capTitle">Memory</span>
              <span className="capAmt">{vpi.cardVpsCapacity} GB RAM</span>
            </li>
            <li>
              <span className="capTitle">Storage</span>
              <span className="capAmt">
                {vpi.cardVpsCapacity2} NVMe or {vpi.cardVpsCapacity3} SSD
              </span>
            </li>
          </ul>
          <ul className="ddos-second-features border-top">
            <li>
              <i className="feather icon-check-circle mr-3"></i> Snapshot{" "}
              {vpi.cardVpsSnap}
            </li>
            <li>
              <i className="feather icon-check-circle mr-3"></i> 32 TB Traffic*
            </li>
            <li>
              <i className="feather icon-check-circle mr-3"></i> Unlimited Incoming
            </li>
            <li>
              <i className="feather icon-check-circle mr-3"></i> 1 IPv4 Address
            </li>
            <li>
              <i className="feather icon-check-circle mr-3"></i> Multiple DC
              Location
            </li>
            <li>
              <i className="feather icon-check-circle mr-3"></i> Power Reboot
            </li>
            <li>
              <i className="feather icon-check-circle mr-3"></i> Unmanaged Server
            </li>
            <li>
              <i className="feather icon-check-circle mr-3"></i>Default Linux OS
            </li>
            <li>
              <i className="feather icon-check-circle mr-3"></i>Free Control Panel
            </li>
            <li>
              <i className="feather icon-check-circle mr-3"></i>99,90% Uptime
              Guarantee
            </li>
            <li>
              <i className="feather icon-check-circle mr-3"></i>Advanced 24/7 Expert
              Support
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

export default ResellerHostingCard;
