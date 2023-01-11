import React, { useState } from 'react';
import Slider from 'react-slick';
import SyncLeftBox from "./SyncLeftBox";
import SyncRightBox from "./SyncRightBox";
import RightData from "./SyncRightData";
import LeftData from "./SyncLeftData";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function SyncMain(props) {
  
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();
    
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay:false,
        autoplaySpeed:3500,
        arrows:true,
        afterChange: (index) => {
    switch (index) {
        case 0: 
            
            console.log(index)
            break;
        case 1:
          
          console.log(index)
            break;
            case 2:
          
          console.log(index)
            break;
            case 3:
          
          console.log(index)
            break;
        
        default:
    }
},
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    
    <div
      className="sevrices-plans pt-15 pb-20 bg-default-6
    fancy-animation-block-two position-relative "
    >
      <div className="container">
        <div className="row align-items-center position-relative">
          <div className="col-lg-7">
            <div
              className="main-features-box-container mt-7 mt-lg-0
        pl-xl-19" id="leftSLidButton"
            >
              <Slider  asNavFor={nav1} 
              ref={(slider2) => setNav2(slider2)}
              slidesToShow={4}
          swipeToSlide={true}
          focusOnSelect={true}

              >
              
                {
                    LeftData.map((val) => {
                            
                            return (
                                <SyncLeftBox
                                  key={val.id}
                                  buttonTitle={val.buttonTitle}
                                  buttonData1={val.buttonData1}
                                  buttonIcon={val.buttonIcon}
                                  buttonNumber={val.buttonNumber}
                                />
                              );
                        })
                    }
                   
              </Slider>
              
            </div>
          </div>

          <div className="col-lg-5 position-relative ">
            <Slider  {...settings} asNavFor={nav2}
            ref={(slider1) => setNav1(slider1)}
            >
         
                
                {
                    RightData.map((val) => {
                    
                    return (
                        <SyncRightBox
                        key={val.id}
                        planTitle={val.planTitle}
                        planOffer={val.planOffer}
                        planCurrency={val.planCurrency}
                        planPiceF={val.planPiceF}
                        planPicePaisa={val.planPicePaisa}
                        planIcon={val.planIcon}
                        planList1={val.planList1}
                        planList2={val.planList2}
                        planList3={val.planList3}
                        planList4={val.planList4}
                        bgColor={val.bgColor}
                      />
                      );
                })
            }
               
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SyncMain;
