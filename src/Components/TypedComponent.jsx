import React, { useEffect, useState } from "react";
import { StyleSheet, css } from "aphrodite";
import { fadeIn } from "react-animations";
import { Link, animateScroll as scroll } from "react-scroll";
import { homeEl1, homeEl2, homeEl3, homeEl4, yogaImg } from "../Components/index";

function TypedComponent() {
  const styles = StyleSheet.create({
    animatedElement: {
      animationName: fadeIn,
      animationDuration: "3s",
    },
  });
  const [Show, setShow] = useState(1);
 
  useEffect(() => {
    const interval = setInterval(() => {
      const randomNum = Math.floor(Math.random() * 5) + 1; 
      // console.log(randomNum);
      setShow(randomNum);
      
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-area-coodiv snow-montagne position-relative">
      <div className="moveingEl homeEl1">
        <img src={homeEl4} alt="moving element 1" />
      </div>
      <div className="moveingEl homeEl2">
        <img src={homeEl2} alt="moving element 2" />
      </div>
      <div className="container position-relative coodiv-z-index-2">
        <div className="row justify-content-start">
          <div className="col-md-8 col-lg-6 col-xl-8 animeParaBox">
            <div
              style={{ display: Show === 1 ? "block" : "none" }}
              className={css(styles.animatedElement)}
            >
              <h1 className="typedTextMain">
                MadPopo The Ultimate <br />
                <strong>WordPress Hosting</strong> Solution
              </h1>
              <p className="mb-0 mb-10 typedSmallText">
                High-performance servers, experience exceptional uptime and fast{" "}
                <br />
                loading speeds and a user-friendly control panel.
              </p>
              <div className="bannerBtnWrap">
                <Link
                  to="myTabslide"
                  className="btn btn-org coodiv-hover-y mt-7 coodiv-text-9"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  View Plans
                </Link>
              </div>
            </div>

            <div
              style={{ display: Show === 2 ? "block" : "none" }}
              className={css(styles.animatedElement)}
            >
              <h1 className="typedTextMain">
                Power Your Website with MadPopo's <strong>Linux Hosting</strong>
              </h1>
              <p className="mb-0 mb-10 typedSmallText">
                Reliable uptime, flexible plans, and user-friendly control
                panel. Experience exceptional performance and technical support.
              </p>
              <div className="bannerBtnWrap">
                <a
                  href="/linux-web-hosting"
                  className="btn btn-org coodiv-hover-y mt-7 coodiv-text-9"
                >
                  View Plans
                </a>
              </div>
            </div>
            <div
              style={{ display: Show === 3 ? "block" : "none" }}
              className={css(styles.animatedElement)}
            >
              <h1 className="typedTextMain">
                Professional <strong>Email Solutions</strong> for Your Business
                with MadPopo
              </h1>
              <p className="mb-0 mb-10 typedSmallText">
                Secure, reliable, and professional communication for businesses.
                Flexible plans, intuitive interface, and 24/7 expert support.
              </p>
              <div className="bannerBtnWrap">
                <a
                  href="/business-email-hosting"
                  className="btn btn-org coodiv-hover-y mt-7 coodiv-text-9"
                >
                  View Plans
                </a>
              </div>
            </div>
            <div
              style={{ display: Show === 4 ? "block" : "none" }}
              className={css(styles.animatedElement)}
            >
              <h1 className="typedTextMain">
                <strong>Dedicated Hosting</strong> Solutions to Empower
                Your Business
              </h1>
              <p className="mb-0 mb-10 typedSmallText">
                MadPopo Dedicated Servers offer powerful and customisable
                solutions. High-performance hardware, advanced security,
                and expert support.
              </p>
              <div className="bannerBtnWrap">
                <a
                  href="/dedicated-server"
                  className="btn btn-org coodiv-hover-y mt-7 coodiv-text-9"
                >
                  View Plans
                </a>
              </div>
            </div>
            <div
              style={{ display: Show === 5 ? "block" : "none" }}
              className={css(styles.animatedElement)}
            >
              <h1 className="typedTextMain">
                Unleash the Power of the <br />
                <strong>Cloud Server</strong> with MadPopo
              </h1>
              <p className="mb-0 mb-10 typedSmallText">
                Scalable, fast, and reliable cloud hosting solutions. Flexible
                plans, robust infrastructure, and exceptional support.
              </p>
              <div className="bannerBtnWrap">
                <a
                  href="/virtual-dedicated-server"
                  className="btn btn-org coodiv-hover-y mt-7 coodiv-text-9"
                >
                  View Plans
                </a>
              </div>
            </div>
            <div
              style={{ display: Show === 6 ? "block" : "none" }}
              className={css(styles.animatedElement)}
            >
              <h1 className="typedTextMain">
                Reliable, Scalable, & Affordable <br />
                <strong>E-commerce Solutions</strong>
              </h1>
              <p className="mb-0 mb-10 typedSmallText">
                Easy-to-use tools to grow your online business. Advanced
                features, affordable pricing, and reliable support.
              </p>
              <div className="bannerBtnWrap">
                <a
                  href="/woocommerce-hosting"
                  className="btn btn-org coodiv-hover-y mt-7 coodiv-text-9"
                >
                  View Plans
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-6 col-xl-4">
            <div className="pcImageWrap">
              <div className="position-relative">
                <div className="center-logo">
                  <img src={yogaImg} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="moveingEl homeEl4">
        <img src={homeEl1} alt="moving element 4" />
      </div>
      <div className="moveingEl homeEl3">
        <img src={homeEl3} alt="moving element 3" />
      </div>
    </div>
  );
}

export default TypedComponent;
