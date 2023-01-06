import React from "react";
// import Pricecard from "../PriceCard/Pricecard";
import MainTabSection from "../Tabs/MainTabSection";

import TypedComponent from "../TypedComponent";

function Banner() {  
  return (
    <div className="bgPositions"> 
    <div className="topElm_left">
        
      </div>
      <div className="leftElm_mid">
        
      </div>
      <div className="rightElm_mid">
      
      </div>
      <TypedComponent />
      {
      //   <div className="header-hero-pricing-plans position-relative">
      //   <Pricecard />
      // </div>
    }
    <MainTabSection />
     
    </div>
  );
}

export default Banner;
