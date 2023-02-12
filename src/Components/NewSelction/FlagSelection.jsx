// Currency Selection Component
import React, { useState } from "react";
// import { EURFlag, INRFlag, USDFlag } from "../index";
// import { USD_FLAG, INR_FLAG, EUR_FLAG } from "./flag-icons";

const FlagSelection = () => {
  const [selectedCurrency, setSelectedCurrency] = useState(
    localStorage.getItem("selectedCurrency") || "USD"
  );

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
    localStorage.setItem("selectedCurrency", event.target.value);
  };

  return (
    <select value={selectedCurrency} onChange={handleCurrencyChange}>
      <option value="USD">USD </option>
      <option value="INR">INR </option>
      <option value="EUR">EUR </option>
    </select>
  );
};

export default FlagSelection;
