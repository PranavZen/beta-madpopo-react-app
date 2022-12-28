import React from "react";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { bannerBg1, bannerBg2, bannerBg3, bannerBg4 } from "../Components/index";
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
      typeSpeed: 400,
      startDelay: 800,
      backSpeed: 400,
      backDelay: 2100,
      smartBackspace: false,
      showCursor: false,
      // cursorChar: "|",
      
      loop: true,
    });
  });
  return (
    // <h1 className='typed_wrap'>
    // Choose flexible pricing plan for you <span className="typed" ref={(el)}></span>
    // </h1>
    <div className="hero-area-coodiv snow-montagne position-relative">
      <div className="header-hero-backgrounds">
        <div id="particles-bg">
          <canvas
            className="particles-js-canvas-el"
            
            width="1898"
            height="950"
          ></canvas>
        </div>
        <span className="back-mountain-light"></span>
        <span className="back-mountain-sun"></span>
        <span className="right-montagne-part"></span>
        <span className="illustration-element"></span>
        <span className="left-montagne-part"></span>
        <span className="sunset-fog"></span>
        <span className="sunsetcloud"></span>
        <div className="bottom-montagne-part">
          <span></span>
        </div>
        <div className="t-first">
          <img
            className="layer layer2"
            data-depth="-0.20"
            src={bannerBg1}
            alt=""
          />
        </div>
      </div>
      <div
        className="shape-1 coodiv-abs-tr aos-init aos-animate"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-once="true"
      >
        <img src={bannerBg2} alt="" />
      </div>
      <div
        className="shape-2 coodiv-abs-tr aos-init aos-animate"
        data-aos="fade-down-left"
        data-aos-duration="800"
        data-aos-delay="300"
        data-aos-once="true"
      >
        <img src={bannerBg3} alt="" />
      </div>
      <div
        className="shape-3 coodiv-abs-tr aos-init aos-animate"
        data-aos="fade-down-left"
        data-aos-duration="1100"
        data-aos-delay="600"
        data-aos-once="true"
      >
        <img src={bannerBg4} alt="" />
      </div>

      <div className="container position-relative coodiv-z-index-2">
        <div className="row justify-content-start">
          <div className="col-md-9 col-lg-7 col-xl-9">
            <div className="hero-content dark-mode-texts mb-15 mb-lg-10 text-center text-md-left">
              <h4 className="coodiv-text-12 text-uppercase mb-3 coodiv-color-green-opacity-7">
                with emyui
              </h4>
              <h1 className="coodiv-text-3 text-white d-block mb-0">
                Choose flexible pricing plan for you
              </h1>
              <h1 className="coodiv-text-3 position-relative mb-5">
                <span id="typed" ref={(el)} className="typed strike-bottom green d-inline-block">
                  and
                </span>
                <span className="typed-cursor" aria-hidden="true">
                  |
                </span>
              </h1>
              <p className="coodiv-text-9 mb-0 coodiv-color-white-opacity-9 mb-10">
                Unlimited boards and workflows. no credit card needed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TypedComponent;
