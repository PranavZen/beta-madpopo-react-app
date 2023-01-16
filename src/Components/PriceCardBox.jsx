import React, { useState } from "react";
import pricingSEctionData from "./PriceCard/PricingCardData";

function PriceCardBox(props) {
  const pricingValues = pricingSEctionData.pricingValues;
  // console.log(pricingValues);
  const options = [
    { label: "1 year", value: 1 },

    { label: "2 years", value: 2 },

    { label: "3 years", value: 3 },
  ];
  const [value, setValue] = useState("");
  const handleChange = (event, param1) => {
    setValue(pricingValues[event.target.value][0]["cardPrice" + param1]);

    console.log("Years " + event.target.value);
    console.log(pricingValues[event.target.value][0]["cardPrice" + param1]);
    // console.log(options[0].label);
   
    console.log("card no : " + param1);
  };
  return (
    <div className="col-lg-4 mb-15 mb-lg-0 priceCardWrap">
      <div className="ddos-attack-package not-feaures-package shadow-2 priceCardDdos">
        <div className="toggleWrap d-flex">
          <h2 className="priceCardTitle mb-0">
            {props.cardTitle}
          </h2>
        </div>
        <span className="fromText">from</span>
        <div className="selectDaysWrap">
          <form>
            <select
              className="selectDay"
              value={options.value}
              options={options}
              onChange={(event) => handleChange(event, props.id)}
              
            >
              {options.map((option, id) => (
                <option value={option.value} key={id} >
                  {option.label}
                </option>
              ))}
            </select>
            
          </form>
        </div>
        <div className="ddos-attack-price d-flex justify-content-between align-items-center mt-7 py-4">
          <h2 className="priceCardPriceAmt">{value ? value : pricingValues[props.id][0]["cardPrice1"]}  </h2>
          <span>{props.cardOffer}</span>
        </div>
        <ul className="ddos-first-features border-top">
          <li>
            <span className="capTitle">Capacity</span>
            <span className="capAmt">{props.cardCapacity}</span>
          </li>
          <li>
            <span className="capTitle">SSH accese</span>
            <span className="capAmt">{props.cardSSHAccess}</span>
          </li>
          <li>
            <span className="capTitle">Anti DDOS protection</span>
            <span className="capAmt">{props.cardDDOS}</span>
          </li>
        </ul>
        <ul className="ddos-second-features border-top">
          <li>
            <i className="feather icon-check-circle mr-3"></i> Unlimited
            Bandwidth
          </li>
          <li>
            <i className="feather icon-check-circle mr-3"></i> Full backup
            Systems
          </li>
          <li>
            <i className="feather icon-check-circle mr-3"></i> Free Domain
          </li>
          <li>
            <i className="feather icon-check-circle mr-3"></i> Unlimited
            Database
          </li>
          <li>
            <i className="feather icon-check-circle mr-3"></i> Fast SSD Storage
          </li>
        </ul>
        <ul className="ddos-third-features border-top">
          <li>
            <span>
              <strong>Dedicated project</strong>big companis,we chose to works
              with it
            </span>
          </li>
          <li>
            <span>
              <strong>Easy feedback sharing</strong>Choose your edition, Try it
              free for 14 days
            </span>
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
