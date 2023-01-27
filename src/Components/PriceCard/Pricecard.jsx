import React from "react";
import PriceCardBox from "../PriceCardBox";
import pricingSEctionData from "./PricingCardData";
function Pricecard(props) {
  const mainDataPricing = pricingSEctionData.mainDataPricing;
  return (
    <div className="container coodiv-z-index-1 position-relative firstSliderPadding">
      <div className="row align-items-center justify-content-center ddosPriceCardRow">
        {mainDataPricing.map(
          ({
            id,
            label,
            cardTitle,
            cardPrice1,
            cardOffer,
            cardCapacity,
            cardSSHAccess,
            cardDDOS,
            cardPrice2,
            cardPrice3,
          }) => (
            <PriceCardBox
              key={id}
              id={id}
              label={label}
              cardTitle={cardTitle}
              cardPrice1={cardPrice1}
              cardPrice2={cardPrice2}
              cardPrice3={cardPrice3}
              cardOffer={cardOffer}
              cardCapacity={cardCapacity}
              cardSSHAccess={cardSSHAccess}
              cardDDOS={cardDDOS}
            />
          )
        )}
      </div>
    </div>
  );
}

export default Pricecard;
