import React from "react";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { pcImage } from "../Components/index";

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
      loopCount: 5,
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
          <div className="col-md-9 col-lg-7 col-xl-9">
            <div className="hero-content dark-mode-texts mb-15 mb-lg-10 text-center text-md-left">
              <h4 className="coodiv-text-12 text-uppercase mb-3 smalText">
                with madpopo
              </h4>
              <h1 className="coodiv-text-3 d-block mb-0 typedTextMain">
                Choose flexible pricing plan for you
              </h1>
              <h1 className="coodiv-text-3 position-relative mb-5 typedText">
                <span id="typed" ref={(el)} className="typed strike-bottom green d-inline-block">
                  and
                </span>
                <span className="typed-cursor" aria-hidden="true">
                  |
                </span>
              </h1>
              <p className="coodiv-text-9 mb-0 mb-10 typedSmallText">
                Unlimited boards and workflows. no credit card needed
              </p>
            </div>
          </div>
          <div className="col-md-3 col-lg-5 col-xl-3">
              <div className="pcImageWrap">
                <img src={pcImage} alt="" />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TypedComponent;
