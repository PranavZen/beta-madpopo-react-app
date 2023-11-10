import React from "react";
import DDSData2 from "./HostingPlanData/DDSData2";
import DDSCard2 from "../../PriceCard/DDSCard2";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Mousewheel, Navigation } from "swiper";
import "swiper/swiper.min.css";
SwiperCore.use([Mousewheel, Navigation]);
function DedicatedServerCard2() {
  const sliderOption = {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: false,
    spaceBetween: 0,
    slidesPerView: 3,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
  };
  return (
    <div className="main-homepage-item vpsSevtionWrap">
      <div className="container">
        <div className="vpsRow">
          <div className="swiper-container">
            <Swiper
              {...sliderOption}
              mousewheel={true}
              className="swiper-wrapper"
            >
              {DDSData2.map(
                ({
                  id,
                  cardVpsTitle,
                  cardVpsSubTitle,
                  cardAnchorLink,
                  cardVpsImg,
                  cardVpsAltName,
                  cardVpsOgPrice,
                  cardVpsWebSpace,
                  cardVpsCapacity,
                  cardVpsCapacity2,
                  cardVpsCapacity3,
                  cardVpsSnap,
                  cardVpsOPt1,
                  cardVpsOPt2,
                  cardVpsOPt3,
                  cardVpsOPt4,
                  cardVpsOPt5,
                  cardVpsOPt6,
                  priceYearlyInINR,
                  priceTwoYearlyInINR,
                  priceThreeYearlyInINR,
                  priceYearlyInUSD,
                  priceTwoYearlyInUSD,
                  priceThreeYearlyInUSD,
                  priceYearlyInEUR,
                  priceTwoYearlyInEUR,
                  priceThreeYearlyInEUR,
                }) => (
                  <SwiperSlide className="swiper-slide" key={id}>
                    <DDSCard2
                      id={id}
                      cardVpsTitle={cardVpsTitle}
                      cardVpsSubTitle={cardVpsSubTitle}
                      cardAnchorLink={cardAnchorLink}
                      cardVpsImg={cardVpsImg}
                      cardVpsAltName={cardVpsAltName}
                      cardVpsOgPrice={cardVpsOgPrice}
                      cardVpsWebSpace={cardVpsWebSpace}
                      cardVpsCapacity={cardVpsCapacity}
                      cardVpsCapacity2={cardVpsCapacity2}
                      cardVpsCapacity3={cardVpsCapacity3}
                      cardVpsSnap={cardVpsSnap}
                      cardVpsOPt1={cardVpsOPt1}
                      cardVpsOPt2={cardVpsOPt2}
                      cardVpsOPt3={cardVpsOPt3}
                      cardVpsOPt4={cardVpsOPt4}
                      cardVpsOPt5={cardVpsOPt5}
                      cardVpsOPt6={cardVpsOPt6}
                      priceYearlyInINR={priceYearlyInINR}
                      priceTwoYearlyInINR={priceTwoYearlyInINR}
                      priceThreeYearlyInINR={priceThreeYearlyInINR}
                      priceYearlyInUSD={priceYearlyInUSD}
                      priceTwoYearlyInUSD={priceTwoYearlyInUSD}
                      priceThreeYearlyInUSD={priceThreeYearlyInUSD}
                      priceYearlyInEUR={priceYearlyInEUR}
                      priceTwoYearlyInEUR={priceTwoYearlyInEUR}
                      priceThreeYearlyInEUR={priceThreeYearlyInEUR}
                    />
                  </SwiperSlide>
                )
              )}
            </Swiper>
            <div className="sliderBtunsWrap">
              <div className="swiper-button-prev navBtn">
                <span className="arrow-icon">
                  <i className="fa fa-arrow-circle-left"></i>
                </span>
              </div>
              <div className="swiper-button-next navBtn">
                <span className="arrow-icon">
                  <i className="fa fa-arrow-circle-right"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DedicatedServerCard2;
