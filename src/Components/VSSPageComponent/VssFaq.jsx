import React from "react";
import VssFaqData from "./VssFaqData";

function VssFaq() {
  return (
    <div className="container" data-aos="fade-left" data-aos-duration="1200">
      <div className="wp_faqSectionTitle">
        <h5>Frequently Asked Questions VSS</h5>
      </div>
      <div className="wp_faqRow">
        {VssFaqData.map((faqItems) => {
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

export default VssFaq;
