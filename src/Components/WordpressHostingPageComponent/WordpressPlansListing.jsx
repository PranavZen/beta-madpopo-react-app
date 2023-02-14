import React from "react";
import palnsListing from "../WordpressHostingPageComponent/PlansListing";

function WordpressPlansListing(props) {
  return (
    <div className="wp_plans_listSection" data-aos="fade-left" data-aos-duration='1200'>
      <div className="container">
        <div className="wp_plansSectionTitle">
          <h2>All WordPress Hosting Plans include</h2>
        </div>
        <div className="wp_plansRow">
          {palnsListing.map((list) => {
            return (
              <div className="col-md-4" key={list.id}>
                <div className="palnsWrapbox">
                  <div className="icon_box">
                    <span>{list.palnsIcon}</span>
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

export default WordpressPlansListing;
