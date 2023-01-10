import React from "react";
import { migration } from "../Components/index";

function Migration() {
  return (
    <section className="ddos-attack-section pt-25 pb-12">
      <div className="container">
     
        <div className="safari-browser-mockup position-relative">
        <div className="topLeftIco"></div>
        <div className="topRightIco"></div>
        <div className="btnRightIco"></div>
          <img
            decoding="async"
            className="w-100"
            src="https://emyui.pdthemes.de/wp-content/themes/emyui/image/svg/safari-browser.svg"
            alt=""
          />
          <div className="ddos-attack-mockup">
            <div className="ddos-attack-main-text text-center pt-lg-20 pt-10 px-5 dark-mode-texts position-relative coodiv-z-index-1">
              <h5 className="coodiv-text-4">Free WordPress Migration</h5>
              <p className="coodiv-text-11 font-weight-light px-lg-25 px-10">
                Quick and secure, guaranteed 99.99% uptime, feature-rich
                WordPress hosting solution. Over 60 million people choose
                WordPress to power their websites and blogs. Born out of a
                desire for an elegant personal publishing system built on PHP
                and MySQL, its potential has evolved to a full content
                management system.{" "}
              </p>
              <a
                href="https://emyui.pdthemes.de/wordpress-hosting/"
                className="btn btn-green coodiv-text-9 font-weight-light rounded-20"
              >
                Get started
              </a>
            </div>
            <img
              decoding="async"
              className="main-ddos-attack-charactuer"
              src={migration}
              alt="office"
            />
            <img
              decoding="async"
              className="wp-floting-img"
              src="https://emyui.pdthemes.de/wp-content/uploads/2022/01/wordpress.png"
              alt="wordpress"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Migration;
