import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { EURFlag, INRFlag, USDFlag } from "..";
const data = [
  {
    id: 0,
    label: "INR",
    img: `http://localhost:3000/beta-madpopo-react-app/static/media/inr.c334b0be3f3a7d615690.png`,
  },
  {
    id: 1,
    label: "USD",
    img: `http://localhost:3000/beta-madpopo-react-app/static/media/usa.82f4afd39107d026aa2c.png`,
  },
  {
    id: 2,
    label: "EUR",
    img: `http://localhost:3000/beta-madpopo-react-app/static/media/euro.e0569dcb9795e0bfdfcf.png`,
  },
];
// console.log(data[0].img + data[0].label);
export default function CountrySelect() {
  const [isOpen, setOpen] = useState(false);
  const [items, setItem] = useState(data);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => setOpen(!isOpen);

  const handleItemClick = (id) => {
    selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
  };
  let location = useLocation();
  // console.log(location);
  const slectOpt = [
    {
      value: "INR",
      currencyTag: "₹",
      flag: '🇮🇳'
      
    },
    {
      value: "USD",
      currencyTag: "$",
      flag: '🇺🇸'
    },
    {
      value: "EUR",
      currencyTag: "€",
      flag: '🇪🇺'
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
    setSelectedCountry(e.target.value);
    localStorage.setItem("selectedCountry", e.target.value);
    window.location.reload();
  };
  const handleFrequencyChange = (e) => {
    // console.log(e.target.value);
    setSelectedFrequency(e.target.value);
  };

  return (
    <>
      <select onChange={handleCountryChange} value={selectedCountry}>
        {slectOpt.map((opt, index) => (
          <option value={opt.currencyTag} key={opt.currencyTag}>
         { opt.flag }{opt.value}
          </option>
        ))}
      </select>
      
      <div className="dropdown">
        <div className="dropdown-header" onClick={toggleDropdown}>
          {
            selectedItem
            ?  <img src={data[0].img} alt=""/>  + " " + items.find((item) => item.id == selectedItem).label
            :  <img src={items[0].img} alt="Flag"/> +" "+ items[0].label
          
          }
          
          <i className={`fa fa-chevron-right icon ${isOpen && "open"}`}></i>
        </div>
        <div className={`dropdown-body ${isOpen && "open"}`}>
          {items.map((item) => (
            <div
              className="dropdown-item"
              onClick={(e) => handleItemClick(e.target.id)}
              id={item.id}
              key={item.id}
            >
              <img src={item.img} alt="" width={20} height={15} />
              <span
                className={`dropdown-item-dot ${item.id == selectedItem &&
                  "selected"}`}
              ></span>
              {item.label}
            </div>
          ))}
        </div>
        :smile
      </div>
    </>
  );
}
