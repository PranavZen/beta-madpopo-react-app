// Product Array Component
import React from "react";

const products = [
    {
      name: "Popo L",
      INR: {
        yearly: 10,
        twoYearly: 20,
        threeYearly: 30,
      },
      USD: {
        yearly: 4,
        twoYearly: 6,
        threeYearly: 9,
      },
      EUR: {
        yearly: 3,
        twoYearly: 5,
        threeYearly: 8,
      },
    },
    {
      name: "Popo XL",
      INR: {
        yearly: 20,
        twoYearly: 30,
        threeYearly: 40,
      },
      USD: {
        yearly: 5,
        twoYearly: 8,
        threeYearly: 10,
      },
      EUR: {
        yearly: 4,
        twoYearly: 7,
        threeYearly: 11,
      },
    },
  ];

const ProductArray = () => {
  const selectedCurrency = localStorage.getItem("selectedCurrency") || "USD";

  return (
    <ul>
      {products.map((product) => ( 
        <li key={product.name}>
          <h3>{product.name}</h3>
          <p>
            Yearly: {product[selectedCurrency].yearly}{" "}
            {selectedCurrency === "USD"
              ? "$"
              : selectedCurrency === "INR"
              ? "₹"
              : "€"}
          </p>
          <p>
            Two-Yearly: {product[selectedCurrency].twoYearly}{" "}
            {selectedCurrency === "USD"
              ? "$"
              : selectedCurrency === "INR"
              ? "₹"
              : "€"}
          </p>
          <p>
            Three-Yearly: {product[selectedCurrency].threeYearly}{" "}
            {selectedCurrency === "USD"
              ? "$"
              : selectedCurrency === "INR"
              ? "₹"
              : "€"}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default ProductArray;
