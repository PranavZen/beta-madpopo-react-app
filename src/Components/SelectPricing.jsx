import React, { useState, useEffect } from "react";
import products from "../Components/SelectPricingData";
function SelectPricing() {
    
  const [selectedCountry, setSelectedCountry] = useState("INR");
  const [selectedFrequency, setSelectedFrequency] = useState("priceYearlyIn");

  useEffect(() => {
    const storedCountry = localStorage.getItem("selectedCountry");
    if (storedCountry) {
      setSelectedCountry(storedCountry);
    }
  }, []);

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    localStorage.setItem("selectedCountry", e.target.value);
  };

  const handleFrequencyChange = (e) => {
    setSelectedFrequency(e.target.value);
  };

  return (
    <div>
      <select onChange={handleCountryChange} value={selectedCountry}>
        <option value="INR">INR</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
      </select>
      <select onChange={handleFrequencyChange} value={selectedFrequency}>
        <option value="priceYearlyIn">Yearly</option>
        <option value="priceTwoYearlyIn">Two Yearly</option>
        <option value="priceThreeYearlyIn">Three Yearly</option>
      </select>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {products.wordpressData[0][`${selectedFrequency}${selectedCountry}`]}
              {selectedCountry}
            </td>
            <td>
              {products.wordpressData[1][`${selectedFrequency}${selectedCountry}`]}
              {selectedCountry}
            </td>
            <td>
              {products.wordpressData[2][`${selectedFrequency}${selectedCountry}`]}
              {selectedCountry}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SelectPricing;
