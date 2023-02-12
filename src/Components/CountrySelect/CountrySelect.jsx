import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
export default function CountrySelect() {
  let location = useLocation();
  // console.log(location);
  const slectOpt = [
    {
      value: "INR",
      currencyTag: "₹",
    },
    {
      value: "USD",
      currencyTag: "$",
    },
    {
      value: "EUR",
      currencyTag: "@",
    },
  ];
  const [selectedFrequency, setSelectedFrequency] = useState("3");
  const [selectedCountry, setSelectedCountry] = useState(slectOpt[0].value);
  // const [selectedProductIndex, setSelectedProductIndex] = useState(0);

  // console.log(products);
  useEffect(() => {
    const storedCountry = localStorage.getItem("selectedCountry");
    if (storedCountry) {
      setSelectedCountry(storedCountry);
    }
  }, [location]);

  const handleCountryChange = (e) => {
    console.log(selectedFrequency)
    setSelectedCountry(e.target.value);
    localStorage.setItem("selectedCountry", e.target.value);
    //  window.location.reload();
    
  };
  const handleFrequencyChange = (e) => {
    
    setSelectedFrequency(e.target.value);
  };

  return (
    <select onChange={handleCountryChange} value={selectedCountry}>
      {slectOpt.map((opt, index) => (
        <option value={opt.currencyTag} key={opt.currencyTag}>
          {opt.currencyTag} {opt.value}
        </option>
      ))}
    </select>
  );
}
