import React from "react";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { faceImage, pcImage, pcImage3, pcSVG } from "../Components/index";

function TypedComponent() {
  const el = useRef(null); 

  useEffect(() => {
    new Typed(el.current, {
      strings: [
        "resellers hosting company",
        "web hosting company",
        "domains business",
        "and more...",
      ],
      stringsElement: null,
      typeSpeed: 180,
      startDelay: 1200,
      backSpeed: 180,
      backDelay: 500,
      smartBackspace: false,
      showCursor: false,
      loop: true,
      contentType: 'html',
    });
  });
  return (
    // <h1 className='typed_wrap'>
    // Choose flexible pricing plan for you <span className="typed" ref={(el)}></span>
    // </h1>
    <div className="hero-area-coodiv snow-montagne position-relative">
      
      
      

      <div className="container position-relative coodiv-z-index-2">
        <div className="row justify-content-start">
          <div className="col-md-8 col-lg-6 col-xl-8">
            <div className="hero-content dark-mode-texts mb-15 mb-lg-10 text-center text-md-left">
              <h4 className="text-uppercase mb-3 smalText">
                with madpopo
              </h4>
              <h1 className="d-block mb-0 typedTextMain">
                Choose flexible pricing plan for you
              </h1>
              <h1 className="position-relative mb-5 typedText">
                <span id="typed" ref={(el)} className="typed strike-bottom green d-inline-block">
                  and
                </span>
                <span className="typed-cursor" aria-hidden="true">
                  |
                </span>
              </h1>
              <p className="mb-0 mb-10 typedSmallText">
                  Book your domain now or connect our experts migrate your website for free
              </p>
            </div>
          </div>
          <div className="col-md-4 col-lg-6 col-xl-4">
              <div className="pcImageWrap">
              
              <div className="position-relative">
              <div className="circle">
              <div className="icon-block">
                <div className="small_cir"><span className="small_circletext">.com</span></div>
              </div>
              <div className="icon-block">
              <div className="small_cir"><span className="small_circletext">.net</span></div>
              </div>
              <div className="icon-block">
              <div className="small_cir"><span className="small_circletext">.xyz</span></div>
              </div>
              <div className="icon-block">
              <div className="small_cir"><span className="small_circletext">.shop</span></div>
              </div>
              <div className="icon-block">
              <div className="small_cir"><span className="small_circletext">.me</span></div>
              </div>
              <div className="icon-block">
              <div className="small_cir"><span className="small_circletext">.org</span></div>
              </div>
            </div>
              <div className="center-logo">
                 <img src={faceImage} alt="" />
              </div>
              </div>
                
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TypedComponent;
