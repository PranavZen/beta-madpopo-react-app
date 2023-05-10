import React from "react";
import { wpHostLefttImg, wpHostRightImg } from "../index";

function LinuxBestChoice() {
  return (
    <div className="wpBestChoiceWrap">
      <div className="container">
        <div className="wpChoiceSecTitle ">
          <h2>Madpopo offers Secure & Lightning-fast Linux Shared Hosting</h2>
          <p className="woopara mt-12">
            Linux hosting is a great option if you're a developer searching for
            a dependable and fast hosting environment for your development
            software that can fulfill your needs and go above and beyond your
            expectations.
          </p>
        </div>
        <div
          className="wpBest_choiceRow padBtm_50"
          data-aos="fade-left"
          data-aos-duration="1200"
        >
          <div className="col-md-5">
            <div className="wp_choice_leftBox">
              <div className="wp_choice_ContentBox">
                <h2>Get Secure & Lightning-fast Linux Shared Hosting</h2>
                <p>
                  Linux shared hosting is renowned for its lightning-fast
                  performance in addition to security. This is so that it can
                  handle huge traffic loads without compromising performance.
                  Linux is an open-source operating system that is tailored for
                  web hosting and is extremely scalable.
                </p>
              </div>
              <div className="wp_choice_ContentBox">
                <h2>Linux hosting packages at affordable prices</h2>
                <p>
                  Get all the advantages of our{" "}
                  <strong>RockyBoost, RockyPro, and RockyBusiness</strong> Linux
                  Hosting plans at affordable costs. As your website develops,
                  you can easily upgrade at any time to the next plan.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="wp_choice_rightBox">
              <div className="wp_choiceImgWrap">
                <img src={wpHostRightImg} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div
          className="wpBest_choiceRow"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <div className="col-md-6">
            <div className="wp_choice_rightBox">
              <div className="wp_choiceImgWrap">
                <img src={wpHostLefttImg} alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="wp_choice_leftBox">
              <div className="wp_choice_ContentBox">
                <h2>
                  Madpopo will help you transfer your website to your preferred
                  app
                </h2>
                <p>
                  Madpopo's hosting services work best when your site is highly
                  optimized and configured. The technical support team at
                  Madpopo can assist you with optimizing your website for the
                  best performance and security.
                </p>
              </div>
              <div className="wp_choice_ContentBox">
                <h2>We are always available to help you</h2>
                <p>
                  We are always happy to help you by live chat, and our customer
                  success team is always available. As part of our commitment to
                  providing you with the tools you need to succeed online, we
                  offer a comprehensive knowledge base that is continuously
                  updated by our professionals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LinuxBestChoice;
