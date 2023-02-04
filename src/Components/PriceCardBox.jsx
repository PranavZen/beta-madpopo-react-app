import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import pricingSEctionData from "./PriceCard/PricingCardData";
import pricingSEctionData2 from "./PriceCard/PriceCardDataTwo";

function PriceCardBox(props) {
  const locationN = useLocation();
  console.log(locationN.pathname);
  let pricingValues = pricingSEctionData2.pricingValues;
  if (locationN.pathname === "/beta-madpopo-react-app/WordpressHosting") {
    console.log("if - WP Hosting Page");
    pricingValues = pricingSEctionData2.pricingValues;
  } else {
    pricingValues = pricingSEctionData.pricingValues;
    console.log("else - Home Page");
  }

  console.log(pricingValues);
  const options = [
    { label: "3 year", value: 3 },

    { label: "2 years", value: 2 },

    { label: "1 years", value: 1 },
  ];
  const [value, setValue] = useState("");
  const handleChange = (event, param1) => {
    setValue(pricingValues[event.target.value][0]["cardPrice" + param1]);

    console.log("Years " + event.target.value);
    console.log(pricingValues[event.target.value][0]["cardPrice" + param1]);
    // console.log(options[0].label);

    console.log("card no : " + param1);
  };
  console.log(pricingValues[1][0]["cardPrice" + props.id]);
  return (
    <div className="col-lg-4 mb-15 mb-lg-0 priceCardWrap">
      <div className="ddos-attack-package not-feaures-package shadow-2 priceCardDdos">
        <div className="toggleWrap d-flex">
          <h2 className="priceCardTitle mb-2"><a href={props.cardAnchorLink}>{props.cardTitle}</a></h2>
        </div>
        <span className="fromText">{props.cardSubTitle}</span>
        <div className="selectDaysWrap">
          <form>
            <select
              className="selectDay"
              value={options.value}
              options={options}
              onChange={(event) => handleChange(event, props.id)}
              // defaultValue={options[2]}
            >
              {options.map((option, id) => (
                <option value={option.value} key={id}>
                  {option.label}
                </option>
              ))}
            </select>
          </form>
        </div>

        <div className="ddos-attack-price d-flex justify-content-between align-items-center mt-7 py-4">
          {
            // <h2 className="priceCardPriceAmt">{value ? value : pricingValues[props.id][0]["cardPrice1"]}<span className="monthSpan">/Month</span></h2>
          }
          <h2 className="priceCardPriceAmt">
            <span className="mainAmtPrice">{value ? value : pricingValues[3][0]["cardPrice" + props.id]}</span>
            <span className="monthSpan">per month <br/> billed annually</span>
          </h2>

          
        </div>
        <div className="orginalPriceWrap">
          <p className="desPriceText">
            <span>Discounted from</span> <del>{props.cardOgPrice} / mo</del>
          </p>
        </div>
        <ul className="ddos-first-features border-top">
          <li>
            <span className="capTitle">SSD Storage</span>
            <span className="capAmt">{props.cardCapacity}</span>
          </li>
          <li>
            <span className="capTitle">Unmetered Traffic </span>
            <span className="capAmt">{props.cardSSHAccess}</span>
          </li>
          <li>
            <span className="capTitle">Premium Theme of Value</span>
            <span className="capAmt">{props.cardDDOS}</span>
          </li>
        </ul>
        <ul className="ddos-second-features border-top">
          <li>
            <i className="feather icon-check-circle mr-3"></i> Free Domain 1st
            Year*
          </li>
          <li>
            <i className="feather icon-check-circle mr-3"></i> Premium
            Theme,Save $399
          </li>
          <li>
            <i className="feather icon-check-circle mr-3"></i> Free WP
            Installation
          </li>
          <li>
            <i className="feather icon-check-circle mr-3"></i> Free Speed
            Enhancing CDN
          </li>
          <li>
            <i className="feather icon-check-circle mr-3"></i> WordPress
            Autoupdates
          </li>
          <li>
            <i className="feather icon-check-circle mr-3"></i> Free SSL
          </li>

          <li>
            <i className="feather icon-check-circle mr-3"></i>{" "}
            {props.wpWeeklyBckp}
          </li>
          <li>
            <i className="feather icon-check-circle mr-3"></i>Ecommerce Enabled
          </li>
          <li>
            <i className="feather icon-check-circle mr-3"></i>Managed WordPress
          </li>
          <li>
            <i className="feather icon-check-circle mr-3"></i>Out-of-the-box Caching
          </li>
          <li>
            <i className="feather icon-check-circle mr-3"></i>100% renewable energy match
          </li>
        </ul>
       
        <button className="btn btn-primary coodiv-hover-y w-100 mt-9 coodiv-text-9">
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default PriceCardBox;
