import React from 'react'
import { Link } from 'react-router-dom'

function WindowsPricingCardBox(props) {

  return (
    <div className="col-lg-4 mb-15 mb-lg-0 priceCardWrap">
    <div className="ddos-attack-package not-feaures-package shadow-2 priceCardDdos">
      <div className="toggleWrap d-flex">
        <h2 className="priceCardTitle mb-2"><Link to={props.winHostAnchor}>{props.winHostTitle}</Link></h2>
      </div>
      <span className="fromText">{props.winHostSubTitle}</span>
       

      <div className="ddos-attack-price d-flex justify-content-between align-items-center mt-7 py-4">
       
        <h2 className="priceCardPriceAmt">
          {props.winHostDiscPrice}
          <span className="monthSpan">/ mo</span>
        </h2>

        <span>{props.winHostOffer}</span>
      </div>
      <div className="orginalPriceWrap">
        <p className="desPriceText">
          <span>Discounted from</span> <del>{props.winHostOgPrice} / mo</del>
        </p>
      </div>
      <ul className="ddos-first-features border-top">
        <li>
          <span className="capTitle">Web Space</span>
          <span className="capAmt">{props.winHostCapacity}</span>
        </li>
        <li>
          <span className="capTitle">Unmetered Traffic </span>
          <span className="capAmt">{props.winHostSSHAccess}</span>
        </li>
        <li>
          <span className="capTitle">Account Domain</span>
          <span className="capAmt">{props.winHostDDOS}</span>
        </li>
      </ul>
      <ul className="ddos-second-features border-top">
        <li>
          <i className="feather icon-check-circle mr-3"></i> Free Domain 1st
          Year*
        </li>
        <li>
          <i className="feather icon-check-circle mr-3"></i> {props.winHOPt1} Email Accounts
        </li>
        <li>
          <i className="feather icon-check-circle mr-3"></i> {props.winHOPt2} Sub Domains
        </li>
        <li>
          <i className="feather icon-check-circle mr-3"></i> FTP Account

        </li>
        <li>
          <i className="feather icon-check-circle mr-3"></i> {props.winHOPt3} MSSQL Database (200MB)
        </li>
        <li>
          <i className="feather icon-check-circle mr-3"></i> PHP Support 7.4,8.0,8.1,8.2
        </li>
        <li>
        <i className="feather icon-check-circle mr-3"></i> Free SSL
       </li>
        <li>
          <i className="feather icon-check-circle mr-3"></i>
          {props.winHOPt6}
        </li>
        <li>
          <i className="feather icon-check-circle mr-3"></i>Managed WordPress Toolkit
        </li>
        <li>
          <i className="feather icon-check-circle mr-3"></i>Out-of-the-box Caching
        </li>
        <li>
          <i className="feather icon-check-circle mr-3"></i>Hosting Plesk Panel
        </li>
        <li>
          <i className="feather icon-check-circle mr-3"></i>99,90% Uptime Guarantee
        </li>
        
      </ul>
     
      <button className="btn btn-primary coodiv-hover-y w-100 mt-9 coodiv-text-9">
        Buy Now
      </button>
    </div>
  </div>
  )
}

export default WindowsPricingCardBox