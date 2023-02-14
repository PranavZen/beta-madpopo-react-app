import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import pricingSEctionData from "./PriceCard/PricingCardData";
import pricingSEctionData2 from "./PriceCard/PriceCardDataTwo";
import products from "../Components/SelectPricingData";
// alert("ksksk");
// console.log(products);

// var show_price = "";
// var show_currency = "";
// var show_price_1 = "";
// var show_price_2 = "";
// if (products.wordpressData[0]["name"] == "POPO L") {
//   show_price = products.wordpressData[0]["priceThreeYearlyInINR"];
// } else if (products.wordpressData[1]["name"] == "POPO XL") {
//   show_price_1 = products.wordpressData[1]["priceThreeYearlyInINR"];
// } else if (products.wordpressData[2]["name"] == "POPO XXL") {
//   show_price_2 = products.wordpressData[2]["priceThreeYearlyInINR"];
// }
// console.log(show_price);

function PriceCardBox(props) {
  const locationN = useLocation();
  // console.log(locationN.pathname);
  let pricingValues = pricingSEctionData2.pricingValues;
  if (locationN.pathname === "/WordpressHosting") {
    // console.log("if - WP Hosting Page");
    pricingValues = pricingSEctionData2.pricingValues;
  } else {
    pricingValues = pricingSEctionData.pricingValues;
    // console.log("else - Home Page");
  }
  var defaultPrice =  products.wordpressData[props.id - 1].priceThreeYearlyInINR;
  var bydefaultCurrency = "₹";
  var show_price = "";
  var show_currency = "";
  var show_price_1 = "";
  // var show_price_2 =""
  // console.log(pricingValues);

  // console.log(pricingValues[1][0]["cardPrice" + props.id]);
  const [selectedFrequency, setSelectedFrequency] = useState(
    "priceThreeYearlyIn"
  );

  const [selectedCountry, setSelectedCountry] = useState(bydefaultCurrency);

  const [selectedProductIndex, setSelectedProductIndex] = useState(0);

  const [slectPrice, setSelectPrice] = useState(show_price);

  useEffect(() => {
    const storedCountry = localStorage.getItem("selectedCountry");
    if (storedCountry) {
      setSelectedCountry(storedCountry);
    }
  }, [selectedCountry]);

  if (selectedCountry == "$") {
    show_currency = "priceThreeYearlyInUSD";
    show_price = products.wordpressData[props.id - 1][show_currency];
  } else if (selectedCountry == "€") {
    show_currency = "priceThreeYearlyInEUR";
    show_price = products.wordpressData[props.id - 1][show_currency];
  } else if (selectedCountry == "₹") {
    show_currency = "priceThreeYearlyInINR";
    show_price = products.wordpressData[props.id - 1][show_currency];
  }

  // console.log(show_price);

  const handleCountryChange = (e) => {
    //alert(selectedCountry);

    setSelectedCountry(e.target.value);
    localStorage.setItem("selectedCountry", e.target.value);
  };

  const handleFrequencyChange = (e) => {
    var yr = e.target.value;
    setSelectedFrequency(e.target.value);

    if (yr == "priceThreeYearlyIn") {
      if (selectedCountry == "$") {
        show_currency = "priceThreeYearlyInUSD";
      } else if (selectedCountry == "€") {
        show_currency = "priceThreeYearlyInEUR";
      } else if (selectedCountry == "₹") {
        show_currency = "priceThreeYearlyInINR";
      }
    } else if (yr == "priceTwoYearlyIn") {
      if (selectedCountry == "$") {
        show_currency = "priceTwoYearlyInUSD";
      } else if (selectedCountry == "€") {
        show_currency = "priceTwoYearlyInEUR";
      } else if (selectedCountry == "₹") {
        show_currency = "priceTwoYearlyInINR";
      }

      //show_price = products.wordpressData[props.id - 1][show_currency];
    } else if (yr == "priceYearlyIn") {
      if (selectedCountry == "$") {
        show_currency = "priceYearlyInUSD";
      } else if (selectedCountry == "€") {
        show_currency = "priceYearlyInEUR";
      } else if (selectedCountry == "₹") {
        show_currency = "priceYearlyInINR";
      }

      //show_price = products.wordpressData[props.id - 1][show_currency];
    }
    show_price_1 = products.wordpressData[props.id - 1][show_currency];
    setSelectPrice(show_price_1);
    // console.log(show_price_1);

    // console.log(selectedCountry);
    //console.log(products.wordpressData[props.id - 1]);
  };

  return (
    <div className="col-lg-4 mb-15 mb-lg-0 priceCardWrap">
      <div className="ddos-attack-package not-feaures-package shadow-2 priceCardDdos">
        <div className="toggleWrap d-flex">
          <h2 className="priceCardTitle mb-2">
            <a href={props.cardAnchorLink}>{props.cardTitle}</a>
          </h2>
        </div>
        <span className="fromText">{props.cardSubTitle}</span>
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

        <div className="ddos-attack-price d-flex justify-content-between align-items-center mt-7 py-4">
          {
            // <h2 className="priceCardPriceAmt">{value ? value : pricingValues[props.id][0]["cardPrice1"]}<span className="monthSpan">/Month</span></h2>
          }
          <h2 className="priceCardPriceAmt">
            <span className="mainAmtPrice">
              {selectedCountry ? selectedCountry : bydefaultCurrency}
              { slectPrice ? slectPrice : show_price || defaultPrice }
            </span>
            <span className="monthSpan">
              per month <br /> billed annually
            </span>
          </h2>
        </div>
        <div className="orginalPriceWrap">
          <p className="desPriceText">
            <span>Discounted from</span> {selectedCountry}{" "}
            <del>
              {((slectPrice ? slectPrice : show_price) * 3).toFixed(2)} / mo
            </del>
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
            <i className="feather icon-check-circle mr-3"></i>Out-of-the-box
            Caching
          </li>
          <li>
            <i className="feather icon-check-circle mr-3"></i>100% renewable
            energy match
          </li>
        </ul>

        <a
          href={props.buyBtnLink}
          className="btn btn-primary coodiv-hover-y w-100 mt-9 coodiv-text-9"
        >
          Buy Now
        </a>
      </div>
    </div>
  );
}

export default PriceCardBox;
