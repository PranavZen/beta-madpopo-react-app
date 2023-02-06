import React from "react";
import { Link } from "react-router-dom";
import gbFaqData from "../../Components/GlobalInfra/GBFaqData";
const GBFaqList = () => {
  return (
    <ul id="dinamic-filter-list">
      {gbFaqData.map((gbItem) => {
        return (
          <li key={gbItem.id}>
            <Link className="animated-link" to={gbItem.faqId}>
              {gbItem.faq} <i className="fa fa-chevron-right"></i>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default GBFaqList;
