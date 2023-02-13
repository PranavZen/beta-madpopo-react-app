// Product Array Component
import React , { useState } from "react";
const products = [
    {
      name: "Popo L",
      INR: { yearly: 10, twoYearly: 20, threeYearly: 30 },
      USD: { yearly: 4, twoYearly: 6, threeYearly: 9 },
      EUR: { yearly: 3, twoYearly: 5, threeYearly: 8 },
    },
    {
      name: "Popo XL",
      INR: { yearly: 20, twoYearly: 30, threeYearly: 40 },
      USD: { yearly: 5, twoYearly: 8, threeYearly: 10 },
      EUR: { yearly: 4, twoYearly: 7, threeYearly: 11 },
    },
  ];

const ProductArray = () => {
    const [selectedPeriod, setSelectedPeriod] = useState('yearly');
    const [selectedCurrency, setSelectedCurrency] = useState('INR');
  
    const handlePeriodChange = (event) => {
      setSelectedPeriod(event.target.value);
    };
  
    const selectedCurrencyFromStorage = localStorage.getItem('selectedCurrency');
    if (selectedCurrencyFromStorage) {
      setSelectedCurrency(selectedCurrencyFromStorage);
    }
    return (
        <div>
          <h3>{products.name}</h3>
          <label>
            Select Period:
            <select value={selectedPeriod} onChange={handlePeriodChange}>
              <option value="yearly">Yearly</option>
              <option value="2-yearly">2 Yearly</option>
            </select>
          </label>
          <p>
            {
                selectedCurrency === 'INR'
              ? `${products.symbol} ${products[`${selectedPeriod}PriceInINR`]}`
              : selectedCurrency === 'USD'
              ? `${products.symbol} ${products[`${selectedPeriod}PriceInUSD`]}`
              : `${products.symbol} ${products[`${selectedPeriod}Pricein EUR`]}`
    }
    </p>
    </div>
    );
};

export default ProductArray;
