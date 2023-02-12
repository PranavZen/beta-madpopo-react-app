import React, { useState, useEffect } from "react";

const CurrencySelection = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("INR");

  useEffect(() => {
    const storedCurrency = localStorage.getItem("selectedCurrency");
    if (storedCurrency) {
      setSelectedCurrency(storedCurrency);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("selectedCurrency", selectedCurrency);
  }, [selectedCurrency]);

  return (
    <select
      value={selectedCurrency}
      onChange={(e) => setSelectedCurrency(e.target.value)}
    >
      <option value="USD">USD</option>
      <option value="INR">INR</option>
      <option value="EUR">EUR</option>
    </select>
  );
};

export default CurrencySelection;