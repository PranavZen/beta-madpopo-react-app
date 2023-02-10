import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
export default function CountrySelect() {
  let location = useLocation();
  // console.log(location);
  const [selectedFrequency, setSelectedFrequency] = useState("priceYearlyIn");
  const [selectedCountry, setSelectedCountry] = useState("INR");
  const [selectedProductIndex, setSelectedProductIndex] = useState(0);

  // console.log(products);
  useEffect(() => { 
    const storedCountry = localStorage.getItem("selectedCountry");
    if (storedCountry) {
      setSelectedCountry(storedCountry);
    }
  }, [location]);

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    localStorage.setItem("selectedCountry", e.target.value);
    window.location.reload();
    // alert(e.target.value);
  };
  const handleFrequencyChange = (e) => {
    setSelectedFrequency(e.target.value);
  };

  return (
    <select onChange={handleCountryChange} value={selectedCountry}>
      <option value="INR">
        INR
      </option>
      <option value="USD">
       USD
      </option>
      <option value="EUR">
         EUR
      </option>
    </select>
  );
}
