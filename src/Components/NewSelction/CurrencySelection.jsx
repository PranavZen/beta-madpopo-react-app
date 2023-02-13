import React, { useState} from "react";

const CurrencySelection = () => {
    const [selectedCurrency, setSelectedCurrency] = useState('INR');
  const [currencyList] = useState([
    {
      code: 'INR',
      symbol: '₹',
      flag: '🇮🇳'
    },
    {
      code: 'USD',
      symbol: '$',
      flag: '🇺🇸'
    },
    {
      code: 'EUR',
      symbol: '€',
      flag: '🇪🇺'
    }
  ]);

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
    localStorage.setItem('selectedCurrency', event.target.value);
  };

  const selectedCurrencyFromStorage = localStorage.getItem('selectedCurrency');
  if (selectedCurrencyFromStorage) {
    setSelectedCurrency(selectedCurrencyFromStorage);
  }
  return (
    <div>
      <label>
        Select Currency:
        <select value={selectedCurrency} onChange={handleCurrencyChange}>
          {currencyList.map((currency) => (
            <option key={currency.code} value={currency.code}>
              {currency.flag} {currency.code}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default CurrencySelection;