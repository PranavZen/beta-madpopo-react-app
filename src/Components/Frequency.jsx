import React, { useState } from "react";
import products from "../Components/SelectPricingData";
function Frequency() {
  const [selectedFrequency, setSelectedFrequency] = useState("priceYearlyIn");
  const [selectedProductIndex, setSelectedProductIndex] = useState(0);
  const [selectedCountry, setSelectedCountry] = useState("INR");
  const handleFrequencyChange = (e) => {
    setSelectedFrequency(e.target.value);
  };

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    localStorage.setItem("selectedCountry", e.target.value);
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr key={products[selectedProductIndex].name}>
            <td>{products[selectedProductIndex].name}</td>
            <td>
              {
                products[selectedProductIndex][
                  `${selectedFrequency}${selectedCountry}`
                ]
              }{" "}
              {selectedCountry}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Frequency;
