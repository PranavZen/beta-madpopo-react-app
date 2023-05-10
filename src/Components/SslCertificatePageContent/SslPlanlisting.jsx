import React from "react";
import { palnsIcon } from "..";
import SslPlanListingData from "./SslPlanListingData";

function SslPlanlisting(props) {
  return (
    <div className="wp_plans_listSection pt-20" data-aos="fade-left" data-aos-duration='1200'>
      <div className="container">
        <div className="wp_plansSectionTitle">
          <h2>All SSL Certificate Plans Include</h2>
        </div>
        <div className="wp_plansRow">
          {SslPlanListingData.map((list) => {
            return (
              <div className="col-md-4" key={list.id}>
                <div className="palnsWrapbox">
                  <div className="icon_box">
                    <span><img src={palnsIcon} alt="common img" /></span>
                  </div>
                  <div className="plans_listName">
                    <h5>{list.plansTitle}</h5>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SslPlanlisting;
