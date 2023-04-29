import React from "react";
import VpsFaqData from "./VpsFaqData";

function VpsFaq() {
  return (
    <div className="container" data-aos="fade-left" data-aos-duration="1200">
      <div className="wp_faqSectionTitle">
        <h5>Frequently Asked Questions VPS</h5>
      </div>
      <div className="wp_faqRow">
        {VpsFaqData.map((faqItems) => {
          return (
            <div className="wp_faq_Box" key={faqItems.id}>
              <h6>{faqItems.faqQue}</h6>
              <p>{faqItems.faqAns}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default VpsFaq;
