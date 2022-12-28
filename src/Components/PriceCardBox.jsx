import React from "react";

const PriceCardBox = ({
  cardTitle,
  cardPrice,
  cardOffer,
  cardCapacity,
  cardSSHAccess,
  cardDDOS,
}) => ( 
  <div className="col-lg-4 mb-15 mb-lg-0">
    <div className="ddos-attack-package not-feaures-package shadow-2">
      <h2 className="coodiv-text-9 mb-0">{cardTitle}</h2>
      <span>from</span>
      <div className="ddos-attack-price d-flex justify-content-between align-items-center mt-7 py-4">
        <h2 className="coodiv-text-4">{cardPrice}</h2>
        <span>{cardOffer}</span>
      </div>
      <ul className="ddos-first-features border-top">
        <li>
          <span>Capacity</span>
          <span>{cardCapacity}</span>
        </li>
        <li>
          <span>SSH accese</span>
          <span>{cardSSHAccess}</span>
        </li>
        <li>
          <span>Anti DDOS protection</span>
          <span>{cardDDOS}</span>
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
            Get started for free
      </button>
    </div>
  </div>
);
export default PriceCardBox;
