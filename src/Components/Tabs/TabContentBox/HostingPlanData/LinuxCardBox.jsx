import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function LinuxCardBox(props) {
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

//   const handleCountryChange = (e) => {
//     setSelectedCountry(e.target.value);
//     localStorage.setItem("selectedCountry", e.target.value);
//   };

  const handleFrequencyChange = (e) => {
    setSelectedFrequency(e.target.value);
  };

  return (
    <div
      className="col-lg-4 col-md-4 col-sm-8 mb-9 px-8
            px-md-4 px-lg-4 linuxOuterPrice"
      key={props.id}
    >
      <div
        className="ddos-attack-package pricing-plan-tree
                coodiv-hover-shadow-1 bg-white border
                rounded-10 text-center pt-6 pr-6 pl-6 pb-20
                position-relative"
      >
        <span className="linuxCardTitle d-block position-relative">
          <Link to={props.Linkss}>{props.cardlinuxTitle}</Link>
        </span>
        <span className="fromText d-block mb-8 mt-1">
          {props.cardlinuxSubTitle}
        </span>
        <div className="selectDaysWrap">
          <form>
            <select
              onChange={handleFrequencyChange}
              value={selectedFrequency}
              className="selectDay"
            >
              <option value="priceThreeYearlyIn">3 Years</option>
              <option value="priceTwoYearlyIn">2 Years</option>
              <option value="priceYearlyIn">1 Year</option>
            </select>
          </form>
        </div>
        <h2
          className="price-of-plan coodiv-text-3
                    font-weight-bold text-blackish-blue
                    line-spacing-none mb-2 mt-5"
        >
          {selectedCountry}
          {props[`${selectedFrequency}${selectedCountry}`]}
          <span
            className="coodiv-text-11
                    coodiv-color-blackish-blue-opacity-7 pl-5"
          >
            / month
          </span>
        </h2>
        <ul className="ddos-first-features border-top">
          <li>
            <span className="capTitle">Web Space</span>
            <span className="capAmt">{props.cardlinuxCapacity}</span>
          </li>
          <li>
            <span className="capTitle">Unmetered Traffic</span>
            <span className="capAmt">Unlimited</span>
          </li>
          <li>
            <span className="capTitle">Anti DDOS protection</span>
            <span className="capAmt">Unlimited</span>
          </li>
        </ul>
        <ul className="ddos-second-features border-top">
          <li>
            <i className="feather icon-check-circle mr-3"></i> {props.cardlinuxOPt1}
          </li>
          <li>
            <i className="feather icon-check-circle mr-3"></i>
            {props.cardlinuxOPT2} Account Domain
          </li>
          <li>
            <i className="feather icon-check-circle mr-3"></i>
            {props.cardlinuxOPT3} Email Accounts
          </li>
          <li>
            <i className="feather icon-check-circle mr-3"></i>
            {props.cardlinuxOPT4} Sub Domains
          </li>
          <li>
            <i className="feather icon-check-circle mr-3"></i>
            {props.cardlinuxOPT5} MySQL Database
          </li>
          <li>
            <i className="feather icon-check-circle mr-3"></i> Free SSL
          </li>
          <li>
            <i className="feather icon-check-circle mr-3"></i> {props.cardlinuxOPT6}
          </li>
          <li>
            <i className="feather icon-check-circle mr-3"></i> Managed WordPress
            Toolkit
          </li>
          <li>
            <i className="feather icon-check-circle mr-3"></i> Out-of-the-box
            Caching
          </li>
          <li>
            <i className="feather icon-check-circle mr-3"></i> Hosting CPanel
          </li>

          <li>
            <i className="feather icon-check-circle mr-3"></i> Free 1-click
            WordPress install
          </li>
          <li>
            <i className="feather icon-check-circle mr-3"></i> 24/7 Support
          </li>
          <li>
            <i className="feather icon-check-circle mr-3"></i> 99,90% Uptime
            Guarantee
          </li>
        </ul>
        <Link href="#" className="btn-order color1">
          <span>Order Now</span>
        </Link>
      </div>
    </div>
  );
}

export default LinuxCardBox;
