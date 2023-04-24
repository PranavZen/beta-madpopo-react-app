import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RightData from "./SyncRightData";

function SyncRightBox(props) {
  var defaultPrice = RightData.priceThreeYearlyInINR;
  var defaultSavePrice =
    RightData.priceThreeYearlySaveInINR;
  var bydefaultCurrency = "₹";
  var show_price = "";
  var save_price = "";
  var show_currency = "";
  var save_show_currency = "";
  var show_price_1 = "";
  var save_price_1 = "";
  // var show_price_2 =""
  // console.log(pricingValues);

  // console.log(pricingValues[1][0]["cardPrice" + props.id]);
  const [selectedFrequency, setSelectedFrequency] = useState(
    "priceThreeYearlyIn"
  );

  const [selectedCountry, setSelectedCountry] = useState(bydefaultCurrency);

  const [selectedProductIndex, setSelectedProductIndex] = useState(0);

  const [slectPrice, setSelectPrice] = useState(show_price);

  const [slectSavePrice, setslectSavePrice] = useState(save_price);

  useEffect(() => {
    const storedCountry = localStorage.getItem("selectedCountry");
    if (storedCountry) {
      setSelectedCountry(storedCountry);
    }
  }, [selectedCountry]);

  if (selectedCountry == "$") {
    show_currency = "priceThreeYearlyInUSD";
    show_price = RightData[show_currency];
  } else if (selectedCountry == "€") {
    show_currency = "priceThreeYearlyInEUR";
    show_price = RightData[show_currency];
  } else if (selectedCountry == "₹") {
    show_currency = "priceThreeYearlyInINR";
    show_price = RightData[show_currency];
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
    show_price_1 = RightData[show_currency];
    save_price_1 = RightData[save_show_currency];
    setSelectPrice(show_price_1);
    setslectSavePrice(save_price_1);
    // console.log(show_price_1);

    // console.log(selectedCountry);
    //console.log(products.wordpressData[props.id - 1]);
  };

  return (
    <div
      className="pricing-box-one plan-with-montains slidePriceCardPosition"
      style={{ background: props.bgColor }}
    >
      <div className="price-content ">
        <span className="small-title-header-span">
          {props.planTitle}
          <span className="plan-badge">{props.planOffer}</span>
        </span>
        <div
          className="d-flex align-items-end
                                            mt-11 currencyData"
        >
          <span
            className="currency mr-2
                                                coodiv-text-6 changeCurrencyColor
                                                line-spacing-none
                                                text-blackish-blue"
          >
          {selectedCountry ? selectedCountry : bydefaultCurrency}{props.planCurrency}
          </span>
          <h2
            className="price-value coodiv-text-2
                                                mainCurrencyPrice
                                                line-spacing-none mb-0
                                                dynamic-value
                                                text-blackish-blue"
          >
            {props.planPiceF} <span className="coodiv-text-8
            subCurrencyPrice">{props.planPicePaisa} </span>
            {
            //     <span
            //   className="coodiv-text-8
            //                                         subCurrencyPrice"
            // >
            //   {props.planPicePaisa}
            // </span>
        }
          </h2>
        </div>
        <span
          className="price-bottom-text
                                            dynamic-value coodiv-text-11 mt-2
                                            text-blackish-blue
                                            d-inline-flex priceYear"
        >
          Billed {props.billedCat}
        </span>
        <ul
          className="card-list list-style-check
                                            pl-0 mt-5 mt-lg-11"
        >
         { 
        //     <li className="coodiv-text-10 mb-2">
        //     {props.planIcon} {props.planList1}
        //   </li>
        }
          <li className="coodiv-text-10 mb-2">
            {props.planIcon} {props.planList2}
          </li>
          <li className="coodiv-text-10 mb-2">
            {props.planIcon} {props.planList3}
          </li>
          <li className="coodiv-text-10 mb-2">
            {props.planIcon} {props.planList4}
          </li>
          <li className="coodiv-text-10">
            {props.planIcon} {props.planList5}
          </li>
        </ul>
      </div>
      <Link
        to="#"
        className="btn btn-special-home-plan
                                        with-icon coodiv-hover-y px-xl-8 px-lg-4
                                        px-sm-8 px-4 rounded-20 coodiv-text-12
                                        text-uppercase"
      >
        Try The Plan Now
      </Link>
    </div>
  );
}

export default SyncRightBox;
