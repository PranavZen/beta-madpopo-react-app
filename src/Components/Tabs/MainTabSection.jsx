import React, { useState } from "react";
import Slider from "react-slick";
import FifthTabContent from "./TabContentBox/FifthTabContent";
import FirstTabContent from "./TabContentBox/FirstTabContent";
import FourthTabContent from "./TabContentBox/FourthTabContent";
import SecondTabContent from "./TabContentBox/SecondTabContent";
import SixthTabContent from "./TabContentBox/SixthTabContent";
import ThirdTabContent from "./TabContentBox/ThirdTabContent";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MainTabSection() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  var settings = {
    dots: false,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 1500,
    arrows: false,
    responsive: [
        { breakpoint: 557, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        { breakpoint: 768, settings: { slidesToShow: 2 } },
        { breakpoint: 991, settings: { slidesToShow: 3 } },
      ],
    
  };
  var settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 1500,
    arrows: false,
    fade: true,
    adaptiveHeight: true,
    
  };
  return (
    <section id="myTabslide">
      <div className="container mt-lg-n30 mt-n15">
        <Slider {...settings2} className="main-homepage-plans-slider" asNavFor={nav2}
        ref={(slider1) => setNav1(slider1)} slidesToShow={1}>
          <FirstTabContent />
          <SecondTabContent />
          <ThirdTabContent />
          <FourthTabContent />
          <FifthTabContent />
          <SixthTabContent />
        </Slider>
        <div className="services-box-container">
          <Slider {...settings} className="services-box-tabs-box border-opacity border-top-0" asNavFor={nav1} 
          ref={(slider2) => setNav2(slider2)}
          slidesToShow={5}
      swipeToSlide={true}
      focusOnSelect={true}>
          <div className="services-box-tab">
          <i className="feather icon-server">
              
          </i>
          <h5 className="coodiv-text-10 mb-0 mt-3">Web hosting</h5>
          <p className="coodiv-text-12 mb-0">Lorem Ipsum is simply
              dummy</p>
      </div>


      <div className="services-box-tab">
          <i className="feather icon-shield">
              
          </i>
          <h5 className="coodiv-text-10 mb-0 mt-3">SSL certificate</h5>
          <p className="coodiv-text-12 mb-0">Lorem Ipsum is simply
              dummy</p>
      </div>


      <div className="services-box-tab">
          <i className="feather icon-play">
              
          </i>
          <h5 className="coodiv-text-10 mb-0 mt-3">Games servers</h5>
          <p className="coodiv-text-12 mb-0">Lorem Ipsum is simply
              dummy</p>
      </div>


      <div className="services-box-tab">
          <i className="feather icon-headphones">
             
          </i>
          <h5 className="coodiv-text-10 mb-0 mt-3">voice servers</h5>
          <p className="coodiv-text-12 mb-0">Lorem Ipsum is simply
              dummy</p>
      </div>


      <div className="services-box-tab">
          <i className="feather icon-cpu">
              
          </i>
          <h5 className="coodiv-text-10 mb-0 mt-3">Cpanel reseller</h5>
          <p className="coodiv-text-12 mb-0">Lorem Ipsum is simply
              dummy</p>
      </div>
      <div className="services-box-tab">
          <i className="feather icon-cpu">
              
          </i>
          <h5 className="coodiv-text-10 mb-0 mt-3">Another plan</h5>
          <p className="coodiv-text-12 mb-0">Lorem Ipsum is simply
              dummy</p>
      </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default MainTabSection;
