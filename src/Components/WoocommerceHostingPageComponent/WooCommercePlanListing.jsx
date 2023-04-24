import React from "react";
import WoocomPlanData from "../WoocommerceHostingPageComponent/WoocomPlanData";
import { palnsIcon } from "..";

function WooCommercePlanListing(props) {
  return (
    <div className="wp_plans_listSection" data-aos="fade-left" data-aos-duration='1200'>
      <div className="container">
        <div className="wp_plansSectionTitle">
          <h2>All WooCommerce Hosting Plans Include</h2>
        </div>
        <div className="wp_plansRow">
          {WoocomPlanData.map((list) => {
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

export default WooCommercePlanListing;
