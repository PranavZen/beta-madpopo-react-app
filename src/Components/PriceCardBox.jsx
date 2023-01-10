import React from "react";  

const PriceCardBox = ({
  cardTitle,
  cardPrice,
  cardOffer,
  cardCapacity,
  cardSSHAccess,
  cardDDOS,
}) => ( 
  <div className="col-lg-4 mb-15 mb-lg-0 priceCardWrap">
    <div className="ddos-attack-package not-feaures-package shadow-2 priceCardDdos">
      <div className="toggleWrap d-flex">
      <h2 className="priceCardTitle mb-0">{cardTitle}</h2>
      
      </div>
      <span className="fromText">from</span>
      <div className="selectDaysWrap">
      <select className="selectDay">
      <option value="one">1 year</option>
      <option value="two">2 years</option>
      <option value="three">3 years</option>
    </select>
      </div>
      <div className="ddos-attack-price d-flex justify-content-between align-items-center mt-7 py-4">
        <h2 className="priceCardPriceAmt">{cardPrice}</h2>
        <span>{cardOffer}</span>
      </div>
      <ul className="ddos-first-features border-top">
        <li>
          <span className="capTitle">Capacity</span>
          <span className="capAmt">{cardCapacity}</span>
        </li>
        <li>
          <span className="capTitle">SSH accese</span>
          <span className="capAmt">{cardSSHAccess}</span> 
        </li>
        <li>
          <span className="capTitle">Anti DDOS protection</span>
          <span className="capAmt">{cardDDOS}</span>
        </li>
      </ul>
      <ul className="ddos-second-features border-top">
        <li>
          <i className="feather icon-check-circle mr-3"></i> Unlimited Bandwidth
        </li>
        <li>
          <i className="feather icon-check-circle mr-3"></i> Full backup Systems
        </li>
        <li>
          <i className="feather icon-check-circle mr-3"></i> Free Domain
        </li>
        <li>
          <i className="feather icon-check-circle mr-3"></i> Unlimited Database
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
export default PriceCardBox;
